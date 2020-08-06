export default {
  name: "部门管理",
  permissionsKey: "",
  icon: "fa fa-envelope-open",
  children: {
    courseCardList: {
      name: "部门列表",
      permissionsKey: "",
      path: "/dept_manage/list"
    },
    organCardList: {
      name: "部门分类",
      permissionsKey: "",
      path: "/deptManage/category"
    }
  }
};
