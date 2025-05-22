interface InteractionDefault {
/** The default setting for 'focusable' for newly created Object3Ds. Default: true. */
  focusable: boolean;
  /** The default setting for 'draggable' for newly created Object3Ds. Default: false. */
  draggable: boolean;
  /** The default setting for 'interceptByRaycaster' for newly created Object3Ds. Default: true. */
  interceptByRaycaster: boolean;
}

export const INTERACTION_DEFAULT: InteractionDefault = {
  focusable: true,
  draggable: false,
  interceptByRaycaster: true
};
