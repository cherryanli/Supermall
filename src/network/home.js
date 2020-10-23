import { request } from './request'
//对首页所有url进行管理
export function getHomeUrl() {
  return request({
    url: '/home/multidata'
  })
}
export function  getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}
