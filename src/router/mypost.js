import Layout from "@/views/layout/App.vue";
export default {
  path: "/mypost_manage",
  component: Layout,
  name: "PostManage",
  redirect: "/mypost_manage/list",
  meta: {
    title: "岗位管理",
  },
  children: [
    {
      path: "list",
      name: "PostManageList",
      meta: {
        title: "岗位信息管理1",
      },
      component: (resolve) =>
        require(["@/views/mypostManage/mypostList/mypost.vue"], resolve),
    },
  ],
};
