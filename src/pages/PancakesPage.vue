<template>
  <div>
    <h2
        class="unglued"
    >Млинці</h2>
    <pancakes-list
      :pancakes="pancakes"
      />
  </div>
</template>

<script>
import axios from "axios";
import PancakesList from "@/components/pancakes/PancakesList";

export default {
  name: "PancakesPage",
  components: {PancakesList},
  data() {
    return {
      pancakes: []
    }
  },
  methods: {
    getPancakes() {
      axios.get(`https://pancake-back.herokuapp.com/pancakes`)
          .then((response) => {
            this.pancakes = response.data
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