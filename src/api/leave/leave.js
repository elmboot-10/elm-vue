import request from "@/utils/request.js";
/**
 * 离职人员列表
 * @param params
 * @returns {AxiosPromise}
 */
export function leave(params) {
    return request({
      // closeLoading: true,
      // closeInterceptors: true,
      url: "/leave_mag/list",
      method: "get",
      params: params, //注意：如果是get请求请使用 params: params
    });
  }