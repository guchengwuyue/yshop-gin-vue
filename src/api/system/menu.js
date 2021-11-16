import request from '@/utils/request'

export function getMenusTree() {
  return request({
    url: 'admin/menu/listtree',
    method: 'get'
  })
}

export function buildMenus() {
  return request({
    url: 'admin/menu/build',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: 'admin/menu',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'admin/menu',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'admin/menu',
    method: 'put',
    data
  })
}

export default { add, edit, del, getMenusTree }
