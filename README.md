# Interactive Tutorial

The interactive-tutorial plugin will allow for you to create an interactive tutorial on any page/app. It's easily configured and supports both highlighting areas and adding text in specific directions.

![How it looks when you use it](https://github.com/Morkalork/interactive-tutorial/blob/master/assets/interactive-tutorial.gif)

## How to use

First, install the package:

```node
npm install --save interactive-tutorial
```

Now, given the following html:

```html
<div data-id="tutorial-navigation">...</div>
<div data-id="tutorial-signup">...</div>
<div data-id="tutorial-information">...</div>
<div data-id="tutorial-footer">...</div>
```

Call the package like this:

```js
import InteractiveTutorial from "interactive-tutorial";

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
```

You can use a template as well, if you need some, or all, of your textbox to follow a common design pattern.
You declare you template as a general argument (called `template`) and then use the property `templateArgs` for the options that wants to use the template.
In the example below you can see that an argument is described as `{arg}` in the template, or `{arg?}` if you want it to be optional.
The arguments can be called anything as long as they are matched by the templateArgs.

Example using a template:

```js
import InteractiveTutorial from "interactive-tutorial";

InteractiveTutorial({
  options: [
    {
      elementSelector: '[data-id="tutorial-footer-link1"]',
      text: "This is a small link",
      preferredPosition: "top",
    },
    {
      elementSelector: '[data-id="tutorial-footer-link2"]',
      preferredPosition: "top",
      templateArgs: { text: "This one uses a template." },
    },
    {
      elementSelector: '[data-id="tutorial-footer-link3"]',
      preferredPosition: "top",
      templateArgs: {
        text: "This one <b>also</b> uses a template.",
        optional: "This one also uses the optional argument.",
      },
  ],
  template: `<p>This is the general template!<p><br /><p>{text}</p><br /><p>It is sometimes useful.</p><br /><p><em>{optional?}</em></p>`,
});
```

Available options are:

| Option name              | Type                                                                | Description                                                                                             |
| ------------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| options                  | object                                                              | An array of options, each describing an individual step of the tutorial. See the type definition below. |
| option.elementSelector   | string                                                              | Any valid selector for the element to highlight/focus on.                                               |
| option.text              | string &#124; undefined                                             | The text to show (optional).                                                                            |
| option.preferredPosition | "top" &#124; "right" &#124; "bottom" &#124; "left" &#124; undefined | If you want to select where the text is going to show, select a preferred position.                     |
| option.padding           | number &#124; undefined                                             | The padding for this particular segment.                                                                |
| option.textOffsetX       | number &#124; undefined                                             | The specific X offset for this particular text segment                                                  |
| option.textOffsetY       | number &#124; undefined                                             | The specific Y offset for this particular text segment                                                  |
| options.templateArgs     | object &#124; undefined                                             | Arguments for the tmplate, if you are using it                                                          |
| padding                  | number &#124; undefined                                             | The general padding of all tutorial areas.                                                              |
| textOffsetX              | number &#124; undefined                                             | The general X offset for all text baloons.                                                              |
| textOffsetY              | number &#124; undefined                                             | The general Y offset for all text baloons.                                                              |
| template                 | string &#124; undefined                                             | A template that can be used for all, or some, textboxes.                                                |

And to style it using the available class selectors:

| Selector                                        | Description                                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------------------------- |
| .interactive-tutorial-overlay                   | The main overlay ontop of which the tutorial is placed.                                |
| .interactive-tutorial-element-overlay           | The overlay ontop of the currently showing section.                                    |
| .interactive-tutorial-cloaking-rectangle-top    | The top cloaking rectangle.                                                            |
| .interactive-tutorial-cloaking-rectangle-right  | The right cloaking rectangle.                                                          |
| .interactive-tutorial-cloaking-rectangle-bottom | The bottom cloaking rectangle.                                                         |
| .interactive-tutorial-cloaking-rectangle-left   | The left cloaking rectangle.                                                           |
| .interactive-tutorial-text                      | The text element.                                                                      |
| .interactive-tutorial-text-top                  | The text element whenever it is positioned at the top.                                 |
| .interactive-tutorial-text-right                | The text element whenever it is positioned at the right.                               |
| .interactive-tutorial-text-bottom               | The text element whenever it is positioned at the bottom.                              |
| .interactive-tutorial-text-left                 | The text element whenever it is positioned at the left.                                |
| .interactive-tutorial-text-top-right            | The text element whenever it is positioned above an element but starts from the right. |
| .interactive-tutorial-text-bottom-right         | The text element whenever it is positioned below an element but starts from the right. |

A basic styling that looks like the above example would look like this:

```css
.interactive-tutorial-text {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
}

.interactive-tutorial-element-overlay {
  animation: pulse-orange 1s;
}

@keyframes pulse-orange {
  0% {
    background-color: rgba(255, 255, 255, 0.5);
  }

  100% {
    background-color: rgba(255, 255, 255, 0);
  }
}

.interactive-tutorial-text::after {
  color: #fff;
  position: absolute;
  font-size: 1rem;
}

.interactive-tutorial-text-bottom::after {
  top: -1rem;
  left: 10%;
  content: "▲";
}

.interactive-tutorial-text-top::after {
  bottom: -1rem;
  left: 10%;
  content: "▼";
}

/**
  If the textbox is too far to the right, assume that the left part
  of the textbox is outside of the element it's decorating.
*/
.interactive-tutorial-text-bottom-right::after,
.interactive-tutorial-text-top-right::after {
  left: 80%;
}

.interactive-tutorial-text-right::after {
  left: -0.75rem;
  content: "◄";
}

.interactive-tutorial-text-left::after {
  right: -0.75rem;
  content: "►";
}

.interactive-tutorial-element-overlay {
  box-shadow: inset 0 0 1rem 0.1rem rgba(0, 0, 0, 0.75);
}

.enlargable-area {
  height: 75px;
  transition: 1s;
}

.enlargable-area.enlarged {
  height: 200px;
}
```

## Working with the code

If you want to contribute or just play around with the code, just download or fork the repository.

To build the project, simply run:

```
npm install
npm run watch
// or
npm run build
```

To run the demo project to test your changes you must install the dependencies within the package.

```
cd demo/
npm install
npm start
```
