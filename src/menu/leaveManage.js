export default {
    name: "离职管理",
    permissionsKey: "",
    icon: "fa fa-envelope-open",
    children: {
      courseCardList: {
        name: "人员列表",
        permissionsKey: "",
        path: "/leave_manage/list"
      },
      organCardList: {
        name: "离职操作",
        permissionsKey: "",
        path: "/leaveManage/category"
      }
    }
  };
  