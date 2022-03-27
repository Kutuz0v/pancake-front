<template>
  <input
      :value="modelValue"
      @input="updateInput"
      class="input"
      type="text"
  />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
    binds: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    updateInput(event) {
      if (this.binds)
        this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  border-radius: 7px;
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>