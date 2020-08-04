import articleManage from "./articleManage.js";
import userManage from "./userManage.js";

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
let home = {
  name: "首页",
  path: "/",
  permissionsKey: "",
  icon: "fa fa-tachometer",
};

export default {
  home,
  articleManage,
  userManage,
  //helpCenter
};
