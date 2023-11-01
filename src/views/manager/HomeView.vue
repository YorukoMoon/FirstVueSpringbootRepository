<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-card>
          您好管理员，我暂时是主页，预计明天把右边的显示全部信息部分移动到用户信息分页
        </el-card>
      </el-col>

      <el-col :span="10">

        <el-table :data="users">
          <el-table-column label="id" prop="id"></el-table-column>

          <el-table-column label="用户名" prop="username"></el-table-column>
          <el-table-column label="姓名" prop="name"></el-table-column>
          <el-table-column label="地址" prop="address"></el-table-column>
          <!--          <el-table-column label="操作">-->
          <!--            <template v-slot="scope">-->
          <!--              <el-button type="primary" @click="edit(scope.row)">操作</el-button>-->
          <!--            </template>-->
          <!--          </el-table-column>-->
        </el-table>

      </el-col>
    </el-row>

  </div>
</template>

<script>

import request from "@/utils/request";

export default {


  name: 'HomeView',//不是错误，是说建议我用多个单词组成的名字命名组件，你改成elemetTest就没事了
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