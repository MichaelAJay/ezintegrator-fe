import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/account/LogIn.vue'
import CreateAccount from '../views/account/CreateAccount.vue'
import LandingPage from '../views/primary/LandingPage.vue'
import IntegrationsPrimary from '../views/integrations/IntegrationsPrimary.vue'
import SpecificIntegration from '../views/integrations/SpecificIntegration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogIn
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: CreateAccount
    },
    {
      path: '/landing-page',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/integrations',
      name: 'integrations',
      component: IntegrationsPrimary
    },
    {
      path: '/integration/:key',
      name: 'integration',
      component: SpecificIntegration
    }
  ]
})

export default router
