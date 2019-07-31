import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { text, boolean } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";

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
    <Button disabled={boolean("disabled", false)} onClick={action("onClick")}>
      {text("text", "Hello world")}
    </Button>
  ));
