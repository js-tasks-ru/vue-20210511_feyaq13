<template>
  <form class="form" autocomplete="off" @submit.prevent="login">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="email" autofocus type="email" placeholder="demo@email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input
          v-model="password"
          autocomplete="current-password"
          type="password"
          placeholder="password"
          class="form-control"
        />
      </div>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block">Войти</button>
    </div>
    <div class="form__append">
      Нет аккаунта?
      <router-link :to="registerPath" class="link">Зарегистрируйтесь</router-link>
    </div>
  </form>
</template>

<script>
import { routeConfig } from '../router/paths';
import { login } from '../data';

export default {
  name: 'LoginPage',

  data: () => ({
    email: '',
    password: '',
    registerPath: routeConfig.Register.path,
    error: '',
  }),

  methods: {
    checkForm: function () {
      if (!this.email) {
        alert('Требуется ввести Email');
        return false;
      }
      if (!this.password) {
        alert('Требуется ввести пароль');
        return false;
      }

      return true;
    },

    toIndexPage() {
      let path = '/';
      if (this.$route.query.from) {
        path = this.$route.query.from;
      }
      return this.$router.push(path);
    },

    login() {
      if (!this.checkForm()) {
        return;
      }

      login(this.email, this.password)
        .then((result) => {
          if (result.error) {
            this.error = result.message;
            throw Error();
          }
          alert(result.fullname);
          this.toIndexPage();
        })
        .catch(() => alert(this.error));
    },
  },
};
</script>

<style></style>
