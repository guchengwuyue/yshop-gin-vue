import request from '@/utils/request'

export function add(data, id) {
  return request({
    url: `shop/rule/save/${id}`,
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'shop/rule',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'shop/rule',
    method: 'put',
    data
  })
}

export function info(id) {
  return request({
    url: `shop/rule/${id}`,
    method: 'get'
  })
}

export default { add, edit, del, info }
