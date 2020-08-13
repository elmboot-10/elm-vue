import Layout from "@/views/layout/App.vue";
export default {
  path: "/dept_manage",
  component: Layout,
  name: "DeptManage",
  redirect: "/dept_manage/list",
  meta: {
    title: "部门管理"
  },
  children: [
    {
      path: "list",
      name: "DeptManageList",
      meta: {
        title: "部门列表"
      },
      component: resolve =>
        require(["@/views/deptManage/deptList/Index.vue"], resolve)
    },
    {
      path: "newdept",
      name: "NewDept",
      meta: {
        title: "新建部门"
      },
      component: resolve => require(["@/views/deptManage/newDept/Index.vue"], resolve)
    }
  ]
};
