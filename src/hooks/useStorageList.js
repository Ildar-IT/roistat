import {computed, onMounted, ref} from "vue";

export default function useStorageList() {
    const list = ref([])

    const setList = () => {
        list.value = JSON.parse(localStorage.getItem('list')) || [];
    }
    onMounted(setList)

    const storageList = computed(() => {
        if (list.value?.length > 0) {
            localStorage.setItem('list', JSON.stringify(list.value))
        }
        return JSON.parse(localStorage.getItem('list'));
    })

    return {
        list,
        storageList,
    }
}
