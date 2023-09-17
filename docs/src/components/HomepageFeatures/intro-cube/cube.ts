import { Euler, Group } from 'three';
import { Face } from './face';
import { Intro } from './Intro/intro';
import { DragDrop } from './drag-drop/drag-drop';

export class Cube extends Group {
  public currentStep = 0;
  public changing = false;

  constructor() {
    super();
    this.add(
      new Intro(),
      new DragDrop(),
      new Face(2, 'yellow'),
      new Face(3, 'orange'),
      new Face(4, 'pink'),
      new Face(5, 'red'),
      new Face(6, 'brown'),
      new Face(7, 'white')
    );
  }

  public next(): void {
    this.step(true);
    this.currentStep++;
  }

  public back(): void {
    this.step(false);
    this.currentStep--;
  }

  private step(next: boolean): void {
    this.tween()
      .call(() => (this.changing = true))
      .to(500, { scale: 0.5 }, { easing: 'easeInOutQuint' })
      .by(500, { rotation: new Euler(0, Math.PI / (next ? -2 : 2), 0) }, { easing: 'easeInOutBack' })
      .to(500, { scale: 1 }, { easing: 'easeInOutQuint' })
      .call(() => (this.changing = false))
      .start();
  }
}
