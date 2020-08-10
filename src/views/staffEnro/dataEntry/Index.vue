<template>
  <div class="bbb">
    <el-row>
      <el-col :span="12" :offset="6">
        <div class="demo-block">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="aaa" label-width="80px">
            <div class="inLine">
              <el-form-item label="员工号" prop="empno">
                <el-input v-model="ruleForm.empno"></el-input>
              </el-form-item>
              <el-form-item label="姓名" prop="empname">
                <el-input v-model="ruleForm.empname"></el-input>
              </el-form-item>
              <el-form-item label="出生日期" prop="birthday">
                <el-date-picker
                  v-model="ruleForm.birthday"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="身份证号" prop="IDnum">
                <el-input v-model="ruleForm.IDnum"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" prop="tel">
                <el-input v-model="ruleForm.tel"></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱" prop="emil">
                <el-input v-model="ruleForm.emil"></el-input>
              </el-form-item>
              <el-form-item label="部门号" prop="deptno">
                <el-input v-model="ruleForm.deptno"></el-input>
              </el-form-item>
              <el-form-item label="职位" prop="job">
                <el-input v-model="ruleForm.job"></el-input>
              </el-form-item>
              <el-form-item label="入职日期" prop="entrydate">
                <el-date-picker v-model="ruleForm.entrydate" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="工作日期" prop="workdate">
                <el-date-picker v-model="ruleForm.workdate" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="用工形式" prop="empform">
                <el-select placeholder="用工形式" v-model="ruleForm.empform">
                  <el-option label="正式员工" value="regular"></el-option>
                  <el-option label="实习员工" value="intern"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="人员来源" prop="source">
                <el-select placeholder="选择来源" v-model="ruleForm.source">
                  <el-option label="校园招聘" value="school"></el-option>
                  <el-option label="社会招聘" value="society"></el-option>
                  <el-option label="其他" value="other"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="试用期间" prop="probationary">
                <el-date-picker
                  v-model="ruleForm.probationary"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  align="right"
                ></el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button>取消</el-button>
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
        name:"",
        empno: "",
        empname: "",
        birthday: "",
        IDnum: "",
        tel: "",
        emil: "",
        deptno: "",
        job: "",
        entrydate: "",
        workdate: "",
        empform: "",
        source: "",
        probationary: ""
      },
      rules: {
        empno: [
          { required: true, message: "员工号不能为空", trigger: 'blur' },
          { min: 1, max: 8, message: "长度在 1 到 8 个字符", trigger: 'blur' }
        ],
         empname: [
           { required: true, message: "姓名不能为空", trigger: "blur" }
         ],

         birthday: [
           {
             type: "date",
             required: true,
             message: "请选择日期",
             trigger: "change"
           }
         ],
         IDnum: [
           { required: true, message: "身份证号不能为空", trigger: "blur" },
           { min: 18, max: 18, message: "请检查身份证号是否正确", trigger: "blur" }
         ],
         tel: [
           { required: true, message: "手机号不能为空", trigger: "blur" },
           { min: 11, max: 11, message: "请检查手机号是否正确", trigger: "blur" }
         ],
         emil: [
           { required: true, message: "邮箱地址不能为空", trigger: "blur" },
         ],
         deptno: [
           { required: true, message: "部门号不能为空", trigger: "blur" }
         ],
         job: [
           { required: true, message: "工作不能为空", trigger: "blur" }
         ],
         entrydate: [
           {
             type: "date",
             required: true,
             message: "请选择入职日期",
             trigger: "change"
           }
         ],
         workdate: [
           {
             type: "date",
             required: true,
             message: "请选择工作日期",
             trigger: "change"
           }
         ],
         empform: [
           { required: true, message: "请选择用工形式", trigger: "change" }
         ],
         source: [
           { required: true, message: "请选择人员来源", trigger: "change" }
         ],
         probationary: [
           {
             type: "daterange",
             required: true,
             message: "请选择日期",
             trigger: "change"
           }
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
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
    };
  },
  methods:{
    submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
      })
    }
  }
};
</script>