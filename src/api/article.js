import request from '@/utils/request'

export function getList(pageIndex) {
  return request({
    url: '/topics',
    method: 'get'
  })
}