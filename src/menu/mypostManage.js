export default {
    name: "岗位管理",
    permissionsKey: "",
    icon: "fa fa-user-plus",
    children: {
      courseCardList: {
        name: "岗位信息管理1",
        permissionsKey: "",
        path: "/mypost_manage/list",
      },
      organCardList: {
        name: "岗位信息管理2",
        permissionsKey: "",
        path: "/mypost_manage/waiting",
      },
    },
  };
  