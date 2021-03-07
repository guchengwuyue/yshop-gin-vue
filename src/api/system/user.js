import request from '@/utils/request'
import { encrypt } from '@/utils/rsaEncrypt'

export function add(data) {
  return request({
    url: 'admin/user',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'admin/user',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'admin/user',
    method: 'put',
    data
  })
}

export function editUser(data) {
  return request({
    url: 'admin/user/center',
    method: 'put',
    data
  })
}

export function updatePass(user) {
  const data = {
    oldPass: user.oldPass,
    newPass: user.newPass
  }
  return request({
    url: 'admin/user/updatePass/',
    method: 'post',
    data
  })
}

// 用户头像上传
export function uploadAvatar(data) {
  return request({
    url: '/admin/user/updateAvatar',
    method: 'post',
    data: data
  })
}



export default { add, edit, del,uploadAvatar }

