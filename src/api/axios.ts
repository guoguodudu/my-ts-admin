import axios from "axios";
import {successInfo, warningInfo} from "./Info";

// Create an instance using the config defaults provided by the library
// At this point the timeout config value is `0` as is the default for the library
const axio = axios.create({
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    }
});

// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
axio.defaults.timeout = 200000;
axio.defaults.withCredentials = true;

axio.interceptors.response.use(response => {
        const hasData = response && response.data;

        /*     if (hasData && response.data.retCode === 103) {
                 // console.log("由于103未登录，所以到了登录页面");
                 history.push("/login");
                 response.data = {}
                 return Promise.reject();
             }*/

        // 当服务器返回result结果为0的时候，抛出异常
        if (hasData && response.data.result === 0) {
            // 弹出系统异常
            // sysErrorInfo();
            //message.info(response.data.retMsg);
            warningInfo(response.data.retMsg);
            return Promise.reject();
        }

        successInfo(response.data.retMsg);
        return response.data;
    }, error => {
        let message = '服务器出错'
        if (error && error.response) {
            console.log(error.response.data)
            switch (error.response.status) {
                case 400:
                    message = error.response.data.retMsg + error.response.data.retObj
                    break
                case 401:
                    message = '未授权，请登录'
                    break

                case 403:
                    message = '拒绝访问'
                    break

                case 404:
                    message = '请求的接口不存在'
                    break

                case 408:
                    message = '请求超时'
                    break

                case 500:
                    message = '服务器内部错误'
                    break

                case 501:
                    message = '服务未实现'
                    break

                case 502:
                    message = '网关错误'
                    break

                case 503:
                    message = '服务不可用'
                    break

                case 504:
                    message = '网关超时'
                    break

                case 505:
                    message = 'HTTP版本不受支持'
                    break

                default:
                    break
            }
        } else {
            message = '您的网络不通，请检查您的网络'
        }
        return Promise.reject(message)

    }
);
// Override timeout for this request as it's known to take a long time
export default axio;
