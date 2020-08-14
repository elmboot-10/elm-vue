<template>
<div>
  <el-row>
    <el-col :span="12" :offset="6">
    <div  class="demo-block">
      <el-form :model="deptForm" :rules="rules" ref="deptForm" class="aaa" label-width="80px" >
        <div class="inLine">  
          <h3 class="line">新建部门</h3>
         <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
          <el-form-item label="部门编号" prop="deptno">
            <el-input type="text" @blur="checkdeptno" v-model="deptForm.deptno"  placeholder="例如：11"></el-input>
          </el-form-item>
         <el-form-item label="部门名称" prop="dname">
            <el-input type="text" v-model="deptForm.dname" auto-complete="off" placeholder="例如：设计部"></el-input>
          </el-form-item>
             <el-form-item label="部门位置" prop="location">
            <el-input type="text" v-model="deptForm.location" auto-complete="off" placeholder="例如：宜昌"></el-input>
          </el-form-item>
            <el-form-item label="部门电话" prop="tel">
            <el-input type="text" v-model="deptForm.tel" auto-complete="off" placeholder="例如：0718-322522"></el-input>
             </el-form-item>
           <el-form-item label="设立日期" prop="setuptime">
                <el-date-picker
                  v-model="deptForm.setuptime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
              </el-form-item>
           
                <el-form-item class="line">
                      <el-button type="primary" @click="submitForm()">确定</el-button>
                      <el-button @click="cancel()">返回</el-button>
                </el-form-item> 
        </div>
      </el-form>
    </div>
  </el-col>
  </el-row>
</div>
</template>
<script>
export default {
  data() {
    return {
      deptForm: {
        deptno: "",
        dname: "",
        location: "",
        tel: "",
        setuptime: ""},
        rules: {
        deptno: [
          { required: true, message: "部门编号不能为空", trigger: 'blur' },
          { min: 2, max: 11, message: "长度至少为2个字符", trigger: 'blur' }
        ],
         dname: [
           { required: true, message: "部门名称不能为空", trigger: "blur" }
         ],
          location: [
           { required: true, message: "部门不能为空", trigger: "blur" }
         ],
        setuptime: [
           { required: true, message: "创建时间不能为空", trigger: "blur" },
         ],
         tel: [
           { required: true, message: "手机号不能为空", trigger: "blur" },
           { min: 11, max: 11, message: "请检查手机号是否正确", trigger: "blur" }
         ],
     
      },
    };
  },
   
  methods: {
    submitForm(){
        this.$refs.deptForm.validate(valid => {
        if (valid) {
          this.$message({
            message: "字段验证通过，创建成功！",
            type: "success"
          });
        this.$axios
         .post("dept_manage/insert",this.$qs.stringify(this.deptForm))
         .then(res => {
           if(res.data > 0){
            //  this.$message.success("创建成功！");
              this.$router.push({ path: "/dept_manage/list" });
           }
           else{
             this.$message.error("创建失败！")
           }
         })
         .catch(e => {
           console.log(e)
         });
        }
})
    },
    cancel(){
       this.$router.push({ path: "/dept_manage/list" });
          },
    checkdeptno(){
      if(this.deptForm.deptno<10){
        this.$message.error("长度至少为2个字符")
        return
      }
         this.$axios
         .post("dept_manage/isexistdept",this.$qs.stringify({ deptno: this.deptForm.deptno }))
         .then(res => {
           if(res.data == 1){
             this.$message.error("部门编号已存在");
           }
           else{
             this.$message.success("该编号号可以使用")
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
<style>
.demo-block {
  width: 550px;
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