<template>
  <div class="bbb">
    <el-row>
      <el-col :span="12" :offset="6">
        <div class="demo-block">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="aaa" label-width="80px">
            <div class="inLine">
              <el-form-item label="员工号" prop="empno">
                <el-input v-model="ruleForm.empno" @blur="checkUserId"></el-input>
              </el-form-item>
              <el-form-item label="姓名" prop="empname">
                <el-input v-model="ruleForm.empname"></el-input>
              </el-form-item>
              <el-form-item label="出生日期" prop="birthday">
                <el-date-picker
                  v-model="ruleForm.birthday"
                  align="right"
                  value-format="yyyy-MM-dd"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="身份证号" prop="idNum">
                <el-input v-model="ruleForm.idNum"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" prop="tel">
                <el-input v-model="ruleForm.tel"></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item label="部门" prop="deptname">
                <el-input v-model="ruleForm.deptname" @blur="checkdept"></el-input>
              </el-form-item>
              <el-form-item label="职位" prop="job">
                <el-input v-model="ruleForm.job" @blur="checkjob"></el-input>
              </el-form-item>
              <el-form-item label="入职日期" prop="entrydate">
                <el-date-picker
                  v-model="ruleForm.entrydate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="工作日期" prop="workdate">
                <el-date-picker
                  v-model="ruleForm.workdate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="用工形式" prop="empform">
                <el-select placeholder="用工形式" v-model="ruleForm.empform">
                  <el-option label="正式员工" value="正式员工"></el-option>
                  <el-option label="实习员工" value="实习员工"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="人员来源" prop="source">
                <el-select placeholder="选择来源" v-model="ruleForm.source">
                  <el-option label="校园招聘" value="校园招聘"></el-option>
                  <el-option label="社会招聘" value="社会招聘"></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
              </el-form-item>
              <!--     <el-form-item label="试用期间" prop="probationary">
                <el-date-picker
                  v-model="ruleForm.probationary"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  align="right"
                ></el-date-picker>
              </el-form-item>-->
              <el-form-item>
                <el-button type="primary" @click="submitForm()">立即创建</el-button>
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
import { dataEntry } from "@/api/staffEnro/staffEnro";
export default {
  data() {
    return {
      ruleForm: {
        empno: "2222",
        empname: "",
        birthday: "",
        idNum: "111111111111111111",
        tel: "11111111111",
        email: "222222",
        deptname: "卫生部",
        job: "技术员",
        entrydate: "",
        workdate: "",
        empform: "",
        source: ""
        // probationary: ""
      },
      rules: {
        empno: [
          { required: true, message: "员工号不能为空", trigger: "blur" },
          { min: 1, max: 12, message: "长度在 1 到 12 个字符", trigger: "blur" }
        ],
        empname: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
        birthday: [
          {
            // type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        idNum: [
          { required: true, message: "身份证号不能为空", trigger: "blur" },
          {
            min: 18,
            max: 18,
            message: "请检查身份证号是否正确",
            trigger: "blur"
          }
        ],
        tel: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          { min: 11, max: 11, message: "请检查手机号是否正确", trigger: "blur" }
        ],
        email: [
          { required: true, message: "邮箱地址不能为空", trigger: "blur" }
        ],
        deptname: [
          { required: true, message: "部门不能为空", trigger: "blur" }
        ],
        job: [{ required: true, message: "职位不能为空", trigger: "blur" }],
        entrydate: [
          {
            // type: "date",
            required: true,
            message: "请选择入职日期",
            trigger: "change"
          }
        ],
        workdate: [
          {
            // type: "date",
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
        ]
        //  probationary: [
        //    {
        //      type: "daterange",
        //      required: true,
        //      message: "请选择日期",
        //      trigger: "change"
        //    }
        //  ],
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
  methods: {
    // formatDate(row) {
    //   //时间戳转换
    //   let date = new Date(parseInt(row.subscribeTime) * 1000);
    //   let Y = date.getFullYear() + "-";
    //   let M =
    //     date.getMonth() + 1 < 10
    //       ? "0" + (date.getMonth() + 1) + "-"
    //       : date.getMonth() + 1 + "-";
    //   let D =
    //     date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
    //   let h =
    //     date.getHours() < 10
    //       ? "0" + date.getHours() + ":"
    //       : date.getHours() + ":";
    //   let m =
    //     date.getMinutes() < 10
    //       ? "0" + date.getMinutes() + ":"
    //       : date.getMinutes() + ":";
    //   let s =
    //     date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    //   return Y + M + D + h + m + s;
    // },
    checkUserId() {
      if(this.ruleForm.empno=="null"){
        return
      }
      this.$axios
        .post(
          "user/isexistuser",
          this.$qs.stringify({
            empno: this.ruleForm.empno
          })
        )
        .then(res => {
          if (res.data >= 1) {
            // alert("员工号已存在！");
            this.$message.error("员工号已存在!");
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    checkdept() {
      if(this.ruleForm.deptname==""){
        return
      }
      this.$axios
        .post(
          "dept_manage/isexistdept",
          this.$qs.stringify({
            dname: this.ruleForm.deptname
          })
        )
        .then(res => {
          if (res.data == 0) {
            this.$message.error("部门不存在!");
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    checkjob() {
      if(this.ruleForm.job==""){
        return
      }
      this.$axios
        .post(
          "posi/isexistjob",
          this.$qs.stringify({
            jname: this.ruleForm.job
          })
        )
        .then(res => {
          if (res.data == 0) {
            this.$message.error("职位不存在!");
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (!valid) {
          // alert('submit!');
          console.log("error submit!!");
          return false;
        }
        console.log(this.ruleForm);
        dataEntry(this.ruleForm)
          .then(res => {
            if (res.data == 1) {
              this.$message.success("员工信息已录入");
            } else {
              this.$message.error("因某些原因员工信息录入失败！");
            }
          })
          .catch(error => {
            console.error(error);
          });
      });
    }
  }
};
</script>