import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'weixin/article',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'weixin/article/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'weixin/article',
    method: 'put',
    data
  })
}

export function publish(id) {
  return request({
    url: 'weixin/article/publish/' + id,
    method: 'get'
  })
}

export function get(id) {
  return request({
    url: 'weixin/article/info/' + id,
    method: 'get'
  })
}
