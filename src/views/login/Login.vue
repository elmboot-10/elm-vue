<template>
  <div>
    <el-form :model="loginForm" class="login-container" label-position="left" label-width="0vw">
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-select v-model="loginForm.user" style="width: 100%;" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          style="width: 100%;background: #505458;border: none"
          @click="login()"
        >登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width: 100%;background: #505458;border: none"
          @click="register()"
        >注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        user: ""
      },
      options: [
        {
          value: "选项1",
          label: "管理员"
        },
        {
          value: "选项2",
          label: "高级用户"
        },
        {
          value: "选项3",
          label: "用户"
        }
      ]
    };
  },
  methods: {
    login() {
      //  this.$router.push("/home");
      if (this.loginForm.username == "") {
        this.$message.error("用户名不能为空!");
        return;
      }
      if (this.loginForm.password == "") {
        this.$message.error("密码不能为空!");
        return;
      }
      this.$axios
        .post("figure/login", this.$qs.stringify(this.loginForm))
        .then(res => {
          let user = res.data;
          if (user == null || user == "") {
            this.$message.error("用户名或密码不正确！");
            return false;
          } else {
            this.$setSessionStorage("user", user);
            this.$router.push({ path: "/home" });
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    register() {
      this.$router.push({ path: "/register", name: "Register" });
    }
  }
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
body {
  /* background:url("../../assets/thresh.jpeg"); */
  background-position: center;
  margin: 0px;
  padding: 0;
}
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>