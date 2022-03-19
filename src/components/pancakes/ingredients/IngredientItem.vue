<template>
  <div class="ingredient">
    {{ ingredient.value }}
  </div>
</template>

<script>
export default {
  name: "IngredientItem",
  props: {
    ingredient: {
      type: Object,
      required: true,
      id: {type: Number,},
      value: {type: String},
      weight: {type: Number},
      price: {type: Number}
    }
  }
}
</script>

<style scoped>
.ingredient{
margin-left: 30px;
  margin-top: 5px;
}
</style>