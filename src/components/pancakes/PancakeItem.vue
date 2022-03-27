<template>
  <div class="pancake">
    <div class="header-text">
      <h3 class="header-item">
      Ціна: {{ pancake.price }}
    </h3>
      <h3 class="header-item">
        Вага: {{ pancake.weight }}
      </h3>

      <delete-button
          @delete="deletePancake"
      />
    </div>
    <ingredients-list
        class="list"
        :ingredients="pancake.ingredients"
    />
  </div>
</template>

<script>
import IngredientsList from "@/components/pancakes/ingredients/IngredientsList";
import DeleteButton from "@/components/UI/DeleteButton";

export default {
  name: "PancakeItem",
  components: {DeleteButton, IngredientsList},

  props: {
    pancake: {
      type: Object,
      required: true,
      id: {type: Number},
      price: {type: Number},
      weight: {type: Number},
      ingredients: {type: Array}
    }
  },
  methods: {
    deletePancake(){
      this.$emit('deletePancake', this.pancake)
    }
  }
}
</script>

<style scoped>

.header-text {
  display: flex;
  align-self: flex-end;
  /*border-bottom: 1px solid teal;*/
}
.header-item{
  margin-left: 15px;
}
.pancake {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
.list{
  border-radius: 5px;
  border-top: 1px solid teal;
}

</style>