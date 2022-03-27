<template>
  <div class="ingredient">
    <div class="column">
      {{ ingredient.value }}
    </div>
    <div class="column checkbox" v-if="needCheck">
      +
    </div>
  </div>
</template>

<script>
export default {
  name: "IngredientItem",
  props: {
    needCheck: {
      type: Boolean,
      required: false,
      default: false
    },
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
.column {
  display: inline-block;
  margin: auto;
}
.checkbox {
  float: right;
  margin-right: 20px;

}
</style>