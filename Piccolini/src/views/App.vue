<template>
  <main id="app">
    <principal></principal>
    <router-view></router-view>
  </main>
</template>

<script>
import Principal from '@/components/Principal.vue'
//import '@/assets/css/bootstrap.min.css'

export default {
  name: 'app',
  components: {
    Principal
  }
}
</script>