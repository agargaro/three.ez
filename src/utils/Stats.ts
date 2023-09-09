export class Stats {
	public dom = document.createElement('div');
	private mode = 0;
	private frames = 0;
	private beginTime = (performance || Date).now();
	private prevTime = this.beginTime;
	private fpsPanel = this.addPanel(new Panel('FPS', '#0ff', '#002'));
	private msPanel = this.addPanel(new Panel('MS', '#0f0', '#020'));
	private memPanel: Panel;

	constructor() {
		this.dom.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000';
		this.dom.addEventListener('click', (event) => {
			event.preventDefault();
			this.showPanel(++this.mode % this.dom.children.length);
		}, false);

		if (self.performance && (self.performance as any).memory) {
			this.memPanel = this.addPanel(new Panel('MB', '#f08', '#201'));
		}

		this.showPanel(0);
	}

	public addPanel(panel: Panel): Panel {
		this.dom.appendChild(panel.dom);
		return panel;
	}

	/**
	 * @param id 0:fps, 1: ms, 2: mb, 3+: custom
	 */
	public showPanel(id: number): void {
		for (let i = 0; i < this.dom.children.length; i++) {
			(this.dom.children[i] as HTMLElement).style.display = i === id ? 'block' : 'none';
		}
		this.mode = id;
	}

	public begin(): void {
		this.beginTime = (performance || Date).now();
	}

	public end(rendered?: boolean): number {
		if (rendered !== false) {
			this.frames++;
		}

		const time = (performance || Date).now();

		this.msPanel.update(time - this.beginTime, 200);

		if (time >= this.prevTime + 1000) {
			this.fpsPanel.update((this.frames * 1000) / (time - this.prevTime), 100);

			this.prevTime = time;
			this.frames = 0;

			if (this.memPanel) {
				const memory = (performance as any).memory;
				this.memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
			}
		}

		return time;
	}

	public update(rendered?: boolean) {
		this.beginTime = this.end(rendered);
	}

}

export class Panel {
	public dom: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
	private min = Infinity;
	private max = 0;
	private PR = Math.round(window.devicePixelRatio || 1);
	private WIDTH = 80 * this.PR;
	private HEIGHT = 48 * this.PR;
	private TEXT_X = 3 * this.PR;
	private TEXT_Y = 2 * this.PR;
	private GRAPH_X = 3 * this.PR;
	private GRAPH_Y = 15 * this.PR;
	private GRAPH_WIDTH = 74 * this.PR;
	private GRAPH_HEIGHT = 30 * this.PR;

	constructor(private name: string, private fg: string, private bg: string) {
		this.dom = document.createElement('canvas');
		this.dom.width = this.WIDTH;
		this.dom.height = this.HEIGHT;
		this.dom.style.cssText = 'width:80px;height:48px';

		this.context = this.dom.getContext('2d');
		this.context.font = 'bold ' + (9 * this.PR) + 'px Helvetica,Arial,sans-serif';
		this.context.textBaseline = 'top';

		this.context.fillStyle = bg;
		this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT);

		this.context.fillStyle = fg;
		this.context.fillText(name, this.TEXT_X, this.TEXT_Y);
		this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);

		this.context.fillStyle = bg;
		this.context.globalAlpha = 0.9;
		this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);
	}

	public update(value: number, maxValue: number): void {
		this.min = Math.min(this.min, value);
		this.max = Math.max(this.max, value);

		this.context.fillStyle = this.bg;
		this.context.globalAlpha = 1;
		this.context.fillRect(0, 0, this.WIDTH, this.GRAPH_Y);
		this.context.fillStyle = this.fg;
		this.context.fillText(Math.round(value) + ' ' + this.name + ' (' + Math.round(this.min) + '-' + Math.round(this.max) + ')', this.TEXT_X, this.TEXT_Y);

		this.context.drawImage(this.dom, this.GRAPH_X + this.PR, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT, this.GRAPH_X, this.GRAPH_Y,
			this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT);

		this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, this.GRAPH_HEIGHT);

		this.context.fillStyle = this.bg;
		this.context.globalAlpha = 0.9;
		this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, Math.round((1 - (value / maxValue)) * this.GRAPH_HEIGHT));
	}

}
