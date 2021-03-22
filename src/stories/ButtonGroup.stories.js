import Button from "../components/Button/Button.svelte";
import { action } from "@storybook/addon-actions";

export default {
  title: "ButtonGroup/Sizes",
};

const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};
