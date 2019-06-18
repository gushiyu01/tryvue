<template>
  <div>
    <h1>父组件</h1>
    index:<input type="text" placeholder="index" v-model="id">
    <br>
    <br>
    name:<input type="text" placeholder="name" v-model="name">
    <br>
    <br>
    <button @click="setDate">赋值</button>
    <span>{{aa}}</span>
    <hr>
    <!-- 引入子组件 定义一个on的方法监听子组件的状态-->
    <child v-bind:items="items" v-on:onGetChildDate="getChildDate" ref="child"></child>

  </div>
</template>
<script>
  import child from "./secondchild";
  export default {
    components: {
      child
    },
    data() {
      return {
        name: "",
        items: [
          {id:1, name:'谷世宇'},
          {id:2, name:'赵娜娜'},
          {id:3, name:'糖果'},
          {id:4, name:'赵敏'}
        ],
        id: '',
        name: '',
        aa: 'a'
      };
    },
    methods: {
      getChildDate: function (i) {
        alert(i.name);
      },
      setDate: function () {
        let map = {};
        map.id = this.id;
        map.name = this.name;
        this.items.push(map);
        this.id = '';
        this.name = '';
        console.log(this.$refs.child.aaa);
        console.log(this.items);
      }
    }
  };
</script>
