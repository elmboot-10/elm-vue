export default {
  name: "用户管理",
  permissionsKey: "",
  icon: "fa fa-users",
  children: {
    courseCardList: {
      name: "用户列表",
      permissionsKey: "",
      path: "/user_manage/list",
    },
    organCardList: {
      name: "信息处理",
      permissionsKey: "",
      path: "/user_manage/info",
    },
  },
};
