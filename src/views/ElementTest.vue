<template>
  <div>
    <el-menu router :default-active="$route.path" >
      <el-menu-item index="/">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>

      </el-menu-item>
      <el-menu-item index="/elementTest">系统首页</el-menu-item>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>信息管理</span>
        </template>
        <el-menu-item>用户信息</el-menu-item>
      </el-submenu>

    </el-menu>
    <div style="width: 200px;height: 200px;background-color: aqua">
      你好
    </div>

    //可搜索的选择框
    <el-select v-model="value" placeholder="请选择" filterable>
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>

    //密码input框
    <el-input show-password placeholder="请输入密码" v-model="password"></el-input>

    //带输入建议的input框
    <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
    ></el-autocomplete>


    <el-row>
      <el-col :span="12">

        <el-table :data="tableData">
          <el-table-column label="序号" prop="id"></el-table-column>
          <el-table-column label="名称" prop="name"></el-table-column>
          <el-table-column label="年龄" prop="age"></el-table-column>
          <el-table-column label="地址" prop="address"></el-table-column>
          <el-table-column label="操作">
            <template v-slot="scope">
              <el-button type="primary" @click="edit(scope.row)">操作</el-button>
            </template>
          </el-table-column>
        </el-table>

      </el-col>
    </el-row>

  </div>
</template>

<script>

export default {
  name: 'ElementTest',//不是错误，是说建议我用多个单词组成的名字命名组件，你改成elemetTest就没事了
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      password: '',
      state1: '',
      restaurants: [],
      tableData: [
        {name: '情哥哥', address: '安徽合肥', id: 1, age: "30"}
      ],


    }

  },

  methods: {
    edit() {
      this.$confirm("这是个什么东西", "提示", {
        type: "warning"
      }).then( ()=> {
        this.$message.success("确认")
      }).catch(() => {
        this.$message.warning("取消")
          })
    },


    querySearch(queryString, cb) {
      let restaurants = this.restaurants;
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },

    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },

    handleSelect(item) {
      console.log(item);
    }
  },

//加载完成后触发
  mounted() {
    this.restaurants = this.loadAll();
  }

}


</script>

<style scoped>

</style>