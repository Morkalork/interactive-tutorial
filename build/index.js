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
import { executeTutorial } from "./execute-tutorial";
export default (props) => __awaiter(void 0, void 0, void 0, function* () {
    if (props.onInit) {
        yield props.onInit();
    }
    const generalOptions = Object.assign({ id: props.id || "interactive-tutorial-parent", padding: 10, turnOffAllTransitions: true, closeOnEsc: true }, props);
    if (generalOptions.turnOffAllTransitions) {
        props.options.forEach((option) => {
            var _a;
            return option.elementSelector &&
                ((_a = document
                    .querySelector(option.elementSelector)) === null || _a === void 0 ? void 0 : _a.classList.add("interactive-tutorial-no-transitions"));
        });
    }
    const existingParent = document.querySelector(`#${generalOptions.id}`);
    if (existingParent) {
        existingParent.remove();
    }
    document
        .querySelectorAll(".interactive-tutorial-overlay")
        .forEach((el) => el.remove());
    const parentElement = createParentElement(generalOptions.id, generalOptions.closeOnEsc);
    executeTutorial(parentElement, props.options, generalOptions);
});
