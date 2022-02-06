export type TutorialElementOption = {
  elementSelector: string;
  padding?: number;
  text?: string;
  textOffsetX?: number;
  textOffsetY?: number;
  preferredPosition?: Position;
  onInit?: () => Promise<void>;
  templateArgs?: { [key: string]: string };
};

export type GeneralOptions = {
  options: TutorialElementOption[];
  id?: string;
  padding?: number;
  textOffsetX?: number;
  textOffsetY?: number;
  onInit?: () => Promise<void>;
  turnOffAllTransitions?: boolean;
  template?: string;
  closeOnEsc?: boolean;
};

export type Position = "top" | "bottom" | "left" | "right";

export type Rect = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};
