<script>
  import classNames from "classnames";

  export let xs;
  export let sm;
  export let md;
  export let lg;

  export let xsOffset;
  export let smOffset;
  export let mdOffset;
  export let lgOffset;

  export let xsPush;
  export let smPush;
  export let mdPush;
  export let lgPush;

  export let xsHidden;
  export let smHidden;
  export let mdHidden;
  export let lgHidden;

  $: currentXs = xs ? xs : "";
  $: currentSm = sm ? sm : "";
  $: currentMd = md ? md : "";
  $: currentLg = lg ? lg : "";

  $: currentXsOffset = xsOffset ? smOffset : "";
  $: currentSmOffset = smOffset ? smOffset : "";
  $: currentMdOffset = mdOffset ? mdOffset : "";
  $: currentLgOffset = lgOffset ? lgOffset : "";

  $: currentXsPush = xsPush ? xsPush : "";
  $: currentSmPush = smPush ? smPush : "";
  $: currentMdPush = mdPush ? mdPush : "";
  $: currentLgPush = lgPush ? lgPush : "";

  $: currentXsHidden = xsHidden ? xsHidden : "";
  $: currentSmHidden = smHidden ? smHidden : "";
  $: currentMdHidden = mdHidden ? mdHidden : "";
  $: currentLgHidden = lgHidden ? lgHidden : "";

  $: currentClasses = classNames();
</script>

<style>
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-13,
  .col-lg-14,
  .col-lg-15,
  .col-lg-16,
  .col-lg-17,
  .col-lg-18,
  .col-lg-19,
  .col-lg-20,
  .col-lg-21,
  .col-lg-22,
  .col-lg-23,
  .col-lg-24,
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-13,
  .col-md-14,
  .col-md-15,
  .col-md-16,
  .col-md-17,
  .col-md-18,
  .col-md-19,
  .col-md-20,
  .col-md-21,
  .col-md-22,
  .col-md-23,
  .col-md-24,
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-13,
  .col-sm-14,
  .col-sm-15,
  .col-sm-16,
  .col-sm-17,
  .col-sm-18,
  .col-sm-19,
  .col-sm-20,
  .col-sm-21,
  .col-sm-22,
  .col-sm-23,
  .col-sm-24,
  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-13,
  .col-xs-14,
  .col-xs-15,
  .col-xs-16,
  .col-xs-17,
  .col-xs-18,
  .col-xs-19,
  .col-xs-20,
  .col-xs-21,
  .col-xs-22,
  .col-xs-23,
  .col-xs-24 {
    position: relative;
    min-height: 1px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-13,
  .col-xs-14,
  .col-xs-15,
  .col-xs-16,
  .col-xs-17,
  .col-xs-18,
  .col-xs-19,
  .col-xs-20,
  .col-xs-21,
  .col-xs-22,
  .col-xs-23,
  .col-xs-24 {
    float: left;
  }

  .col-24 {
    width: 100%;
  }

  .col-xs-23 {
    width: 95.8333333%;
  }

  .col-xs-22 {
    width: 91.66666667%;
  }

  .col-xs-21 {
    width: 87.5%;
  }
  .col-xs-20 {
    width: 83.33333333%;
  }
  .col-xs-19 {
    width: 79.16666667%;
  }

  .col-xs-18 {
    width: 75%;
  }
  .col-xs-17 {
    width: 70.83333333%;
  }
  .col-xs-16 {
    width: 66.666667%;
  }
  .col-xs-15 {
    width: 62.5%;
  }
  .col-xs-14 {
    width: 58.3333%;
  }
  .col-xs-13 {
    width: 54.16666667%;
  }

  .col-xs-12 {
    width: 50%;
  }
  .col-xs-11 {
    width: 45.8333333%;
  }
  .col-xs-10 {
    width: 41.66666667%;
  }

  .col-xs-9 {
    width: 37.5%;
  }

  .col-xs-8 {
    width: 33.33333333%;
  }

  .col-xs-7 {
    width: 29.16666667%;
  }

  .col-xs-6 {
    width: 25%;
  }

  .col-xs-5 {
    width: 20.83333333%;
  }

  .col-xs-4 {
    width: 16.66666667%;
  }

  .col-xs-3 {
    width: 12.5%;
  }

  .col-xs-2 {
    width: 8.33333333%;
  }

  .col-xs-1 {
    width: 4.16666667%;
  }
</style>
