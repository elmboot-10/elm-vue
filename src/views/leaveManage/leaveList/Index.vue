<template>
  <div>
      <el-table :data="tableData" border style="width: 100%">
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
          <el-button type="primary" size="small" @click="routeDemo(s.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="removeItem(s.row)">删除</el-button>
        </div>
      </el-table-column>
    </el-table> 
  </div>
</template>

<script>
import { leave } from "@/api/leave/leave";
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    leave()
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
    removeItem(row) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          row.d = 0;
          // updateStatus({ id: row.id})
          //   .then(r => {
          //     this.$message({
          //       type: "success",
          //       message: "操作成功!"
          //     });
          //     this.refresh();
          //   })
          //   .catch(() => {});
        })
        .catch(() => {});
    }
  }
};
</script>
