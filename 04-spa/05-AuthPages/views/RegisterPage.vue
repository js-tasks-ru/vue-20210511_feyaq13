<template>
  <form class="form">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="email" autofocus autocomplete="off" type="email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input v-model="fullName" autocomplete="off" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="password" autocomplete="new-password" type="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input v-model="passwordRepeat" autocomplete="new-password" type="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox"><input v-model="agree" type="checkbox" /> Я согласен с условиями <span></span></label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary" @click.prevent="register">Зарегистрироваться</button>
    </div>
    <div class="form__append">
      Уже есть аккаунт?
      <router-link :to="loginPath" class="link">Войдите</router-link>
    </div>
  </form>
</template>

<script>
import { paths } from '../router/paths';
import { register } from '../data';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: 'test6@test.ru',
      password: 'Тест123',
      passwordRepeat: 'Тест123',
      fullName: 'Тест',
      loginPath: paths.Login,
      agree: false,
    };
  },

  methods: {
    toLoginPage() {
      this.$router.push({ path: paths.Login });
    },

    register() {
      register(this.email, this.fullName, this.password);
      this.toLoginPage();
    },
  },
};
</script>

<style></style>
