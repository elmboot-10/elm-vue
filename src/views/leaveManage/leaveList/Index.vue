<template>
  <div>
      <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="leaveId" label="编号"></el-table-column>
      <el-table-column prop="userId" label="员工编号"></el-table-column>
      <el-table-column prop="leaveName" label="离职员工姓名"></el-table-column>
      <el-table-column prop="bmName" label="部门名称"></el-table-column>
      <el-table-column prop="gwName" label="岗位名称"></el-table-column>
      <el-table-column prop="enTime" label="入职时间"></el-table-column>
      <el-table-column prop="leaveTime" label="离职时间"></el-table-column>
      <el-table-column prop="leaveTt" label="离职分类"></el-table-column>
      <el-table-column prop="leaveReason" label="离职原因"></el-table-column>
      <el-table-column fixed="right" label="操作" width="240">
        <div slot-scope="s">
          <el-button type="primary" size="small" @click="editItem(s.row.leaveId)">编辑</el-button>
          <el-button type="danger" size="small" @click="removeItem(s.row.leaveId)">删除</el-button>
        </div>
      </el-table-column>
       </el-table>
       <Edit :showEditDialog="showEditDialog" @close= "showEditDialog = false" @success="refresh()"/>
  </div>
</template>

<script>
import { leave,deleteleave } from "@/api/leave/leave";
import Edit from './Edit';
export default {
  components:{Edit},
  data() {
    return {
      tableData: [],
      showEditDialog: false,
      editUserId: null
    };
  },
  created() {this.initData();},
  methods: {
    initData(){
      leave()
      .then(r => {
        this.tableData = r;
      })
      .catch(e => {
        console.log(e);
      });
      },
    editItem(leaveId){
      this.editUserId =leaveId;
      this.showEditDialog = true;
    },
    removeItem(leaveId) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
         deleteleave({leaveId})
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
    refresh() {
      this.initData();
    },
  }
};
</script>
