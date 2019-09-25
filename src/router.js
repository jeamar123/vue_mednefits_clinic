import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL;
// axios.defaults.serverUrl = 'http://staging.medicloud.sg';
axios.defaults.serverUrl = 'http://medicloud.local';



// CLINIC views
import ClinicAuth from './views/clinic/Auth.vue'
import ClinicDashboard from './views/clinic/Dashboard.vue'
import ClinicDashboardSummary from './views/clinic/Dashboard-summary.vue'
import ClinicClaim from './views/clinic/Claim.vue'
import ClinicCalendar from './views/clinic/Calendar.vue'
import ClinicSettings from './views/clinic/Settings.vue'
// settings 
import ClinicAccount from './views/clinic/settings/Clinic-account.vue'
import ClinicStaff from './views/clinic/settings/Clinic-staff.vue'
import ClinicServices from './views/clinic/settings/Clinic-services.vue'
import ClinicProfile from './views/clinic/settings/Clinic-profile.vue'
import ClinicTransactions from './views/clinic/settings/Clinic-transactions.vue'
// profile in settings
import ClinicDetails from './views/clinic/settings/profile/Clinic-details.vue'
import BusinessHours from './views/clinic/settings/profile/Business-hours.vue'
import ProfilePassword from './views/clinic/settings/profile/Profile-password.vue'
import PaymentDetails from './views/clinic/settings/profile/Payment-details.vue'
import ProfileWidget from './views/clinic/settings/profile/Profile-widget.vue'
import QrCode from './views/clinic/settings/profile/Qr-code.vue'
// transactions in settings
import TransactionHistory from './views/clinic/settings/transactions/Transaction-history.vue'
import TransactionInvoice from './views/clinic/settings/transactions/Transaction-invoice.vue'
import StatementAccount from './views/clinic/settings/transactions/Statement-account.vue'

Vue.use(Router)
Vue.use(axios)


export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  linkActiveClass: 'router-active',
  routes: [
    { path: '*', redirect: '/clinic/auth' },
    { path: '/clinic/auth', name: 'ClinicAuth', component: ClinicAuth },
    {
      path: '/clinic',
      name: 'clinic-dashboard',
      redirect: '/clinic/claim',
      component: ClinicDashboard,
      meta: { auth: true },
      children: [
        { name: 'clinicClaim', path: '/clinic/claim', component: ClinicClaim },
        { name: 'ClinicCalendar', path: '/clinic/calendar', component: ClinicCalendar },
        { name: 'clinicDashboardSummary', path: '/clinic/dashboard-summary', component: ClinicDashboardSummary },
        {
          name: 'clinicSettings', path: '/clinic/settings', component: ClinicSettings,
          redirect: '/clinic/settings/clinic-account',
          children: [
            {
              name: 'ClinicAccount', path: '/clinic/settings/clinic-account', components: { account: ClinicAccount }
            },
            {
              name: 'ClinicStaff', path: '/clinic/settings/clinic-staff', components: { account: ClinicStaff }
            },
            {
              name: 'ClinicServices', path: '/clinic/settings/clinic-services', components: { account: ClinicServices }
            },
            {
              name: 'ClinicProfile', path: '/clinic/settings/clinic-profile', components: { account: ClinicProfile },
              redirect: '/clinic/settings/profile/clinic-details',
              children: [
                {
                  name: 'ClinicDetails', path: '/clinic/settings/profile/clinic-details', components: { profile: ClinicDetails }
                },
                {
                  name: 'BusinessHours', path: '/clinic/settings/profile/business-hours', components: { profile: BusinessHours }
                },
                {
                  name: 'ProfilePassword', path: '/clinic/settings/profile/profile-password', components: { profile: ProfilePassword }
                },
                {
                  name: 'PaymentDetails', path: '/clinic/settings/profile/payment-details', components: { profile: PaymentDetails }
                },
                {
                  name: 'ProfileWidget', path: '/clinic/settings/profile/profile-widget', components: { profile: ProfileWidget }
                },
                {
                  name: 'QrCode', path: '/clinic/settings/profile/qr-code', components: { profile: QrCode }
                },
              ]
            },
            {
              name: 'ClinicTransactions', path: '/clinic/settings/clinic-transactions', components: { account: ClinicTransactions },
              redirect: '/clinic/settings/transactions/transaction-history',
              children: [
                {
                  name: 'TransactionHistory', path: '/clinic/settings/transactions/transaction-history', components: { transactions: TransactionHistory }
                },
                {
                  name: 'TransactionInvoice', path: '/clinic/settings/transactions/Transaction-invoice', components: { transactions: TransactionInvoice }
                },
                {
                  name: 'StatementAccount', path: '/clinic/settings/transactions/statement-account', components: { transactions: StatementAccount }
                },
              ]
            },
          ]
        }
      ]
    },
  ]
})
