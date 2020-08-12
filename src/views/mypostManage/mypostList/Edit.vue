<template>
<el-dialog
    @opened="openDialog"
    :width="dialogWidth"
    :title="title"
    :visible.sync="showEditDialog"
    :show-close="false"
    :close-on-click-modal="false"
  >
    <div>
        <el-form :model="forms" class="edit-container" label-width="12vw">
         <el-form-item label="修改当前职位名" prop="jname" >
          <el-input type="text"  v-model="forms.jname" placeholder="3~8位字母或数字"></el-input>
          </el-form-item>
          <el-form-item label="修改职位类型" prop="jtype">
         <el-select  v-model="forms.jtype" placeholder="请选择职位类型">
          <el-option
            v-for="item in posttypes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
          </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align:center">
          <el-button @click="$emit('close')">取 消</el-button>
          <el-button type="primary" @click="submit">确认</el-button>
        </div>
  </div>
</el-dialog>
</template>
<script>
import {
  Boolean,
 } from "@/utils/validateRules";   
import { getPosiById ,update} from "@/api/mypost/mypost";
export default {
    props: {
    title: {
      type: String,
      default: "编辑"
    },
    dialogWidth: {
      type: String,
      default: "700px"
    },
    labelWidth: {
      type: String,
      default: "120px"
    },
    showEditDialog: Boolean
  },
  data(){
        return{
            forms: {
                jnum:"",
                jname:"",
                jtype:""
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
  created() {
    this.initData(); //页面加载就初始化商品类型数据
  },
  methods:{
        initData(){},
        submit(){
         update(this.forms)
            .then(r => {
              if (r == 1) {
                this.$message({
                  message: "操作成功",
                  type: "success"
                });
                this.$emit("success"); //通知列表分页刷新
                this.$parent.showEditDialog = false;
              } else {
                this.$message({
                  message: "操作失败",
                  type: "error"
                });
              }
            })
            .catch(() => {});   
        },
    openDialog() {
      // console.log(this.$parent.editjnum);
      //根据foodId读取一个食品信息
      console.log(this.$parent);
      getPosiById({ jnum: this.$parent.editjnum })
        .then(res => {
          this.forms = res;
        })
        .catch(e => {
          console.log(e);
        });
    },
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
.edit-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 500px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
}

</style>