import request from '@/utils/request'

export async function transfer(params = {}) {
  return request.post(`/api/member/transfer`, params)
}

export async function balance(params = {}) {
  return request.post(`/api/member/balance`, params)
}
