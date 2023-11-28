import axios from "axios";
import { eziApiClient } from "./ezintegrator-backend-client.axios-singleton";
import type { ICreateAccountRequestPayload } from "./interfaces/request/create-account.request-payload.interface";
import type { ILoginRequestPayload } from "./interfaces/request/login.request-payload.interface";

const routes = {
    createAccountAndMasterUser: '/account',
    login: '/auth/login'
}

export default {
    async createAccountAndMasterUser(data: ICreateAccountRequestPayload) {
        console.log(data)
        // return { data }
        return eziApiClient.post(routes.createAccountAndMasterUser, data)
    },

    async login(data: ILoginRequestPayload) {
        try {
            console.log(data);
            const response = await eziApiClient.post(routes.login, data);
            if (response.status === 201) {
                return { isSuccessful: true }
            } else {
                return { isSuccessful: false, errorMessage: 'Unexpected response from the server.' }
            }
        } catch (err) {
            let message = '';
            if (axios.isAxiosError(err) && err.response) {
                message = err.response.data.message || 'An error occurred during login.'
            } else {
                message = 'Network error or unexpected issue.'
            }
            return { isSuccessful: false, errorMessage: message }
        }
    }
}