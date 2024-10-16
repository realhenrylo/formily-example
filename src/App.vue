<template>
  <div id="app">
    <FormPage />
  </div>
</template>

<script>
import FormPage from './components/FormPage/index.vue'

export default {
  name: 'App',
  components: {
    FormPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
