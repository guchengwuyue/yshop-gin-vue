import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'shop/product/addOrSave',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'shop/product/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'shop/product',
    method: 'put',
    data
  })
}

export function onsale(id, data) {
  return request({
    url: 'shop/product/onsale/' + id,
    method: 'post',
    data
  })
}

export function recovery(id) {
  return request({
    url: 'shop/product/recovery/' + id,
    method: 'delete'
  })
}

export function isFormatAttr(id, data) {
  return request({
    url: 'shop/product/isFormatAttr/' + id,
    method: 'post',
    data
  })
}

export function isFormatAttrForActivity(id, data) {
  return request({
    url: 'shop/product/isFormatAttrForActivity/' + id,
    method: 'post',
    data
  })
}
export function setAttr(id, data) {
  return request({
    url: 'shop/product/setAttr/' + id,
    method: 'post',
    data
  })
}

export function clearAttr(id) {
  return request({
    url: 'shop/product/clearAttr/' + id,
    method: 'post'
  })
}

export function getAttr(id) {
  return request({
    url: 'shop/product/attr/' + id,
    method: 'get'
  })
}

export function getInfo(id) {
  return request({
    url: 'shop/product/info/' + id,
    method: 'get'
  })
}
