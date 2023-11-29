<template>
    <div>
      <!-- Navbar goes here eventually -->
      <button @click="goToIntegrations">Integrations</button>
    </div>
</template>
  
<script lang="ts">
  export default {
    name: 'LandingPage',
    methods: {
      goToIntegrations() {
        this.$router.push({ name: 'integrations' }); // assuming 'integrations-view' is the name of the route
        console.log('goto integrations')
      }
    }
  }
</script>