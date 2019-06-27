<template>
  <div class="hello">
    <h1 v-if="flag">{{ msg }}</h1>
    <el-button type="primary"  v-on:click="change">change</el-button>
    <br/>
    <label>name:</label><el-input v-model="username" placeholder="name" style="width:10%"></el-input>
    <label>age:</label><el-input v-model="age" placeholder="age" style="width:10%"></el-input>
    <el-button type="primary" v-on:click="submm">submit</el-button>

    <el-row :gutter="20">
      <el-col :span="12"><h1>待完成事件</h1>
        <el-table
          :data="items"
          height="250"
          border
          style="width: 100%;margin: auto">
          <el-table-column
            type="selection"
            width="55"
            align="center">
          </el-table-column>
          <el-table-column
            prop="username"
            label="姓名"
            width="180"
            align="center">
          </el-table-column>
          <el-table-column
            prop="age"
            label="年龄"
            align="center">
          </el-table-column>
          <el-table-column
            label="操作"
            align="center">
            <template slot-scope="scope">
              <el-button type="primary"  v-on:click="finish(scope.$index, scope.row)">finish</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary"  v-on:click="clearitems" class="clearitems">清空已选中待完成事件</el-button>
      </el-col>
      <el-col :span="12"><h1>已完成事件</h1>
        <el-table
          :data="enditems"
          height="250"
          border
          style="width: 100%;margin: auto">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="username"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="age"
            label="年龄">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button type="primary"  v-on:click="remove(scope.$index, scope.row)">remove</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-button type="primary"  v-on:click="clearenditems" class="clearitems">清空已完成事件</el-button>
      </el-col>
    </el-row>




    <head-name v-bind:headName="names"/>

    <el-button type="primary"  @click="toChild">click</el-button>
    <child ref="child"></child>

  </div>
</template>

<script>

  import HeadName from "./head/head-name"
  import child from "./head/child"

export default {
  name: 'HelloWorld',
  components: {HeadName,child},
  data () {
    return {
      msg: '该吃饭啦！',
      flag: true,
      username: '',
      age: '',
      items: [

      ],
      enditems: [],
      aaa: [],
      delarry: [],
      isCheckedAll: false,
      names: [
        {name:'谷世宇'},
        {name:'赵娜娜'}
      ]
    }
  },
  methods: {
    change: function () {
      this.flag = !this.flag
    },
    submm: function () {
      let map = {}
      map.username = this.username
      map.age = this.age
      this.username = ''
      this.age = ''
      this.items.push(map)
    },
    finish: function (index, row) {
      console.log(index+":"+row.username+":"+row.age)
      let map = {}
      map.username = row.username
      map.age = row.age
      this.enditems.push(map)
      this.items.splice(index, 1)
    },
    remove: function (index, e) {
      let _this = this;
      console.log(e.username + e.age)
      let map = {}
      map.username = e.username
      map.age = e.age
      this.items.push(map)
      //this.enditems.splice(index, 1)
      this.enditems = this.enditems.filter(function (e) {
        console.log(e)
        console.log(index)
        return e.username !== map.username
      })
    },
    clearitems: function () {
      console.log(this.items.length)
      this.items.splice(0, this.items.length)
    },
    clearenditems: function () {
      console.log(this.aaa)
      this.enditems.splice(0, this.enditems.length)
    },
    chooseed: function (id) {
      console.log(id);
      let f = this.delarry.indexOf(id)
      if(f>=0){
        this.delarry.splice(f,1)
      }else{
        this.delarry.push(id)
      }
      console.log(this.delarry)
    },
    chooseall: function () {
      console.log("123")
      this.isCheckedAll = !this.isCheckedAll
      if (this.isCheckedAll) {
        // 全选时
        console.log("123456")
        this.delarry = []
        //console.log(this.enditems)
        this.enditems.forEach(function (item) {
          this.delarry.push(item.age)
        }, this)
      } else {
        this.delarry = []
      }
      console.log(this.enditems)
      console.log(this.delarry)
    },
    toChild: function () {
      /** this.$refs.child返回child组件实例 **/
      // 调用子组件的fromParent方法
      this.$refs.child.fromParent("我从父组件传递过来")
      // 直接修改child的data
      this.$refs.child.message2 = "啦啦啦"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  table {
    margin: auto;
    border-width: 1px;
    border-collapse: collapse;
    font-size: larger;
    border-style: solid;
  }
  tr {
    margin: 100px;
    padding: 100px;
    width: 1000px;
  }
  td {
    border-width: 2px;
    border-style: solid;
    border-color: blue;
    background-color: aqua;
    width: 100px;
    height: 50px;
  }
  input {
    margin-left: 5px;
    margin-top: 10px;
    height: 30px;
  }

  .clearitems {
    margin-top: 10px;
  }
  label {
    margin-right: 15px;
  }
</style>
