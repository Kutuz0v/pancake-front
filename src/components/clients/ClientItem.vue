<template>
  <div class="client-item">
    <div
        class="client-data"
        @click="showEditClient"
    >
      <div>
        {{ client.name }}
      </div>
      <div>
        {{ client.phoneNumber }}
      </div>
    </div>
    <my-dialog
        v-model:show="isEditVisible"
        >
      <new-client-form
        :action="editAction"
        @editClient="editClient"
        :transferred-client="client"
      >
        <template v-slot:header>
          Оновлення клієнта
        </template>
        <template v-slot:action>
          Зберегти
        </template>
      </new-client-form>
    </my-dialog>
    <my-button
        class="post__btn"
        @click="$emit('remove', client)"
    >
      Видалити
    </my-button>
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton";
import MyDialog from "@/components/UI/MyDialog";
import NewClientForm from "@/components/clients/NewClientForm";

export default {
  components: {NewClientForm, MyDialog, MyButton},
  props: {
    client: {
      type: Object,
      id: Number,
      name: String,
      phoneNumber: String,
      required: true
    }
  },
  data() {
    return{
      isEditVisible: false,
      editAction: 'editClient',
      clientTransfer: {
        type: Object,
        name: {
          type: String,
          default: ''
        },
        phoneNumber: {
          type: String,
          default: ''
        },
        required: false
      }
    }
  },
  methods: {
    editClient(client) {
      this.$emit(this.editAction, client)
      this.isEditVisible = false
    },
    showEditClient(){
      this.isEditVisible = true
      this.clientTransfer = this.client
    }
  }
}
</script>

<style scoped>
.client-item {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*display:inline-block*/
}
.client-data {
  /*display: inline-flex;*/
  display:inline-block
}
.post__btn {
align-self: auto;
}
</style>