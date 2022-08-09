import request from '@/utils/request'

export async function findByGameId(params = {}) {
  return request.get(`/api/hashOdds/findByGameId/${params.id}`)
}
