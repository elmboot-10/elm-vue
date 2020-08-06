import Layout from "@/views/layout/App.vue";
export default {
  path: "/staff_enrolling",
  component: Layout,
  name: "staff_enrolling",
  redirect: "/staff_enrolling/data_entry",
  meta: {
    title: "员工入职管理",
  },
  children: [
    {
      path: "data_entry",
      name: "StaffDataEntry",
      meta: {
        title: "员工信息录入",
      },
      component: (resolve) =>
        require(["@/views/staffEnro/dataEntry/Index.vue"], resolve),
    },
    {
      path: "labour_pool",
      name: "SearchLabourPool",
      meta: {
        title: "人才库检索",
      },
      component: (resolve) =>
        require(["@/views/staffEnro/labourPool/Index.vue"], resolve),
    },
  ],
};