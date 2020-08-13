<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6">
        <div class="bbb">
          <div class="demo-block">
            <el-form
              :model="ruleForm"
              :rules="rules"
              status-icon
              ref="ruleForm"
              class="aaa"
              label-width="80px"
            >
              <div class="inLine">
                <el-form-item label="员工号" prop="empno" required>
                  <el-input v-model="ruleForm.empno" autocomplete="off"></el-input>
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
                    :picker-options="pickerOptions"
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
                <el-form-item label="部门" prop="deptname" required>
                  <el-input v-model="ruleForm.deptname"></el-input>
                </el-form-item>
                <el-form-item label="职位" prop="job" required>
                  <el-input v-model="ruleForm.job"></el-input>
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
                  <el-button @click="resetForm()">取消</el-button>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template> 
<style>
.bbb {
  width: 700px;
  box-sizing: border-box;
  border: 1px solid #444;
  border-radius: 3px;
}
.demo-block{
  padding: 20px 50px 20px 35px;
}
/* hover选择器 */
.bbb:hover .demo-blo {
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
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
// import { dataEntry } from "@/api/staffEnro/staffEnro";
export default {
  data() {
    //员工号输入规则
    var checkEmpno = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("员工号不能为空"));
      } else {
        this.$axios
          .post(
            "staff/isExistStaff",
            this.$qs.stringify({
              empno: this.ruleForm.empno
            })
          )
          .then(res => {
            if (res.data >= 1) {
              return callback(new Error("员工号已存在"));
            } else return callback();
          })
          .catch(error => {
            console.error(error);
          });
      }
    };
    //部门输入规则
    var checkDept = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("部门不能为空"));
      } else {
        this.$axios
          .post(
            "staff/isExistDept",
            this.$qs.stringify({
              deptname: this.ruleForm.deptname
            })
          )
          .then(res => {
            if (res.data == 0) {
              return callback(new Error("部门不存在!"));
            } else return callback();
          })
          .catch(error => {
            console.error(error);
          });
      }
    };
    //职位输入规则
    var checkJob = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("职位不能为空"));
      } else {
        this.$axios
          .post(
            "staff/isExistJob",
            this.$qs.stringify({
              job: this.ruleForm.job
            })
          )
          .then(res => {
            if (res.data == 0) {
              return callback(new Error("职位不存在!"));
            } else return callback();
          })
          .catch(error => {
            console.error(error);
          });
      }
    };
    //-------------------
    return {
      ruleForm: {
        empno: "",
        empname: "",
        birthday: "",
        idNum: "111111111111111111",
        tel: "11111111111",
        email: "",
        deptname: "",
        job: "",
        entrydate: "",
        workdate: "",
        empform: "",
        source: ""
        // probationary: ""
      },
      rules: {
        empno: [
          { validator: checkEmpno, trigger: "blur" },
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
        deptname: [{ validator: checkDept, trigger: "blur" }],
        job: [{ validator: checkJob, trigger: "blur" }],
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
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (!valid) {
          // alert('submit!');
          console.log("error submit!!");
          return false;
        }
        console.log(this.ruleForm);
        this.$axios
        //qs传递数据，后端不需要RequestBody
          .post("staff/dataEntry", this.$qs.stringify(this.ruleForm))
          .then(res => {
            if (res == 1) {
              this.$message.success("员工信息已录入");
              this.resetForm();
            } else {
              this.$message.error("因某些原因员工信息录入失败！");
            }
          })
          .catch(error => {
            console.error(error);
          });
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  }
};
</script>