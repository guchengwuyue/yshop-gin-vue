import request from '@/utils/request'

export function getPage(query) {
  return request({
    url: 'admin/material',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: 'admin/material',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: 'admin/material/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: 'admin/material/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: 'admin/material',
    method: 'put',
    data: obj
  })
}
