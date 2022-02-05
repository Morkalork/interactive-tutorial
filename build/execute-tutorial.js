var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { changeStep } from "./change-step";
import { prepareStep } from "./prepare-step";
export const executeTutorial = (parentElement, validOptions, generalOptions, stepCount = 0) => __awaiter(void 0, void 0, void 0, function* () {
    const step = yield prepareStep(validOptions[stepCount], generalOptions);
    if (!step) {
        executeTutorial(parentElement, validOptions, generalOptions, stepCount + 1);
        return;
    }
    changeStep(parentElement, step);
    parentElement.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        parentElement.innerHTML = "";
        let step;
        while (!step && stepCount < validOptions.length) {
            stepCount++;
            step = yield prepareStep(validOptions[stepCount], generalOptions);
        }
        if (!step) {
            parentElement.remove();
            if (generalOptions.turnOffAllTransitions) {
                document
                    .querySelectorAll(".interactive-tutorial-no-transitions")
                    .forEach((el) => el.classList.remove("interactive-tutorial-no-transitions"));
            }
            return;
        }
        changeStep(parentElement, step);
    }));
    document.body.appendChild(parentElement);
});
