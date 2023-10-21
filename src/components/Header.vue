<template>
  <header>
    <div id="logo">
      Blog
    </div>
    <div id="nav_bar">
      <ul>
        <li><a href="">首页</a></li>
        <li><a href="">下载</a></li>
        <li><a href="">会员</a></li>
        <li><a href="">IT技术</a></li>
      </ul>
    </div>
    <div id="search">
      <input type="text" placeholder="search">
    </div>
    <div id="state">
      <ul>
        <li><a href="">登录</a></li>
        <li id="register"><a href="">注册</a></li>
        <li id="writeArt"><a href="">写文章</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  background: #fff;
}

header > div {
  /*margin-left: 50px;*/
}

header #logo {
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #DB7561;
}

header > #nav_bar > ul {
  display: flex;
}

header > #nav_bar > ul > li {
  width: 100px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

header a {
  display: block;
  width: 100%;
  height: 100%;
  color: #DB7561;
}

header > #search {
  height: 60px;
}

header > #search > input {
  width: 200px;
  height: 30px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50px;
  border: 1px solid gainsboro;
  text-indent: 1em;
}

header > #state > ul {
  display: flex;
}

header > #state > ul > li {
  width: 100px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

header > #state > ul > #register {
  width: 70px;
  line-height: 40px;
}

header > #state > ul > #register > a {
  border: 1px solid #DB7561;
  width: 70px;
  height: 40px;
  margin-top: 10px;
  border-radius: 50px;
}

header > #state > ul > #writeArt {
  width: 70px;
  line-height: 40px;
  margin-left: 10px;
}

header > #state > ul > #writeArt > a {
  background: #DB7561;
  width: 70px;
  height: 40px;
  margin-top: 10px;
  border-radius: 50px;
  color: #fff;
}

header #nav_bar > ul > li:hover {
  background: #F5F5F5;
}
</style>
