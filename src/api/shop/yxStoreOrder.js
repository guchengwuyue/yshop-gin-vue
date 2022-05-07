import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'shop/order',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'shop/order/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'shop/order',
    method: 'put',
    data
  })
}

export function updateDelivery(data) {
  return request({
    url: 'shop/order/updateDelivery',
    method: 'put',
    data
  })
}

export function editT(data) {
  return request({
    url: 'shop/order/check',
    method: 'put',
    data
  })
}

export function refund(data) {
  return request({
    url: 'shop/order/refund',
    method: 'post',
    data
  })
}

export function editOrder(data) {
  return request({
    url: 'shop/order/edit',
    method: 'post',
    data
  })
}

export function remark(data) {
  return request({
    url: 'shop/order/remark',
    method: 'post',
    data
  })
}

export function get() {
  return request({
    url: 'shop/express',
    method: 'get'
  })
}

export function express(data) {
  return request({
    url: 'shop/order/express',
    method: 'post',
    data
  })
}

export function getOrderDetail(id) {
  return request({
    url: 'api/getStoreOrderDetail/' + id,
    method: 'get'
  })
}

export function getNowOrderStatus(id) {
  return request({
    url: '/api/getNowOrderStatus/' + id,
    method: 'get'
  })
}
