
<template>
<div>
<el-dialog  
    @opened="openDialog"
    :width="dialogWidth"
    :title="title"
    :visible.sync="showSearcDialog"
    :show-close="false"
    :close-on-click-modal="false">
  <el-table :data="gridData">
    <el-table-column property="empno" label="id" width="150"></el-table-column>
    <el-table-column property="ename" label="姓名" width="200"></el-table-column>
    <el-table-column property="tel" label="电话"></el-table-column>
  </el-table>
   <el-button type="primary" @click="submit">确认</el-button>
</el-dialog>
</div>
</template>
<script>
import {
  Boolean,
 } from "@/utils/validateRules";   
import {userlist} from "@/api/mypost/mypost";
// import { getUserById} from "@/api/mypost/mypost";
export default {
    props: {
        title: {
            type: String,
            default: "当前岗位员工信息"
        },
        dialogWidth: {
            type: String,
            default: "700px"
        },
        labelWidth: {
            type: String,
            default: "120px"
        },
        showSearcDialog: Boolean
    },
    data(){
        return{
              forms:[],
              job:0,
             gridData:[]
                
        };
    },
    methods:{
      initData(){
       
      },
        openDialog(){
           console.log( parseInt(this.$parent.editjnum));
        //  getUserById({job:  parseInt(this.$parent.editjnum) })
        //    .then(res => {
        //      if(res.job == getjob)
        //    this.gridData = res;
        //    })
        //    .catch(e => {
        //    console.log(e);
        //    });
           userlist({
          job:parseInt(this.$parent.editjnum),
      })
      .then(r => {
          this.gridData = r;
        })
        .catch(e => {
          console.log(e);
        });
        },
        submit(){
          this.$parent.showSearcDialog = false;
        }
    },

}


</script>