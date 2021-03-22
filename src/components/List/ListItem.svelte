<script>
  import classNames from 'classnames'

  export let size = 'md'
  export let bordered = false
  export let disabled = false

  $: isBordered = bordered ? 'bordered' : ''
  $: usedClasses = classNames('ss-list-item', size, isBordered)
</script>

<style>
  .ss-list-item {
    position: relative;
    background-color: #fff;
    box-shadow: 0 -1px 0 #e5e5ea, 0 1px 0 #e5e5ea;
  }

  .bordered {
    padding-left: 20px;
    padding-right: 20px;
  }

  .lg {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .md {
    padding-top: 13px;
    padding-bottom: 13px;
  }

  .sm {
    padding-top: 8px;
    padding-bottom: 8px;
  }


</style>

<div role="listitem" aria-disabled={disabled} class={usedClasses}>
  <slot>Test</slot>
</div>
