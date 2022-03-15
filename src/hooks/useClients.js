import {onMounted, ref} from "vue";
import axios from "axios";

export function useClients(){
    const clients = ref([])
    const fetching = new Promise(() => {
            axios.get('https://pancake-back.herokuapp.com/clients')
                .then((response) => {
                    clients.value = response.data
                })
        }
    ).catch((err) => {
        console.log(err)
    })

    onMounted(() => fetching)

    return {clients}

}