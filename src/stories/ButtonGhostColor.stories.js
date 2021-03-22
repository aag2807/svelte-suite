import Button from "../components/Button/Button.svelte";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button/Ghost Colors",
};

const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

export const RedGhost = () => ({
  Component: Button,
  props: {
    appearance: "ghost",
    color: 'red',
    label: "Red Ghost",
  },
  on: {
    ...actionsData,
  },
});

export const OrangeGhost = () => ({
  Component: Button,
  props: {
    appearance: "ghost",
    color: 'orange',
    label: "Orange Ghost",
  },
  on: {
    ...actionsData,
  },
});

export const YellowGhost = () => ({
  Component: Button,
  props: {
    appearance: "ghost",
    color: 'yellow',
    label: "Yellow Ghost",
  },
  on: {
    ...actionsData,
  },
});

export const GreenGhost = () => ({
  Component: Button,
  props: {
    appearance: "ghost",
    color: 'green',
    label: "Green Ghost",
  },
  on: {
    ...actionsData,
  },
});

export const CyanGhost = () => ({
  Component: Button,
  props: {
    appearance: "ghost",
    color: 'cyan',
    label: "Cyan Ghost",
  },
  on: {
    ...actionsData,
  },
});

export const BlueGhost = () => ({
  Component: Button,
  props: {
    appearance: "ghost",
    color: 'blue',
    label: "Blue Ghost",
  },
  on: {
    ...actionsData,
  },
});

export const VioletGhost = () => ({
  Component: Button,
  props: {
    appearance: "ghost",
    color: 'violet',
    label: "Violet Ghost",
  },
  on: {
    ...actionsData,
  },
});

