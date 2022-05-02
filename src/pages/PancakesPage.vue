<template>
  <div>
    <h2
        class="unglued"
    >Млинці</h2>
    <soft-button
        @click="dialog"
    >
      Create pancake
    </soft-button>
    <new-dialog
        v-model:show="isDialogVisible"
    >
      <pancake-form
          @addPancake="addPancake"
          @hide=dialog
      />
    </new-dialog>
    <pancakes-list
        :pancakes="pancakes"
        @deletePancake="deletePancake"
    />
  </div>
</template>

<script>
import axios from "axios";
import PancakesList from "@/components/pancakes/PancakesList";
import SoftButton from "@/components/UI/SoftButton";
import PancakeForm from "@/components/pancakes/PancakeForm";
import NewDialog from "@/components/UI/NewDialog";

export default {
  name: "PancakesPage",
  components: {NewDialog, PancakeForm, SoftButton, PancakesList},
  data() {
    return {
      pancakes: [],
      isDialogVisible: false,
    }
  },
  methods: {
    dialog() {
      this.isDialogVisible = !this.isDialogVisible
    },

    getPancakes() {
      axios.get(`https://pancake-back.herokuapp.com/pancakes`)
          .then((response) => {
            this.pancakes = response.data
          })
    },

    addPancake(ingredients) {
      new Promise(() => {
        const pancake = {
          price: 0,
          weight: 0,
          ingredients: ingredients
        }

        ingredients.forEach(ingredient => {
          pancake.price += ingredient.price
          pancake.weight += ingredient.weight
        })

        if (pancake.price !== 0)
          axios.post(
              'https://pancake-back.herokuapp.com/pancakes',
              pancake
          )
              .then(response =>{
                console.log(response.status)
                if (response.status === 200)
                  this.pancakes.push(pancake)
              })
              .catch((err) => {
                console.log(err)
              })
      })
      this.isDialogVisible = false
    },
    deletePancake(pancake) {
      console.log('page: ', pancake)
      axios.delete(`https://pancake-back.herokuapp.com/pancakes/` + pancake.id)
          .then((response) => {
            if (response.status === 200) {
              this.getPancakes()
            }
          }).catch((err) => {
        alert('Помилка під час спроби видалення: ' + err)
      })
    }
  },
  mounted() {
    this.getPancakes()
  }
}
</script>

<style scoped>

</style>