<template>
  <div
      v-if="clients.length > 0"
  >
    <transition-group name="client-list">
      <client-item
          v-for="client in clients"
          :client='client'
          :key="client.id"
          @remove="$emit('remove', client)"
      />
    </transition-group>
  </div>
  <h2
      class="no_clients"
      v-else
  >
    Список клієнтів пустий
  </h2>
</template>

<script>
import ClientItem from "@/components/clients/ClientItem";

export default {
  components: {ClientItem},
  name: "ClientsList",
  emits: ['remove'],

  props: {
    client: {
      type: Object,
      id: Number,
      name: String,
      phoneNumber: String,
    },
    clients: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
.no_clients {
  color: darkred;
}
.client-list-item {
  display: inline-block;
  margin-right: 10px;
}
.client-list-enter-active,
.client-list-leave-active {
  transition: all 0.4s ease;
}
.client-list-enter-from,
.client-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.client-list-move {
  transition: transform 0.4s ease;
}
</style>