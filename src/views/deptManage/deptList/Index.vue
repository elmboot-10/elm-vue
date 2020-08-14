<template>
  <div>
    <div style="display:flex;">
        <div style="flex:3">
         
          <el-input  v-model="tableData.dname" placeholder="请输入部门名称" style="width: 60%">
          </el-input>&nbsp;

          <el-button slot="append" icon="el-icon-search" @click="initdata"></el-button>

        </div>
        <div>
          <el-button   class="fa fa-plus-square" aria-hidden="true" type="success" size="small" @click="newItem()">&nbsp;新建部门</el-button> 
        </div>
    </div>
      
     <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="deptno" label="部门编号"></el-table-column>
      <el-table-column prop="dname" label="部门"></el-table-column>
      <el-table-column prop="location" label="所在地"></el-table-column>
      <el-table-column prop="tel" label="部门电话"></el-table-column>
      <el-table-column prop="setuptime" label="成立时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="240">
        <div slot-scope="s">
          <el-button type="primary" size="small" @click="routeDemo(s.row.deptno)">编辑</el-button>
          <el-button type="danger" size="small" @click="removeItem(s.row.deptno)">删除</el-button>
        </div>
      </el-table-column>
    </el-table> 
  </div>
</template>

<script>
import { depts ,deleteDept} from "@/api/deptManage/dept";
export default {
  data() {
    return {
      tableData: [{
        dname: "",
        location: "",
        tel: 0,
        setuptime: ""}]
    };
  },
  created() {
    this.initDate()
  },
  methods: {
    initDate(){
    depts()
      .then(r => {
        this.tableData = r;
      })
      .catch(e => {
        console.log(e);
      });
      depts({

      })
    },
    newItem() {
      this.$router.push({ path: "/dept_manage/newdept"});
    },
    routeDemo(){
      this.$message.info("待编辑！");
    },
    removeItem(deptno) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
        deleteDept({ deptno })
            .then(r => {
              if (r == 1) {
                this.$message({
                  type: "success",
                  message: "操作成功!"
                });
                this.refresh();
              } else {
                this.$message({
                  type: "error",
                  message: "操作失败!"
                });
              }
            })
            .catch(() => {});
        })
        .catch(() => {});
    },
    refresh(){
      this.initDate();
    }
  }
};
</script>
