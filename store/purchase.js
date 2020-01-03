import Vue from 'vue'
import Vuex from 'vuex'
// import Stripe from 'stripe'
import firebase from "~/plugins/firebase.js";
// import VueStripeCheckout from '../node_modules/vue-stripe-checkout/dist/index.js'
// import VueStripeCheckout from 'vue-stripe-checkout'
Vue.use(Vuex);
const db = firebase.firestore();


// const options = {
//   key: 'pk_test_jsNti0KSMi42AcJsormj1xtW00qcR2gtNk',
//   image: 'https://cdn.meme.am/images/100x100/15882140.jpg',
//   locale: 'auto',
//   currency: 'PHP',
//   billingAddress: false,
//   panelLabel: 'Subscribe {{amount}}'
// }
// Vue.use(VueStripeCheckout, options)

export const state = () => ({
  item: null
})

export const mutations = {
  changRef(state, item) {
    state.item = item
    this.$router.push(
      '/status/success'
    );
  }

}

export const actions = {
  async purchase_item({
    commit
  }, item) {
    console.log("OK");
    try {
      const ref = await db.collection("item").add(item);
      const date = new Date();
      commit("changRef", item);
    } catch (error) {
      console.log(error);
      this.$router.push(
        '/status/error'
      );
    }
  }
}
