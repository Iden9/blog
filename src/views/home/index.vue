<template>
  <main>
    <div id="article_list">
      <ul>
        <li v-for="item in ArticleList" :key="item.id">
          <h3 @click="transmit(item)">
            <router-link to="detail">{{ item.title }}</router-link>
          </h3>
          <br>
          <span>{{ item.detail }}</span>
        </li>
      </ul>
    </div>
  </main>
  <footer>
    <div id="footer_info">
      <h5>关于我们</h5>
      <br>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae deleniti distinctio dolor doloremque
        earum illo iste, nesciunt numquam pariatur quas reiciendis sequi sint tempore vitae? Ab assumenda
        consectetur repellat?</p>
    </div>
  </footer>
</template>
<script setup>

import store from "@/store";
import {computed, onMounted, reactive} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()


onMounted(() => {
  store.dispatch("ReqArticle")
})

const ArticleList = computed(() => {
  return store.state.articleList
})

function transmit(item) {
  router.push({path: "/detail", query: {id: item.id}})
}


</script>
<style scoped>
/*main*/
main {
  display: flex;
  justify-content: space-evenly;
}

main > #article_list {
  width: 800px;
  margin-top: 80px;

}

main > #article_list > ul > li {
  border-bottom: 1px solid #F0F0F0;
  margin-top: 20px;
}

main > #article_list > ul > li > h3 > a:hover {
  text-decoration: underline;
}

/*footer*/
footer {
  height: 300px;
  display: flex;
  justify-content: space-evenly;
}

footer > #footer_info {
  width: 800px;
  margin-top: 80px;
}
</style>
