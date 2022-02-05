const minY = window.innerHeight * 0.2;
const maxY = window.innerHeight * 0.8;
const minX = window.innerWidth * 0.3;
const maxX = window.innerWidth * 0.7;
const setHorizontalForVerticalPosition = (boundaries, textDiv) => {
    if (boundaries.left > maxX) {
        textDiv.style.right = `${window.innerWidth - boundaries.right}px`;
        textDiv.classList.add("interactive-tutorial-text-bottom-right");
    }
    else {
        textDiv.style.left = `${boundaries.left}px`;
        textDiv.classList.add("interactive-tutorial-text-bottom-left");
    }
};
const setTop = (textDiv, boundaries, textOffsetY) => {
    textDiv.style.bottom = `${window.innerHeight - (boundaries.top - textOffsetY)}px`;
    setHorizontalForVerticalPosition(boundaries, textDiv);
    textDiv.classList.add("interactive-tutorial-text-top");
};
const setBottom = (textDiv, boundaries, textOffsetY) => {
    textDiv.style.top = `${boundaries.bottom + textOffsetY}px`;
    setHorizontalForVerticalPosition(boundaries, textDiv);
    textDiv.classList.add("interactive-tutorial-text-bottom");
};
const setRight = (textDiv, boundaries, textOffsetX) => {
    textDiv.style.left = `${boundaries.right + textOffsetX}px`;
    textDiv.style.top = `${boundaries.top}px`;
    textDiv.style.maxWidth = `${window.innerWidth * 0.25}px`;
    textDiv.classList.add("interactive-tutorial-text-right");
};
const setLeft = (textDiv, boundaries, textOffsetX) => {
    textDiv.style.right = `${window.innerWidth - boundaries.left + textOffsetX}px`;
    textDiv.style.top = `${boundaries.top}px`;
    textDiv.style.maxWidth = `${window.innerWidth * 0.25}px`;
    textDiv.classList.add("interactive-tutorial-text-left");
};
export const createText = (boundaries, content, textOffsetX, textOffsetY, preferredPosition = "top") => {
    const textDiv = document.createElement("div");
    textDiv.classList.add("interactive-tutorial-text");
    textDiv.innerHTML = content;
    textDiv.style.position = "absolute";
    let positionSet = false;
    if (preferredPosition === "top") {
        if (boundaries.top > minY) {
            setTop(textDiv, boundaries, textOffsetY);
            positionSet = true;
        }
    }
    else if (preferredPosition === "right") {
        if (boundaries.right < maxX) {
            setRight(textDiv, boundaries, textOffsetX);
            positionSet = true;
        }
    }
    else if (preferredPosition === "bottom") {
        if (boundaries.bottom < maxY) {
            setBottom(textDiv, boundaries, textOffsetY);
            positionSet = true;
        }
    }
    else if (preferredPosition === "left") {
        if (boundaries.left > minX) {
            setLeft(textDiv, boundaries, textOffsetX);
            positionSet = true;
        }
    }
    if (!positionSet) {
        if (boundaries.top > minY) {
            setTop(textDiv, boundaries, textOffsetY);
        }
        else if (boundaries.bottom < maxY) {
            setBottom(textDiv, boundaries, textOffsetY);
        }
        else if (boundaries.right < maxX) {
            setRight(textDiv, boundaries, textOffsetX);
        }
        else if (boundaries.left > minX) {
            setLeft(textDiv, boundaries, textOffsetX);
        }
        else {
            throw new Error(`Could not position interactive tutorial text, there is no space to do so: ${JSON.stringify({
                content,
                boundaries,
            })}`);
        }
    }
    return textDiv;
};
