<template>
  <div class="bbb">
    <el-row>
      <el-col :span="12" :offset="6">
        <div class="demo-block">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="aaa" label-width="80px">
            <div class="inLine">
              <el-form-item label="序号" prop="num">
                <el-input v-model="ruleForm.num"></el-input>
              </el-form-item>
              <el-form-item label="工号" prop="empno">
                <el-input v-model="ruleForm.empno" @blur="checkempno"></el-input>
              </el-form-item>
              <el-form-item label="姓名" prop="ename">
                <el-input v-model="ruleForm.ename"></el-input>
              </el-form-item>
              <el-form-item label="出生日期" prop="birth">
                <el-date-picker
                  v-model="ruleForm.birth"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="身份证号" prop="idnum">
                <el-input v-model="ruleForm.idnum"></el-input>
              </el-form-item>
                <el-form-item label="部门编号" prop="form">
                <el-select placeholder="选择编号" v-model="ruleForm.form">
                  <el-option label="10" value="regular"></el-option>
                  <el-option label="20" value="intern"></el-option>
                  <el-option label="30" value="regular"></el-option>
                  <el-option label="40" value="regular"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="岗位编号" prop="job">
                <el-select placeholder="选择编号" v-model="ruleForm.job">
                  <el-option label="11" value="regular"></el-option>
                  <el-option label="22" value="intern"></el-option>
                  <el-option label="33" value="regular"></el-option>
                  <el-option label="44" value="regular"></el-option>
                </el-select>
                </el-form-item>
              <el-form-item label="入职时间" prop="entime">
                <el-date-picker
                  v-model="ruleForm.entime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-form-item>
                 <el-form-item label="工作时间" prop="wtime">
                <el-date-picker
                  v-model="ruleForm.wtime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
                 </el-form-item>     
                <el-form-item label="职工类型" prop="form">
                <el-select placeholder="用工形式" v-model="ruleForm.form">
                  <el-option label="正式员工" value="regular"></el-option>
                  <el-option label="实习员工" value="intern"></el-option>
                </el-select>
                </el-form-item> 
              <el-form-item label="人员来源" prop="resource">
                <el-select placeholder="选择来源" v-model="ruleForm.resource">
                  <el-option label="校园招聘" value="school"></el-option>
                  <el-option label="社会招聘" value="society"></el-option>
                  <el-option label="其他" value="other"></el-option>
                </el-select>
              </el-form-item>             
               <el-form-item label="电话号码" prop="tel">
                <el-input v-model="ruleForm.tel"></el-input>
              </el-form-item>
               <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
  width: 700px;
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
        num:"",
        empno:"",
        ename:"",
        birth:"",
        idnum:"",
        deptno:"",
        job:"",
        entime:"",
        wtime:"",
        form:"",
        resource:"",
        tel:"",
        email:"",
      },
      rules: {
         num: [
          { required: true, message: "序号不能为空", trigger: 'blur' },
          { min: 1, max: 2, message: "长度至少为10个字符", trigger: 'blur' }
        ],

        empno: [
          { required: true, message: "工号不能为空", trigger: 'blur' },
          { min: 10, max: 11, message: "长度至少为10个字符", trigger: 'blur' }
        ],
         ename: [
           { required: true, message: "姓名不能为空", trigger: "blur" }
         ],
         birth: [
           {
             type: "date",
             required: true,
             message: "请选择日期",
             trigger: "change"
           }
         ],
         entime: [
           { required: true, message: "入职时间不能为空", trigger: "blur" },
         ],
        wtime: [
           { required: true, message: "工作时间不能为空", trigger: "blur" },
         ],
         idnum: [
           { required: true, message: "身份证号不能为空", trigger: "blur" },
           { min: 18, max: 18, message: "请检查身份证号是否正确", trigger: "blur" }
         ],
         tel: [
           { required: true, message: "手机号不能为空", trigger: "blur" },
           { min: 11, max: 11, message: "请检查手机号是否正确", trigger: "blur" }
         ],
         email: [
           { required: true, message: "邮箱地址不能为空", trigger: "blur" },
         ],        
         form: [
           { required: true }
         ],

        job: [
           { required: true}
         ],
         resource: [
           { required: true, message: "请选择人员来源", trigger: "change" }
         ],
      },
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
  methods:{
    submitForm(){
        this.$axios
         .post("user/insert",this.$qs.stringify(this.ruleForm))
         .then(res => {
           if(res.data > 0){
             this.$message.success("注册成功");
           }
           else{
             this.$message.error("注册失败")
           }
         })
         .catch(e => {
           this.$message.error("服务器内部发生异常")
           console.log(e)
         });
    },
    cancel(){
       this.$router.push({ path: "/user_manage/list" });
          },
    checkempno(){
         this.$axios
         .post("user/isexistuser",this.$qs.stringify({ empno: this.ruleForm.empno }))
         .then(res => {
           if(res.data == 1){
             this.$message.error("工号已存在");
           }
           else{
             this.$message.success("该工号可以使用")
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