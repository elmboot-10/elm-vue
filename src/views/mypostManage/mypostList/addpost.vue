<template>
    <div>
        <el-form class="login-container"  label-width="10vw">
        <el-form-item  label="添加岗位id"  >
        <el-input type="text" style="width:90%" v-model="mypostForm.jnum" placeholder="1~5位数字"></el-input>
      </el-form-item>
      <el-form-item label="设置职位名" >
        <el-input type="text" style="width:90%" v-model="mypostForm.jname" placeholder="3~8位字母或数字"></el-input>
      </el-form-item>
      <el-form-item label="设置职位类型"  style="width: 100%;">
        <el-select  v-model="mypostForm.jtype" placeholder="请选择职位类型">
          <el-option
            v-for="item in posttypes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item  >
        <el-button type="success" round @click="addfinish">添加</el-button>
        <el-button type="primary" round @click="back">返回</el-button>
      </el-form-item>
      </el-form>
  </div>
</template>
<script>
import { insert } from "@/api/mypost/mypost";
export default {
    data(){
        return{
            mypostForm: {
                jnum: "",
                jname: "",
                jtype: ""
      },
            posttypes: [
            {
                value: "管理",
                label: "管理"
            },
            {
                value: "技术",
                label: "技术"
            },
            {
                value: "营销",
                label: "营销"
            },
            {
                value: "市场",
                label: "市场"
            },
            ]
        }
    },
    methods:{
        addfinish(){
        insert(this.mypostForm)
        .then(r => {
              if (r == 1) {
                  console.log(this.mypostForm);
                this.$message({
                  message: "操作成功",
                  type: "success"
                });
              }else {
                this.$message({
                  message: "操作失败",
                  type: "error"
                });
              }
             })
        .catch(() => {});     
        },
        back(){
             this.$router.push({ path: "/mypost_manage/list" });
        }
    },
    
}
</script>
<style>
body {
  /* background:url("../../assets/thresh.jpeg"); */
  background-position: center;
  margin: 0px;
  padding: 0;
}
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 500px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
}

</style>