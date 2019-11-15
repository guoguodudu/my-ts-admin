import axio from "./axios";

const userApi = {
    list: (data: any) => axio.post("user/list", data),
}
