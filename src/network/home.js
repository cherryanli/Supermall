import { request } from './request'
//对首页所有url进行管理
export function getHomeUrl() {
  return request({
    url: '/home/multidata'
  })
}
