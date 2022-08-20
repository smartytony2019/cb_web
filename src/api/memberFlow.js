import request from '@/utils/request'

/**
 * 查找会员流水
 * @param {Object} params 参数
 * @returns Promise
 */
export async function findPage(params = {}) {
  return request.post(`/api/memberFlow/findPage/${params.current}/${params.size}`, params)
}
