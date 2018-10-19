<template>
  <main id="app">
    <principal></principal>
    <router-view></router-view>
  </main>
</template>

<script>
import Principal from '@/components/Principal.vue'
import '@/assets/css/bootstrap.min.css'

export default {
  name: 'app',
  components: {
    Principal
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header{
  position: relative;
}
th, td {
    border: 1px solid black;
	text-align:center;
	margin: 0 auto;
}
h4 {
	text-align:center;
	margin: 0 auto;
}
.borrar {
	color: red;
}
.editar {
	color: green;
}
</style>
