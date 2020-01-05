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
    <div id="card-element"></div>
    <div id="card-message" role="alert"></div>
    <button @click="purchase">購入</button>
  </div>
</template>

<script>
import Vue from "vue";
var stripe;
var cardElement;
export default {
  head: {
    script: [
      {
        src: "https://js.stripe.com/v3/"
      }
    ]
  },
  data() {
    return {
      item: { name: "パーカー", price: 1000 },
      payable: false
    };
  },
  mounted() {
    stripe = Stripe("pk_test_jsNti0KSMi42AcJsormj1xtW00qcR2gtNk");
    var elements = stripe.elements();
    var style = {
      base: {
        // ここでStyleの調整をします。
        fontSize: "16px",
        color: "#000000",
        backgroundColor: "#D8D8D8",
        padding: 20
      }
    };
    cardElement = elements.create("card", { style: style });
    var displayError = document.getElementById("card-message");
    cardElement.mount("#card-element");
    cardElement.on("change", function(event) {
      if (event.complete) {
        // enable payment button
        console.log(event);
        console.log("success");
        displayError.textConten = "お支払いが可能です！";
        this.payable = true;
      } else if (event.error) {
        console.log(event);
        console.log(!"error");
        displayError.textContent = event.error.message;
        this.payable = false;
        // show validation to customer
      } else {
        displayError.textContent = event.error.message;
      }
    });
  },

  methods: {
    purchase() {
      console.log("!ok");
      let store = this.$store;
      const item = this.item;
      stripe.createToken(cardElement).then(function(result) {
        if (result.error) {
          // エラー表示.
          var errorElement = document.getElementById("card-message");
          errorElement.textContent = result.error.message;
        } else {
          // トークンをサーバに送信
          // stripeTokenHandler(result.token);
          console.log(`token => ${result.token.id}`);
          const body = {
            name: item.name,
            price: item.price,
            token: result.token.id,
            date: new Date()
          };
          store.dispatch("stripe/sendToken", body);
          // this.item["date"] = new Date();
          // this.$store.dispatch("purchase/purchase_item", this.item);
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