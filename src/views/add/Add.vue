<template>
  <div class="bbb">
    <el-row>
      <el-col :span="12" :offset="6">
        <div class="demo-block">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="aaa" label-width="80px">
            <div class="inLine">
              <h3 class="line">员工信息</h3>
         <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
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
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
              </el-form-item>




              <el-form-item label="身份证号" prop="idnum">
                <el-input v-model="ruleForm.idnum"></el-input>
              </el-form-item>
              <el-form-item label="部门编号" prop="deptno">
                <el-select placeholder="选择编号" v-model="ruleForm.deptno">
                  <el-option
                    v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.deptno"
                  >
                  </el-option>            
                </el-select>
              </el-form-item>
              <el-form-item label="岗位编号" prop="job">
                <el-select placeholder="选择编号" v-model="ruleForm.job">
                  <el-option
                  v-for="item in option"
                   :key="item.value"
                   :label="item.label"
                   :value="item.job"
                  >
                  </el-option>  
                </el-select>
              </el-form-item>

              <el-form-item label="入职时间" prop="entime">
                <el-date-picker
                  v-model="ruleForm.entime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
              </el-form-item>


              <el-form-item label="工作时间" prop="wtime">
                <el-date-picker
                  v-model="ruleForm.wtime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
              </el-form-item>   




                <el-form-item label="职工类型" prop="form">
                <el-select placeholder="用工形式" v-model="ruleForm.form">
                  <el-option
                   v-for="item in option1"
                   :key="item.value"
                   :label="item.label"
                   :value="item.form"            
                  >
                  </el-option>
                </el-select>
                </el-form-item> 


              <el-form-item label="人员来源" prop="resource">
                <el-select placeholder="选择来源" v-model="ruleForm.resource">
                  <el-option   
                   v-for="item in option2"
                   :key="item.value"
                   :label="item.label"
                   :value="item.resource"                 
                  >
                  </el-option>  
                </el-select>
              </el-form-item>    

               <el-form-item label="电话号码" prop="tel">
                <el-input v-model="ruleForm.tel"></el-input>
              </el-form-item>
               <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm()">立即创建</el-button>
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
        empno: "",
        ename: "",
        birth: "",
        idnum: "",
        deptno: "0",
        job: "0",
        entime: "",
        wtime: "",
        form: "",
        resource: "",
        tel: "",
        email: "",
      },
      options: [
        {
          value: "选项1",
          deptno: "10"
        },
        {
          value: "选项2",
          deptno: "20"
        },
        {
          value: "选项3",
          deptno: "30"
        },
                {
          value: "选项4",
          deptno: "40"
        },
      ],
      option: [
        {
          value: "选项1",
          job: "11"
        },
        {
          value: "选项2",
          job: "22"
        },
                {
          value: "选项3",
          job: "33"
        },
                {
          value: "选项4",
          job: "44"
        },
      ],
       option1: [
        {
          value: "选项1",
          form: "正式员工"
        },
        {
          value: "选项2",
          form: "雇佣工"
        },
      ],
       option2: [
        {
          value: "选项1",
          resource: "校园招聘"
        },
        {
          value: "选项2",
          resource: "社会招聘"
        },
      ],
      
      rules: {

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