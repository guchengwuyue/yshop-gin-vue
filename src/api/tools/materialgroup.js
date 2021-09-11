import request from '@/utils/request'

export function getPage(query) {
  return request({
    url: 'admin/materialgroup/page',
    method: 'get',
    params: query
  })
}

export function getList(query) {
  return request({
    url: 'admin/materialgroup',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: 'admin/materialgroup',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: 'admin/materialgroup/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: 'admin/materialgroup/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: 'admin/materialgroup',
    method: 'put',
    data: obj
  })
}
