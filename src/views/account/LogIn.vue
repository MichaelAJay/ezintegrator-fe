<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="form.password" required>
        </div>
        <button type="submit">Log in</button>
    </form>
    <button @click="goToCreateAccount">Sign Up</button>
    </div>
  </template>

<script lang="ts">
import accountApiService from '@/api/ezintegrator-backend/account.ezi-be.api';

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const { isSuccessful, errorMessage } = await accountApiService.login(this.form);
        if (isSuccessful) {
          this.$router.push({ name: 'landing-page' })
        } else {
          console.error(errorMessage)
        }
      } catch (error) {
        console.error(error);
        // Handle error (e.g., show error message)
      }
    },
    goToCreateAccount() {
        this.$router.push({ name: 'sign-up' });
    }
  }
};
</script>
  