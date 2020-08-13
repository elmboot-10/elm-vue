<template>
<el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
import { users , deleteuser } from "@/api/user/user";
export default {
  data() {
    return {
       tabPosition: 'left',
    };
  },
  created() {
    users()
      .then(r => {
        this.tableData = r;
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    routeDemo() {
      this.$message.info("待添加");
    },
    handleClick(tab, event) {
        console.log(tab, event);
      },
    removeItem(empno) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteuser({empno})
           .then(r=>{
             if(r==1){
               this.$message({
                 type:"success",
                 message:"操作成功"
               });
               this.refresh();
             }else{
               this.$message({
                 type:"error",
                 message:"操作失败！"
               });
             }
           })
             .catch(()=>{})
        })
        .catch(() => {});
    },
    add(){
            this.$router.push({ path: "/add" ,name:"Add" });
          },
          refresh(){
            this.initData();
          }
  }
};
</script>