<template>
  <div class="hello">
    <h1 v-if="flag">{{ msg }}</h1>
    <button v-on:click="change">change</button>
    <form>
      name:<input v-model="username" placeholder="">
      age:<input v-model="age" placeholder="age">
      <button v-on:click="submit">submit</button>
    </form>

    <h1>待完成事件</h1>
    <table class="tb1">

      <tr>
        <td>
          <input type="radio">
        </td>
        <td>序号</td>
        <td>名字</td>
        <td>年龄</td>
        <td>操作</td>
      </tr>
      <tr v-for="(i,index) in items" v-bind:key="i.id">
        <td>
          <input type="radio">
        </td>
        <td>{{index}}</td>
        <td>{{i.username}}</td>
        <td>{{i.age}}</td>
        <td>
          <button v-on:click="finish(i,index)">finish</button>
        </td>
        <!--<td>-->
          <!--<button v-on:click="remove(index)">remove</button>-->
        <!--</td>-->
      </tr>
    </table>
    <button v-on:click="clearitems" class="clearitems">清空待完成事件</button>
    <h1>已完成事件</h1>
    <table class="tb1">
      <tr>
        <td>
          <input type="checkbox" @click="chooseall()" class='input-checkbox' :checked="this.delarry.length===this.enditems.length && this.delarry.length>0">
        </td>
        <td>序号</td>
        <td>名字</td>
        <td>年龄</td>
        <td>操作</td>
      </tr>
      <tr v-for="(i,index) in enditems" v-bind:key="i.id">
        <td>
          <input type="checkbox" @click='chooseed(i.username)' class='input-checkbox' :checked="delarry.indexOf(i.age)>=0">
        </td>
        <td>{{index}}</td>
        <td>{{i.username}}</td>
        <td>{{i.age}}</td>
        <!--<td>-->
          <!--<button v-on:click="finish(i)">finish</button>-->
        <!--</td>-->
        <td>
          <button v-on:click="remove(i, index)">remove</button>
        </td>
      </tr>
    </table>
    <button v-on:click="clearenditems" class="clearitems">清空已完成事件</button>

    <head-name v-bind:headName="names"/>

    <button @click="toChild">click</button>
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
    submit: function () {
      let map = {}
      map.username = this.username
      map.age = this.age
      this.username = ''
      this.age = ''
      this.items.push(map)
    },
    finish: function (e, index) {
      let map = {}
      map.username = e.username
      map.age = e.age
      this.enditems.push(map)
      this.items.splice(index, 1)
    },
    remove: function (e, index) {
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
  button {
    height: 30px;
  }
  .clearitems {
    margin-top: 10px;
  }
</style>
