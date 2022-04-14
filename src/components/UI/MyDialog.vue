<template>
  <div
      class="dialog"
      v-if="show"
      @click="hideDialog"
  >
    <div
        class="dialog__content"
        @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
   name: 'my-dialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
* {
  background-color: #FBFBFD;
}
.dialog {
  z-index: 2;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog__content {
  margin: auto;
  /*background: red;*/

  border-radius: 12px;
  min-height: 50px;
  max-height: 80%;
  min-width: 300px;
  position: absolute;
  /*position: fixed;*/
  /*margin-top: 15%;*/
  /*top: 30px;*/
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;

  /*overflow-y: scroll;*/
  /*border: 50px red;*/
  /*overflow-x: scroll;*/
}
</style>