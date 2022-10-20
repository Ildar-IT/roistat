<template>
  <table class="my-table" v-show="list">
    <thead>
    <tr>
      <th class="text-left" @click="setSort('name')">
        Имя
      </th>
      <th class="text-left" @click="setSort('phone')">
        Телефон
      </th>
    </tr>
    </thead>
    <tbody>
    <template v-for="item in list" :key="item.id">
      <tr>
        <td class="col1">
          <div class="d-flex align-center">
            <div class="my-table__img mr-2">
              <v-img v-if="item.children.length > 0"
                     @click="shows[item.id] = !shows[item.id]"
                     :class="[shows[item.id]? 'rotate':'']"
                     src="@/assets/plus.svg"
                     max-width="100"
                     max-height="100"
              />
            </div>
            {{ item.name }}
          </div>
        </td>
        <td class="col2">{{ item.phone }}</td>
      </tr>
      <TableNestingItems v-show="shows[item.id]" :users="item.children"/>
    </template>
    </tbody>
  </table>

</template>

<script>
import TableNestingItems from "@/components/TableNestingItems";

export default {
  name: "MyTable",
  props: {
    list: {
      type: Array,
      default: [],
    }
  },
  emits: ['sortName'],
  components: {TableNestingItems},
  data() {
    return {
      shows: {}
    }
  },
  methods: {
    setSort(sortName) {
      this.$emit('sortName', sortName)
    },

  }
}
</script>

<style lang="scss">
.my-table {
  width: 100%;
  border-collapse: collapse;

  border-spacing: 0;


  tr {
    & > th, td {
      white-space: nowrap;
      text-overflow: ellipsis;
      border: 1px solid #000;
      padding: 6px;
    }
    td {
      &:first-child {
        width: 60%;

      }
      &:last-child {
        width: 40%;
      }
    }
  }

  &__img {
    width: 15px;
    height: 15px;
    cursor: pointer;
    transition: 0.2s ease-in-out all;

    &:hover {
      opacity: 0.7;
    }

    .v-img {
      transition: 0.2s ease-in-out all;
    }

    .rotate {
      transform: rotate(45deg);
    }
  }


}

</style>
