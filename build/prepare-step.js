var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createCloakingRectangle } from "./create-cloaking-rectangle";
import { createText } from "./create-text";
import { getFogOfWarParts } from "./get-fog-of-war-parts";
export const prepareStep = (option, generalOptions) => __awaiter(void 0, void 0, void 0, function* () {
    if (!option) {
        return;
    }
    const init = option.onInit || (() => Promise.resolve());
    yield init();
    const totalPadding = option.padding || generalOptions.padding || 0;
    const element = option.elementSelector && document.querySelector(option.elementSelector);
    if (!element) {
        return;
    }
    const boundaries = element.getBoundingClientRect();
    const fogOfWar = getFogOfWarParts(boundaries, totalPadding);
    const text = option.text
        ? createText(boundaries, option.text, option.textOffsetX || generalOptions.textOffsetX || 0, option.textOffsetY || generalOptions.textOffsetY || 0, generalOptions.template, option.templateArgs, option.preferredPosition)
        : undefined;
    const elementOverlay = document.createElement("div");
    elementOverlay.classList.add("interactive-tutorial-element-overlay");
    elementOverlay.style.position = "absolute";
    elementOverlay.style.top = `${boundaries.top - totalPadding}px`;
    elementOverlay.style.right = `${window.innerWidth - boundaries.right - totalPadding}px`;
    elementOverlay.style.bottom = `${window.innerHeight - boundaries.bottom - totalPadding}px`;
    elementOverlay.style.left = `${boundaries.left - totalPadding}px`;
    const step = Object.keys(fogOfWar).reduce((acc, key) => {
        const div = createCloakingRectangle(fogOfWar[key]);
        div.classList.add(`interactive-tutorial-cloaking-rectangle-${key}`);
        return Object.assign(Object.assign({}, acc), { [key]: div });
    }, { text, elementOverlay });
    return step;
});
