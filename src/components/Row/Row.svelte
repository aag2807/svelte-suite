<script>
</script>

<div class="row">
  <slot />
</div>

<style>
  .row {
    margin-left: -5px;
    margin-right: -5px;
  }

  .row::before,
  .row::after {
    content: ' ';
    display: table;
  }

  .row::after{ 
    clear: both;
  }
</style>
