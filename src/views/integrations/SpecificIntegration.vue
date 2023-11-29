<template>
    <div>
      <h1>{{ title }}</h1>
      <!-- ... rest of your component ... -->
    </div>
  </template>
  
  <script lang="ts">
  import integrationApiService from '@/api/ezintegrator-backend/integration.ezi-be.api';
  
  export default {
    data() {
      return {
        title: '',
        // ... other data properties ...
      };
    },
    created() {
      const key = this.$route.params.key;
      this.title = key;
      console.log('in created hook, key', key)
      integrationApiService.getIntegrationsOfType(key)
        .then(response => {
          // Handle the response
        })
        .catch(error => {
          // Handle the error
        });
    },
    // ... other component options ...
  };
  </script>