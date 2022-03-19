<template>
<div>
  <pancake-item
    v-for="pancake in pancakes"
    :pancake="pancake"
    :key="pancake.id"
    />
</div>
</template>

<script>
import PancakeItem from "@/components/pancakes/PancakeItem";
export default {
  name: "PancakesList",
  components: {PancakeItem},
  props: {
    pancakes: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>