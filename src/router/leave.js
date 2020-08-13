import Layout from "@/views/layout/App.vue";
export default {
  path: "/leaveManage",
  component: Layout,
  name: "Leave_Manage",
  redirect: "/leaveManage/category",
  meta: {
    title: "离职管理"
  },
  children: [
    {
      path: "category",
      name: "LeaveManagecategory",
      meta: {
        title: "离职操作"
      },
      component: resolve =>
        require(["@/views/leaveManage/leaveList/leave.vue"], resolve)
    }
  ]
};