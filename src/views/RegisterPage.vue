<template>

  <div style="display: flex;justify-content: center;align-items: center;background-color: #69c8ef;height: 100vh;">

    <!--    中间的登录部分div-->
    <div style="display: flex;gap: 30px;background-color: white;border-radius: 20px;overflow: hidden">

      <!--      左边的图片部分-->
      <div style="flex: 1;display: flex;">
        <img style="flex: 1;width: 60%;" src="@/assets/loginPicture.png">
      </div>


      <!--      右边的表单部分div-->
      <div style="flex: 1;justify-content: center;align-items: center;display: flex;">

        <!--        表单部分-->
        <el-form ref="loginForm" :model="user" :rules="loginRules">
          <div style="font-size: 18px;font-weight: bold; text-align: center;padding-bottom: 10px">请注册
          </div>

          <el-form-item prop="username">
            <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="validPassword">
            <el-input type="password" v-model="user.validPassword" placeholder="请再次输入密码"></el-input>
          </el-form-item>

          <!--          验证码-->
          <el-form-item prop="propValidCode">
            <div style="display: flex">
              <el-input style="width: 50%;flex: 1;" placeholder="请输入验证码" v-model="user.propValidCode"></el-input>
              <div style="flex: 1;">
                <ValidCode @input="createValidCode"/>

              </div>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="login">注册</el-button>
          </el-form-item>

          <el-form-item>
            <div style="display: flex">
              <span style="flex: 1">
              已有账号？<span class="themeColor" style="cursor: pointer;" @click="$router.push({ path: '/login' })">请登录</span>
              </span>



            </div>
          </el-form-item>


        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

import '@/assets/css/global.css';
import ValidCode from "@/components/ValidCode";


export default {
  components: {
    ValidCode,
  },

  data() {

    //定义各属性校验方式内容
    const usernameValidator = (rule, value, callback) => {

      if (!value) {
        callback(new Error('用户名不能为空'));
      } else
        callback();
    };
    const passwordValidator = (rule, value, callback) => {
      if (!value) {

        callback(new Error('密码不能为空'));
      } else
        callback();
    };
    const validCodeValidator = (rule, value, callback) => {

      if (value === '') {
        callback(new Error('请输入验证码'));
      } else
        callback();
    };

    //定义再次输入验证码校验规则
    const validPasswordValidator = (rule, value, callback) => {

      if (value === '') {
        callback(new Error('请输入验证码'));
      } else if (value !== this.user.password) {
        callback(new Error("两次输入密码不一致！"));
      }else
        callback();

    };

    return {

      code: '',//组件的验证码code
      user: {
        username: '',
        password: '',
        propValidCode: '',//输入的验证码code
        validPassword: '',

      },

      //定义表单中各属性校验rules，alidator: 为此属性的校验方式名字
      loginRules: {
        username: [{validator: usernameValidator, trigger: 'blur'}],//自定义的方式
        password: [{validator: passwordValidator, trigger: 'blur'}],
        propValidCode: [{validator: validCodeValidator, trigger: 'blur'}],
        validPassword: [{validator: validPasswordValidator, trigger: 'blur'}],//非自定义的方式
      }

    };
  },
  methods: {
    login() {
      //如若表单loginForm校验通过才能发送请求，否则不发
      this.$refs["loginForm"].validate((valid) => {
            if (valid) {
              // //启用验证码校验
              // if (this.user.propValidCode.toLowerCase() !== this.code.toLowerCase()) {
              //   this.$message({
              //     message: "验证码错误",
              //     type: 'error',
              //   });
              //   return
              // }

              // 使用 Axios 发起登录请求
              this.$request.post('/register', this.user)
                  .then(res => {
                    if (res.code === '200') {
                      // 登录成功后的逻辑处理
                      this.$message({
                        message: "注册成功",
                        type: 'success',
                      });
                      // 可以跳转到其他页面或执行其他登录成功后的操作
                      this.$router.push({path: '/'});
                    }else
                      this.$message.error(res.msg);
                  })

            } else {

              return;
            }
          }//this.$refs["loginForm"].validate((valid) => {
      )
    },

    //把验证码插件的值赋值给this.code，即获得验证码的真实值
    createValidCode(data) {
      this.code = data
    },


  },
  mounted() {
  }
}

</script>




