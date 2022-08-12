import request from '@/utils/request'

export async function findRecord(params = {}) {
  return request.post(`/api/hashResult/findRecord`, params)
}
