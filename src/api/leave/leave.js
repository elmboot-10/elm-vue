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
      method: "post",
     data: params, //注意：如果是get请求请使用 params: params
    });
  }
/**
 * 查看离职人员
 * @param params
 * @returns {AxiosPromise}
 */
export function look(params) {
  return request({
    url: "/leave_mag/look",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}
    /**
 * 添加离职人员
 * @param params
 * @returns {AxiosPromise}
 */
export function insert(params) {
  return request({
    url: "/leave_mag/insert",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}
/**
 * 根据id查询离职人员
 * @param params
 * @returns {AxiosPromise}
 */
export function getleaveById(params) {
  return request({
    url: "/leave_mag/getLeaveById",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}
/**
 * 修改离职人员信息
 * @param params
 * @returns {AxiosPromise}
 */
export function update(params) {
  return request({
    url: "/leave_mag/update",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}

/**
 * 删除离职人员
 * @param params
 * @returns {AxiosPromise}
 */
export function deleteleave(params) {
  return request({
    url: "/leave_mag/delete",
    method: "post",
    data: params, //注意：如果是get请求请使用 params: params
  });
}

