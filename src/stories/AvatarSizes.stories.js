import AvatarTest from "../components/Avatar/AvatarTest.svelte";

export default {
  title: "Avatars/ Size",
};

export const LargeAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    size: 'lg',
    content: "DM"
  },
});

export const MediumAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    size: 'md',
    content: "DM"
  },
});

export const SmallAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    size: 'sm',
    content: "DM"
  },
});

export const ExtraSmallAvatar = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    size: 'xs',
    content: "DM"
  },
});

