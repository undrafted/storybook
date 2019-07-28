import { configure } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withInfo);
addDecorator(jsxDecorator);
addDecorator(withKnobs);
const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
