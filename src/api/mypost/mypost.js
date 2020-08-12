import request from "@/utils/request.js";

/**
 * 登录
 * @param params
 * @returns {AxiosPromise}
 */
export function login(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/user/login",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}
/**
 * 岗位列表
 * @param params
 * @returns {AxiosPromise}
 */
export function myposts(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/posi/list",
    method: "get",
    params: params, //注意：如果是get请求请使用 params: params
  });
}
  /**
 * 添加岗位
 * @param params
 * @returns {AxiosPromise}
 */
export function insert(params) {
  return request({
    url: "/posi/insert",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}
/**
 * 根据id查询岗位
 * @param params
 * @returns {AxiosPromise}
 */
export function getPosiById(params) {
  return request({
    url: "/posi/getFoodById",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}
/**
 * 修改岗位
 * @param params
 * @returns {AxiosPromise}
 */
export function update(params) {
  return request({
    url: "/posi/update",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}

/**
 * 删除岗位
 * @param params
 * @returns {AxiosPromise}
 */
export function deletePosi(params) {
  return request({
    url: "/posi/delete",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}

