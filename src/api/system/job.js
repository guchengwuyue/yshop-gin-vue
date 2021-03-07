import request from '@/utils/request'

export function getAllJob(deptId) {
  const params = {
    deptId,
    page: 0,
    size: 9999
  }
  return request({
    url: 'admin/job',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'admin/job',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'admin/job',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'admin/job',
    method: 'put',
    data
  })
}

export default { add, edit, del }
