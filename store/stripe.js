import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "~/plugins/axios.js";
// import Axios from "axios"
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
      const res = await await Axios.post(`/helloWorld`, body);
      commit("changRef", res)
      console.log(res);

    } catch (error) {
      console.log(error);
      this.$router.push(
        '/status/error'
      );
    }
  }
}
