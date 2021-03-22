import Button from "../components/Button/Button.svelte";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button/Types",
};

const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

export const Default = () => ({
  Component: Button,
  props: {
    appearance: "default",
    size: 'md',
    label: "Default",
  },
  on: {
    ...actionsData,
  },
});


export const Primary = () => ({
  Component: Button,
  props: {
    appearance: "primary",
    label: "Primary",
  },
  on: {
    ...actionsData,
  },
});

export const Link = () => ({
  Component: Button,
  props: {
    appearance: "link",
    label: "Link",
  },
  on: {
    ...actionsData,
  },
});



export const Subtle = () => ({
  Component: Button,
  props: {
    subtle: true,
    label: "Subtle",
  },
  on: {
    ...actionsData,
  },
});

export const Ghost = () => ({
  Component: Button,
  props: {
    appearance: "ghost",
    label: "Ghost",
  },
  on: {
    ...actionsData,
  },
});

export const Block = () => ({
  Component: Button,
  props: {
    block: true,
    label: "Block",
  },
  on: {
    ...actionsData,
  },
});

