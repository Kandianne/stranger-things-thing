<template>
  <div id="app">
    <app-header></app-header>
    <app-navigation></app-navigation>
    <div class="main">
      <router-view></router-view>
    </div>
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

@import "./src/sass/base"

</style>
