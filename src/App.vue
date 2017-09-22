<template>
  <div id="app">
    <NavSidebar></NavSidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import NavSidebar from './components/NavSidebar'

  export default {
    name: 'app',
    components: {
      NavSidebar
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .content {

  }
</style>
