<script>
  import classNames from "classnames";

  export let fluid = false;

  $: isFluid = fluid ? "fluid" : "grid-container";

  $: usedClasses = classNames(isFluid);
</script>

<div class={usedClasses}>
  <slot />
</div>

<style>
  :root {
    --screen-phone: 480px;
    --screen-desktop: 940px;
    --screen-lg-desktop: 1140px;

    --screen-phone-min: calc(var(--screen-phone) - 1);
    --screen-phone-min: calc(var(--screen-desktop) - 1);
    --screen-phone-min: calc(var(--screen-lg-desktop) - 1);

    --grid-columns: 24;
    --grid-gutter-width: 10px;

    --container-phone: calc(var(--screen-phone) + var(--grid-gutter-width));
    --container-sm: var(--container-phone);

    --container-desktop: calc(var(--screen-desktop) + var(--grid-gutter-width));
    --container-md: var(--container-desktop);

    --container-large-desktop: calc(
      var(--screen-lg-desktop) + var(--grid-gutter-width)
    );
    --container-lg: var(--container-large-desktop);

    --columns: 10;
  }

  .grid-container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 5px;
    padding-right: 5px;
  }

  .fluid {
    margin-right: auto;
    margin-left: auto;
    padding-left: 5px;
    padding-right: 5px;
  }

  .grid {
    padding: 10px 5px;
    text-align: center;
    margin-top: 6px;
    margin-bottom: 6px;
  }

  .make-row {
    margin-left: 5px;
    margin-right: 5px;
  }

  .make-xs-column {
    position: relative;
    float: left;
    width: auto;
    min-height: 1px;
    padding-right: 5px;
    padding-left: 5px;
  }

  .make-xs-column-offset {
    margin-left: auto;
  }

  .make-xs-column-push {
    left: var(--columns);
  }

  .make-xs-column-pull {
    right: var(--columns);
  }

  @media (min-width: 480px) {
    .container {
      width: var(--container-sm);
    }
  }

  @media (min-width: 940px) {
    .container {
      width: var(--container-md);
    }
  }

  @media (min-width: 1140px) {
    .container {
      width: var(--container-lg);
    }
  }
</style>
