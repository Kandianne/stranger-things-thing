<template>
  <div id="app">
    <app-header></app-header>
    <app-navigation></app-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-navigation': Navigation
  }
}
</script>

<style lang="scss">

body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Verdana, Geneva, sans-serif;
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
}
</style>
