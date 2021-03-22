import Button from "../components/Button/Button.svelte";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button/Colors",
};

const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

export const Red = () => ({
  Component: Button,
  props: {
    color: "red",
    label: "Red",
  },
  on: {
    ...actionsData,
  },
});

export const Orange = () => ({
  Component: Button,
  props: {
    color: "orange",
    label: "Orange",
  },
  on: {
    ...actionsData,
  },
});

export const Yellow = () => ({
  Component: Button,
  props: {
    color: "yellow",
    label: "Yellow",
  },
  on: {
    ...actionsData,
  },
});

export const Green = () => ({
  Component: Button,
  props: {
    color: "green",
    label: "Green",
  },
  on: {
    ...actionsData,
  },
});

export const Cyan = () => ({
  Component: Button,
  props: {
    color: "cyan",
    label: "Cyan",
  },
  on: {
    ...actionsData,
  },
});

export const Blue = () => ({
  Component: Button,
  props: {
    color: "blue",
    label: "Blue",
  },
  on: {
    ...actionsData,
  },
});

export const Violet = () => ({
  Component: Button,
  props: {
    color: "violet",
    label: "Violet",
  },
  on: {
    ...actionsData,
  },
});
