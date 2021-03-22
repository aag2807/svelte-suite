import Button from "../components/Button/Button.svelte";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button/Sizes",
};

const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

export const Large = () => ({
  Component: Button,
  props: {
    apperance: "default",
    size: 'lg',
    label: "Larger",
  },
  on: {
    ...actionsData,
  },
});

export const Default = () => ({
  Component: Button,
  props: {
    label: "Default",
  },
  on: {
    ...actionsData,
  },
});

export const Small = () => ({
  Component: Button,
  props: {
    apperance: "default",
    size: 'sm',
    label: "Larger",
  },
  on: {
    ...actionsData,
  },
});

export const ExtraSmall = () => ({
  Component: Button,
  props: {
    apperance: "default",
    size: 'xs',
    label: "Larger",
  },
  on: {
    ...actionsData,
  },
});

