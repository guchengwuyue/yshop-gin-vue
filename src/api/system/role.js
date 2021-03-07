import request from '@/utils/request'

// 获取所有的Role
export function getAll() {
  return request({
    url: 'admin/roles',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: 'admin/roles',
    method: 'post',
    data
  })
}

export function get(id) {
  return request({
    url: 'admin/roles/' + id,
    method: 'get'
  })
}


export function del(ids) {
  return request({
    url: 'admin/roles',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'admin/roles',
    method: 'put',
    data
  })
}

export function editMenu(data) {
  return request({
    url: 'admin/roles/menu',
    method: 'put',
    data
  })
}

export default { add, edit, del, get, editMenu }
