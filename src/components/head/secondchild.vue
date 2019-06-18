<template>
  <div>
    <!-- 定义一个子组件传值的方法 -->
    <h1>子组件</h1>
    <table>
      <tr v-for="(item,index) in items" v-bind:key="item.index">
        <td>
          {{item.id}}
        </td>
        <td>
          {{item.name}}
        </td>
        <td>
          <button type="submit" v-on:click="getVarDate(item)">取值</button>
        </td>
        <td>
          <button type="submit" v-on:click="delVarDate(index)">删值</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>

  export default {
    props: ['items'],
    data() {
      return{
        aaa: 'aaa'
      }
    },
    methods: {
      getVarDate(i) {
        var that = i;
        this.$emit("onGetChildDate",that);
      },
      delVarDate(i) {
        this.items.splice(i,1);
      }
    }
  };
</script>
<style>
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
</style>
