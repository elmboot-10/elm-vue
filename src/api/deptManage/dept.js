import request from "@/utils/request.js";

/**
 * 部门列表
 * @param params
 * @returns {AxiosPromise}
 */
export function depts(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/dept_manage/list",
    method: "get",
    params: params, //注意：如果是get请求请使用 params: params
  });
}