<template>
  <div id="app">
    <router-view/>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      toastVisible: false,
      toastData: {
        msg: '',
        style: '',
        duration: 2000
      }
    }
  },
  methods: {

  },
};

</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
