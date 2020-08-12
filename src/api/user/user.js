import request from "@/utils/request.js";
/**
 * 用户列表
 * @param params
 * @returns {AxiosPromise}
 */
export function users(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/user/list",
    method: "get",
    params: params, //注意：如果是get请求请使用 params: params
  });
}

export function deleteuser(params) {
  return request({
    url: "/user/delete",
    method: "post",
    data: params, 
  });
}
