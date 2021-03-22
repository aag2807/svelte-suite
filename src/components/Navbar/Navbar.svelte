<script>
  import classNames from "classnames";

  export let appearance = "default";
</script>

<div class="container">
  <div class="navbar {appearance}" role="navigation">
    <div class="header {appearance}">
      <slot name="header">
        <p class="brand">NavbarLogo</p>
      </slot>
    </div>
    <div class="body ">
      <div class="nav horizontal navbar-nav {appearance}">
        <ul>
          <li class="nav-item">
            <a href="/" class="nav-item-content" role="button">Home</a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-item-content" role="button">
              <i class="fas fa-house-user"></i>
                Products
              </a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-item-content" role="button">About</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

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

    --nav-bar-padding-vertical: 18px;
    --nav-bar-padding-horizontal: 16px;
    --nav-bar-height: calc(
      var(--nav-bar-padding-vertical) * 2 + var(--line-height-computed)
    );
    --nav-bar-default-bg: var(--B050);
    --nav-bar-default-active-color: var(--H700);
    --nav-bar-default-active-bg: transparent;
    --nav-bar-default-font-color: var(--B800);

    --nav-bar-inverse-bg: var(--H500);
    --nav-bar-inverse-hover-bg: var(--H600);
    --nav-bar-inverse-active-bg: var(--H700);

    --nav-bar-subtle-bg: var(--B000);
    --nav-bar-subtle-font-color: var(--B700);
    --nav-bar-subtle-font-active-color: var(--H700);
    --nav-bar-subtle-hover-bg: var(--B050);
    --nav-bar-subtle-hover-font-color: var(--B800);
    --nav-bar-subtle-active-bg: var(--B000);
  }

  .navbar {
    color: #575757;
    width: 100%;
    max-height: 56px;
  }

  .rs-navbar:after,
  .rs-navbar:before {
    content: " ";
    display: table;
  }

  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .navbar.default {
    background-color: var(--nav-bar-default-bg);
  }

  .header {
    float: left;
    height: 56px;
  }

  .brand {
    padding: 18px 20px;
    display: inline-block;
  }

  .body.default {
    color: #575757;
  }

  .nav.horizontal {
    white-space: nowrap;
  }
  .navbar-nav {
    float: left;
  }

  .nav {
    position: relative;
  }

  ul {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  .nav > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav.horizontal .nav-item {
    display: inline-block;
    vertical-align: top;
  }

  .default .nav-item {
    overflow: hidden;
    position: relative;
    transition: all ease 0.3s;
  }

  .navbar-nav .nav-item > .nav-item-content {
    padding: 18px 16px;
    max-height: 20px;
  }

  .nav-item > a.nav-item-content {
    outline: none;
    text-decoration: none;
  }

  .nav-item > .nav-item-content {
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    display: block;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    display: block;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .navbar-nav .nav-item:hover {
    background-color: var(--nav-bar-default-bg);
  }

  a:active,
  a:visited {
    color: #333;
    text-decoration: none;
  }


  .navbar.inverse {
    background-color: var(--nav-bar-inverse-bg) !important;
    color: #eee;
  }

  .inverse .nav-item {
    overflow: hidden;
    position: relative;
    transition: all ease 0.3s;
  }

  .body.inverse {
    color: #eee;
  }

  .navbar-nav .nav-item:hover .inverse{
    background-color: var(--nav-bar-inverse-hover-bg);
  }

  .inverse .nav-item,
  .inverse .nav-item-content,
  .inverse .nav,
  .inverse .header {
    background-color: var(--nav-bar-inverse-bg) !important;
    color: #eee;

  }

  .inverse .nav-item:hover,
  .inverse .nav-item-content:hover,
  .inverse .nav:hover,
  .inverse .header:hover {
    background-color: var(--nav-bar-inverse-hover-bg) !important;

  }

</style>
