import { createCloakingRectangle } from "./create-cloaking-rectangle";
import { createText } from "./create-text";
import { getFogOfWarParts } from "./get-fog-of-war-parts";
import { GeneralOptions, TutorialElementOption } from "./types";

export const prepareStep = async (
  option: TutorialElementOption,
  generalOptions: GeneralOptions
) => {
  if (!option) {
    return;
  }

  const init = option.onInit || (() => Promise.resolve());

  await init();
  const totalPadding = option.padding || generalOptions.padding || 0;
  const element =
    option.elementSelector && document.querySelector(option.elementSelector);
  if (!element) {
    return;
  }

  const boundaries = element.getBoundingClientRect();
  const fogOfWar = getFogOfWarParts(boundaries, totalPadding);

  const text = option.text
    ? createText(
        boundaries,
        option.text,
        option.textOffsetX || generalOptions.textOffsetX || 0,
        option.textOffsetY || generalOptions.textOffsetY || 0,
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

  return step;
};
