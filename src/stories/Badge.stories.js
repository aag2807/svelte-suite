import Badge from '../components/Badge/Badge.svelte'
import BadgeTest from '../components/Badge/BadgeTest.svelte'

export default {
  title: "Badge/Types",
};


export const DefaultBadge = ({ ...args}) => ({
  Component: Badge,
  props: {
    content: 100,
    ...args
  },
});

export const EmptyBadge = ({ ...args}) => ({
  Component: Badge,
  props: {
    content:'',
    ...args
  },
});



export const BadgeButton = ({ ...args}) => ({
  Component: BadgeTest,
  props: {
    content: 100,
    ...args
  },
});

export const EmptyBadgeButton = ({ ...args}) => ({
  Component: BadgeTest,
  props: {
    content: '',
    ...args
  },
});


