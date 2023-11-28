import accountApiService from '../../api/ezintegrator-backend/account.ezi-be.api'

export function dr() {
    return accountApiService.createAccountAndMasterUser()
}