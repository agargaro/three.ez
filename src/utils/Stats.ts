import { WebGLRenderer } from "three";

export class Stats {
  public dom = document.createElement('div');
  private _minimal: boolean;
  private mode = 0;
  private renderer: WebGLRenderer;
  private gl: WebGL2RenderingContext;
  private ext: any;
  private query: WebGLQuery;
  private queries: WebGLQuery[] = [];
  private beginTime: number = null;
  private endTime: number = null;
  private fpsPanel: GraphPanel;
  private cpuPanel: GraphPanel;
  private gpuPanel: GraphPanel;
  private infoPanel: TextPanel;

  private clickPanelCallback = (event) => {
    event.preventDefault();
    this.showPanel(++this.mode % this.dom.children.length);
  };

  public get minimal() { return this._minimal }
  public set minimal(value: boolean) { this.switchMinimal(value) }

  constructor(renderer: WebGLRenderer) {
    this.renderer = renderer;

    this.fpsPanel = this.addPanel(new GraphPanel('FPS', '#0ff', '#002', 1000, false));
    this.cpuPanel = this.addPanel(new GraphPanel('ms CPU', '#0f0', '#020', 100, true));

    if (renderer) {
      this.gl = renderer.getContext() as WebGL2RenderingContext;
      this.ext = this.gl?.getExtension('EXT_disjoint_timer_query_webgl2');
      if (this.ext) {
        this.gpuPanel = this.addPanel(new GraphPanel('ms GPU', '#ff0', '#220', 100, true));
      }
    }

    this.infoPanel = this.addPanel(new TextPanel('INFO', ['Calls', 'Triangles'], '#fff', '#022', 100));

    this.dom.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.switchMinimal(!this._minimal);
    }, false);

    this.switchMinimal(false);
  }

  public switchMinimal(value: boolean): void {
    this._minimal = value;

    if (!value) {
      this.dom.removeEventListener('click', this.clickPanelCallback);
      this.showAllPanels();
      this.dom.style.cssText = 'position:fixed; top:0; left:0; opacity:0.8; z-index:10000; display:flex;';
      return;
    }

    this.dom.addEventListener('click', this.clickPanelCallback, false);
    this.dom.style.cssText = 'position:fixed; top:0; left:0; opacity:0.8; z-index:10000; cursor:pointer;';

    this.showPanel(0);
  }

  public addPanel<GenericPanel extends { dom }>(panel: GenericPanel): GenericPanel {
    this.dom.appendChild(panel.dom);
    return panel;
  }

  public showPanel(id: number): void {
    this.mode = id;

    for (let i = 0; i < this.dom.children.length; i++) {
      (this.dom.children[i] as HTMLElement).style.display = i === id ? 'block' : 'none';
    }
  }

  public showAllPanels(): void {
    for (const element of this.dom.children) {
      (element as HTMLElement).style.display = 'block';
    }
  }

  public begin(): void {
    this.beginTime = performance.now();
  }

  public beginQuery(): void {
    if (!this.gpuPanel) return;

    this.query = this.gl.createQuery();
    this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, this.query);
  }

  public end(): void {
    this.endTime = performance.now();
  }

  public endQuery(): void {
    if (!this.gpuPanel) return;

    this.gl.endQuery(this.ext.TIME_ELAPSED_EXT);
    this.queries.push(this.query);
    this.query = null;
  }

  public getQueriesTime(): number {
    const gl = this.gl;
    const ext = this.ext;
    let time = 0;

    for (let i = this.queries.length - 1; i >= 0; i--) {
      const query = this.queries[i];
      const available = gl.getQueryParameter(query, gl.QUERY_RESULT_AVAILABLE);
      const disjoint = gl.getParameter(ext.GPU_DISJOINT_EXT);

      if (available && !disjoint) {
        const elapsed = gl.getQueryParameter(query, gl.QUERY_RESULT);
        const duration = elapsed * 1e-6; // Convert nanoseconds to milliseconds
        time += duration;
        gl.deleteQuery(query);
        this.queries.splice(i, 1);
      }
    }

    return time;
  }

  public update() {
    const time = this.endTime;
    this.cpuPanel.update(time, time - this.beginTime, 33, 2); // we can pass these two params in the constructor
    this.fpsPanel.update(time, 1, 144, 0);
    this.gpuPanel?.update(time, this.getQueriesTime(), 33, 2);
    this.infoPanel?.update(time, [this.renderer.info.render.calls, this.renderer.info.render.triangles, this.renderer.info.render.points, this.renderer.info.render.lines]);
  }
}

export class GraphPanel {
  public dom: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private prevTime: number = null;
  private sum = 0;
  private count = 0;
  private PR = Math.round(window.devicePixelRatio || 1);
  private WIDTH = 90 * this.PR;
  private HEIGHT = 48 * this.PR;
  private TEXT_X = 3 * this.PR;
  private TEXT_Y = 2 * this.PR;
  private GRAPH_X = 3 * this.PR;
  private GRAPH_Y = 15 * this.PR;
  private GRAPH_WIDTH = 84 * this.PR;
  private GRAPH_HEIGHT = 30 * this.PR;

  constructor(private name: string, private fg: string, private bg: string, private updateTime: number, private getAverage) {
    this.dom = document.createElement('canvas');
    this.dom.width = this.WIDTH;
    this.dom.height = this.HEIGHT;
    this.dom.style.cssText = 'width:90px;height:48px';

    this.context = this.dom.getContext('2d');
    this.context.font = 'bold ' + (10 * this.PR) + 'px monospace';
    this.context.textBaseline = 'top';

    this.context.fillStyle = bg;
    this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT);

    this.context.fillStyle = fg;
    this.context.fillText(name, this.TEXT_X, this.TEXT_Y + 1 * this.PR);
    this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);

    this.context.fillStyle = bg;
    this.context.globalAlpha = 0.9;
    this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);
  }

  public update(time: number, value: number, maxValue: number, decimals: number): void {
    if (this.prevTime === null) {
      // first update
      this.prevTime = time;
      return;
    }

    this.sum += value;
    this.count++;

    if (time < this.prevTime + this.updateTime) return;

    value = this.getAverage ? this.sum / this.count : this.sum;
    this.prevTime += this.updateTime * Math.floor((time - this.prevTime) / this.updateTime);
    this.count = 0;
    this.sum = 0;

    this.context.fillStyle = this.bg;
    this.context.globalAlpha = 1;
    this.context.fillRect(0, 0, this.WIDTH, this.GRAPH_Y);
    this.context.fillStyle = this.fg;
    this.context.fillText(`${value.toFixed(decimals)} ${this.name}`, this.TEXT_X, this.TEXT_Y + 1 * this.PR);

    this.context.drawImage(this.dom, this.GRAPH_X + this.PR, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT, this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT);
    this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, this.GRAPH_HEIGHT);

    this.context.fillStyle = this.bg;
    this.context.globalAlpha = 0.9;
    this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, Math.round((1 - (value / maxValue)) * this.GRAPH_HEIGHT));
  }
}

export class TextPanel {
  public dom: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private prevTime: number = null;
  private sumTriangles = 0;
  private sumCalls = 0;
  private count = 0;
  private PR = Math.round(window.devicePixelRatio || 1);
  private WIDTH = 126 * this.PR;
  private HEIGHT = 48 * this.PR;
  private TEXT_X = 3 * this.PR;
  private TEXT_Y = 2 * this.PR;
  private GRAPH_X = 3 * this.PR;
  private GRAPH_Y = 15 * this.PR;
  private GRAPH_WIDTH = this.WIDTH - 6 * this.PR;
  private GRAPH_HEIGHT = 30 * this.PR;
  private PADDING_V = 4.3 * this.PR;
  private PADDING_H = 1 * this.PR;
  private TEXT_SPACE = 14 * this.PR;
  private COLUMN_SPACE = this.GRAPH_WIDTH / 2;

  // TODO: need to generalize call and triangles in props
  constructor(private name: string, private properties: string[], private fg: string, private bg: string, private updateTime: number) {
    this.dom = document.createElement('canvas');
    this.dom.width = this.WIDTH;
    this.dom.height = this.HEIGHT;
    this.dom.style.cssText = `width:${this.WIDTH / this.PR}px;height:${this.HEIGHT / this.PR}px`;

    this.context = this.dom.getContext('2d');
    this.context.font = 'bold ' + (10 * this.PR) + 'px monospace';
    this.context.textBaseline = 'top';

    this.context.fillStyle = bg;
    this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT);

    this.context.fillStyle = fg;
    this.context.fillText(this.name, this.TEXT_X, this.TEXT_Y + 1 * this.PR);
    this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);

    this.context.fillStyle = bg;
    this.context.globalAlpha = 0.9;
    this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);
  }

  public update(time: number, [calls, triangles, points, lines]): void {
    if (this.prevTime === null) {
      this.prevTime = time;
      return;
    }

    this.sumTriangles += triangles;
    this.sumCalls += calls;
    this.count++;

    if (time < this.prevTime + this.updateTime) return;

    calls = Math.round(this.sumCalls / this.count);
    triangles = Math.round(this.sumTriangles / this.count);

    this.prevTime += this.updateTime * Math.floor((time - this.prevTime) / this.updateTime);
    this.count = 0;
    this.sumCalls = 0;
    this.sumTriangles = 0;

    const stringOut = [
      `Calls ${this._formatNumber(calls)}`,
      `Tris ${this._formatNumber(triangles)}`,
      `Lines ${this._formatNumber(lines)}`,
      `Points ${this._formatNumber(points)}`,
    ];

    let maxRowLenght = 0;
    for (let i = 0; i < stringOut.length / 2; i++) {
      maxRowLenght = Math.max((stringOut[i].length + stringOut[i + 2].length) * 8, maxRowLenght);
    }
    this.context.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    this.WIDTH = maxRowLenght * this.PR;
    this.GRAPH_WIDTH = this.WIDTH - 6 * this.PR;
    this.COLUMN_SPACE = this.GRAPH_WIDTH / 2;

    this.dom.width = this.WIDTH;
    this.dom.height = this.HEIGHT;
    this.dom.style.cssText = `width:${this.WIDTH / this.PR}px;height:${
      this.HEIGHT / this.PR
    }px`;
    
    this.context.font = "bold " + 10 * this.PR + "px monospace";
    this.context.textBaseline = "top";

    this.context.fillStyle = this.bg;
    this.context.globalAlpha = 1;
    this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT);

    this.context.fillStyle = this.fg;
    this.context.fillText(this.name, this.TEXT_X, this.TEXT_Y + 1 * this.PR);
    this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);

    this.context.fillStyle = this.bg;
    this.context.globalAlpha = 0.9;
    this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);

    this.context.fillStyle = this.fg;

    const columns = 2;
    const rows = Math.ceil(stringOut.length / columns);

    for (let i = 0; i < stringOut.length; i++) {
      const column = Math.floor(i / rows);
      const row = i % rows;
      this.context.fillText(stringOut[i], this.GRAPH_X + this.PADDING_H + this.COLUMN_SPACE * column, this.GRAPH_Y + this.TEXT_SPACE * row + this.PADDING_V);\
    }

    this.context.fillStyle = this.bg;
    this.context.globalAlpha = 0.9;
    this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, (0 * this.GRAPH_HEIGHT));
  }

  /**
   * Adds a suffix (B for billion, M for million, K for thousand) to a large number.
   * @param {number} input - The numeric value to foment.
   * @return {string} The number formatted with an appropriate suffix.
   */
  private _formatNumber(input: number): string {
    if (input >= 1e9) {
      return (input / 1e9).toFixed(2) + "ʙ";
    } else if (input >= 1e6) {
      return (input / 1e6).toFixed(2) + "ᴍ";
    } else if (input >= 1e3) {
      return (input / 1e3).toFixed(2) + "ᴋ";
    } else {
      return input.toString();
    }
  }
}
