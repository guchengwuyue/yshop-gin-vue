import request from '@/utils/request'

export function getDepts(params) {
  return request({
    url: 'admin/dept',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'admin/dept',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'admin/dept',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'admin/dept',
    method: 'put',
    data
  })
}

export function getDeptSuperior(data) {
  return request({
    url: 'admin/dept',
    method: 'get',
    data
  })
}

export default { add, edit, del, getDepts, getDeptSuperior }
