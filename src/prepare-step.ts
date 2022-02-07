import { createCloakingRectangle } from "./create-cloaking-rectangle";
import { createText } from "./create-text";
import { getFogOfWarParts } from "./get-fog-of-war-parts";
import { parseContent } from "./parse-content";
import { GeneralOptions, TutorialElementOption } from "./types";

const createFullPageContent = (
  option: TutorialElementOption,
  generalOptions: GeneralOptions
): Record<string, HTMLDivElement> => {
  const content = parseContent(
    option.text,
    generalOptions.template,
    option.templateArgs
  );
  const fullPageContent = document.createElement("div");
  fullPageContent.classList.add("interactive-tutorial-full-page-content");
  if (content) {
    fullPageContent.innerHTML = content;
  }

  return { fullPageContent };
};

const createElementHighlightContent = (
  element: Element,
  option: TutorialElementOption,
  generalOptions: GeneralOptions
) => {
  const totalPadding = option.padding || generalOptions.padding || 0;
  const boundaries = element.getBoundingClientRect();
  const fogOfWar = getFogOfWarParts(boundaries, totalPadding);

  const text = createText(
    boundaries,
    option.textOffsetX || generalOptions.textOffsetX || 0,
    option.textOffsetY || generalOptions.textOffsetY || 0,
    option.text,
    generalOptions.template,
    option.templateArgs,
    option.preferredPosition
  );

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

export const prepareStep = async (
  option: TutorialElementOption,
  generalOptions: GeneralOptions
) => {
  if (!option) {
    return;
  }

  const init = option.onInit || (() => Promise.resolve());

  await init();
  const element =
    option.elementSelector && document.querySelector(option.elementSelector);
  if (!element) {
    return createFullPageContent(option, generalOptions);
  }

  return createElementHighlightContent(element, option, generalOptions);
};
