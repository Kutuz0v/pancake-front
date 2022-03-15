<template>
  <form
      @submit.prevent
  >
    <h3>Створення клієнта</h3>
    <my-input
        v-model="client.name"
        type="text"
        placeholder="Імʼя"
    />
    <my-input
        v-model="client.phoneNumber"
        type="text"
        placeholder="Номер телефону"
    />
    <my-button
        class="create__btn"
        @click="createClient"
    >
      Додати
    </my-button>
  </form>
</template>

<script>

import MyButton from "@/components/UI/MyButton";

export default {
  components: {MyButton},
  data() {
    return {
      client: {
        name: '',
        phoneNumber: '',
      },
    }
  },
  methods: {
    createClient() {
      this.$emit('create', this.client)
      this.client = {
        name: '',
        phoneNumber: ''
      }
    }
  }
}
</script>

<style scoped>


form{
  display: flex;
  flex-direction: column;
}
.create__btn{
  align-self: flex-end;
  margin-top: 15px;
}
</style>