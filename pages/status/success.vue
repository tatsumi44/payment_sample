<template>
  <section class="container">
    <div>
      <img
        class="completion_image"
        src="https://3.bp.blogspot.com/-E9hOwqPle4A/VahTxZAjCiI/AAAAAAAAv4w/QUCb8DsJHc8/s800/pose_dokkiri_daiseikou.png"
        alt
      />
      <h1 class="title">購入完了</h1>
      <h2 class="subtitle">ご注文が完了しました</h2>
      <button @click="back">戻る</button>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.completion_image {
  width: 300px;
  height: 300px;
}
</style>

