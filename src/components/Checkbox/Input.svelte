<script>
  import classNames from "classnames";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let tabIndex = 0;
  export let disabled = false;

  let isChecked = false;

  const emitCheckEvent = (e) => {
    isChecked = e.target.checked;
    dispatch("isCheckedEvent");
    console.log(isChecked);
  };

  $: checkboxIsCheckedClass = isChecked ? "ss-checkbox-checked" : "";
  $: currentClasses = classNames("ss-checkbox-inner", checkboxIsCheckedClass);
</script>

<span class="ss-checkbox-wrapper">
  <input
    {disabled}
    tabindex={tabIndex}
    type="checkbox"
    on:click|stopPropagation={emitCheckEvent}
    bind:checked={isChecked}
  />
  <span
    aria-hidden="true"
    role="presentation"
    on:click={emitCheckEvent}
    class={currentClasses}
  />
</span>

<style>
  .ss-checkbox-wrapper {
    position: absolute;
    width: 16px;
    height: 16px;
    display: inline-block;
    left: 10px;
    top: 10px;
  }

  .ss-checkbox-wrapper::before {
    border: 1px solid #3498ff;
    background-color: transparent;
    border-radius: 3px;
    transform: scale(1);
    opacity: 0.7;
    visibility: hidden;

    width: 16px;
    height: 16px;

    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
  }

  .ss-checkbox-wrapper::after {
    content: "";
    position: absolute;
    display: block;

    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
  }

  .ss-checkbox-wrapper [type="checkbox"] {
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
    cursor: pointer;
  }

  .ss-checkbox-inner::before {
    border-radius: 3px;
    border: 1px solid #d9d9d9;
    width: 16px;
    height: 16px;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
  }

  .ss-checkbox-wrapper .ss-checkbox-inner::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
  }

  .ss-checkbox-wrapper::after {
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
  }

  .ss-checkbox-inner::before:hover {
    box-shadow: 0 0 0 2px rgb(52, 152, 255 / 40%);
  }

  .ss-checkbox-wrapper .ss-checkbox-inner::before {
    border: 1px solid #d9d9d9;
    background-color: transparent;
    border-radius: 3px;
  }

  .ss-checkbox-inner::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 16px;
    height: 16px;

    opacity: 0;
    transform: rotate(45deg) scale(0);
  }

  input:hover {
    box-shadow: 0 0 0 3px fade(#3498ff 40%);
  }

  span {
    transition: all ease 0.3s;
    border-radius: 3px;
  }

  span:hover {
    border-radius: 3px;
  }

  .ss-checkbox-checked {
    border: solid 1px #80c4ff;
    width: 6px;
    height: 9px;
    margin-top: 2px;
    margin-left: 5px;
    opacity: 1;

    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale();
  }
</style>
