<script>
  import Badge from "./Badge.svelte";
  import Button from '../Button/Button.svelte'
  

  export let badgeColor = 'red';
  export let btnAppearance = 'default'
  export let content = "";
</script>


<Badge color={badgeColor} content={content}>
  <Button appearance={btnAppearance}>Hello</Button>
</Badge>
