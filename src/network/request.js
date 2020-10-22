import axios from 'axios'
export function request(config) {
  //创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //添加请求拦截器
  instance.interceptors.request.use(
    config => {
      //在请求之前做什么
      return config
    },
    err => {
      //请求出错做什么
      console.log(err)
    }
  ),
    //添加响应拦截器
    instance.interceptors.response.use(
      res => {
        //对响应数据做什么
        return res.data
      },
      err => {
        //响应出错做什么
        console.log(err)
      }
    )
  //发送真正网络请求
  return instance(config)
}
