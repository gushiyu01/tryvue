import axios from 'axios'
import qs from 'qs'

const http = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  baseURL: 'http://127.0.0.1:8080'
})

//POST传参序列化(添加请求拦截器)
// http.interceptors.request.use((config) => {
//   //在发送请求之前做某件事
//   if(config.method  === 'post'){
//     console.log(config);
//     config.data = qs.stringify(config.data);
//   }
//   return config;
// },(error) =>{
//   console.log('错误的传参')
//   return Promise.reject(error);
// });

//返回状态判断(添加响应拦截器)
http.interceptors.response.use((res) =>{
  //对响应数据做些事
  if(!res.data.success){
    return Promise.resolve(res);
  }
  return res;
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost(url, params, type = 'json') {
  return new Promise((resolve, reject) => {
    params = ( type === 'json' ? JSON.stringify(params) : qs.stringify(params) );
    http.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    http.get(url, {params: param})
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  fetchPost,
  fetchGet,
}
