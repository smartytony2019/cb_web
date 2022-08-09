import request from '@/utils/request'

export async function find(params = {}) {
  return request.get(`/api/game/find/${params.id}`)
}
