import axio from "./axios";

export const userApi = {
    list: () => axio.post("api/use/list"),
}

export const userApiC = {
    list: (data:any) => axio.post("apc/jiguang/query",data),
}
