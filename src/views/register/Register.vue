<template>
  <div>
    <router-view></router-view>
      <el-form :model="registerForm" class="register-container" label-position="left" label-width="0vw" >
          <h3 class="register_title">用户注册</h3>
          <el-form-item>
            <el-input type="text" v-model="registerForm.username" auto-complete="off" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="密码"></el-input>
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
            <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="tologin()">去登录</el-button>
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
      if (this.registerForm.username == "") {
        this.$message.error("用户名不能为空!");
        return;
      }
      if (this.registerForm.password == "") {
        this.$message.error("密码不能为空!");
        return;
      }
      this.$axios
      .post("figure/register", this.$qs.stringify(this.registerForm))
        .then(res => {
          let user = res.data;
          if (user == null || user == "") {
            this.$message.error("用户名或密码不正确！");
            return false;
          } else {
            this.$setSessionStorage("user", user);
            this.$router.push({ path: "/login" });
          }
        })
        .catch(e => {
          console.log(e);
        })
        },
          tologin(){
            this.$router.push({ path: "/login" });
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