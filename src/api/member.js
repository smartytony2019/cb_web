import request from '@/utils/request'

/**
 * 转换
 * @param {Object} params 参数
 * @returns Promise
 */
export async function transfer(params = {}) {
  return request.post(`/api/member/transfer`, params)
}

/**
 * 会员余额
 * @param {Object} params 参数
 * @returns Promise
 */
export async function balance(params = {}) {
  return request.post(`/api/member/balance/${params.deep}`, params)
}

/**
 * 会员信息
 * @param {Object} params 参数
 * @returns Promise
 */
export async function info(params = {}) {
  return request.get(`/api/member/info`, params)
}

/**
 * 提现
 * @param {Object} params 参数
 * @returns Promise
 */
export async function withdraw(params = {}) {
  return request.post(`/api/member/withdraw`, params)
}

/**
 * 登录
 * @param {Object} params 参数
 * @returns Promise
 */
export async function login(params = {}) {
  console.log('login method', params)
  return request.post(`/api/member/login`, params)
}

/**
 * 登出
 * @param {Object} params 参数
 * @returns Promise
 */
export async function logout(params = {}) {
  return request.post(`/api/member/logout`, params)
}

/**
 * 注册
 * @param {Object} params 参数
 * @returns Promise
 */
export async function register(params = {}) {
  return request.post(`/api/member/register`, params)
}
