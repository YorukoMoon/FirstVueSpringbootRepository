<template>
  <div>
    <!--    包裹整个页面的container-->
    <el-container style="height: 100vh">
      <!--      左侧-->
      <el-aside>
        <!--        导航栏-->
        <el-menu router :default-active="$route.path">
          <el-menu-item index="/manager/home">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span>首页</span>
            </template>

          </el-menu-item>

          <el-submenu>
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>信息管理</span>
            </template>
            <el-menu-item>用户信息</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--      右侧部分-->
      <el-container>
        <!--        上面的横条区域-->
        <el-header>
          <el-row>
            <el-col :span="22">
            <div style="text-align: right">
              我的
            </div>
            </el-col>
            <el-col :span="2"></el-col>
          </el-row>

        </el-header>
        <!--下面的主体部分-->
        <el-main>
          <!--          主体部分为子路由-->
          <router-view></router-view>
        </el-main>

      </el-container>


    </el-container>




  </div>
</template>

<script>

import request from "@/utils/request";

export default {


  name: 'ManagerView',//不是错误，是说建议我用多个单词组成的名字命名组件，你改成elemetTest就没事了
  data() {
    return {

      value: '',
      password: '',
      state1: '',
      users: [],
    }
  },

  methods: {},

//加载完成后触发
  mounted() {
    request.get('http://localhost:8081/user/selectAll').then(res => {
          console.log(res)
          this.users = res.data;
        },
    )

  }

}


</script>

<style scoped>

</style>