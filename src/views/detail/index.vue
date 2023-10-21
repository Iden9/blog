<template>
  <main>
    <div id="article_list">
      <ul>
        <li>
          <h1>{{ArticleOne.title}}</h1>
          <br>
          <span>{{
              ArticleOne.detail
            }}</span>
        </li>
      </ul>
    </div>
  </main>
  <footer>
    <div id="footer_info">
      <input type="text" placeholder="写评论">&nbsp;&nbsp;<button>发送</button>
    </div>
  </footer>
</template>
<script setup>
import {useRoute} from "vue-router";
import {computed, onMounted, reactive} from "vue";
import store from "@/store";

const route = useRoute()
let articleId = route.query.id
console.log(articleId)
onMounted(()=>{
  store.dispatch("ReqArticleOne",articleId)
})
const ArticleOne = computed(()=>{
  return store.state.articleOne
})

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
  background: #fff;
  padding: 50px;

}

main > #article_list > ul > li {
  border-bottom: 1px solid #F0F0F0;
  margin-top: 20px;
}

/*footer*/
footer {
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 80px;
}

footer > #footer_info {
  width: 800px;
  padding: 20px;
}

footer > #footer_info > input {
  width: 500px;
  height: 40px;
  border-radius: 50px;
  border: none;
  background: #F2F2F2;
  text-indent: 1em;
}

footer > #footer_info > button {
  width: 100px;
  height: 40px;
  border-radius: 50px;
  border: none;
  background: #DB7561;
  color: #fff;
}
</style>
