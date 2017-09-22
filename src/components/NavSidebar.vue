<template>
  <div class="side-nav">
    <h1>&nbsp;</h1>
    <ul>
      <li><router-link to="/welcome">Welcome Page</router-link></li>
      <li><router-link to="/roles/">Roles list</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'nav-sidebar'
  }
</script>

<style>
  .side-nav {
    width: 200px;
    float: left;
  }
</style>
