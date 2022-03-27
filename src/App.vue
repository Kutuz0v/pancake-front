<template>
  <div class="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
import '@/styles/main.css'


export default {
  name: 'App',
  components: {NavBar},
}
</script>

<style>
.app{
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
* {
  /*margin: 0;*/
  /*padding: 1rem;*/

}
</style>
