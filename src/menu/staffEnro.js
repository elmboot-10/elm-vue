export default {
    name: "员工入职管理",
    permissionsKey: "",
    icon: "fa fa-user-plus",
    children: {
      courseCardList: {
        name: "员工信息录入",
        permissionsKey: "",
        path: "/staff_enrolling/data_entry",
      },
      organCardList: {
        name: "人才库检索",
        permissionsKey: "",
        path: "/staff_enrolling/labour_pool",
      },
    },
  };
  