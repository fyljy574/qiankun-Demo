<template>
  <div id="page1">
    <h1>我是第二个页面</h1>
    <button @click="goto">跳转</button>
  </div>
</template>

<script>
export default {
  name: "page1",
  methods: {
    goto() {
      this.$router.push({ path: "/contractCenter/two" });
    }
  }
};
</script>

<style scoped>
#page1 {
  margin: 0;
  padding: 0;
  background: pink;
  height: 600px;
  width: 100%;
}
</style>
