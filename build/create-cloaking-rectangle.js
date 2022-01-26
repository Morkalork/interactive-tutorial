export const createCloakingRectangle = ({ top, right, bottom, left }) => {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.inset = `${top}px ${right}px ${bottom}px ${left}px`;
    div.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    return div;
};
