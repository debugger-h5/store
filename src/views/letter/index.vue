<!--  -->
<template>
    <div id='letter'>
        <div class="header">
            <p @click="con1">书信列表</p>
            <p @click="con2" class="astive">书友列表</p>
            <i @click="hunt" class="el-icon-search"></i>
        </div>
    </div>
</template>

<script>
    export default {

        components: {},
        data() {

            return {

            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},

        methods: {

        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {

        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {

        },
        beforeCreate() {},
        beforeMount() {},
        beforeUpdate() {},
        updated() {},
        beforeDestroy() {},
        destroyed() {},
        //如果页面有keep-alive缓存功能，这个函数会触发
        activated() {},
    }
</script>
<style lang='scss' scoped>
    #letter {
        padding: 0 20px;

        .header {
            position: fixed;
            top: 0;
            left: 0;
            padding: 0 20px;
            background: #ffff;
            z-index: 999;
            height: 50px;
            display: flex;
            font-size: 18px;
            line-height: 50px;
            font-weight: bold;

            // border-bottom: solid 1px;
            p {
                margin-right: 52px;
            }

            .astive {
                color: #9B9B9B;
            }

            i {
                margin-left: 52px;
                line-height: 50px;
            }
        }
    }
</style>