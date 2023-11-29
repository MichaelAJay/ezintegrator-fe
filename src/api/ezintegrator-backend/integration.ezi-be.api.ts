// import axios from "axios";
import { eziApiClient } from "./ezintegrator-backend-client.axios-singleton";

export default {
    async getIntegrationTypes() {
        try {
            const result = await eziApiClient.get('integration/types');
            console.log(result.data);
            return result.data;
        } catch (err) {
            console.error(err);
            return {}; // This isn't right
        }
    },
    async getIntegrationsOfType(type: any) {
        try {
            console.log(type)
            const result = await eziApiClient.get(`integration/type/${type}`);
            return result.data;
        } catch (err) {
            console.error(err);
            return []; // This isn't right
        }
    },
}