import request from "@/utils/request";

export const ReqArticle = () =>request({
    url:"/articlePub",
    method:"get"
})

export const ReqArticleOne = (id) => request({
    url:`/articleone?id=${id}`,
    method:"get"
})
