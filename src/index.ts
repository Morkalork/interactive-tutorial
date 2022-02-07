import { createParentElement } from "./create-parent-element";
import { createStyles } from "./create-styles";
import { executeTutorial } from "./execute-tutorial";
import { GeneralOptions } from "./types";

type Props = GeneralOptions;

export default async (props: Props) => {
  if (props.onInit) {
    await props.onInit();
  }

  const generalOptions = {
    id: props.id || "interactive-tutorial-parent",
    padding: 10,
    turnOffAllTransitions: true,
    closeOnEsc: true,
    ...props,
  };

  createStyles();
  if (generalOptions.turnOffAllTransitions) {
    props.options.forEach(
      (option) =>
        option.elementSelector &&
        document
          .querySelector(option.elementSelector)
          ?.classList.add("interactive-tutorial-no-transitions")
    );
  }

  const existingParent = document.querySelector(`#${generalOptions.id}`);
  if (existingParent) {
    existingParent.remove();
  }

  const parentElement = createParentElement(
    generalOptions.id,
    generalOptions.closeOnEsc
  );

  executeTutorial(parentElement, props.options, generalOptions);
};
