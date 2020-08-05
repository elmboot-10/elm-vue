<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="userId" label="账号"></el-table-column>
      <el-table-column prop="userName" label="用户名"></el-table-column>
      <el-table-column prop label="姓名">
        <template slot-scope="s">
          <span v-if="s.row.userSex==1">男</span>
          <span v-else>女</span>
        </template>
      </el-table-column>
      <el-table-column prop label="图像">
        <template slot-scope="s">
          <img :src="s.row.userImg" alt />
        </template>
      </el-table-column>
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
import { users } from "@/api/user/user";
export default {
  data() {
    return {
      tableData: []//test
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