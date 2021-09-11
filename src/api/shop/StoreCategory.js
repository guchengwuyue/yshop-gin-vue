import request from '@/utils/request'

export function getCates(params) {
  return request({
    url: 'shop/cate',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'shop/cate',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'shop/cate',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'shop/cate',
    method: 'put',
    data
  })
}

export default { add, edit, del, getCates }
