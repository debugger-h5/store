<!--  -->
<template>
    <div id='shelf'>
        <div class="header">
            <p>附近书架</p>
            <p>我的书架</p>
            <i class="el-icon-search"></i>
        </div>
        <div class="banner">
            <img src="../../assets/img/v2_qa05y6.png" alt="">
        </div>
        <div class="content">
            <van-skeleton title avatar :row="3" :loading="loading">
                <div>实际内容</div>
            </van-skeleton>
        </div>


    </div>
</template>

<script>
    export default {

        components: {},
        data() {

            return {
                loading: true,
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
            this.loading = false;
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
    #shelf {
        padding: 0 20px;

        .header {
            display: flex;
            font-size: 18px;
            line-height: 50px;
            font-weight: bold;

            // border-bottom: solid 1px;
            p {
                margin-right: 52px;
            }

            i {
                margin-left: 52px;
                line-height: 50px;
            }
        }

        .banner {
            margin-top: 10px;
            margin-bottom: 40px;

            img {
                height: 187px;
                width: 100%;
                border-radius: 20px;
            }
        }
    }
</style>