import CheckboxTest from '../components/Checkbox/CheckboxTest.svelte'

export default {
  title: "Checkbox/ Types",
};

export const Default = ({ ...args }) => ({
  Component: CheckboxTest,
  props: {
  },
});


export const Disabled = ({ ...args }) => ({
  Component: CheckboxTest,
  props: {
    disabled: true
  },
});