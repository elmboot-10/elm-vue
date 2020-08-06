import Layout from "@/views/layout/App.vue";
export default {
  path: "/mypost_manage",
  component: Layout,
  name: "PostManage",
  redirect: "/mypost_manage/list",
  meta: {
    title: "用户管理",
  },
  children: [
    {
      path: "list",
      name: "PostManageList",
      meta: {
        title: "用户列表",
      },
      component: (resolve) =>
        require(["@/views/mypostManage/mypostList/mypost.vue"], resolve),
    },
  ],
};
