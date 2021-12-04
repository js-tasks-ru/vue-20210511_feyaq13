<template>
  <form class="form" autocomplete="off">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="email" autofocus type="email" placeholder="demo@email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="password" type="password" placeholder="password" class="form-control" />
      </div>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block" @click.prevent="login">Войти</button>
    </div>
    <div class="form__append">
      Нет аккаунта?
      <router-link :to="registerPath" class="link">Зарегистрируйтесь</router-link>
    </div>
  </form>
</template>

<script>
import { paths } from '../router/paths';
import { login } from '../data';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      registerPath: paths.Register,
    };
  },

  methods: {
    login() {
      login(this.email, this.password);
    },
  },
};
</script>

<style></style>
