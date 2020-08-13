<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>人才库</span>
        <el-input placeholder="输入姓名以检索" v-model="tname" class="input-with-search">
          <el-button slot="append" icon="el-icon-search" @click="initdata"></el-button>
        </el-input>
        <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
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
.input-with-search{
  margin-left: 60px;
  border-radius: 10px;
  width: 70%;
}
</style>
<script>
import { talentlistpage } from "@/api/staffEnro/staffEnro";
export default {
  data() {
    return {
      //分页查询需要用到的数据
      pageNo: 1,
      pageSize: 10,
      total: 0,
      tname:"",
      talentpool: []
    };
  },
  created() {
    this.initdata();
  },
  methods: {
    initdata() {
      talentlistpage({ pageNo: this.pageNo, pageSize: this.pageSize ,tname: this.tname})
        .then(r => {
          //绑定后端map类型数据
          this.talentpool = r.talentList;
          this.total = r.counts;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>