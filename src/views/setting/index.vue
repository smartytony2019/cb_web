<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 设置
-->
<template>
  <div class="wrapper help">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" @click="$router.go(-1)">
            <div class="back">
              <i class="iconfont  icon-fanhui2" />
            </div>
          </div>
          <div class="flex-center-center title">设置</div>
          <div class="flex-right" />
        </div>

        <div class="view">
          <div class="item after">
            <div>登录密码</div>
            <i class="iconfont icon-jinrujiantou" />
          </div>

          <div class="item after">
            <div>提现密码</div>
            <i class="iconfont icon-jinrujiantou" />
          </div>

          <div class="logout flex-center-center">退出</div>
        </div>
      </div>
    </div>
    <Nav />
  </div>
</template>
<script>

import Nav from '@/components/Nav'
export default {
  name: 'Promote',
  components: { Nav },
  metaInfo: {
    title: '页面标题',
    meta: [
      { name: 'viewport', content: '页width=device-width,initial-scale=1面描述' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ]
  },
  data() {
    return {
      isLoading: false,
      finished: true
    }
  },
  created() {
    // this.onRefresh()
  },
  methods: {
    onRefresh() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
    onLoad() {

    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  min-height: 3.4375rem;
  padding: 0 0.9375rem;
  background-color: #fff;
  >div {
    display: flex;
    align-items: center;
    min-width: 3.125rem;
  }
  .title {
    color: #575a6b;
    font-size: 1.125rem;
    font-weight: 700;
    flex: 1 1;
  }
}

.view {
  margin-top: 0.625rem;
  .item {
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.625rem;
    background: #fff;
    position: relative;
    color: #333;
    font-size: .9375rem;
    font-weight: 400;
  }

  .logout {
    width: 100%;
    margin-top: 0.625rem;
    font-size: 1.0625rem;
    color: #36373b;
    background: #fff;
    height: 3rem;
  }
}

</style>
