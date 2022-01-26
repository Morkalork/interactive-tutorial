import { Rect } from "./types";

export const getFogOfWarParts = (
  element: DOMRect,
  padding: number
): Record<string, Rect> => {
  const topBottom = Math.ceil(window.innerHeight - element.top) + 0.5;
  const centerTop = Math.ceil(window.innerHeight - topBottom - padding);
  const centerBottom = Math.floor(window.innerHeight - element.bottom);
  const bottomTop = Math.floor(window.innerHeight - centerBottom) + 0.5;
  return {
    top: {
      top: 0,
      left: 0,
      right: 0,
      bottom: topBottom + padding,
    },
    left: {
      top: centerTop,
      left: 0,
      right: window.innerWidth - element.left + padding,
      bottom: centerBottom - padding,
    },
    right: {
      top: centerTop,
      left: element.right + padding,
      right: 0,
      bottom: centerBottom - padding,
    },
    bottom: {
      top: bottomTop + padding,
      left: 0,
      right: 0,
      bottom: 0,
    },
  };
};
