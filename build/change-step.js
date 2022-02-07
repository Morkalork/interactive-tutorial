export const changeStep = (parent, step) => {
    const text = step.text;
    delete step.text;
    Object.keys(step).forEach((key) => {
        parent.appendChild(step[key]);
    });
    if (text) {
        parent.appendChild(text);
    }
};
