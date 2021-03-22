<script>
  import classNames from "classnames";
  import ListItem from './ListItem.svelte';

  export let size = "md";
  export let border = false;
  export let hover = false;
  export let sortable = false;
  export let disabled = false;

  $: isDisabled = disabled ? "disabled" : "";
  $: isBordered = border ? "bordered" : "";
  $: isSortable = sortable ? "sortable" : "";
  $: isHoverable = hover ? "hovered" : "";

  $: usedClasses = classNames(
    "ss-list",
    isBordered,
    isSortable,
    isHoverable,
    isDisabled
  );
</script>

<div role="list" class={usedClasses}>
  <slot {size} {border} {disabled}>
    <ListItem {size} {border} {disabled}>
      Test
    </ListItem>
  </slot>
</div>

<style>
  :root {
    --border-color: #e5e5ea;
    --border-radius-base: 6px;
  }

  .ss-list {
    position: relative;
    -webkit-box-shadow: 0 1px 0 var(--border-color),
      0 -1px 0 var(--border-color);
    box-shadow: 0 1px 0 var(--border-color), 0 -1px 0 var(--border-color);
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 14px;
  }

  .ss-list.bordered {
    border-radius: 6px;
    box-shadow: 0 0 0 1px var(--border-color);
  }

  .ss-list.hovered {
    background-color: var(--border-color);
  }

  .ss-list.disabled {
    cursor: not-allowed;
  }
</style>
