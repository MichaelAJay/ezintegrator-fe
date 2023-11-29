<template>
    <div>
        Integrations
        <button
            v-for="(value, key) in integrationTypes"
            :key="key"
            @click="handleButtonClick(key)"
        >
            {{ formatButtonTitle(value) }}
        </button>
    </div>
    <!-- <button @click="">Integrations</button> -->
</template>

<script lang="ts">
    import integrationApiService from '@/api/ezintegrator-backend/integration.ezi-be.api';

    export default {
        name: 'IntegrationsPrimary',
        data() {
            return {
                integrationTypes: {},
                isLoading: true,
            }
        },
        async mounted() {
            await this.fetchIntegrationTypes();
            this.isLoading = false;
        },
        methods: {
            formatButtonTitle(title) {
                return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
            },
            async fetchIntegrationTypes() {
                const integrationTypes = await integrationApiService.getIntegrationTypes();
                this.integrationTypes = integrationTypes;
            },
            async handleButtonClick(key) {
                // Use router?
                console.log('in integrationsPrimary, key is',key)
                this.$router.push({name: 'integration', params: {key}})
            }
        }
    }
</script>