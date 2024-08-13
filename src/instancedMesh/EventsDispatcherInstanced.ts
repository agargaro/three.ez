import { EventExt, InteractionEvents, MiscEvents } from "../events/Events.js";
import { InstancedMeshEntity } from "./InstancedMeshEntity.js";

export type InstancedMiscUpdateEvents = Omit<MiscEvents, "viewportresize" | "beforeanimate" | "afteranimate">;
export type InstancedInteractionEvents = Omit<InteractionEvents<InstancedMeshEntity, InstancedMeshEntity>,
    "focusout" | "focusin" | "pointerleave" | "pointerenter" | "dragenter" | "dragover" | "dragleave" | "drop">;
export type InstancedEvents = InstancedMiscUpdateEvents & InstancedInteractionEvents;

/** @internal */
export class EventsDispatcherInstanced {
    public parent: InstancedMeshEntity;
    public listeners: { [K in keyof InstancedEvents]?: ((event?: InstancedEvents[K]) => void)[] } = {};

    constructor(parent: InstancedMeshEntity) {
        this.parent = parent;
    }

    public add<K extends keyof InstancedEvents>(type: K, listener: (event: InstancedEvents[K]) => void): (event: InstancedEvents[K]) => void {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }
        if (this.listeners[type].indexOf(listener) < 0) {
            this.listeners[type].push(listener);
        }
        return listener;
    }

    public has<K extends keyof InstancedEvents>(type: K, listener: (event: InstancedEvents[K]) => void): boolean {
        return this.listeners[type]?.indexOf(listener) > -1;
    }

    public remove<K extends keyof InstancedEvents>(type: K, listener: (event: InstancedEvents[K]) => void): void {
        const index = this.listeners[type]?.indexOf(listener) ?? -1;
        if (index > -1) {
            this.listeners[type].splice(index, 1);
        }
    }

    public dispatchDOM<K extends keyof InstancedInteractionEvents>(type: K, event: InstancedInteractionEvents[K]): void {
        event._bubbles = false;
        event._stoppedImmediatePropagation = false;
        event._defaultPrevented = false;
        event._type = type;
        event._target = this.parent;
        this.executeDOM(type, event);
    }

    private executeDOM<K extends keyof InstancedInteractionEvents>(type: K, event: InstancedInteractionEvents[K]): void {
        if (!this.listeners[type]) return;
        const target = event.currentTarget = this.parent;
        for (const callback of this.listeners[type]) {
            if (event._stoppedImmediatePropagation) break;
            callback.call(target, event as any);
        }
    }

    public dispatch<T extends keyof InstancedMiscUpdateEvents>(type: T, event?: InstancedMiscUpdateEvents[T]): void {
        if (!this.listeners[type]) return;
        for (const callback of this.listeners[type]) {
            callback.call(this.parent, event as any);
        }
    }

    public dispatchManual<T extends keyof InstancedEvents>(type: T, event?: InstancedEvents[T]): void {
        if ((event as EventExt<InstancedMeshEntity>)?.cancelable !== undefined) {
            return this.dispatchDOM(type as keyof InstancedInteractionEvents, event as any);
        }
        this.dispatch(type as keyof InstancedMiscUpdateEvents, event as any);
    }
}
