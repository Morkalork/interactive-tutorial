import { Rect } from "./types";

export const createCloakingRectangle = ({ top, right, bottom, left }: Rect) => {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.inset = `${top}px ${right}px ${bottom}px ${left}px`;
  div.classList.add("interactive-tutorial-cloaking-rectangle");

  return div;
};
