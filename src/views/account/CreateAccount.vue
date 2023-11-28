<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="accountName">Account Name:</label>
          <input type="text" id="accountName" v-model="form.accountName" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div>
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="form.firstName" required>
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="form.lastName">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="form.password" required>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  </template>

<script lang="ts">
import accountApiService from '@/api/ezintegrator-backend/account.ezi-be.api';

export default {
  data() {
    return {
      form: {
        accountName: '',
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await accountApiService.createAccountAndMasterUser(this.form)
        console.log(response.data);
        // Handle success (e.g., redirect, show success message)
      } catch (error) {
        console.error(error);
        // Handle error (e.g., show error message)
      }
    }
  }
};
</script>
  