<template>
  <div class="btn-wide btn-normal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SoftButton"
}
</script>

<style scoped>

.btn-wide {
  width: 150px;
  height: 40px;
  margin: 10px;
  border-radius: 50px;
  /*font-size: 18px;*/
  color: #708090;

  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-normal {
  cursor: inherit;
  box-shadow: -3px -3px 7px #f5f5f5, 3px 3px 7px #bbc3cc;
}

.btn-pressed {
  box-shadow: -3px -3px 7px #f5f5f5 inset, 3px 3px 7px #bbc3cc inset;
}

.btn-normal:active {
  box-shadow: -3px -3px 7px #f5f5f5 inset, 3px 3px 7px #bbc3cc inset;
  font-size: 16px;
  user-select: none;
}
</style>