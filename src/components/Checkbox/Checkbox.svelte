<script>
  export let checkable = true;
  export let title = "";
  export let tabIndex = 0;
  export let disabled = false;
  export let isChecked = false;

  const handleCheck = (e) => {
    console.log(e.target.checked);
    isChecked ? (isChecked = false) : (isChecked = true);
  };
</script>

<label class="container" on:click={handleCheck}>
  {#if checkable}
    <p class="text">
      <slot />
    </p>
  {/if}
  <input {title} {disabled} tabindex={tabIndex} type="checkbox" on:click={handleCheck} checked={isChecked} />
  <span class="checkmark" on:click={handleCheck} />
</label>

<style>
  /* The container */
  .container {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    height: 36px;
    width: 36px;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #575757;

    transition: all cubic-bezier(0.215, 0.610, 0.355, 1) 0.3s;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #eee;
    border-radius: 3px;
    transition: all ease 0.3s;
    border: 1px solid #ccc;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #80c4ff;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #3498ff;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 4px;
    top: 1px;
    width: 5px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .text {
    padding-top: 1px;
  }
</style>
