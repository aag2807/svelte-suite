<script lang="ts">
  import classNames from "classnames";

  export let active = false;
  export let appearance = "default";
  export let label = "";
  export let block = false;
  export let color = "";
  export let disabled = false;
  export let loading = false;
  export let size = "md";
  export let subtle = false;

  $: isSubtle = subtle ? `subtle` : "";
  $: currentAppearance = `btn-${appearance}`;
  $: currentSize = `btn-${size}`;
  $: currentColor = `btn-${color}`
  $: isLoading = loading ? "loading" : "";
  $: isDisabled = disabled ? "disabled" : "";
  $: isBlock = block ? "block" : "";
  $: isActive = active ? "active" : "";

  $: currentClass = classNames(
    currentAppearance,
    isSubtle,
    isLoading,
    isDisabled,
    isActive,
    isBlock,
    color,
    currentSize,
    currentColor
  );

  const click = () => console.log();
</script>

<button class={` btn ${currentClass}`}>
  {label}
  <slot />
</button>

<style>
  :root {
    --border-radius-base: 6px;
    --cursor-disabled: not-allowed;
    --font-size-base: 14px;
    --font-size-large: 16px;
    --font-size-small: 12px;
    --font-size-extra-small: 12px;

    /* Base colors*/
    --B000: #fff;
    --B050: #f7f7fa;
    --B100: #f2f2f5;
    --B200: #e5e5ea;
    --B300: #d9d9d9;
    --B400: #c5c6c7;
    --B500: #a6a6a6;
    --B600: #8e8e93;
    --B700: #7a7a7a;
    --B800: #575757;
    --B900: #272c36;

    /* pallete Hue*/
    --base-color: #3498ff;
    --H050: #f2faff;
    --H100: #cce9ff;
    --H200: #a6d7ff;
    --H300: #80c4ff;
    --H400: #59afff;
    --H500: var(--base-color);
    --H600: #2589f5;
    --H700: #1675e0;
    --H800: #0a5dc2;
    --H900: #004299;

    /* spectrum Colors*/
    --red: #f44336;
    --orange: #ff9700;
    --yellow: #ffca28;
    --green: #4caf50;
    --cyan: #00bcd4;
    --blue: #2196f3;
    --violet: #673ab7;

    /* Sub Colors*/
    --success-color: #4caf50;
    --success-light-color: #edfae1;
    --info-color: #2196f3;
    --info-light-color: #e9f5fe;
    --warning-color: #ffb300;
    --warning-light-color: #fff9e6;
    --error-color: #f44336;
    --error-light-color: #fde9ef;

    /* Text Colors*/
    --link-color: var(--H700);
    --link-hover-color: var(--H800);
    --link-active-color: var(--H900);
    --border-base-color: var(--B300);
    --base-bg-color: var(--B050);
    --border-primary-color: var(--H500);
    --loading-text-color: var(--B800);

    /* Primary Colors*/
    --primary-color: var(--H500);
    --primary-bg-color: var(--H050);
    --primary-border-color: var(--H300);

    /* Settings for Global styles */
    --body-bg: var(--B000);
    --text-color: var(--B800);
    --text-primary-color: var(--H500);
    --link-hover-decoration: underline;
    --link-active-decoration: underline;
    --border-base-color: var(--B300);

    /* **************************
    ****BUTTON RELATED STYLES****
    *****************************
    */
    --line-height-large: 1.375;
    --line-height-base: 1.4285714285714286;
    --line-height-snall: 1.6666666666666667;
    --line-height-extra-small: 1.6666666666666667;

    --padding-base-vertical: 8px;
    --padding-base-horizontal: 12px;

    --padding-large-vertical: 10px;
    --padding-large-horizontal: 16px;

    --padding-small-vertical: 5px;
    --padding-small-horizontal: 10px;

    --padding-extra-small-vertical: 2px;
    --padding-extra-small-horizontal: 8px;

    --border-radius-base: 6px;
    --btn-ripple-bg-color: rgba(0, 0, 0, 0.2);
    --btn-font-weight: normal;
    --btn-disabled-opacity: 0.3;

    /*Default*/
    --btn-default-color: var(--text-color);
    --btn-default-bg: var(--B050);
    --btn-default-hover-color: var(--text-color);
    --btn-default-hover-bg: var(--B200);
    --btn-default-active-bg: var(--B300);
    --btn-default-focus-bg: var(--B200);
    --btn-default-disabled-color: var(--B400);
    --btn-default-disabled-bg: var(--B050);

    /*Icon color set*/
    --btn-icon-with-text-bg: var(--B100);
    --btn-icon-with-text-hover-bg: var(--B300);
    --btn-icon-with-text-focus-bg: var(--B300);
    --btn-icon-with-text-active-bg: var(--B400);

    /*Primary Set*/
    --btn-primary-color: var(--B000);
    --btn-primary-bg: var(--H500);

    /*Link Button Set*/
    --btn-link-color: var(--H500);

    /*Subtle Color Set*/
    --btn-subtle-primary-color: var(--primary-color);
    --btn-subtle-color: var(--B600);
    --btn-subtle-hover-color: var(--B000);
    --btn-subtle-defualt-hover-color: var(--B800);
    --btn-subtle-hover-bg: var(--B050);
    --btn-subtle-focus-bg: var(--btn-subtle-hover-bg);
    --btn-subtle-active-color: var(--B000);
    --btn-subtle-active-default-color: var(--B900);
    --btn-subtle-active-default-bg: var(--B200);
    --btn-subtle-disabled-color: var(--B400);
    --btn-subtle-default-hover-color: var(--B800);
    /*Ghost Set*/
    --btn-ghost-color: var(--H500);
    --btn-ghost-border-color: var(--H500);
    --btn-ghost-border-width: 1px;

    /*Button Border Radius*/
    --btn-border-radius-base: var(--border-radius-base);
    --btn-border-radius-large: var(--border-radius-base);
    --btn-border-radius-small: var(--border-radius-base);

    /*Button Loading*/
    --btn-loading-spin-default-diameter: 18px;
    --btn-loading-spin-xs-diameter: 16px;
    --btn-loading-spin-ring-wide: 3px;
    --btn-loading-spin-ring-color: var(--B050);
    --btn-spin-light-color: var(--B000);
    --btn-spin-light-invert-color: var(--B500);

    /* **************************
    ****END OF BUTTON  STYLES****
    *****************************
    */
  }

  .disabled {
    opacity: var(--btn-disabled-opacity);
    color: var(--btn-default-disabled-color);
  }

  /* Default Button*/

  .btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: var(--btn-font-weight);
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    outline: 0 !important;
    white-space: nowrap;
    border: none;
    user-select: none;
    border-radius: var(--border-radius-base);
    transition: all 0.2s;
  }

  .btn:hover,
  .btn:focus {
    color: var(--btn-default-color);
    text-decoration: none;
    background-color: var(--btn-default-hover-bg);
  }

  .btn:active,
  .btn.btn-active {
    outline: 0;
    background-image: none;
  }

  .btn.btn-disabled {
    cursor: var(--cursor-disabled);
    opacity: 0.3;
  }

  .btn.btn-disabled.ripple-pond {
    display: none !important;
  }

  /* Subtle Button*/
  .subtle {
    color: var(--btn-subtle-color);
    line-height: var(--line-height-base);
    padding: var(--padding-base-vertical) var(--padding-base-horizontal);
    background: transparent;
  }

  .btn.subtle:focus,
  .btn.subtle:hover {
    color: var(--btn-subtle-defualt-hover-color);
    background-color: var(--btn-subtle-hover-bg);
  }

  .btn.subtle.active {
    color: var(--btn-subtle-active-color);
    background-color: var(--btn-subtle-active-default-bg);
    background-image: none;
  }
  .btn.subtle.active:hover,
  .btn.subtle.active:focus {
    color: var(--btn-subtle-active-color);
    background-color: var(--btn-subtle-active-default-bg);
  }

  .btn.ghost,
  .btn.btn-ghost {
    padding: var(--padding-base-horizontal) var(--padding-base-vertical);
    background: transparent;
    color: #1675e0;
    border: var(--btn-ghost-border-width) solid #1675e0;
    font-weight: var(--btn-font-weight);
  }

  /* Button Sizes */

  .btn.btn-lg {
    border-radius: var(--border-radius-base);
    font-size: var(--font-size-large);
    line-height: var(--line-height-large);
    padding: var(--padding-large-vertical) var(--padding-large-horizontal);
  }

  .btn.btn-md {
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    padding: var(--padding-base-vertical) var(--padding-base-horizontal);
  }

  .btn.btn-sm {
    padding: var(--padding-small-vertical) var(--padding-small-horizontal);
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    border-radius: var(--border-radius-base);
  }

  .btn.btn-xs {
    padding: var(--padding-extra-small-vertical)
      var(--padding-extra-small-horizontal);
    font-size: var(--font-size-extra-small);
    line-height: var(--line-height-small);
    border-radius: var(--border-radius-base);
  }

  /* Button Link */

  .btn.btn-link {
    color: var(--link-color);
    border-radius: var(--border-radius-base);
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    padding: var(--padding-base-vertical) var(--padding-base-horizontal);
    transition: all ease 0.2s;
  }

  .btn.btn-link:hover {
    text-decoration: underline;
    background-color: var(---default);
  }

  /* Button Colors */

  .btn.btn-primary {
    color: var(--btn-primary-color);
    background-color: var(--btn-primary-bg);
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    padding: var(--padding-base-vertical) var(--padding-base-horizontal);
    transition: all ease 0.2s;
  }

  .btn.btn-primary:hover {
    background-color: var(--btn-primary-bg) !important;
  }

  /*Button Primary Colors*/

  .btn.red,
  .btn.btn-red {
    background-color: var(--red);
    color: #fff;
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    padding: var(--padding-base-vertical) var(--padding-base-horizontal);
  }

  .btn.red:hover,
  .btn.btn-red:hover,
  .btn.red:focus,
  .btn.btn-red:focus {
    background-color: var(--red);
  }

  .btn.orange,
  .btn.btn-orange {
    background-color: var(--orange);
    color: #fff;
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    padding: var(--padding-base-vertical) var(--padding-base-horizontal);
  }

  .btn.orange:hover,
  .btn.btn-orange:hover,
  .btn.orange:focus,
  .btn.btn-orange:focus {
    background-color: #ff9800;
  }

  .btn.yellow,
  .btn.btn-yellow {
    background-color: var(--yellow);
    color: #fff;
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    padding: var(--padding-base-vertical) var(--padding-base-horizontal);
  }

  .btn.yellow:hover,
  .btn.btn-yellow:hover,
  .btn.yellow:focus,
  .btn.btn-yellow:focus {
    opacity: 1;
  }

  .btn.green,
  .btn.btn-green {
    background-color: var(--green);
    color: #fff;
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    padding: var(--padding-base-vertical) var(--padding-base-horizontal);
  }

  .btn.green:hover,
  .btn.btn-green:hover,
  .btn.green:focus,
  .btn.btn-green:focus {
    opacity: 1;
  }

  .btn.cyan,
  .btn.btn-cyan {
    background-color: var(--cyan);
    color: #fff;
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    padding: var(--padding-base-vertical) var(--padding-base-horizontal);
  }

  .btn.cyan:hover,
  .btn.btn-cyan:hover,
  .btn.cyan:focus,
  .btn.btn-cyan:focus {
    opacity: 1;
  }

  .btn.blue,
  .btn.btn-blue {
    background-color: var(--blue);
    color: #fff;
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    padding: var(--padding-base-vertical) var(--padding-base-horizontal);
  }

  .btn.blue:hover,
  .btn.btn-blue:hover,
  .btn.blue:focus,
  .btn.btn-blue:focus {
    opacity: 1;
  }

  .btn.violet,
  .btn.btn-violet {
    background-color: var(--violet);
    color: #fff;
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    padding: var(--padding-base-vertical) var(--padding-base-horizontal);
  }

  .btn.violet:hover,
  .btn.btn-violet:hover,
  .btn.violet:focus,
  .btn.btn-violet:focus {
    opacity: 1;
  }

  /* Ghost Color Button*/
  .btn.ghost.red,
  .btn.btn-ghost.btn-red,
  .btn.ghost.btn-red,
  .btn.btn-ghost.red {
    border: var(--btn-ghost-border-width) solid #d62915;
    color: #d62915;
    background: transparent;
  }

  .btn.ghost.orange,
  .btn.btn-ghost.btn-orange,
  .btn.ghost.btn-orange,
  .btn.btn-ghost.orange {
    border: var(--btn-ghost-border-width) solid #e08e00;
    color: #e08e00;
    background: transparent;
  }

  .btn.ghost.yellow,
  .btn.btn-ghost.btn-yellow,
  .btn.ghost.btn-yellow,
  .btn.btn-ghost.yellow {
    border: var(--btn-ghost-border-width) solid #e0b412;
    color: #e0b412;
    background: transparent;
  }

  .btn.ghost.green,
  .btn.btn-ghost.btn-green,
  .btn.ghost.btn-green,
  .btn.btn-ghost.green {
    border: var(--btn-ghost-border-width) solid #22a12a;
    color: #22a12a;
    background: transparent;
  }

  .btn.ghost.cyan,
  .btn.btn-ghost.btn-cyan,
  .btn.ghost.btn-cyan,
  .btn.btn-ghost.cyan {
    border: var(--btn-ghost-border-width) solid #00a0bd;
    color: #00a0bd;
    background: transparent;
  }

  .btn.ghost.blue,
  .btn.btn-ghost.btn-blue,
  .btn.ghost.btn-blue,
  .btn.btn-ghost.blue {
    border: var(--btn-ghost-border-width) solid #0d73d4;
    color: #0d73d4;
    background: transparent;
  }

  .btn.ghost.violet,
  .btn.btn-ghost.btn-violet,
  .btn.ghost.btn-violet,
  .btn.btn-ghost.violet {
    border: var(--btn-ghost-border-width) solid #531ba8;
    color: #531ba8;
    background: transparent;
  }

  .block {
    width: 100% !important;
  }
</style>
