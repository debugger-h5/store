<!--  -->
<template>
    <div id='mine'>

        <div class="header">
            <div class="l">
                <img
                    src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3741733804,1966033566&fm=26&gp=0.jpg">
            </div>
            <div class="r">
                <h3>放空自己</h3>
                <p>书籍地址：上海市浦东新城</p>
            </div>
        </div>
        <div class="list">
            <ul>
                <li><span>196</span>
                    <p>我的书友</p>
                </li>
                <li><span>17</span>
                    <p>我的书包</p>
                </li>
                <li><span>5</span>
                    <p>我的书评</p>
                </li>
            </ul>
        </div>
        <div class="cell">
            <van-cell title="我的账户" icon="card" is-link/>
            <van-cell title="我的书架" icon="column"  is-link/>
            <van-cell title="租界订单" icon="label"  is-link/>
            <van-cell title="我的收藏" icon="invition"  is-link/>
            <van-cell title="设置" icon="setting"  is-link/>
            <van-cell title="帮助与反馈" icon="question"  is-link/>
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
    #mine {
        padding: 0 30px 0 20px;

        .header {
            width: 100%;
            display: flex;
            margin: 50px 0;


            .l {
                flex: 3;

                img {
                    height: 80px;
                    width: 80px;
                    border-radius: 50px;
                }
            }

            .r {
                font-size: 12px;
                flex: 7;
                margin-left: 20px;
                padding: 15px 0;

                h3 {
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 30px;
                }

            }
        }

        .list {
            ul {
                display: flex;
                justify-content: space-between;

                li {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    span{
                        font-size: 20px;
                        font-weight: 600;
                        margin-bottom: 5px;
                    }
                }
            }
        }
        .cell{
            margin-top: 50px;
            font-size: 16px;
            font-weight: 600;
            .van-icon{
                color:#8CCA8C;
            }
        }
    }
</style>