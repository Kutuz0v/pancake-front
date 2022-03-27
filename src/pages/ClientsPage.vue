<template>

  <h1 class="unglued">
    Наші клієнти
  </h1>
  <div class="client__btns">
    <soft-button
        @click="dialog"
    >
      Створити клієнта
    </soft-button>
    <my-select
        v-model="selectedSort"
        :options="sortOptions"
    />
  </div>
  <my-dialog
      v-model:show="isDialogVisible"
  >
    <new-client-form
        @create="createClient"
        action="create">
      <template v-slot:header>
        Створення клієнта
      </template>
      <template v-slot:action>
        Додати
      </template>
    </new-client-form>
  </my-dialog>
  <clients-list
      :clients="selectedClients"
      @remove="removeClient"
      @editClient="onEditClient"
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
import axios from "axios";
import MyDialog from "@/components/UI/MyDialog";
import MySelect from "@/components/UI/MySelect";
import NewClientForm from "@/components/clients/NewClientForm";
import SoftButton from "@/components/UI/SoftButton";

export default {
  name: 'ClientsPage',
  components: {
    SoftButton,
    NewClientForm,
    MySelect,
    MyDialog,
    ClientsList,
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
    onEditClient(client) {
      axios.put(
          `https://pancake-back.herokuapp.com/clients/${client.id}`,
          {
            'id': client.id,
            'name': client.name,
            'phoneNumber': client.phoneNumber
          },
      )
          .then((response) => {
            if (response.status === 200) {
              const index = this.clients.indexOf(client);
              if (index !== -1) {
                this.clients[index] = response.data;
              }
            }
          }).catch((e) => console.log(e.response))
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
    dialog() {
      this.isDialogVisible = true
    }
  },
  computed: {
    selectedClients() {
      return [...this.clients].sort((client1, client2) => client1[this.selectedSort]?.localeCompare(client2[this.selectedSort]))

    }
  },
  watch: {
    selectedSort(newVal) {
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

.client__btns {
  margin: 15px 20px;
  display: flex;
  justify-content: space-between;
}
</style>