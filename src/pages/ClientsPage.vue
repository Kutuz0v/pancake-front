<template>

  <h1>
    Наші клієнти
  </h1>
  <div class="client__btns">
    <my-button
        class="create__btn"
        @click="showDialog"
    >
      Створити клієнта
    </my-button>
    <my-select
      v-model="selectedSort"
      :options="sortOptions"
    />
  </div>
  <my-dialog
      v-model:show="isDialogVisible"
  >
    <client-form
        @create="createClient"
    />
  </my-dialog>
  <clients-list
      :clients="selectedClients"
      @remove="removeClient"
      v-if="!isClientsLoading"
  />
  <div
      v-else
  >
    <h3>Йде завантаження...</h3>
  </div>
</template>

<script>
import ClientsList from "@/components/clients/ClientsList";
// import {useClients} from "@/hooks/useClients";
import ClientForm from "@/components/clients/ClientForm";
import axios from "axios";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";

export default {
  name: 'ClientsPage',
  components: {
    MySelect,
    MyButton,
    MyDialog,
    ClientsList,
    ClientForm
  },

  data() {
    return {
      clients: [],
      isDialogVisible: false,
      isClientsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'name', name: 'За іменем'},
        {value: 'phoneNumber', name: 'За номером телефону'}
      ]
    }
  },

  methods: {
    async getClients() {
      this.isClientsLoading = true
      try {
        const response = await axios.get('https://pancake-back.herokuapp.com/clients')
        this.clients = response.data
      } catch (e) {
        console.log(e)
      } finally {
        this.isClientsLoading = false
      }
    },
    createClient(client) {
      new Promise(() => {
        axios.post(
            'https://pancake-back.herokuapp.com/clients',
            client
        )
            .then((response) => {
              if (response.status === 200) {
                this.clients.push(response.data)
              }
            })
            .catch((err) => {
              console.log(err)
            })
      })
      this.isDialogVisible = false
    },
    removeClient(client) {
      new Promise(() => {
        return axios.delete(
            'https://pancake-back.herokuapp.com/clients/' + client.id,
        )
            .then((response) => {
              if (response.status === 200) {
                const indexToRemove = this.clients.indexOf(client)
                this.clients.splice(indexToRemove, 1)
              }
            })
      })
    },
    showDialog() {
      this.isDialogVisible = true
    }
  },
  computed: {
    selectedClients(){
      return [...this.clients].sort((client1, client2) => client1[this.selectedSort]?.localeCompare(client2[this.selectedSort]))

    }
  },
  watch: {
    selectedSort(newVal){
      this.clients.sort(
          (client1, client2) => {
            return client1[newVal]?.localeCompare(client2[newVal])
          }
      )
    }
  },

  mounted() {
    this.getClients()
  }


}
</script>

<style scoped>
.create__btn {
}
.client__btns {
  margin: 15px 20px;
  display: flex;
  justify-content: space-between;
}
</style>