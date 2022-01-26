/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "../development/build/index.js":
      /*!*************************************!*\
  !*** ../development/build/index.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        const getFogOfWarParts = (element) => {
          const bottom = Math.floor(window.innerHeight - element.bottom);
          return {
            top: {
              top: 0,
              left: 0,
              right: 0,
              bottom: window.innerHeight - element.top,
            },
            left: {
              top: Math.ceil(element.top),
              left: 0,
              right: window.innerWidth - element.left,
              bottom,
            },
            right: {
              top: Math.ceil(element.top),
              left: element.right,
              right: 0,
              bottom,
            },
            bottom: {
              top: Math.floor(element.bottom) + 1,
              left: 0,
              right: 0,
              bottom: 0,
            },
          };
        };
        const createRectangle = ({ top, right, bottom, left }) => {
          const div = document.createElement("div");
          div.style.position = "absolute";
          div.style.inset = `${top}px ${right}px ${bottom}px ${left}px`;
          div.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          return div;
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
          options,
          id,
        }) => {
          const parentId = id || "fog-of-war-overlay";
          const validOptions = options.filter(
            (option) => option.element || option.elementSelector
          );
          const existingParent = document.querySelector(`#${parentId}`);
          if (existingParent) {
            existingParent.remove();
          }
          const parentElement = document.createElement("div");
          parentElement.style.position = "absolute";
          parentElement.style.top = "0";
          parentElement.style.right = "0";
          parentElement.style.bottom = "0";
          parentElement.style.left = "0";
          parentElement.style.zIndex = "999";
          parentElement.classList.add("interactive-tutorial-overlay");
          parentElement.id = parentId;
          validOptions.forEach((option) => {
            const el =
              option.element ||
              (option.elementSelector &&
                document.querySelector(option.elementSelector));
            if (el) {
              const boundaries = el.getBoundingClientRect();
              const fogOfWar = getFogOfWarParts(boundaries);
              Object.keys(fogOfWar).forEach((key) => {
                const div = createRectangle(fogOfWar[key]);
                div.classList.add(key);
                parentElement.appendChild(div);
              });
            }
          });
          document.body.appendChild(parentElement);
        };

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!******************!*\
  !*** ./index.ts ***!
  \******************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var fog_of_war__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! fog-of-war */ "../development/build/index.js");

    var start = function () {
      console.log({
        FogOfWar: fog_of_war__WEBPACK_IMPORTED_MODULE_0__["default"],
      });
      (0, fog_of_war__WEBPACK_IMPORTED_MODULE_0__["default"])({
        options: [{ elementSelector: "h1" }],
      });
    };
    start();
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQSx5QkFBeUIsSUFBSSxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHLGFBQWE7QUFDL0I7QUFDQTtBQUNBLHNEQUFzRCxTQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7VUNuRUY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05rQztBQUVsQyxJQUFNLEtBQUssR0FBRztJQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLHNEQUFFLENBQUMsQ0FBQztJQUMxQixzREFBUSxDQUFDO1FBQ1AsT0FBTyxFQUFFLENBQUMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDckMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLy4uL2RldmVsb3BtZW50L2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2RlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZW1vLy4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0Rm9nT2ZXYXJQYXJ0cyA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCAtIGVsZW1lbnQuYm90dG9tKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiB7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0IC0gZWxlbWVudC50b3AsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZWZ0OiB7XHJcbiAgICAgICAgICAgIHRvcDogTWF0aC5jZWlsKGVsZW1lbnQudG9wKSxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgcmlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoIC0gZWxlbWVudC5sZWZ0LFxyXG4gICAgICAgICAgICBib3R0b20sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByaWdodDoge1xyXG4gICAgICAgICAgICB0b3A6IE1hdGguY2VpbChlbGVtZW50LnRvcCksXHJcbiAgICAgICAgICAgIGxlZnQ6IGVsZW1lbnQucmlnaHQsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBib3R0b20sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib3R0b206IHtcclxuICAgICAgICAgICAgdG9wOiBNYXRoLmZsb29yKGVsZW1lbnQuYm90dG9tKSArIDEsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn07XHJcbmNvbnN0IGNyZWF0ZVJlY3RhbmdsZSA9ICh7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9KSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgZGl2LnN0eWxlLmluc2V0ID0gYCR7dG9wfXB4ICR7cmlnaHR9cHggJHtib3R0b219cHggJHtsZWZ0fXB4YDtcclxuICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgKHsgb3B0aW9ucywgaWQgfSkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50SWQgPSBpZCB8fCBcImZvZy1vZi13YXItb3ZlcmxheVwiO1xyXG4gICAgY29uc3QgdmFsaWRPcHRpb25zID0gb3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLmVsZW1lbnQgfHwgb3B0aW9uLmVsZW1lbnRTZWxlY3Rvcik7XHJcbiAgICBjb25zdCBleGlzdGluZ1BhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BhcmVudElkfWApO1xyXG4gICAgaWYgKGV4aXN0aW5nUGFyZW50KSB7XHJcbiAgICAgICAgZXhpc3RpbmdQYXJlbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBhcmVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBwYXJlbnRFbGVtZW50LnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgcGFyZW50RWxlbWVudC5zdHlsZS5yaWdodCA9IFwiMFwiO1xyXG4gICAgcGFyZW50RWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjBcIjtcclxuICAgIHBhcmVudEVsZW1lbnQuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgcGFyZW50RWxlbWVudC5zdHlsZS56SW5kZXggPSBcIjk5OVwiO1xyXG4gICAgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm93LW92ZXJsYXlcIik7XHJcbiAgICBwYXJlbnRFbGVtZW50LmlkID0gcGFyZW50SWQ7XHJcbiAgICB2YWxpZE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBvcHRpb24uZWxlbWVudCB8fFxyXG4gICAgICAgICAgICAob3B0aW9uLmVsZW1lbnRTZWxlY3RvciAmJlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb24uZWxlbWVudFNlbGVjdG9yKSk7XHJcbiAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kYXJpZXMgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9nT2ZXYXIgPSBnZXRGb2dPZldhclBhcnRzKGJvdW5kYXJpZXMpO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmb2dPZldhcikuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVSZWN0YW5nbGUoZm9nT2ZXYXJba2V5XSk7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChrZXkpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFyZW50RWxlbWVudCk7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEZvZ09mV2FyIGZyb20gXCJmb2ctb2Ytd2FyXCI7XHJcblxyXG5jb25zdCBzdGFydCA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZyh7IEZvZ09mV2FyIH0pO1xyXG4gIEZvZ09mV2FyKHtcclxuICAgIG9wdGlvbnM6IFt7IGVsZW1lbnRTZWxlY3RvcjogXCJoMVwiIH1dLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuc3RhcnQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
