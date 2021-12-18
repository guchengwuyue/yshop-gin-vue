import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'weixin/menu',
    method: 'post',
    data
  })
}

export function del(key) {
  return request({
    url: 'weixin/menu/' + key,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'weixin/menu',
    method: 'put',
    data
  })
}

export function get() {
  return request({
    url: 'weixin/menu',
    method: 'get'
  })
}
