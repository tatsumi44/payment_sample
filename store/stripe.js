import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "~/plugins/axios.js";
import firebase from "~/plugins/firebase.js";
const db = firebase.firestore();
Vue.use(Vuex);
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
  async sendToken({
    commit
  }, body) {
    console.log(`OK! ${body}`);
    try {
      const res = await await Axios.post(`/checkout`, body);
      console.log(res);
      try {
        const ref = await db.collection("item").add(body);
        commit("changRef", ref);
      } catch (error) {
        console.log(error);
        this.$router.push(
          '/status/error'
        );
      }
    } catch (error) {
      console.log(error);
      this.$router.push(
        '/status/error'
      );
    }
  }
}
