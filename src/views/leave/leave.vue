<template>
  <div class="bbb">
    <el-row>
      <el-col :span="12" :offset="6">
        <div class="demo-block">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="aaa" label-width="80px">
            <div class="inLine">
              <h3 class="line">离职操作</h3>
         <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
              <el-form-item label="员工编号" prop="userId">
                <el-input v-model="ruleForm.userId" @blur="checkempno"></el-input>
              </el-form-item>
              <el-form-item label="员工姓名" prop="leaveName">
                <el-input v-model="ruleForm.leaveName"></el-input>
              </el-form-item>
              <el-form-item label="离职时间" prop="leaveTime">
                <el-date-picker
                  v-model="ruleForm.leaveTime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
              </el-form-item>
                <el-form-item label="离职类型" prop="leaveTt">
                <el-select placeholder="离职原因" v-model="ruleForm.leaveTt">
                  <el-option
                   v-for="item in option1"
                   :key="item.value"
                   :label="item.label"
                   :value="item.form"    >         
                  </el-option>
                </el-select>
             </el-form-item> 
               <el-form-item label="离职详细原因" prop="leaveReason">
                <el-input v-model="ruleForm.leaveReason"></el-input>
              </el-form-item>
               <el-form-item>
                <el-button type="primary" @click="submitForm()">离职</el-button>
                <el-button @click="cancel()">取消</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template> 
<style>
.demo-block {
  width: 600px;
  box-sizing: border-box;
  padding: 20px 50px 20px 35px;
  border: 1px solid #444;
  border-radius: 3px;
  background: #ffffff;
}
.line {
  text-align: center;
}
.inLine {
  width: 460px;
}
.el-row {
  margin-bottom: 20px;
}
.aaa {
  border-radius: 4px;
  min-height: 36px;
}
</style>
<script>
export default {
  data() {
    return {
      ruleForm: {
        userId:"",
       leaveName:"",
        leaveTime:"",
        leaveTt:"",
        leaveReason:"",
      },
       option1: [
        {
          value: "主动离职",
          form: "主动离职"
        },
        {
          value: "辞退",
          form: "辞退"
        },
        {
        value: "退休",
        form: "退休"},
        {
        value: "开除",
        form: "开除"},
        {
        value: "试用期未通过",
        form: "试用期未通过"
        },
      ],
      rules: {

        userId: [
          { required: true, message: "员工号不能为空", trigger: 'blur' },
          { min: 1, max: 11, message: "长度至少为1个字符", trigger: 'blur' }
        ],
         leaveName: [
           { required: true, message: "姓名不能为空", trigger: "blur" }
         ],   
         leavetime: [
           { required: true, message: "离职时间不能为空", trigger: "blur" },
         ],
         leaveTt: [
           { required: true, message: "请选择离职原因", trigger: "change" }
         ],
        leaveReason: [
           { required: true, message: "离职详细原因不能为空", trigger: "blur" },
           { min: 1, max:100, message: "长度至少为1个字符", trigger: 'blur' }
         ],        
      },

    };
  },
  methods:{
    submitForm(){
        this.$axios
         .post("leave_mag/insert",this.$qs.stringify(this.ruleForm))
         .then(res => {
           if(res.data > 0){
             this.$message.success("离职成功");
             this.$router.push({ path: "/leave_manage/list" });
           }
           else{
             this.$message.error("离职失败！")
           }
         })
         .catch(e => {
           this.$message.error("服务器内部发生异常")
           console.log(e)
         });
    },
    cancel(){
       this.$router.push({ path: "/leaveManage/category" });
          },
        checkempno(){
         this.$axios
         .post("leave_mag/isexistleave",this.$qs.stringify({ userId: this.ruleForm.userId }))
         .then(res => {
           if(res.data == 1){
             this.$message.error("员工已离职");
           }
           else{
             this.$message.success("员工未离职")
           }
         })
         .catch(e => {
           this.$message.error("服务器内部发生异常")
           console.log(e)
         });
    },
   },
};
</script>