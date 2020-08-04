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
      name: "用户分类",
      permissionsKey: "",
      path: "/user_manage/category",
    },
  },
};
