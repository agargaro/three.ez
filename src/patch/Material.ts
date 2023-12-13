import { Material } from "three";
import { Tween } from "../tweening/Tween";

/**
 * Represents the prototype for extended Material functionality.
 */
export interface MaterialExtPrototype {
    /**
     * Initiates a Tween animation for the material.
     * @param id - Unique identifier. If you start a new tween, the old one with the same id (if specified) will be stopped.
     * @template T - The type of the target.
     * @returns A Tween instance for further configuration.
     */
    tween<T extends this>(id?: string): Tween<T>;
}

Material.prototype.tween = function <T extends Material>(id?: string) {
    return new Tween<T>(this as T).setId(id);
};
