<template>
  <div class="bbb">
    <el-row>
      <el-col :span="12" :offset="6">
        <div class="demo-block">
          <el-form ref="form" :model="rule-Form" class="aaa" label-width="80px">
            <div class="inLine">
              <el-form-item label="员工号" required>
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="姓名" required>
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="出生日期" required>
                <el-date-picker
                  v-model="value1"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="身份证号" required>
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="部门" required>
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="职位" required>
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="入职日期" required>
                <el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="工作日期" required>
                <el-date-picker v-model="value3" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="用工形式" required>
                <el-select placeholder="用工形式">
                  <el-option label="正式员工"></el-option>
                  <el-option label="实习员工"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="人员来源" required>
                <el-select placeholder="选择来源">
                  <el-option label="校园招聘"></el-option>
                  <el-option label="社会招聘"></el-option>
                  <el-option label="其他"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="联系电话" required>
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱" required>
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="试用期间" required>
                <el-date-picker
                  v-model="value2"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  align="right"
                ></el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
      },
      value1: "",
      value2: "",
      value3: ""
    };
  }
};
</script>