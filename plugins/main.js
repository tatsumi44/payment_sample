import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies
import VueStripeCheckout from 'vue-stripe-checkout';


const STRIPE_PUBLISHABLE_KEY = "pk_test_jsNti0KSMi42AcJsormj1xtW00qcR2gtNk"; //use config-webpack notation on client side
const options = {
  key: STRIPE_PUBLISHABLE_KEY,
  locale: 'auto',
  currency: 'USD',
};

if (STRIPE_PUBLISHABLE_KEY) {
  Vue.use(VueStripeCheckout, options);
}
