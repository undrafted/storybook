import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { color } from "@storybook/addon-knobs/react";

storiesOf("Button", module)
  .addParameters({
    info: {
      text: "whassup",
      h1: {
        color: "orange"
      }
    }
  })
  .add("with background", () => (
    <Button bg={color("bg", "palegoldenrod", "group1")}>Hello world</Button>
  ));
