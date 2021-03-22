import AvatarTest from "../components/Avatar/AvatarTest.svelte";

export default {
  title: "Avatars/ Colors",
};

export const DefaultRound = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    circle: true,
    content: "DM"
  },
});

export const RedAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    bg: 'red',
    content: "DM"
  },
});

export const OrangeAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    bg: 'orange',
    content: "DM"
  },
});

export const YellowAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    bg: 'yellow',
    font: 'light',
    content: "DM"
  },
});

export const GreenAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    bg: 'green',
    font: 'light',
    content: "DM"
  },
});

export const CyanAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    bg: 'cyan',
    font: 'light',
    content: "DM"
  },
});

export const BlueAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    bg: 'blue',
    font: 'light',
    content: "DM"
  },
});

export const VioletAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    bg: 'violet',
    font: 'light',
    content: "DM"
  },
});

export const SuccessAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    bg: 'success',
    font: 'light',
    content: "DM"
  },
});

export const InfoAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    bg: 'info',
    font: 'light',
    content: "DM"
  },
});

export const WarningAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    bg: 'warning',
    font: 'light',
    content: "DM"
  },
});

export const ErrorAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    bg: 'error',
    font: 'light',
    content: "DM"
  },
});
