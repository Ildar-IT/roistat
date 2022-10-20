<template>
  <td colspan="2" class="table-nesting-items">
    <div class="pl-2">
      <table>
        <tbody>
        <template
            v-if="users && users.length > 0"
            v-for="el in users"
            :key="el.id">
          <tr>
            <td>
              <div class="d-flex align-center">
                <div class="table-nesting-items__img mr-2">
                  <v-img v-if="el.children.length > 0"
                         @click="shows[el.id] = !shows[el.id]"
                         :class="[shows[el.id]? 'rotate':'']"
                         src="@/assets/plus.svg"
                         max-width="100"
                         max-height="100"/>
                </div>
                {{ el.name }}
              </div>
            </td>
            <td>{{ el.phone }}</td>
          </tr>
          <TableNestingItems v-show="shows[el.id]" :users="el.children"/>
        </template>
        </tbody>
      </table>
    </div>
  </td>

</template>

<script>


export default {
  name: "TableNestingItems",
  props: {
    users: {
      type: Array,
      default: []
    },
  },
  data() {
    return {
      shows: {}
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
.table-nesting-items {
  table {
    width: 100%;
    margin-left: auto;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: auto;

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
