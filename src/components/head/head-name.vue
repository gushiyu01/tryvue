<template>
    <div>
        <h1>标题:列表头</h1>
        <li v-for="i in headName">
            {{i.name}}
        </li>
        <div>
            <el-button type="danger" v-on:click="aaa">aa</el-button>
        </div>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
        align="left">
        <el-input v-model="diaValue" placeholder="diaValue" style="width:80%"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "HeadName",
        props: ['headName'],
        methods: {
            aaa: function () {
                this.dialogVisible=true
            }
        },
        data() {
          return{
            dialogVisible: false,
            diaValue: ""
          }
        }
    }
</script>

<style scoped>

</style>
