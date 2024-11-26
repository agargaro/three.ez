/**
 * @internal
 * Syncronize DOM events with the frame generation, discarding ripetitive pointermove event.
 */
export class InteractionEventsQueue {
  public multitouch: boolean;
  private _items: Event[] = [];

  public enqueue(event: Event): void {
    if (!this.multitouch && (event as PointerEvent).isPrimary === false) return;
    if (this.isValidEvent(event)) {
      this._items.push(event);
    }
  }

  private isValidEvent(event: Event): boolean {
    if (event.type === 'pointermove') {
      for (let i = this._items.length - 1; i >= 0; i--) {
        const item = this._items[i] as PointerEvent;
        if (item.pointerId === (event as PointerEvent).pointerId) {
          const type = item.type;
          if (type === 'pointermove') {
            this._items[i] = event;
            return false;
          }
          if (type === 'pointerdown' || type === 'pointerout' || type === 'pointerover' || type === 'pointerup') break;
        }
      }
    }
    return true;
  }

  public dequeue(): Event[] {
    const items = this._items;
    this._items = [];
    return items;
  }
}
