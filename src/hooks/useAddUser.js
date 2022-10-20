
export default function useAddUser(list) {
    function addUser(user) {
        if (user.selectID) {
            findParent(list.value, user)
            return
        }
       list.value.push(user)
    }
    function findParent(list, user) {
        list.forEach(el => {
            if (el.id === user.selectID) {
                el.children.push(user)
            } else {
                findParent(el.children, user)
            }
        })
    }
    return {
        addUser
    }
}
