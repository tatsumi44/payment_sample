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
    <!-- <form action>
      <input @click="purchase" type="submit" value="購入" />
    </form>-->
    <button @click="purchase">purchase</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: { name: "パーカー", price: 1000 }
    };
  },
  methods: {
    purchase() {
      alert("本当に購入しますか？？");
      console.log("!ok");
      this.$store.dispatch("purchase/purchase_item", this.item);
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