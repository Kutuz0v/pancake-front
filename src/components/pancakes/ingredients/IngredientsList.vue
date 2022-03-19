<template>
  <div>

    <ingredient-item
        v-for="ingredient in ingredients"
        :ingredient="ingredient"
        :key="ingredient.id"
    />
  </div>
</template>

<script>
import IngredientItem from "@/components/pancakes/ingredients/IngredientItem";
export default {
  name: "IngredientsList",
  components: {IngredientItem},
  props: {
    ingredients: {
      type: Array,
      required: true
    }
  }

}
</script>

<style scoped>

</style>