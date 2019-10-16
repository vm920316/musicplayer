<template>
  <div id="login">
    <div class="logo">
      {{ $t("logo-slot") }}
    </div>
    <form>
      <div class="form-item">
        <!--<label for="username">Username:</label>-->
        <input
          type="text"
          name="username"
          id="username"
          :placeholder="$t('username-placeholder')"
          v-model="model.username"
          @focus="focus"
        />
      </div>

      <div class="form-item">
        <!--<label for="password">Password:</label>-->
        <input
          type="password"
          name="password"
          id="password"
          :placeholder="$t('password-placeholder')"
          v-model="model.password"
          @focus="focus"
        />
      </div>
      <div class="tiaoyue">
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          v-model="agreement"
        />
        <!-- <div class="quare-gx">&#9745;&#65039;</div> -->
        <label
          class="text-zs"
          for="agreement"
        >{{ $t("agreement-content") }}</label>
      </div>
      <div
        v-show="showError"
        class="error-info"
      >
        <span>{{ errorMassage }}</span>
      </div>
      <div class="form-footer">
        <input
          type="button"
          @click="submit"
          :value="$t('login-button-content')"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { TOKEN_KEY } from '@/utils/contants'
export default {
  name: 'login',
  data () {
    return {
      model: {
        username: '',
        password: ''
      },
      errorMassage: '',
      showError: false,
      agreement: false
    }
  },
  methods: {
    submit () {
      let isValid = this.isValid()
      if (isValid === false) {
        return
      }
      // to submit username or password
      this.$http.post('/api/login', {
        username: this.model.username,
        password: this.model.password
      }).then(response => {
        if (response.status === 200) {
          this.$ls.set(TOKEN_KEY, response.data.token)
          const redirect = decodeURIComponent(this.$route.query.redirect) || '/'
          this.$router.push(redirect)
        } else {
          this.errorMassage = this.$t('incorrect-username-or-password')
        }
      })
    },

    isValid () {
      this.showError = true
      if (!this.agreement) {
        this.errorMassage = this.$t('pick-up-agreement-checkbox')
        return false
      }
      if (!this.model.username) {
        this.errorMassage = this.$t('require-username')
        return false
      }
      if (!this.model.username.match(/^\d{4,6}@\w{2,3}\.\w{2,4}$/)) {
        this.errorMassage = this.$t('incorrect-email')
        return false
      }
      if (!this.model.password) {
        this.errorMassage = this.$t('require-password')

        return false
      }
      if (this.model.password.length < 6) {
        this.errorMassage = this.$t('password-min-length')

        return false
      }

      this.showError = false
      return true
    },

    focus () {
      this.showError = false
    }
  }
}
</script>

<style scoped>
#login {
  background: linear-gradient(rgb(250, 146, 177), rgb(250, 166, 117));
  position: absolute;
  height: 100%;
  width: 100%;
}
.logo {
  background-color: white;
  width: 150px;
  height: 150px;
  margin: 20% auto 20% auto;
  text-align: center;
  line-height: 150px;
  border-radius: 75px;
}
.form-item {
  margin: 0 auto 30px auto;
  text-align: center;
}

.form-item input {
  display: inline-block;
  width: 80%;
  height: 50px;
  border-radius: 20px;
  border: 0px solid #d6d6d5;
  padding-left: 20px;
  letter-spacing: 1px;
  line-height: 35px;
  font-size: 16px;
  font-family: "微软雅黑";
  background-color: rgb(255, 255, 255, 0.4);
  /*opacity:0.6; 图片透明*/
}
.form-item input:-ms-input-placeholder {
  color: white;
}
.form-item input:-moz-placeholder {
  color: white;
}
.form-item input::-webkit-input-placeholder {
  color: white;
}
.tiaoyue {
  display: flex;
  margin-top: -20px;
}
#agreement {
  margin-left: 10%;
  margin-right: 25px;
  width: 0px;
  height: 0px;
  position: relative;
  /* opacity:0.6;  */
}
#agreement::after {
  content: " ";
  top: 0px;
  display: inline-block;
  width: 14px;
  height: 14px;
  /* background-color: whitesmoke;  */
  border: 1px solid white;
  border-radius: 3px;
  position: absolute;
}
#agreement:checked:after {
  background-color: whitesmoke;
  content: "✓";
  color: black;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
}
.text-zs {
  display: block;
  color: white;
  font-family: "微软雅黑";
  font-size: 10px;
  margin-bottom: 30px;
}
.form-footer {
  text-align: center;
  margin: 0px auto 0 auto;
}
.error-info {
  color: red;
  font-family: "微软雅黑";
  font-size: 14px;
  margin-bottom: 5px;
  text-align: center;
}
.form-footer input {
  display: inline-block;
  width: 60%;
  height: 50px;
  /*background-color: rgb(250, 250, 26);*/
  border: 1px solid white;
  border-radius: 20px;
  /*letter-spacing: 2px;*/
  font-size: 18px;
  line-height: 46px;
  color: white;
  font-family: "微软雅黑";
  background-color: transparent;
}
</style>
