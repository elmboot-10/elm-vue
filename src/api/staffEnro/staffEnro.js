import request from "@/utils/request.js";
/**
 * 用户列表
 * @param params
 * @returns {AxiosPromise}
 */
export function dataEntry(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/staff/dataEntry",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}
