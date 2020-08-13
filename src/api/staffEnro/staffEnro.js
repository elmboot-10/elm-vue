import request from "@/utils/request.js";
/**
 * 向后端发送表单内容
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

/**
 * 请求人才库列表
 * @param params
 * @returns {AxiosPromise}
 */
export function talentlist(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/talent/list",
    method: "get",
    params: params, //注意：如果是get请求请使用 params: params
  });
}

/**
 * 请求人才库列表
 * @param params
 * @returns {AxiosPromise}
 */
export function talentlistpage(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/talent/listpage",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}