import {computed, ref, watch} from "vue";

export default function useSortList(list) {
    const sortName = ref('')

    watch(sortName, (value => {
        if (value) {
            list.value = mySort(list.value, value)
        }
    }))

    function mySort(items, sortName) {
        items = items.sort((a, b) => {
            if (sortName === 'name') {
                return (a[sortName] > b[sortName]) ? 1 : -1;
            } else {
                return (a[sortName] - b[sortName])
            }
        })
        items.forEach(el => {
            if (el.children.length > 1) {
                mySort(el.children, sortName)
            }
        })
        return items;
    }

    function setSortName(name) {
        sortName.value = name;
    }

    return {
        setSortName,
    }
}
