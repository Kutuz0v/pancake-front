<template>
  <div class="navbar">
    <my-button class="navbar-item" @click="$router.push('/')" >Головна</my-button>
    <div>
    <my-button class="" @click="$router.push('/clients')">Клієнти</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: 'NavBar',
  components: {MyButton},
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar-item {
  margin-left: fill;
}

</style>
