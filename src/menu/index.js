import deptManage from "./deptManage.js";
import userManage from "./userManage.js";
import staffEnro from "./staffEnro.js";
import mypostManege from "./mypostManage.js";
/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
let home = {
  name: "首页",
  path: "/home",
  permissionsKey: "",
  icon: "fa fa-tachometer",
};

export default {
  home,
  deptManage,
  userManage,
  staffEnro,
  mypostManege,
  //helpCenter
};
