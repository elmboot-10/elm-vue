<template>
  <el-dialog
  @opened="openDialog"
  :width="dialogWidth"
  :title="title"
  :visible.sync="showEditDialog"
  :show-close="false"
  :close-on-click-modal="false"
  >
 <el-form :model="editForm" :rules="rules"  ref="editForm" label-position="left" :label-width="labelWidth" >
    <div>
      <el-form-item label="编号" prop="leaveId">
                <el-input v-model="editForm.leaveId"></el-input>
      </el-form-item>
      <el-form-item label="员工编号" prop="userId">
                <el-input v-model="editForm.userId"></el-input>
      </el-form-item>
      <el-form-item label="离职人员名称" prop="leaveName">
                <el-input v-model="editForm.leaveName"></el-input>
      </el-form-item>
      <el-form-item label="部门名称" prop="bmName">
                <el-input v-model="editForm.bmName"></el-input>
      </el-form-item>
      <el-form-item label="岗位名称" prop="gwName">
                <el-input v-model="editForm.gwName"></el-input>
      </el-form-item>
      <el-form-item label="入职日期" prop="enTime">
                <el-date-picker
                  v-model="editForm.enTime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
      </el-form-item>
      <el-form-item label="离职日期" prop="leaveTime">
                <el-date-picker
                  v-model="editForm.enTime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
      </el-form-item>
      <el-form-item label="离职类型" prop="leaveTt">
                <el-select placeholder="离职类型" v-model="editForm.leaveTt">
                  <el-option label="主动辞职" value="zd"></el-option>
                  <el-option label="辞退" value="ct"></el-option>
                  <el-option label="退休" value="tx"></el-option>
                   <el-option label="开除" value="kc"></el-option>
                    <el-option label="试用期未通过" value="nottongguo"></el-option>
                </el-select>
                </el-form-item> 
      <el-form-item label="离职原因" prop="leaveReason">
                <el-input v-model="editForm.leaveReason"></el-input>
      </el-form-item>
    </div>
  </el-form>
        <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('close')">取 消</el-button>
      <el-button type="primary" @click="submit">确认</el-button>
    </div>
  </el-dialog>
</template>
<script>
import {getleaveById, update } from "@/api/leave/leave";
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
      editForm:{
        userId: '',
        leaveName:'',
        bmName:'',
        gwName:'',
        enTime:'',
        leaveTime:'',
        leaveTt:'',
        leaveReason:''
      },
      rules:{},
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
         
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          },
                    {
            text: "一年前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 365);
              picker.$emit("pick", date);
            }
          },
        ]
      }
    };
  },
  created(){ this.initData(); },
methods:{
  initData(){},
  submit(){this.$refs.editForms.validate(valid => {
        if (valid) {
          this.$message({
            message: "字段验证通过，提交请求，成功后刷新分页！",
            type: "success"
          });
          update(this.editForm)
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
        } else {
          this.$message({
            message: "请按照提示正确填写内容！",
            type: "warning"
          });
          return false;
        }
      });
    },
  openDialog(){
    console.log(this.$parent.editUserId);
    getleaveById({leaveId:this.$parent.editUserId})
    .then(res =>{
      this.editForm =res;
    })
    .catch(e=>{
      console.log(e);
    });
  },
}
}
</script>
