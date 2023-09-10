/**
 * This package exports all decorators that are available in Sequelize, built using the legacy stage-3 decorators proposal.
 *
 * All available decorators can be imported as follows:
 *
 * ```js
 * import { HasOne, Attribute } from '@sequelize/core/decorators-legacy';
 * ```
 *
 * @module Events-Module
 */

export * from './CursorManager';
export * from './DragAndDropManager';
export * from './Events';
export * from './EventsDispatcher';
export * from './InteractionManager';
export * from './InteractionEventsQueue';
export * from './MiscEventsManager';
export * from './RaycasterManager';