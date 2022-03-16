<template>

  <form
      @submit.prevent
  >
    <h3>
      <slot name="header"></slot>
    </h3>
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
        @click="doAction"
    >
      <slot name=action></slot>
    </my-button>
  </form>

</template>

<script>

import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";

export default {
  components: {MyButton, MyInput},
  props: {
    action: {
      type: String,
      required: true
    },
    transferredClient: {
      type: Object,
      name: {
        type: String,
        default: ''
      },
      phoneNumber: {
        type: String,
        default: ''
      },
      required: false
    }
  },
  data() {
    return {
      client: {
        name: '',
        phoneNumber: '',
      },
    }
  },
  methods: {
    doAction() {
      this.$emit(this.action, this.client)
    }
  },
  mounted() {
    if (this.transferredClient !== undefined)
      this.client = this.transferredClient
  }
}
</script>

<style scoped>


form {
  display: flex;
  flex-direction: column;
}

.create__btn {
  align-self: flex-end;
  margin-top: 15px;
}
</style>