<template>
  <div>
    <transition-group name="ingredient-list">
      <ingredient-item
          v-for="ingredient in ingredients"
          :ingredient="ingredient"
          :key="ingredient.id"
          :need-check="needCheck"
      />
    </transition-group>
  </div>
</template>

<script>
import IngredientItem from "@/components/pancakes/ingredients/IngredientItem";

export default {
  name: "IngredientsList",
  components: {IngredientItem},
  props: {
    needCheck: {
      type: Boolean,
      required: false,
      default: false
    },
    ingredients: {
      type: Array,
      required: true
    }
  }

}
</script>

<style scoped>
.ingredient-list-item {
  display: inline-block;
  margin-right: 10px;
}

.ingredient-list-enter-active,
.ingredient-list-leave-active {
  transition: all 0.4s ease;
}

.ingredient-list-enter-from,
.ingredient-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.ingredient-list-move {
  transition: transform 0.4s ease;
}
</style>