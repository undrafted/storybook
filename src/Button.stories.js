import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";

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
    <Button bg="palegoldenrod">Hello world</Button>
  ));
