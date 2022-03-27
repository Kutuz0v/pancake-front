<template>
  <div
      class="ingredient "
      :class="{selected: selected}"
      @click="select"
  >
    {{ ingredient.value }}
    <div class="right-group">
      <div style="display: flex">
      <div style="margin-right: 10px; transform: scale(0.9)">+ {{ ingredient.price }} грн.</div>
      <add-button
          v-if="selected"/>
      <span :class="{'gg-add': !selected}"/>
      </div>
    </div>
  </div>
</template>

<script>
import AddButton from "@/components/UI/AddButton";

export default {
  name: 'IngredientSelector',
  components: {AddButton},
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    }
  },
  methods: {
    select() {
      this.selected = !this.selected
      this.$emit('selected', this.ingredient)
    }
  }
}
</script>

<style scoped>
@import url('https://css.gg/add.css');

.right-group {
  display: inline-block;
  margin-left: auto;
  float: right;
}

.ingredient {
  /*display: flex;*/
}

.selected {
  transform: scale(1.025);
  color: #185418;
  font-weight: bold;
}

.gg-add {
  color: grey;
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 22px;
  height: 22px;
  border: 2px solid;
  transform: scale(var(--ggs, 1));
  border-radius: 22px
}

.gg-add::after,
.gg-add::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 10px;
  height: 2px;
  background: currentColor;
  border-radius: 5px;
  top: 8px;
  left: 4px
}

.gg-add::after {
  width: 2px;
  height: 10px;
  top: 4px;
  left: 8px
}
</style>