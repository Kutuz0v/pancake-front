<template>
  <div
      v-if="show"
      @click="hideDialog"
  >
    <div
        class="modal"
        :class="{'show-modal':show}"
        @click.stop
    >
      <div class="modal-content">
        <slot>Content for user</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewDialog",
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
.example {
  /*visibility: hidden;*/
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 1000;
}

.modal {
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #cccccc;
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
  transition: visibility 0s linear 0.5s, opacity 0.5s 0s, transform 0.5s;
}


.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eeeeee;
  padding: 1rem 1.5rem;
  width: 24rem;
  border-radius: 0.5rem;
}


.show-modal {
  opacity: 1;
  visibility: visible;
  transform: scale(1.0);
  transition: visibility 1s linear 1s, opacity 1s 1s, transform 1s;
}


/* Does not understand for what it: */
/*body {
  height:100%;
  margin:0;
  padding:0;
  font-family: Arial, Helvetica, sans-serif;
  color: #666666;
}*/
</style>