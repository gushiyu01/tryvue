<template>
    <div>
        <h1>标题:列表头</h1>
        <li v-for="i in headName">
            {{i.name}}
        </li>
        <li>
            <button v-on:click="aa">aa</button>
        </li>
    </div>
</template>

<script>
    export default {
        name: "HeadName",
        props: ['headName'],
        methods: {
            aaa: function () {
                alert("111")
            }
        }
    }
</script>

<style scoped>

</style>
