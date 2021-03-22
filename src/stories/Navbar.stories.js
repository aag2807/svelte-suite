import Navbar from '../components/Navbar/Navbar.svelte';

export default {
  title: "Navbar",
};


export const DefaultNavbar = ({ ...args}) => ({
  Component: Navbar,
  props: {
    appearance: 'default'
  },
});


export const InverseNavbar = ({ ...args}) => ({
  Component: Navbar,
  props: {
    appearance: 'inverse'
  },
});