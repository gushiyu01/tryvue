<template>
    <div id="demo">
      <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
      <hr>
      <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="bounce">
        <p v-if="show">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </transition>
      <hr>
      <span :class="classObj"
            @mouseenter="mouseIn=true"
            @mouseout="mouseIn=false">
        这是一个sapn
      </span>
      <hr>
      <div>
        付款方式：
        <select v-model="payType">
          <template v-for="pay in payList">
            <option :value="pay.value">{{pay.name}}</option>
          </template>
        </select>
        <hr>
        选中的付款方式为：{{payType}}
        <input v-model="payType">
      </div>
      <hr>
      <button @click="getDataFromAxios">百度一下</button>
      <hr>
      <input v-model="param" value="name">
      <hr>
      <button @click="getDataFromAxios2">百度又一下</button>
      <hr>

        <input v-model="otherParam" value="name" name="name">
        <button type="submit" @click="getDataFromAxios3">提交</button>

      <hr>
      <el-button type="primary" disabled size="mini"> 一个按钮 </el-button>
      <el-button type="success" circle> 一个按钮 </el-button>
      <el-button type="info" round> 一个按钮 </el-button>
      <hr>
      <el-button @click="show = !show">Click Me</el-button>
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
    </div>
</template>

<script>
  import https from '../../https.js' 　　// 注意用自己的路径

    export default {
        name: "fade-demo",
        data() {
          return {
            show: true,
            mouseIn: false,
            payType: 'Alipay',
            payList: [
              {name:'支付宝',value:'Alipay'},
              {name:'微信',value:'wx'},
              {name:'第三方网银',value:'dsf'}
            ],
            param: '',
            otherParam: ''
          }
        },
        computed: {
          classObj(){
            return{
              'class-in': this.mouseIn,
              'class-out': !this.mouseIn
            }
          }
        },
        methods: {
          getDataFromAxios: function () {
            https.fetchGet("/aaa",{name:'谷世宇'}).then((data) => {
              console.log(data)
            }).catch( err => {
              console.log(err)
            })
          },
          getDataFromAxios2: function () {
            let datas = {name: this.param};
            datas.age = 18;
            https.fetchPost("/ccc",datas,'form').then((data) => {
              console.log(data)
            }).catch( err => {
              console.log(err)
            })
          },
          getDataFromAxios3: function () {
            let datas = {name: this.otherParam};
            https.fetchPost("/bbb",datas).then((data) => {
              console.log(data)
            }).catch( err => {
              console.log(err)
            })
          }
        }
    }
</script>

<style scoped>
    .fade-enter-active{
      transition: all .5s ease;
    }
    .fade-leave-active{
      transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      transform: translateX(50%);
      opacity: 0;
    }
    <!--bounce-->
    .bounce-enter-active{
      animation: bounce-in .5s;
    }
    .bounce-leave-active{
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(2.5);
      }
      100% {
        transform: scale(1);
      }
    }
    .class-in {
      background-color: red;
    }
    .class-out {
      background-color: black;
    }

    .transition-box {
      margin-bottom: 10px;
      width: 200px;
      height: 100px;
      border-radius: 4px;
      background-color: #409EFF;
      text-align: center;
      color: #fff;
      padding: 40px 20px;
      box-sizing: border-box;
      margin-right: 20px;
    }
</style>
