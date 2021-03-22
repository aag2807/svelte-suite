<script>
  import classNames from "classnames";

  export let block = false;
  export let disabled = false;
  export let vertical = false;
  export let justified = false;
  export let size = "md";

  $: isBlock = block ? "block" : "";
  $: isDisabled = disabled ? "disabled" : "";
  $: isVertical = vertical ? "vertical" : "";
  $: isJustified = justified ? "justified" : "";
  $: usedClasses = classNames(
    "btn-group",
    size,
    isBlock,
    isDisabled,
    isVertical,
    isJustified
  );
</script>

<div class={usedClasses}>
  <slot>SLot</slot>
</div>

<style>
  :root {
    --border-radius-base: 6px;
    --padding-base-vertical: 8px;
    --padding-large-vertical: 10px;
    --padding-large-horizontal: 16px;

    --padding-small-vertical: 5px;
    --padding-small-horizontal: 10px;

    --padding-extra-small-vertical: 2px;
    --padding-extra-small-horizontal: 8px;
  }
  .btn-group {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  .btn-group > .btn {
    position: relative;
    float: left;
  }

  .btn-group > .btn:focus,
  .btn-group > .btn:active {
    z-index: 2;
  }

  .btn-group > .btn,
  .btn-group > dropdown,
  .btn-group > .dropdown-toggle {
    border-radius: 0;
  }

  .btn-group:not(.vertical) > btn:first-child,
  .btn-group:not(.vertical) > dropwdown:last-child > .dropdown-toggle > .btn {
    border-top-left-radius: var(--border-radius-base);
    border-bottom-left-radius: var(--border-radius-base);
  }

  .btn-group:not(.vertical) > btn:last-child,
  .btn-group:not(.vertical) > dropwdown:first-child > .dropdown-toggle > .btn {
    border-top-right-radius: var(--border-radius-base);
    border-bottom-right-radius: var(--border-radius-base);
  }

  /* VERTICAL BUTTON REMOVE RADIUS*/
  .btn-group.vertical > btn:first-child,
  .btn-group.vertical > dropwdown:last-child > .dropdown-toggle > .btn {
    border-top-left-radius: var(--border-radius-base);
    border-top-right-radius: var(--border-radius-base);
  }

  .btn-group.vertical > btn:last-child,
  .btn-group.vertical > dropwdown:first-child > .dropdown-toggle > .btn {
    border-bottom-right-radius: var(--border-radius-base);
    border-bottom-left-radius: var(--border-radius-base);
  }

  .btn + .btn,
  .btn + .btn-group,
  .btn-group + .btn,
  .btn-group + .btn-group {
    margin-left: -1px;
  }

  .btn-group > .btn-group {
    float: left;
  }

  .btnm-group > .btn-group:not(:first-child):not(:last-child) > .btn {
    border-radius: 0;
  }

  .btn-group > .btn-group:first-child:not(:last-child) > btn:last-child,
  .btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
    border-top-right-radius: var(--border-radius-base);
    border-bottom-right-radius: var(--border-radius-base);
  }

  .btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
    border-top-left-radius: var(--border-radius-base);
    border-bottom-left-radius: var(--border-radius-base);
  }

  .btn-group .dropdown-toggle:active,
  .btn-group.open .dropdown-toggle {
    outline: 0;
  }

  .btn-group.open .dropdown-toggle .btn {
    z-index: 20;
  }

  .btn-group.open .dropdown-toggle .btn:active,
  .btn-group.open .dropdown-toggle .btn:focus,
  .btn-group.open .dropdown-toggle .btn:hover {
    background: #fff;
    padding-bottom: calc(var(--padding-base-vertical) + 1px);
  }

  .btn-group.open.lg,
  .btn-group.open.lg:active,
  .btn-group.open.lg:focus,
  .btn-group.open.lg:hover {
    padding-bottom: calc(var(--padding-large-vertical) + 1px );
  }

  .btn-group.open.sm,
  .btn-group.open.sm:active,
  .btn-group.open.sm:focus,
  .btn-group.open.sm:hover {
    padding-bottom: calc(var(--padding-small-vertical) + 1px );
  }
</style>