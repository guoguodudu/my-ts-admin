import axio from "./axios";

export const userApi = {
    list: () => axio.post("http://localhost:8080/use/list"),
}
