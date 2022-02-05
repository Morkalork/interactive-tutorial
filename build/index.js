var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createParentElement } from "./create-parent-element";
import { createStyles } from "./create-styles";
import { executeTutorial } from "./execute-tutorial";
export default (props) => __awaiter(void 0, void 0, void 0, function* () {
    if (props.onInit) {
        yield props.onInit();
    }
    const generalOptions = Object.assign({ id: props.id || "interactive-tutorial-parent", padding: 10, turnOffAllTransitions: true }, props);
    createStyles();
    if (generalOptions.turnOffAllTransitions) {
        props.options
            .map((option) => document.querySelector(option.elementSelector))
            .forEach((el) => el && el.classList.add("interactive-tutorial-no-transitions"));
    }
    const existingParent = document.querySelector(`#${generalOptions.id}`);
    if (existingParent) {
        existingParent.remove();
    }
    const parentElement = createParentElement(generalOptions.id);
    executeTutorial(parentElement, props.options, generalOptions);
});
