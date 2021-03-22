import Badge from "../components/Badge/Badge.svelte";
import BadgeTest from "../components/Badge/BadgeTest.svelte";

export default {
  title: "Badge/Colors",
};

export const Default = ({ ...args }) => ({
  Component: Badge,
  props: {
    color: "red",
    content: 100,
    ...args,
  },
});

export const OrangeBadge = ({ ...args }) => ({
  Component: Badge,
  props: {
    color: "orange",
    content: 100,
    ...args,
  },
});

export const YellowBadge = ({ ...args }) => ({
  Component: Badge,
  props: {
    color: "yellow",
    content: 100,
    ...args,
  },
});

export const GreenBadge = ({ ...args }) => ({
  Component: Badge,
  props: {
    color: "green",
    content: 100,
    ...args,
  },
});

export const CyanBadge = ({ ...args }) => ({
  Component: Badge,
  props: {
    color: "cyan",
    content: 100,
    ...args,
  },
});

export const BlueBadge = ({ ...args }) => ({
  Component: Badge,
  props: {
    color: "blue",
    content: 100,
    ...args,
  },
});

export const VioletBadge = ({ ...args }) => ({
  Component: Badge,
  props: {
    color: "violet",
    content: 100,
    ...args,
  },
});
