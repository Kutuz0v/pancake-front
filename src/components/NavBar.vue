<template>
  <div class="flex-row">
    <my-button class="navbar-item" @click="$router.push('/')" >Головна</my-button>
    <div class="box-end">
    <my-button class="navbar-item" @click="$router.push('/clients')">Клієнти</my-button>
    <my-button class="navbar-item last" @click="$router.push('/pancakes')">Млинці</my-button>
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
.btn{

}
.navbar {
  height: 50px;
  /*background-color: lightgray;*/
  box-shadow: 2px 2px 4px gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
}
.navbar-item{
  margin-right: 10px;
  height: 50px;
}
.last{
  margin-right: 0;
}
.box-end{
  background-color: unset;
  margin-left: auto;
}
.flex-row {
  background-color: rgba(211, 210, 155, 0.55);
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
</style>
