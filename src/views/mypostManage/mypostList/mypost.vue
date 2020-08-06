<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>ybh</span>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="jnum" label="岗位号" width="140">
        </el-table-column>
        <el-table-column prop="jname" label="岗位名" width="120">
        </el-table-column>
        <el-table-column prop="jtype" label="岗位类型">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
<script>
import { myposts } from "@/api/mypost/mypost";
export default {
  data() {
    return { tableData: [] };
  },
  created() {
    myposts()
      .then(r => {
        this.tableData = r;
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
  }
};
</script>