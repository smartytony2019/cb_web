import request from '@/utils/request'

/**
 * 我的团队
 * @param {Object} params 参数
 * @returns Promise
 */
export async function financial(params = {}) {
  return request.post(`/api/statistics/financial/${params.current}/${params.size}`, params)
}

/**
 * 我的团队
 * @param {Object} params 参数
 * @returns Promise
 */
export async function promote(params = {}) {
  return request.post(`/api/statistics/promote/${params.current}/${params.size}`, params)
}
