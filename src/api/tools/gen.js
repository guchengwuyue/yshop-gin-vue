import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'tool/gen',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'tool/gen',
    method: 'delete',
    data: ids
  })
}

export function save(data) {
  return request({
    url: 'tools/gen/columns',
    method: 'put',
    data
  })
}

export function importTable(data) {
  return request({
    url: 'tools/gen/import',
    method: 'post',
    data
  })
}

export function preview(tableName) {
  return request({
    url: 'tools/gen/preview/' + tableName,
    method: 'get'
  })
}

export function generator(tableName) {
  return request({
    url: 'tools/gen/code/' + tableName,
    method: 'get'
  })
}

export default { add, save, del, importTable, generator }
