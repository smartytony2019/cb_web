import request from '@/utils/request'

export async function transfer(params = {}) {
  return request.post(`/api/member/transfer`, params)
}

export async function balance(params = {}) {
  return request.post(`/api/member/balance/${params.deep}`, params)
}

export async function info(params = {}) {
  return request.get(`/api/member/info`, params)
}
export async function withdraw(params = {}) {
  return request.post(`/api/member/withdraw`, params)
}
