<script>
  import Avatar from './Avatar.svelte'; 

  export let src;
  export let font;
  export let bg;
  export let content = "";
  export let size = "md"
  export let circle = false;
</script>

<style>
  /* your styles go here */
</style>


{#if content.length}
  <Avatar {font} {bg} {size} {circle} >
    {content}
  </Avatar>
{:else}
<Avatar {src} {size}  {circle} />
{/if}