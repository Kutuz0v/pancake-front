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
<!--    <my-button-->
<!--        class="post__btn"-->
<!--        @click="$emit('remove', client)"-->
<!--    >-->
<!--      Видалити-->
<!--    </my-button>-->
    <delete-button
        class="post__btn"
        @click="$emit('remove', client)"/>
  </div>

</template>

<script>
import MyDialog from "@/components/UI/MyDialog";
import NewClientForm from "@/components/clients/NewClientForm";
import DeleteButton from "@/components/UI/DeleteButton";

export default {
  components: {
    DeleteButton,
    NewClientForm,
    MyDialog},
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
  border-radius: 5px;
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
  display: inline-block;
  line-height: 30px;
  margin-left: 10px;
}
.post__btn {
  transform: scale(1.2);
  align-self: auto;
  margin-right: 15px;
}
</style>