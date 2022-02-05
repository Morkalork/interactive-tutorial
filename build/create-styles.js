export const createStyles = () => {
    const style = document.createElement("style");
    style.innerHTML = `
  .interactive-tutorial-no-transitions {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
    -ms-transition: none !important;
    transition: none !important;
  }
  `;
    document.getElementsByTagName("head")[0].appendChild(style);
};
