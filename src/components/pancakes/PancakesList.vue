<template>
<div>
  <pancake-item
    v-for="pancake in pancakes"
    :pancake="pancake"
    :key="pancake.id"
    @deletePancake="deletePancake"
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
  },
  methods: {
    deletePancake(pancake) {
      this.$emit('deletePancake', pancake)
    }
  }
}
</script>

<style scoped>

</style>