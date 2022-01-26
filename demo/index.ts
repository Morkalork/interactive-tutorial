import InteractiveTutorial from "interactive-tutorial";

const start = () => {
  document
    .querySelector(".interactive-tutorial-launcher")
    .addEventListener("click", () => {
      InteractiveTutorial({
        options: [
          {
            elementSelector: '[data-id="tutorial-navigation"]',
            text: "This is the main navigation",
            preferredPosition: "bottom",
          },
          {
            elementSelector: '[data-id="tutorial-signup"]',
            text: "This is a signup with a <strong>robot check</strong>",
            preferredPosition: "right",
          },
          {
            elementSelector: '[data-id="tutorial-information"]',
            text: "This is some informative information",
            preferredPosition: "left",
          },
          {
            elementSelector: '[data-id="tutorial-footer"]',
            text: "This is a boring footer",
            preferredPosition: "top",
          },
        ],
        padding: 10,
        textOffsetX: 20,
        textOffsetY: 20,
      });
    });
};

start();
