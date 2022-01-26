import { Position } from "./types";

const minY = window.innerHeight * 0.2;
const maxY = window.innerHeight * 0.8;
const minX = window.innerWidth * 0.3;
const maxX = window.innerWidth * 0.7;

const setTop = (
  textDiv: HTMLDivElement,
  boundaries: DOMRect,
  textOffsetY: number
) => {
  textDiv.style.bottom = `${
    window.innerHeight - (boundaries.top - textOffsetY)
  }px`;
  textDiv.style.left = `${boundaries.left + boundaries.width / 2}px`;
  textDiv.classList.add("interactive-tutorial-text-top");
};

const setRight = (
  textDiv: HTMLDivElement,
  boundaries: DOMRect,
  textOffsetX: number
) => {
  textDiv.style.left = `${boundaries.right + textOffsetX}px`;
  textDiv.style.top = `${boundaries.top + boundaries.height / 2}px`;
  textDiv.style.maxWidth = `${window.innerWidth * 0.25}px`;
  textDiv.classList.add("interactive-tutorial-text-right");
};

const setBottom = (
  textDiv: HTMLDivElement,
  boundaries: DOMRect,
  textOffsetY: number
) => {
  textDiv.style.top = `${boundaries.bottom + textOffsetY}px`;
  textDiv.style.left = `${boundaries.left + boundaries.width / 2}px`;
  textDiv.classList.add("interactive-tutorial-text-bottom");
};

const setLeft = (
  textDiv: HTMLDivElement,
  boundaries: DOMRect,
  textOffsetX: number
) => {
  textDiv.style.right = `${
    window.innerWidth - boundaries.left + textOffsetX
  }px`;
  textDiv.style.top = `${boundaries.top + boundaries.height / 2}px`;
  textDiv.style.maxWidth = `${window.innerWidth * 0.25}px`;
  textDiv.classList.add("interactive-tutorial-text-left");
};

export const createText = (
  boundaries: DOMRect,
  content: string,
  textOffsetX: number,
  textOffsetY: number,
  preferredPosition: Position = "top"
) => {
  const textDiv = document.createElement("div");
  textDiv.classList.add("interactive-tutorial-text");
  textDiv.innerHTML = content;
  textDiv.style.position = "absolute";

  const bcx = boundaries.left + boundaries.width / 2;
  let positionSet = false;

  if (preferredPosition === "top") {
    if (boundaries.top > minY) {
      setTop(textDiv, boundaries, textOffsetY);
      positionSet = true;
    }
  } else if (preferredPosition === "right") {
    if (boundaries.right < maxX) {
      setRight(textDiv, boundaries, textOffsetX);
      positionSet = true;
    }
  } else if (preferredPosition === "bottom") {
    if (boundaries.bottom < maxY) {
      setBottom(textDiv, boundaries, textOffsetY);
      positionSet = true;
    }
  } else if (preferredPosition === "left") {
    if (boundaries.left > minX) {
      setLeft(textDiv, boundaries, textOffsetX);
      positionSet = true;
    }
  }

  if (!positionSet) {
    if (boundaries.top > minY) {
      setTop(textDiv, boundaries, textOffsetY);
    } else if (boundaries.bottom < maxY) {
      setBottom(textDiv, boundaries, textOffsetY);
    } else if (boundaries.right < maxX) {
      setRight(textDiv, boundaries, textOffsetX);
    } else if (boundaries.left > minX) {
      setLeft(textDiv, boundaries, textOffsetX);
    } else {
      throw new Error(
        `Could not position interactive tutorial text, there is no space to do so: ${JSON.stringify(
          {
            content,
            boundaries,
          }
        )}`
      );
    }
  }

  return textDiv;
};
