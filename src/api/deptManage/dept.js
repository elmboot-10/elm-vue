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
/**
 * 根据id查询部门
 * @param params
 * @returns {AxiosPromise}
 */
export function getDeptById(params) {
  return request({
    url: "/dept_manage/getDeptById",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}
/**
 * 修改部门
 * @param params
 * @returns {AxiosPromise}
 */
export function update(params) {
  return request({
    url: "/dept_manage/update",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}

/**
 * 删除部门
 * @param params
 * @returns {AxiosPromise}
 */
export function deleteDept(params) {
  return request({
    url: "/dept_manage/delete",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}