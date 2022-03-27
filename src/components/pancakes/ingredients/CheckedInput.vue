<template>
  <div>
  <br>
  <label>
    <input
        type="checkbox"
        :value="pancake.value"
        v-model="model"
    >
    <span>
  {{ label }}
    </span>
  </label>
  </div>
</template>

<script>
export default {
  name: "CheckedInput",
  props: {
    label: {type: String, required: true},
    value: [Array, String],
    pancake: Object,
  },
  data() {
    return {}
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        console.log('try to set value: ', this.pancake)
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped>

</style>