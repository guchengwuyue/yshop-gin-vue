import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'weixin/user',
    method: 'post',
    data
  })
}

export function del(uid) {
  return request({
    url: 'weixin/user/' + uid,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'weixin/user',
    method: 'put',
    data
  })
}

export function onStatus(id, data) {
  return request({
    url: 'weixin/user/onStatus/' + id,
    method: 'post',
    data
  })
}

export function editp(data) {
  return request({
    url: 'weixin/user/money',
    method: 'post',
    data
  })
}

export function getSpread(data) {
  return request({
    url: 'weixin/user/spread',
    method: 'post',
    data
  })
}
