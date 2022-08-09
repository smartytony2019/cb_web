import request from '@/utils/request'

export async function findAll(params = {}) {
  return request.get(`/api/category/findAll`)
}

