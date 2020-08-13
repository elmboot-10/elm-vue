<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>人才库</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="initdata">刷新</el-button>
      </div>
      <el-table :data="talentpool" style="width: 100%">
        <el-table-column prop="tname" label="姓名" width="100" align="center"></el-table-column>
        <el-table-column prop="tel" label="电话" width="130" align="center"></el-table-column>
        <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
        <el-table-column prop="idNum" label="证件号" align="center"></el-table-column>
      </el-table>
      <div class="aaaa">
        <el-pagination
          small
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="total"
          @current-change="changePage"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 700px;
}
.aaaa {
  width: 100%;
  text-align: center;
}
</style>
<script>
import { talentlistpage } from "@/api/staffEnro/staffEnro";
export default {
  data() {
    return {
      pageNo: 1,
      pageSize: 10,
      total: 0,
      talentpool: [],
    };
  },
  created() {
    this.initdata();
  },
  methods: {
    changePage(val){
      this.pageNo=val;
      this.initdata();  
    },
    initdata() {
      talentlistpage({pageNo:this.pageNo,pageSize:this.pageSize})
        .then(r => {
          this.talentpool = r.talentList;
          this.total=r.counts;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>