<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" >

      <el-table-column prop="num" label="序号"></el-table-column>
      <el-table-column prop="empno" label="工号"></el-table-column>
      <el-table-column prop="ename" label="姓名"></el-table-column>
      <el-table-column prop="birth" label="出生年月"></el-table-column>
      <el-table-column prop="idnum" label="身份证号"></el-table-column>
      <el-table-column prop="deptno" label="所在部门"></el-table-column>
      <el-table-column prop="job" label="所在岗位"></el-table-column>
      <el-table-column prop="entime" label="入职时间"></el-table-column>
      <el-table-column prop="wtime" label="工作时间"></el-table-column>
      <el-table-column prop="form" label="员工类型"></el-table-column>


      <el-table-column prop="resource" label="入职来源"></el-table-column>
   
      <el-table-column prop="tel" label="电话"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>


      <el-table-column fixed="right" label="操作" width="100">
        <div slot-scope="s">
          <el-button type="primary" size="small" @click="routeDemo(s.row)">离职</el-button>
        </div>
      
      </el-table-column>
   
    </el-table>
    <el-button type="primary" @click="leaving()">离职</el-button>
  </div>
</template>
<script>
import { users  } from "@/api/user/user";
export default {
  data() {
    return {
      tableData: []
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
    leave() {
      this.$message.info("待添加");
    },
    leaving(){
            this.$router.push({ path: "/leave" ,name:"Leave" });
          },
          refresh(){
            this.initData();
          }
  }
};
</script>