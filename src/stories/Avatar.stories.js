import AvatarTest from "../components/Avatar/AvatarTest.svelte";

export default {
  title: "Avatars/ Types",
};

export const Default = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    content: "DM"
  },
});

export const DefaultRound = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    circle: true,
    content: "DM"
  },
});

export const AvatarImage = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    src: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
  },
});



export const AvatarImageRound = ({ ...args }) => ({
  Component: AvatarTest,
  props: {
    circle: true,
    src: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
  },
});


