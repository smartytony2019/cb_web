import request from '@/utils/request'

export async function submit(params = {}) {
  return request.post(`/api/hashBet/submit`, params)
}
