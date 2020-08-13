<template>
  <div>
    <router-view></router-view>
      <el-form :model="registerForm" class="register-container" label-position="left" label-width="0vw" >
          <h3 class="register_title">用户注册</h3>
          <el-form-item>
            <el-input type="text" @blur="checkUserId" v-model="registerForm.username" auto-complete="off" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="registerForm.checkpassword" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
           <el-form-item>
            <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="确认密码"></el-input>
          </el-form-item>
           <el-form-item>
            <el-select v-model="registerForm.user"  style="width: 100%;" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
              </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="register">确定注册</el-button>
          </el-form-item>
        
          <el-form-item>
            <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="tologin">登录</el-button>
          </el-form-item>
        
      </el-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
        registerForm: {
          username:'',
          password:'',
          checkpassword:'',
          user:''}, 
          options: [{
          value: '选项1',
          label: '管理员'
        },
        {
          value: '选项2',
          label: '高级用户'
        }, {
          value: '选项3',
          label: '用户'
        }]
    }
  },
  methods: {
     register() {
      if (this.registerForm.username == ""||this.registerForm.username == null) {
        this.$message.error("用户名不能为空!");
        return;
      }
      if (this.registerForm.password == "") {
        this.$message.error("密码不能为空!");
        return;
      }
      if (this.registerForm.checkpassword !=this.registerForm.password) {
        this.$message.error("两次密码不一致!");
        return;
      }
      this.$axios
      .post("figure/insert", this.$qs.stringify(this.registerForm))
        .then(res => {
          let user = res.data;
          if (user>0) {
            this.$message.success("注册成功，跳转到登录界面！");
            this.$router.push({ path: "/login" });
            
          } else {
            this.$message.error("注册失败！");
            return;
          }
        })
        .catch(e => {
          console.log(e);
        })
        },
          tologin(){
            this.$router.push({ path: "/login" });
          },

          checkUserId(){
            this.$axios
                .post("figure/isexistuser", this.$qs.stringify({username:this.registerForm.username}))
                  .then(res => {
                    if (res.data==1) {
                      this.$message.error("用户名已存在！");
                       return false;
                    } else{
                        if (this.registerForm.username == ""||this.registerForm.username == null) {
                        this.$message.error("用户名不能为空!");
                        return;
                      }
                      this.$message.success("用户名可以使用！");
                    }
                  })
                    .catch(e => {
                       this.$message.error("服务器内部发生异常，请稍后访问！");
                       console.log(e);
                      })
          }
  },
};
</script>
<style>
  #poster {
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    background-position: center;
    margin: 0px;
    padding: 0;
  }
  .register-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
 
  .register_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>