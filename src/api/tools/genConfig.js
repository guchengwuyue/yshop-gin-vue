import request from '@/utils/request'

export function get(tableName) {
  return request({
    url: 'tools/gen/config/' + tableName,
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: 'tools/gen/config',
    data,
    method: 'put'
  })
}
