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
    <my-dialog
        v-model:show="isDialogVisible"
    >
      <pancake-form/>
    </my-dialog>
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
import MyDialog from "@/components/UI/MyDialog";
import PancakeForm from "@/components/pancakes/PancakeForm";

export default {
  name: "PancakesPage",
  components: {PancakeForm, MyDialog, SoftButton, PancakesList},
  data() {
    return {
      pancakes: [],
      isDialogVisible: false,
    }
  },
  methods: {
    dialog() {
      this.isDialogVisible = true
    },
    getPancakes() {
      axios.get(`https://pancake-back.herokuapp.com/pancakes`)
          .then((response) => {
            this.pancakes = response.data
          })
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