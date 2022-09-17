import request from '@/utils/request'

/**
 * 查询类目
 * @param {Object} params 参数
 * @returns Promise
 */
export async function findCate(params = {}) {
  return request.post(`/api/activity/findCate`, params)
}

/**
 * 查询单条
 * @param {Object} params 参数
 * @returns Promise
 */
export async function find(params = {}) {
  return request.post(`/api/activity/find`, params)
}

/**
 * 查询所有
 * @param {Object} params 参数
 * @returns Promise
 */
export async function findAll(params = {}) {
  return request.post(`/api/activity/findAll`, params)
}

/**
 * 查询所有
 * @param {Object} params 参数
 * @returns Promise
 */
export async function submit(params = {}) {
  return request.post(`/api/activity/submit`, params)
}

