import { createCloakingRectangle } from "./create-cloaking-rectangle";
import { createParentElement } from "./create-parent-element";
import { createText } from "./create-text";
import { executeTutorial } from "./execute-tutorial";
import { getFogOfWarParts } from "./get-fog-of-war-parts";
import { TutorialElementOption } from "./types";

type Props = {
  options: TutorialElementOption[];
  id?: string;
  padding?: number;
  textOffsetX?: number;
  textOffsetY?: number;
  onInit?: () => void;
};

export default ({
  options,
  padding,
  id,
  textOffsetX,
  textOffsetY,
  onInit,
}: Props) => {
  if (onInit) {
    onInit();
  }

  const parentId = id || "interactive-tutorial-parent";
  const validOptions = options.filter(
    (option) => option.element || option.elementSelector
  );

  const existingParent = document.querySelector(`#${parentId}`);
  if (existingParent) {
    existingParent.remove();
  }

  const parentElement = createParentElement(parentId);

  const steps = validOptions.reduce((allSteps, option) => {
    const totalPadding = option.padding || padding || 0;
    const el =
      option.elementSelector && document.querySelector(option.elementSelector);
    if (!el) {
      return allSteps;
    }
    const boundaries = el.getBoundingClientRect();
    const fogOfWar = getFogOfWarParts(boundaries, totalPadding);

    const text = option.text
      ? createText(
          boundaries,
          option.text,
          option.textOffsetX || textOffsetX || 0,
          option.textOffsetY || textOffsetY || 0,
          option.preferredPosition
        )
      : undefined;

    const elementOverlay = document.createElement("div");
    elementOverlay.classList.add("interactive-tutorial-element-overlay");
    elementOverlay.style.position = "absolute";
    elementOverlay.style.top = `${boundaries.top - totalPadding}px`;
    elementOverlay.style.right = `${
      window.innerWidth - boundaries.right - totalPadding
    }px`;
    elementOverlay.style.bottom = `${
      window.innerHeight - boundaries.bottom - totalPadding
    }px`;
    elementOverlay.style.left = `${boundaries.left - totalPadding}px`;

    const step = Object.keys(fogOfWar).reduce(
      (acc, key) => {
        const div = createCloakingRectangle(fogOfWar[key]);
        div.classList.add(`interactive-tutorial-cloaking-rectangle-${key}`);
        return {
          ...acc,
          [key]: div,
        };
      },
      { text, elementOverlay } as Record<string, HTMLDivElement>
    );

    return [...allSteps, step];
  }, [] as Record<string, HTMLDivElement>[]);

  executeTutorial(parentElement, steps);
};
