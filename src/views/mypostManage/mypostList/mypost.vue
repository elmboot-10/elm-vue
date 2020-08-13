<template>
<div>
<el-container style="height: 500; border: 1px solid #eee">

    <el-header style="text-align: left; font-size: 24px;font-weight:700">
      <div>无论遇到什么困难都不要怕，微笑着面对他。消除恐惧的最好办法就是面对恐惧，加油，奥利给(doge)</div>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="jnum" label="岗位号" width="100">
        </el-table-column>
        <el-table-column prop="jname" label="岗位名" width="100">
        </el-table-column>
        <el-table-column prop="jtype" label="岗位类型" width="100">
        </el-table-column>
       
        <el-table-column  label="最大限制人数" width="150">
            
         </el-table-column>

         <el-table-column  label="改" width="100">
          <div slot-scope="s">
            <el-button  type="primary" icon="el-icon-edit"  @click="editItem(s.row.jnum)"></el-button>
          </div>
         </el-table-column>

         <el-table-column  label="删" width="100">
          <div slot-scope="s">
            <el-button type="primary" icon="el-icon-delete" @click="removeItem(s.row.jnum)"></el-button>
          </div>
         </el-table-column>

        <el-table-column  label="查" width="100">
          <div slot-scope="s">
            <el-button type="primary" icon="el-icon-search" @click="searchItem(s.row.jnum)"></el-button>
          </div>
        </el-table-column>
      
      </el-table>
      <div style="text-align:left">
      <el-button type="text" icon="el-icon-circle-plus" @click="toinsert">添加岗位</el-button>
      </div>
    </el-main>
  
</el-container>
<Edit :showEditDialog="showEditDialog" @close="showEditDialog = false" @success="refresh()" />
<Searc :showSearcDialog="showSearcDialog" @close="showSearcDialog = false" @success="refresh()"/>
</div>
</template>
<style>
  .el-header {
    background-color: rgb(255, 255, 255);
    color: rgb(14, 233, 160);
    line-height: 60px;
    margin: 1vh;
  }
  .el-aside {
    color: rgb(170, 184, 168);
  }
</style>
<script>
import { myposts ,deletePosi} from "@/api/mypost/mypost";
import Edit from "./Edit.vue";
import Searc from "./Searc.vue";
export default {
  data() {
    return {
       tableData: [] ,
       editjnum:"",
       showEditDialog: false,
       showSearcDialog:false,
      };   
  },
  created() {
    this.initData();
   
  },
  methods: {
   initData(){
       myposts()
      .then(r => {
        this.tableData = r;
      })
      .catch(e => {
        console.log(e);
      });
    },
    editItem(jnum) {
  //  console.log(jnum);
    this.editjnum=jnum;
    this.showEditDialog = true;
    },
    removeItem(jnum) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deletePosi({ jnum })
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
    searchItem(jnum){
     this.editjnum=jnum;
    this.showSearcDialog = true;
    },
    toinsert() {
        this.$router.push({ path: "/instpost" ,name:"instPost" });
    },
    
    refresh() {
      this.initData();
    },
  },
  components: {Edit, Searc}
};
</script>