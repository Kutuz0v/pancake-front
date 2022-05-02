<template>
  <div
      class="form"
  >

    <div class="header">
      <close-button
          @click="this.$emit('hide', false)"
      />
      <h4
          class="header-text"
      >Додати млинець</h4>
      <add-button
          @click="createPancake"
          class="add-btn"
      />
    </div>
    <div>
      Available ingredients:
      <ingredient-selector-list
          :ingredients="ingredients"
          @selected="selectIngredient"
      />
    </div>
  </div>

</template>

<script>
import axios from "axios";
import IngredientSelectorList from "@/components/pancakes/ingredients/IngredientSelectorList";
import AddButton from "@/components/UI/AddButton";
import CloseButton from "@/components/UI/CloseButtom";

export default {
  name: "PancakeForm",
  components: {CloseButton, AddButton, IngredientSelectorList},
  data() {
    return {
      ingredients: [],
      checkedIngredients: [],
    }
  },
  methods: {
    selectIngredient(ingredient) {
      if (this.checkedIngredients.includes(ingredient)) {
        const index = this.checkedIngredients.indexOf(ingredient);
        this.checkedIngredients.splice(index, 1)
      } else {
        this.checkedIngredients.push(ingredient)
      }
    },
    getIngredients() {
      axios.get(`https://pancake-back.herokuapp.com/ingredients`)
          .then((response) => {
            this.ingredients = response.data
          })
          .catch((err) => {
            alert('Error downloading ingredients: ' + err)
          })
    },
    createPancake() {
      if (this.checkedIngredients.length === 0)
        this.$emit('hide', false)
      else
        this.$emit('addPancake', this.checkedIngredients)
    }
  },
  mounted() {
    this.getIngredients()
  }
}
</script>

<style scoped>
.col1 {
  margin-right: auto;
  float: left;
  width: 60%;
  /*margin-left: auto;*/
}

.col2 {
  float: right;
  margin-left: auto;
  /*margin-right: auto;*/
}

.column {
  background-color: #FBFBFD;
  /*width: 40%;*/
}


.header {
  display: flex;
  /*background-color: #FBFBFD;*/

}

.add-btn {
  margin-left: auto;
  background-color: #FBFBFD;

}

.header-text {
  margin: auto auto 10px;
  /*background-color: #FBFBFD;*/

}

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