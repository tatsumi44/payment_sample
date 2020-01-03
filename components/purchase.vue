<template>
  <div>
    <h1>パーカー購入画面</h1>
    <img
      class="image"
      src="https://user-images.githubusercontent.com/33675927/71625726-a95f4e00-2c2c-11ea-9ead-4dae2c850551.jpg"
      alt
    />
    <p>Name : パーカー</p>
    <p>Price : ¥1000</p>
    <button @click="purchase">購入</button>
    <div id="card-element"></div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  head: {
    script: [
      {
        src: "https://js.stripe.com/v3/"
      }
    ]
  },
  mounted() {},
  data() {
    return {
      item: { name: "パーカー", price: 1000 }
    };
  },

  methods: {
    purchase() {
      var stripe = Stripe("pk_test_jsNti0KSMi42AcJsormj1xtW00qcR2gtNk");
      var elements = stripe.elements();
      var cardElement = elements.create("card");
      cardElement.mount("#card-element");
      //   alert("本当に購入しますか？？");
      //   var stripe = Stripe("pk_test_jsNti0KSMi42AcJsormj1xtW00qcR2gtNk");
      //   var elements = stripe.elements();
      //   var style = {
      //     base: {
      //       color: "#32325d"
      //     }
      //   };
      //   console.log("!ok");
      //   this.item["date"] = new Date();
      //   this.$store.dispatch("purchase/purchase_item", this.item);
    },
    checkout() {
      // this.$checkout.close()
      // is also available.
      this.$checkout.open({
        image: "https://i.imgur.com/1PHlmFF.jpg",
        locale: "en",
        currency: "BZD",
        name: "Blips and Chitz!",
        description: "An entire afternoon at Blips and Chitz!",
        amount: 9999999,
        panelLabel: "Play Roy for {{amount}}",
        token: token => {
          // handle the token
        }
      });
    }
  }
};
</script>

<style>
.image {
  width: 300px;
  height: 300px;
}
</style>