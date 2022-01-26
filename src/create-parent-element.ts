export const createParentElement = (parentId: string) => {
  const parentElement = document.createElement("div");
  parentElement.style.position = "absolute";
  parentElement.style.top = "0";
  parentElement.style.right = "0";
  parentElement.style.bottom = "0";
  parentElement.style.left = "0";
  parentElement.style.zIndex = "999";
  parentElement.classList.add("interactive-tutorial-overlay");
  parentElement.id = parentId;
  return parentElement;
};
