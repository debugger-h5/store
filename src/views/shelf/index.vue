<!--  -->
<template>
    <div id='shelf'>
        <div class="header">
            <p @click="con1">附近书架</p>
            <p @click="con2" class="astive">我的书架</p>
            <i @click="hunt" class="el-icon-search"></i>
        </div>
        <div class="content1" v-if="bookflag">
            <div class="banner">
                <img src="../../assets/img/v2_qa05y6.png" alt="">
            </div>
            <div class="inner">
                <div class="box">
                    <div class="box-top">
                        <div class="l">
                            <img
                                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3741733804,1966033566&fm=26&gp=0.jpg">
                        </div>
                        <div class="r">
                            <h3>
                                <h5>放空自己</h5><span>0.5km</span>
                            </h3>
                            <h3>
                                <h6>喜欢艺术,文学和法律类书籍</h6><span>35本></span>
                            </h3>
                        </div>
                    </div>
                    <div class="box-bot">
                        <el-carousel :interval="4000" type="card" height="115px">
                            <el-carousel-item v-for="item in 6" :key="item">
                                <h3 class="medium">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="box">
                    <div class="box-top">
                        <div class="l">
                            <img
                                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1851283359,3457678391&fm=26&gp=0.jpg">
                        </div>
                        <div class="r">
                            <h3>
                                <h5>星空泪痕</h5><span>0.8km</span>
                            </h3>
                            <h3>
                                <h6>喜欢自然科学，互联网类书籍</h6><span>56本></span>
                            </h3>
                        </div>
                    </div>
                    <div class="box-bot">
                        <el-carousel :interval="4000" type="card" height="115px">
                            <el-carousel-item v-for="item in 6" :key="item">
                                <h3 class="medium">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="box">
                    <div class="box-top">
                        <div class="l">
                            <img
                                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1787608900,571892759&fm=26&gp=0.jpg">
                        </div>
                        <div class="r">
                            <h3>
                                <h5>穷查理</h5><span>1.2km</span>
                            </h3>
                            <h3>
                                <h6>喜欢艺术,文学和法律类书籍</h6><span>48本></span>
                            </h3>
                        </div>
                    </div>
                    <div class="box-bot">
                        <el-carousel :interval="4000" type="card" height="115px">
                            <el-carousel-item v-for="item in 6" :key="item">
                                <h3 class="medium">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="box">
                    <div class="box-top">
                        <div class="l">
                            <img
                                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1787608900,571892759&fm=26&gp=0.jpg">
                        </div>
                        <div class="r">
                            <h3>
                                <h5>穷查理</h5><span>1.2km</span>
                            </h3>
                            <h3>
                                <h6>喜欢艺术,文学和法律类书籍</h6><span>48本></span>
                            </h3>
                        </div>
                    </div>
                    <div class="box-bot">
                        <el-carousel :interval="4000" type="card" height="115px">
                            <el-carousel-item v-for="item in 6" :key="item">
                                <h3 class="medium">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="box">
                    <div class="box-top">
                        <div class="l">
                            <img
                                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1787608900,571892759&fm=26&gp=0.jpg">
                        </div>
                        <div class="r">
                            <h3>
                                <h5>穷查理</h5><span>1.2km</span>
                            </h3>
                            <h3>
                                <h6>喜欢艺术,文学和法律类书籍</h6><span>48本></span>
                            </h3>
                        </div>
                    </div>
                    <div class="box-bot">
                        <el-carousel :interval="4000" type="card" height="115px">
                            <el-carousel-item v-for="item in 6" :key="item">
                                <h3 class="medium">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="box">
                    <div class="box-top">
                        <div class="l">
                            <img
                                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1787608900,571892759&fm=26&gp=0.jpg">
                        </div>
                        <div class="r">
                            <h3>
                                <h5>穷查理</h5><span>1.2km</span>
                            </h3>
                            <h3>
                                <h6>喜欢艺术,文学和法律类书籍</h6><span>48本></span>
                            </h3>
                        </div>
                    </div>
                    <div class="box-bot">
                        <el-carousel :interval="4000" type="card" height="115px">
                            <el-carousel-item v-for="item in 6" :key="item">
                                <h3 class="medium">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="box">
                    <div class="box-top">
                        <div class="l">
                            <img
                                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1787608900,571892759&fm=26&gp=0.jpg">
                        </div>
                        <div class="r">
                            <h3>
                                <h5>穷查理</h5><span>1.2km</span>
                            </h3>
                            <h3>
                                <h6>喜欢艺术,文学和法律类书籍</h6><span>48本></span>
                            </h3>
                        </div>
                    </div>
                    <div class="box-bot">
                        <el-carousel :interval="4000" type="card" height="115px">
                            <el-carousel-item v-for="item in 6" :key="item">
                                <h3 class="medium">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
        </div>
        <div class="content2" v-else>
            <div class="box1">
                <div class="box1-top">
                    <div class="l">
                        <img
                            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3741733804,1966033566&fm=26&gp=0.jpg">
                    </div>
                    <div class="r">
                        <p>放空自己</p>
                        <p>喜欢互联网，心理学书籍</p>
                        <p>书籍地址：上海市浦东新城</p>
                    </div>
                </div>
            </div>
            <div class="sale">
                <div class="title">
                    <h4>在售书籍</h4>
                    <p>35本<span>></span></p>
                </div>
                <el-carousel :interval="4000" type="card" height="115px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <h3 class="medium">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
                        <div class="rent">
                <div class="title">
                    <h4>在租书籍</h4>
                    <p>35本<span>></span></p>
                </div>
                <el-carousel :interval="4000" type="card" height="115px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <h3 class="medium">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>


    </div>
</template>

<script>
    export default {

        components: {},
        data() {

            return {
                loading: true,
                bookflag: true
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},

        methods: {
            con1() {
                this.bookflag = true
                document.querySelectorAll('.header p')[0].classList.remove("astive");
                document.querySelectorAll('.header p')[1].setAttribute('class', 'astive')
                // console.log(title[0])
            },
            con2() {
                this.bookflag = false
                document.querySelectorAll('.header p')[1].classList.remove("astive");
                document.querySelectorAll('.header p')[0].setAttribute('class', 'astive')

            },
            hunt() {
                this.$router.push({
                    path: '/hunt'
                })
            }
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

        .content1 {
            .banner {
                margin-top: 60px;
                margin-bottom: 40px;

                img {
                    height: 187px;
                    width: 100%;
                    border-radius: 20px;
                }
            }

            .inner {
                .box {
                    .box-top {
                        width: 100%;
                        display: flex;

                        .l {
                            flex: 2;

                            img {
                                height: 50px;
                                width: 50px;
                                border-radius: 50px;
                            }
                        }

                        .r {
                            font-size: 12px;
                            flex: 8;

                            h3 {
                                display: flex;
                                justify-content: space-between;

                                &:nth-child(1) {
                                    margin-bottom: 15px;
                                }

                                h5 {
                                    font-size: 16px;
                                    font-weight: 600;
                                }
                            }
                        }
                    }

                    .box-bot {
                        .el-carousel__item h3 {
                            color: #475669;
                            font-size: 14px;
                            opacity: 0.75;
                            line-height: 200px;
                            margin: 0;
                        }

                        .el-carousel__item:nth-child(2n) {
                            background-color: #99a9bf;
                        }

                        .el-carousel__item:nth-child(2n+1) {
                            background-color: #d3dce6;
                        }
                    }
                }
            }
        }

        .content2 {
            width: 100%;
            margin-top: 60px;

            .box1 {
                .box1-top {
                    width: 100%;
                    display: flex;

                    .l {
                        flex: 3;

                        img {
                            height: 100px;
                            width: 100px;
                            border-radius: 50px;
                        }
                    }

                    .r {
                        font-size: 12px;
                        flex: 7;
                        margin-left: 30px;

                        p {
                            margin-bottom: 20px;

                            &:nth-child(1) {
                                font-size: 16px;
                                font-weight: 600;
                                margin-bottom: 20px;
                            }

                            &:nth-child(3) {
                                margin-bottom: 0;
                            }
                        }

                    }
                }
            }

            .sale {
                .title {
                    margin: 25px 0;
                    display: flex;
                    justify-content: space-between;

                    h4 {
                        font-size: 18px;
                        font-weight: 600;
                    }
                }

                .el-carousel__item h3 {
                    color: #475669;
                    font-size: 14px;
                    opacity: 0.75;
                    line-height: 200px;
                    margin: 0;
                }

                .el-carousel__item:nth-child(2n) {
                    background-color: #99a9bf;
                }

                .el-carousel__item:nth-child(2n+1) {
                    background-color: #d3dce6;
                }

            }
            .rent {
                .title {
                    margin: 25px 0;
                    display: flex;
                    justify-content: space-between;

                    h4 {
                        font-size: 18px;
                        font-weight: 600;
                    }
                }

                .el-carousel__item h3 {
                    color: #475669;
                    font-size: 14px;
                    opacity: 0.75;
                    line-height: 200px;
                    margin: 0;
                }

                .el-carousel__item:nth-child(2n) {
                    background-color: #99a9bf;
                }

                .el-carousel__item:nth-child(2n+1) {
                    background-color: #d3dce6;
                }

            }

        }
    }
</style>