<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <component :is="layout"></component>
  </div>
  <router-view/>
</template>

<script>
import DashboardComponent from "@/layouts/dashboard.vue";
export default {
  components:{DashboardComponent},
  computed:{
    layout(){
      console.log(this.$route.meta.layout)
      return 'DashboardComponent'
    }
  }
}
</script>

<style>
 
</style>
