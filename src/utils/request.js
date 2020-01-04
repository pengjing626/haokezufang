import axios from 'axios'
import { API_URL } from './urls'
import { Toast } from 'antd-mobile'
const Axios = axios.create({
  baseURL: API_URL,
});

//请求拦截
Axios.interceptors.request.use(function (config) {
  Toast.loading('loading...', 60 * 60 * 60, null)
  return config;
}, function (error) {
  return Promise.reject(error)
});

//返回拦截
Axios.interceptors.response.use(function (response) {
  Toast.hide()
  return response.data
}, function (error) {
  return Promise.reject(error)
});
export default Axios