<template>
  <div id="login">
    <div class="logo">LOGO</div>
    <form>
      <div class="form-item">
        <label for="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="请输入用户名"
          v-model="model.username"
          @focus="focus"
        />
      </div>

      <div class="form-item">
        <label for="password">Password:</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="请输入密码"
          v-model="model.password"
          @focus="focus"
        />
      </div>
      <div v-show="showError">
        <span>{{errorMassage}}</span>
      </div>
      <div class="form-footer">
        <input
          type="button"
          @click="submit"
          value="提交信息"
        />
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "login",
  data() {
    return {
      model: {
        username: "111",
        password: "111"
      },
      errorMassage: "",
      showError: false
    };
  },
  methods: {
    submit() {
      let isValid = this.isValid();
      if (isValid === false) {
        return;
      }
      // to submit username or password
      axios.post("/api/login", {
        username: this.model.username,
        password: this.model.password
      }).then(response => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token)
          this.$router.push({
            name: 'home'
          })
        }
      })
    },

    isValid() {
      this.showError = true;
      if (!this.model.username) {
        this.errorMassage = "请输入用户名";
        return false;
      }
      if (!this.model.username.match(/^\d{4,6}@\w{2,3}\.\w{2,4}$/)) {
        this.errorMassage = "请输入正确的邮箱";
        return false;
      }
      if (!this.model.password) {
        this.errorMassage = "请输入密码";

        return false;
      }
      if (this.model.password.length < 6) {
        this.errorMassage = "密码至少要6位字符";

        return false;
      }
      this.showError = false;
      return true;
    },

    focus() {
      this.showError = false;
    }
  }
};
</script>

<style scoped>
#login {
  background-color: aqua;
  position: absolute;
  height: 100%;
  width: 100%;
}
.logo {
  background-color: white;
  width: 140px;
  height: 140px;
  margin: 160px auto 250px auto;
  text-align: center;
  line-height: 140px;
  border-radius: 70px;
}
.form-item {
  margin: 0 auto 20px auto;
  text-align: center;
}

.form-item label {
  display: inline-block;
  width: 30%;
  text-align: right;
  margin-right: 10px;
  letter-spacing: 2px;
  color: gray;
}
.form-item input {
  display: inline-block;
  width: 40%;
  height: 35px;
  border-radius: 10px;
  border: 0px solid #d6d6d5;
  padding-left: 10px;
  letter-spacing: 2px;
  line-height: 35px;
}
.form-footer {
  text-align: center;
  margin: 35px auto 0 auto;
}
.form-footer input {
  display: inline-block;
  width: 60%;
  height: 35px;
  background-color: rgb(250, 250, 26);
  border: 2px solid white;
  border-radius: 10px;
  letter-spacing: 2px;
  font-size: 15px;
  line-height: 31px;
  color: gray;
}
</style>
