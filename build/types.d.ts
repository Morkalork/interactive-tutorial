export declare type GeneralOptions = {
    options: TutorialElementOption[];
    id?: string;
    padding?: number;
    textOffsetX?: number;
    textOffsetY?: number;
    onInit?: () => Promise<void>;
    turnOffAllTransitions?: boolean;
};
export declare type TutorialElementOption = {
    elementSelector: string;
    padding?: number;
    text?: string;
    textOffsetX?: number;
    textOffsetY?: number;
    preferredPosition?: Position;
    onInit?: () => Promise<void>;
};
export declare type Position = "top" | "bottom" | "left" | "right";
export declare type Rect = {
    top: number;
    left: number;
    right: number;
    bottom: number;
};
//# sourceMappingURL=types.d.ts.map