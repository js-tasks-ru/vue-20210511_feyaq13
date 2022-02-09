<template>
  <form class="form" @submit.prevent="register">
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
      <button type="submit" class="button button_primary">Зарегистрироваться</button>
    </div>
    <div class="form__append">
      Уже есть аккаунт?
      <router-link :to="loginPath" class="link">Войдите</router-link>
    </div>
  </form>
</template>

<script>
import { routeConfig } from '../router/paths';
import { register } from '../data';

export default {
  name: 'RegisterPage',

  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
      fullName: '',
      loginPath: routeConfig.Login.path,
      agree: false,
      error: '',
    };
  },

  methods: {
    checkForm: function () {
      if (!this.email) {
        alert('Требуется ввести Email');
        return false;
      }

      if (!this.fullName) {
        alert('Требуется ввести полное имя');
        return false;
      }

      if (!this.password) {
        alert('Требуется ввести пароль');
        return false;
      }

      if (this.password !== this.passwordRepeat) {
        alert('Пароли не совпадают');
        return false;
      }

      if (!this.agree) {
        alert('Требуется согласиться с условиями');
        return false;
      }

      return true;
    },

    toLoginPage() {
      this.$router.push({ name: 'login' });
    },

    register() {
      if (!this.checkForm()) {
        return;
      }

      register(this.email, this.fullName, this.password)
        .then((result) => {
          if (result.error) {
            this.error = result.message;
            throw Error();
          }
          alert(result.id);
          this.toLoginPage();
        })
        .catch(() => alert(this.error));
    },
  },
};
</script>

<style></style>
