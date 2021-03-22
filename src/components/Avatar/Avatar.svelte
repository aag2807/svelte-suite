<script>
  import classNames from "classnames";

  export let alt = "";
  export let circle = false;
  export let size = "md";
  export let src = "";
  export let bg = "";
  export let font = "light";

  $: hasFontColor = font.length ? `font-${font}` : "";
  $: hasBgColor = bg.length ? `bg-${bg}` : "";
  $: isCircle = circle ? "circle" : "";
  $: hasImage = src.length ? "image" : "";
  $: usedClasses = classNames(
    "avatar",
    hasFontColor,
    size,
    hasImage,
    isCircle,
    hasBgColor
  );
</script>

{#if src.length}
  <img {src} {alt} class={usedClasses} />
{:else}
  <div class={usedClasses}>
    <slot />
  </div>
{/if}

<style>
  :root {
    /* Base colors*/
    --B000: #fff;
    --B050: #f7f7fa;
    --B100: #f2f2f5;
    --B200: #e5e5ea;
    --B300: #d9d9d9;
    --B400: #c5c6c7;
    --B500: #a6a6a6;

    /* spectrum Colors*/
    --red: #f44336;
    --orange: #ff9800;
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

    --avatar-background: --B300;
    --avatar-content-color: --B000;
    --avatar-border-radius: 4px;
    --avatar-lg-side-length: 60px;
    --avatar-md-side-length: 40px;
    --avatar-sm-side-length: 30px;
    --avatar-xs-side-length: 20px;
    --avatar-lg-font-size: 26px;
    --avatar-md-font-size: 18px;
    --avatar-sm-font-size: 14px;
    --avatar-xs-font-size: 12px;
  }

  .avatar {
    background-color: var(--B500);
    color: var(--B000);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--avatar-border-radius);
    overflow: hidden;
    -webkit-box-pack: center;
  }

  .image {
    position: relative;
  }

  .image::before {
    content: attr(alt);
    position: absolute;
    width: 100%;
    height: inherit;
    top: 0;
    left: 0;
    background: var(--avatar-background);
    text-align: center;
    padding: 0 2px;
  }

  .circle {
    border-radius: 50%;
  }

  .lg {
    width: var(--avatar-lg-side-length);
    height: var(--avatar-lg-side-length);
    font-size: var(--avatar-lg-font-size);
  }

  .lg.icon {
    /* (sidelength - fontlength) /2 + fontsize*/
    font-size: 43px;
    height: 43px;
  }

  .lg.image {
    width: var(--avatar-lg-side-length);
    height: var(--avatar-lg-side-length);
    line-height: var(--avatar-lg-side-length);
  }

  .md {
    width: var(--avatar-md-side-length);
    height: var(--avatar-md-side-length);
    font-size: var(--avatar-md-font-size);
  }

  .md.icon {
    /* (40 - 18) /2 + 18*/
    font-size: 29px;
    height: 29px;
  }

  .md.image {
    width: var(--avatar-md-side-length);
    height: var(--avatar-md-side-length);
    line-height: var(--avatar-md-side-length);
  }

  .sm {
    width: var(--avatar-sm-side-length);
    height: var(--avatar-sm-side-length);
    font-size: var(--avatar-sm-font-size);
  }

  .sm.icon {
    /* (30 - 14) /2 + 14*/
    font-size: 22px;
    height: 22px;
  }

  .sm.image {
    width: var(--avatar-sm-side-length);
    height: var(--avatar-sm-side-length);
    line-height: var(--avatar-sm-side-length);
  }

  .xs {
    width: var(--avatar-xs-side-length);
    height: var(--avatar-xs-side-length);
    font-size: var(--avatar-xs-font-size);
  }

  .xs.icon {
    /* (20 - 12) /2 + 12*/
    font-size: 16px;
    height: 16px;
  }

  .xs.image {
    width: var(--avatar-xs-side-length);
    height: var(--avatar-xs-side-length);
    line-height: var(--avatar-xs-side-length);
  }

  .bg-red {
    background-color: var(--red);
  }

  .bg-orange {
    background-color: var(--orange);
  }

  .bg-yellow {
    background-color: var(--yellow);
  }

  .bg-green {
    background-color: var(--green);
  }

  .bg-cyan {
    background-color: var(--cyan);
  }

  .bg-blue {
    background-color: var(--blue);
  }

  .bg-violet {
    background-color: var(--violet);
  }

  .bg-success {
    background-color: var(--success-color);
  }

  .bg-info {
    background-color: var(--info-color);
  }

  .bg-warning {
    background-color: var(--warning-color);
  }

  .bg-error {
    background-color: var(--error-color);
  }

  .font-dark {
    color: #333 !important;
  }

  .font-light {
    color: #eee !important;
  }
</style>
