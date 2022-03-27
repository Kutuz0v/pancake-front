<template>
<div class="list">
  <ingredient-selector
      class="ingredient"
      v-for="ingredient in ingredients"
      :key="ingredient.id"
      :ingredient="ingredient"
      @selected="select"
  />
</div>
</template>

<script>
import IngredientSelector from "@/components/pancakes/ingredients/IngredientSelector";
export default {
  name: "IngredientSelectorList",
  components: {IngredientSelector},
  props: {
    ingredients: {
      type: Array,
      required: true
    }
  },
  methods: {
    select(ingredient) {
      this.$emit("selected", ingredient)
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
}
.ingredient {
  /*margin-left: 30px;*/
  margin-top: 5px;
  display: inline-block;
  border-bottom: 1px solid teal;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>