import AvatarTest from "../components/Avatar/AvatarTest.svelte";

export default {
  title: "Avatars/ Font",
};

export const FontDark = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    font: 'dark',
    content: "DM"
  },
});

export const FontLight = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    font: 'light',
    content: "DM"
  },
});

