<script>
  import classNames from "classnames";

  export let sidebar = false;

  $: hasSidebar = sidebar ? "sidebar" : "";
  $: usedClasses = classNames("container", hasSidebar);
</script>

<div class={usedClasses}>
  <slot />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    flex: auto;
  }

  .container.sidebar {
    flex-direction: row;
  }
</style>
