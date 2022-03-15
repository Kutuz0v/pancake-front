<template>
  <div class="client-item">
    <div class="client-data">
      <div>
        {{ client.name }}
      </div>
      <div>
        {{ client.phoneNumber }}
      </div>
    </div>
    <my-button
        class="post__btn"
        @click="$emit('remove', client)"
    >
      Видалити
    </my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  components: {MyButton},
  props: {
    client: {
      type: Object,
      id: Number,
      name: String,
      phoneNumber: String,
      required: true
    }
  }
}
</script>

<style scoped>
.client-item {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.client-data {
  display: inline-flex;
}
.post__btn {

}
</style>