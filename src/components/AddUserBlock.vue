<template>
  <div class="add-user-block">
    <v-btn variant="outlined"
           class="mb-6"
           @click="showModal"
    >
      Добавить
    </v-btn>
    <div class="add-user-block__modal" v-show="show">
      <div class="d-flex justify-space-between">
        <span>Добавление пользователя</span>
        <v-img src="@/assets/plus.svg"
               max-height="20"
               max-width="20"
               class="add-user-block__close"
               @click="hideModal"/>
      </div>
      <v-form class="mt-6"
              v-model="isValid"
              @submit.prevent="submit">
        <v-text-field variant="outlined"
                      class="mb-2"
                      label="Имя"
                      v-model="name"
                      :rules="nameRules"
        />
        <v-text-field
            class="mb-2"
            variant="outlined"
            label="Телефон"
            v-model="phone"
            :rules="phoneRules"
        />
        <v-select
            v-model="selectID"
            class="mb-2"
            label="Начальник"
            no-data-text="Нету пользователей"
            :items="selectItems"
            item-title="name"
            item-value="id"
            variant="solo"
        />
        <v-btn variant="outlined" type="submit" :disabled="!isValid">
          Сохранить
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import toggleModal from "@/mixins/toggleModal";

export default {
  name: "addUser",
  props: {
    selectItems: {
      type: Array,
      default:[]
    }
  },
  emits:['addUser'],
  mixins:[toggleModal],
  data() {
    return {
      isValid: false,
      name: '',
      nameRules: [
        v => !!v || 'Заполните поле',
        v => /^[a-zA-яё]+$/.test(v) || "Имя должен содержать только буквы"
      ],
      phone: null,
      phoneRules: [
          v => !!v || 'Заполните поле',
          v => v.length >= 11 || 'Номер должен быть больше 10 цифр',
          v => /^\d+$/.test(v) || 'Номер должен содержать только цифры'
      ],
      selectID:'',
    }
  },
  methods: {
    submit() {
      let form = {
        id: Date.now(),
        selectID: this.selectID,
        name: this.name,
        phone: Number(this.phone),
        children: []
      }
      this.$emit('addUser', form)

      this.name = '';
      this.phone = null;
      this.selectID = '';
    }
  }
}
</script>
<style lang="scss">
.add-user-block {
  width: 100%;
  padding: 0 15px;

  &__modal {
    padding: 15px;
    border: 1px solid #000;
  }
  &__close {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    transform: rotate(45deg);
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
