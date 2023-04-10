import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'tools/timing',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'tools/timing',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'tools/timing',
    method: 'put',
    data
  })
}

export function updateIsPause(id) {
  return request({
    url: 'tools/timing/stop/' + id,
    method: 'put'
  })
}

export function execution(id) {
  return request({
    url: 'tools/timing/exec/' + id,
    method: 'put'
  })
}

export default { del, updateIsPause, execution, add, edit }
