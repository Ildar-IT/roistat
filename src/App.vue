<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <my-table :list="storageList" @sortName="setSortName"/>
          </v-col>
          <v-col cols="12" md="6">
            <add-user-block @addUser="addUser" :select-items="chiefs"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MyTable from '@/components/MyTable'
import AddUserBlock from '@/components/AddUserBlock'
import useSortList from "@/hooks/useSortList";
import useFindChiefs from "@/hooks/useFindChiefs";
import useAddUser from "@/hooks/useAddUser";
import useStorageList from "@/hooks/useStorageList";

export default {
  name: 'App',
  components: {
    MyTable,
    AddUserBlock
  },

  setup(props) {
    const {list, storageList} = useStorageList()
    const {setSortName} = useSortList(list);
    const {chiefs} = useFindChiefs(list);
    const {addUser} = useAddUser(list);

    return {
      storageList,
      setSortName,
      chiefs,
      addUser,
    }
  },


}
</script>

<style lang="scss">
:root {
  --vh: 1vh;
  --gray: #B3B8CB;
}

html {
  overflow-y: inherit;
  overflow-x: hidden;
}

body {
  box-sizing: border-box;
  min-width: 360px;
  cursor: default;

  font-weight: 300;
  font-style: normal;
  font-size: 18px;
  line-height: 150%;
  padding: 0;
  margin: 0;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  overflow: hidden;
}

p {
  margin-bottom: 0;
}
</style>
