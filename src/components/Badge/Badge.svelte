<script>
  import classNames from "classnames";

  export let maxCount = 99;
  export let content = "";
  export let color = "";

  $: DotOrNot = typeof content == "string" && content.length == 0 ? "dot" : "";
  $: NumDotOrNot = typeof content == "number" && content < 0 ? "dot" : "";
  $: checkedContent = content >= maxCount ? `${maxCount}+` : content;

  $: badgeClasses = classNames("badge-content", color, DotOrNot, NumDotOrNot);
</script>

<div class="badge wrapper">
  <slot/>
  <div class={badgeClasses}>
    {checkedContent}
  </div>
</div>

<style>
  :root {
    --red: #f44336;
    --orange: #ff9800;
    --yellow: #ffca28;
    --green: #4caf50;
    --cyan: #00bcd4;
    --blue: #2196f3;
    --violet: #673ab7;

    --error-color: #f44336;
    --error-light-color: #fde9ef;

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

    --badge-dot-side-length: 8px;
    --badge-content-border-radius: 8px;
    --badge-content-color: var(--B000);
    --badge-background: var(--error-color);
    --zindex-badge-content: 1;
  }

  .badge {
    display: inline-block;
  }

  .wrapper {
    position: relative;
  }

  .badge-content {
    background-color: var(--badge-background);
    border-radius: var(--badge-content-border-radius);
    font-size: 12px;
    line-height: 16px;
    padding: 0 5px;
    color: var(--badge-content-color);
  }

  .badge-content {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    z-index: var(--zindex-badge-content);
  }

  .dot {
    width: var(--badge-dot-side-length);
    height: var(--badge-dot-side-length);
    border-radius: 4px;
    padding: 0;
  }

  .red {
    background-color: var(--red);
  }
  .orange {
    background-color: var(--orange);
  }
  .yellow {
    background-color: var(--yellow);
  }
  .green {
    background-color: var(--green);
  }
  .cyan {
    background-color: var(--cyan);
  }
  .blue {
    background-color: var(--blue) !important;
  }
  .violet {
    background-color: var(--violet);
  }
</style>
