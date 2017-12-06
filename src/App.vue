<template>
  <div id="app">
    <h3>Example Vue Router App</h3>
    <ul>
      <li><router-link to="/">Clap</router-link></li>
      <li><router-link to="/links">Links</router-link></li>
    </ul>
    <div class="viewWrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
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
  .viewWrap {
    padding-top: 20px;
  }
  ul {
    list-style-type: none;
  }
</style>
