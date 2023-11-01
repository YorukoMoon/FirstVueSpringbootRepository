import axios from "axios";
import router from "@/router";

const request = axios.create({
    baseURL : 'http://localhost:8081',
    // timeout: 30000,
    //我平时经常调试，尽量不要让他有过期时间。

})


//设置请求
request.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json;charset=utf-8';

        //请求头中加上token
        let user = JSON.parse(localStorage.getItem("honeyUser") || '{}');
        config.headers['token'] = user.token;

        return config
    }, error => {
        console.error('request error:' + error)
        return Promise.reject(error)
    }
);

//设置回应
request.interceptors.response.use(
    response=> {
        let res = response.data;
        if (typeof res == "string") {
            res = res ? JSON.parse(res) : res;
        }
        if(res.code==="401")
            router.push('/login');


        return res;
    },
        error => {
            console.error('respon error:' + error);
            return Promise.reject(error);
        }

)

export default request



