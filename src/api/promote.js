import request from '@/utils/request'

/**
 * 我的团队
 * @param {Object} params 参数
 * @returns Promise
 */
export async function myTeam(params = {}) {
  return request.post(`/api/myTeam`)
}

/**
 * 我的业绩
 * @param {Object} params 参数
 * @returns Promise
 */
export async function myPerformance(params = {}) {
  return request.post(`/api/myPerformance`)
}

/**
 * 团队业绩
 * @param {Object} params 参数
 * @returns Promise
 */
export async function teamPerformance(params = {}) {
  return request.post(`/api/teamPerformance`)
}

/**
 * 代理返佣表
 * @param {Object} params 参数
 * @returns Promise
 */
export async function rebate(params = {}) {
  return request.post(`/api/rebate`)
}

/**
 * 申请佣金
 * @param {Object} params 参数
 * @returns Promise
 */
export async function applySubmit(params = {}) {
  return request.post(`/api/applySubmit`)
}

