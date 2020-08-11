import Layout from "@/views/layout/App.vue";
export default {
  path: "/leave_manage",
  component: Layout,
  name: "LeaveManage",
  redirect: "/leave_manage/list",
  meta: {
    title: "离职管理"
  },
  children: [
    {
      path: "list",
      name: "LeaveManageList",
      meta: {
        title: "离职人员查询"
      },
      component: resolve =>
        require(["@/views/leaveManage/leaveList/Index.vue"], resolve)
    }
  ]
};
