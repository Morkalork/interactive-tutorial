import InteractiveTutorial from "interactive-tutorial";

const start = () => {
  const enlarger = document.querySelector(".enlarger");
  const enlargableArea = document.querySelector(".enlargable-area");
  // Bind events
  enlarger.addEventListener("click", () => {
    enlargableArea.classList.toggle("enlarged");
  });

  // Initialize the tutorial bindings
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
            elementSelector: ".enlarger",
            text: "Clicking this will enlarge the footer",
            preferredPosition: "top",
          },
          {
            elementSelector: '[data-id="tutorial-footer"]',
            text: "This is a boring, but now rather large footer",
            preferredPosition: "top",
            onInit: () => {
              return new Promise((resolve) => {
                enlargableArea.classList.toggle("enlarged", true);
                resolve();
              });
            },
          },
        ],
        padding: 10,
        textOffsetX: 20,
        textOffsetY: 20,
        onInit: async () => {
          enlargableArea.classList.toggle("enlarged", false);
        },
      });
    });
};

window.onload = start;
