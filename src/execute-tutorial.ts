import { changeStep } from "./change-step";

export const executeTutorial = (
  parentElement: HTMLDivElement,
  steps: Record<string, HTMLDivElement>[]
) => {
  let step = 0;
  changeStep(parentElement, steps[step]);
  parentElement.addEventListener("click", () => {
    step++;
    parentElement.innerHTML = "";
    if (step < steps.length) {
      changeStep(parentElement, steps[step]);
    } else {
      parentElement.remove();
    }
  });
  document.body.appendChild(parentElement);
};
