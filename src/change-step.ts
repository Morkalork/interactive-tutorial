export const changeStep = (
  parent: HTMLElement,
  step: Record<string, HTMLDivElement>
) => {
  const text = step.text;
  delete step.text;
  Object.keys(step).forEach((key) => {
    parent.appendChild(step[key]);
  });
  parent.appendChild(text);
};
