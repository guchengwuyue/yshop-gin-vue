import request from '@/utils/request'

export function login(username, password, code, uuid) {
  return request({
    url: 'admin/auth/login',
    method: 'post',
    data: {
      username,
      password,
      code,
      uuid
    }
  })
}

export function getInfo() {
  return request({
    url: 'admin/auth/info',
    method: 'get'
  })
}

export function getCodeImg() {
  return request({
    url: 'admin/auth/captcha',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: 'admin/auth/logout',
    method: 'delete'
  })
}
