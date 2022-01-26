export type TutorialElementOption = {
  element?: HTMLElement;
  elementSelector?: string;
  padding?: number;
  text?: string;
  textOffsetX?: number;
  textOffsetY?: number;
  preferredPosition?: Position;
};

export type Position = "top" | "bottom" | "left" | "right";

export type Rect = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};
