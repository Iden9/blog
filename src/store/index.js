import {createStore} from "vuex"
import {ReqArticle, ReqArticleOne} from "@/api";


const store = createStore({
    state:{
        articleList:[],
        articleOne:{}
    },
    mutations:{
        REQARTICLE(state,data){
            state.articleList = data
        },
        REQARTICLEONE(state,data){
            state.articleOne = data
        }
    },
    actions:{
        async ReqArticle({commit}){
            let result = await ReqArticle()
            if(result.code == 200){
                commit("REQARTICLE",result.data)
                return "ok"
            }else{
                return Promise.reject(new Error("faile"))
            }
        },
        async ReqArticleOne({commit},id){
            let result = await ReqArticleOne(id)
            if(result.code ==200){
                console.log(result)
                commit("REQARTICLEONE",result.data)
                return "ok"
            }else{
                return Promise.reject(new Error("faile"))
            }
        }
    },
    getters:{

    }
})

export default store
