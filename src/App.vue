<template>
  <Header/>
  <router-view></router-view>
</template>

<script>

import Header from "@/components/Header.vue";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
  color: #000;
  outline: none;
}
</style>
