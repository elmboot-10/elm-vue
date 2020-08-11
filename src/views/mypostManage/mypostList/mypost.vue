<template>

<el-container style="height: 500; border: 1px solid #eee">
  <el-container>
    <el-header style="text-align: left; font-size: 24px;font-weight:700">
      <div>无论遇到什么困难都不要怕，微笑着面对他;消除恐惧的最好办法就是面对恐惧，加油，奥利给!!(doge)</div>
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
          <div >
            <el-button  type="primary" icon="el-icon-edit"  @click="changeDemo"></el-button>
          </div>
         </el-table-column>

         <el-table-column  label="删" width="100">
          <div >
            <el-button type="primary" icon="el-icon-delete" @click="removeItem"></el-button>
          </div>
         </el-table-column>

          <el-table-column  label="查" width="100">
          <div >
            <el-button type="primary" icon="el-icon-search" @click="searchItem"></el-button>
          </div>
         </el-table-column>
      
      </el-table>
    </el-main>
     
  
  </el-container>
  
</el-container>

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
import { myposts } from "@/api/mypost/mypost";
export default {
  data() {
    return {
       tableData: [] ,
      };   
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
    changeDemo() {
    
    },
    removeItem() {
     
    },
    searchIdem(){

    },
  }
};
</script>