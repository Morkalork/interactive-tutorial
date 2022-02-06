export const createParentElement = (parentId, closeOnEsc) => {
    const parentElement = document.createElement("div");
    parentElement.style.position = "absolute";
    parentElement.style.top = "0";
    parentElement.style.right = "0";
    parentElement.style.bottom = "0";
    parentElement.style.left = "0";
    parentElement.style.zIndex = "999";
    parentElement.classList.add("interactive-tutorial-overlay");
    parentElement.id = parentId;
    if (closeOnEsc) {
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                parentElement.remove();
                document.body.removeEventListener("keydown", onKeyDown, true);
            }
        };
        document.body.addEventListener("keydown", onKeyDown, true);
    }
    return parentElement;
};
