import request from '@/utils/request'

export function delAllInfo() {
  return request({
    url: 'api/logs/del/info',
    method: 'delete'
  })
}
