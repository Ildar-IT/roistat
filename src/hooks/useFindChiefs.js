import {computed} from "vue";


export default function useFindChiefs(list) {
    const chiefs = computed(() =>{
        let items = []
        return findChiefs(list.value, items)
    })
    function findChiefs(list, items) {
        list.forEach(el => {
            items.push({
                id: el.id,
                name: el.name,
            })
            if (el.children.length > 0) {
                findChiefs(el.children, items)
            }
        })
        return items;
    }

    return {
        chiefs
    }
}
