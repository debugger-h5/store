<!--  -->
<template>
  <div id='footer'>
    <ul>
      <router-link tag="li" to="/shelf">
        <i class="el-icon-s-management"></i>
        <span>书架</span>
      </router-link>
      <router-link tag="li" to="/letter">
        <i class="el-icon-message"></i>
        <span>书信</span>
      </router-link>
      <router-link tag="li" to="/enjoy">
        <i class="el-icon-postcard"></i>
        <span>书享</span>
      </router-link>
      <router-link tag="li" to="/mine">
        <i class="el-icon-user"></i>
        <span>我的</span>
      </router-link>
    </ul>
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
  #footer {
    height: 50px;
    width: 100%;
    background: rgba(247, 247, 247, 100);
    position: fixed;
    left: 0;
    bottom: 0;
    // color: #c8c8c8;
    ul {
      height: 50px;
      width: 100%;
      li {
        float: left;
        height: 50px;
        width: 25%;
        text-align: center;
        line-height: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        span{
          font-size: 12px;
        }
        i{
          font-size: 23px;
        }
      }

      .active{
        color:#1aad19
      }
    }
  }
</style>