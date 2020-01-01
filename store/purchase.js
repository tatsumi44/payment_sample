import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "~/plugins/firebase.js";
Vue.use(Vuex);
const db = firebase.firestore();

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
    }
  }
}
