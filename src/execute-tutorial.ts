import { changeStep } from "./change-step";
import { prepareStep } from "./prepare-step";
import { GeneralOptions, TutorialElementOption } from "./types";

export const executeTutorial = async (
  parentElement: HTMLDivElement,
  validOptions: TutorialElementOption[],
  generalOptions: GeneralOptions,
  stepCount = 0
) => {
  const step = await prepareStep(validOptions[stepCount], generalOptions);
  if (!step) {
    executeTutorial(parentElement, validOptions, generalOptions, stepCount + 1);
    return;
  }

  changeStep(parentElement, step);
  parentElement.addEventListener("click", async () => {
    parentElement.innerHTML = "";
    let step;
    while (!step && stepCount < validOptions.length) {
      stepCount++;
      step = await prepareStep(validOptions[stepCount], generalOptions);
    }
    if (!step) {
      parentElement.remove();
      if (generalOptions.turnOffAllTransitions) {
        document
          .querySelectorAll(".interactive-tutorial-no-transitions")
          .forEach((el) =>
            el.classList.remove("interactive-tutorial-no-transitions")
          );
      }
      return;
    }

    changeStep(parentElement, step);
  });

  document.body.appendChild(parentElement);
};
