import request from '@/utils/request'

export async function submit(params = {}) {
  return request.post(`/api/hashBet/submit`, params)
}

export async function findOrder(params = {}) {
  return request.get(`/api/hashBet/findOrder/${params.sn}`)
}
