<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 交易记录
-->
<template>
  <div class="wrapper record">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" @click="$router.go(-1)">
            <div class="back">
              <i class="iconfont  icon-fanhui2" />
            </div>
          </div>
          <div class="flex-center-center title">注单详情</div>
          <div class="flex-right" />
        </div>

        <div class="line" />

        <div class="view">
          <div class="detailInfo">
            <div class="amount">
              <i />
              1.00
            </div>

            <div class="flex-between-center ">
              <span>交易类型</span>
              <span>下注</span>
            </div>

            <div class="flex-between-center ">
              <span>资金类型</span>
              <span>USDT</span>
            </div>

            <div class="flex-between-center ">
              <span>状态</span>
              <span class="blue">中奖</span>
            </div>

            <div class="flex-between-center ">
              <span>交易时间</span>
              <span>2022/8/12 16:15:51</span>
            </div>

            <div class="flex-between-center ">
              <span>订单号</span>
              <span>a44e5204···eda6e34c</span>
            </div>

            <p class="help"> 如需帮助，请<span class="blue">联系客服</span></p>
          </div>
        </div>
      </div>
    </div>
    <Nav />
  </div>
</template>
<script>
export default {
  name: 'Record',
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
      finished: true,
      value1: 0,
      option1: [
        { text: '所有时间', value: 0 },
        { text: '今天', value: 1 },
        { text: '昨天', value: 2 },
        { text: '一个月内', value: 3 }
      ]
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
.index-page {
  height:100% !important;
}
.line {
  height: 0.625rem;
  width: 100%;
  background: #f7f6fc;
}

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
  background-color: #fff;
  .detailInfo {
    padding: 1rem;
    text-align: center;
    color: #333;
    font-size: .8125rem;
    font-weight: 500;
    .amount {
      font-weight: 600;
      position: relative;
      margin: 1.375rem auto 0;
      display: inline-block;
      font-size: 1.125rem;
      color: #000;
      height: 2.5625rem;
      text-align: center;
      i {
        left: -1.6rem;
        top: -0.3rem;
        position: absolute;
        display: block;
        width: 1.375rem;
        height: 1.375rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgB7ZTPS0JBEMdn9j0lLAK7RRFikJ689Rd06FTHLoIiFP0FQZnBU9I6eKhLvw6JdYjqn4jo6iWCwIvPKLqpFWr5Y6fVxKTUVono4Ace7O7Mzndmdt8C9OhRA9sZLZFlC5VKbX0aSS6EE61saivD8L5mMrJiAowKSMLF19KZwR+htjMSwGXjnAFaCGisMkbCO46k141Yragl0v2vYIv69oTQYi0Nf9wd0mT3SgnZK5eCVCsp3Cu2TH2s8hPO6aBsVBIJZzDZlZAt6nUQ4Djj5XSJ2HNeoeSDK5SyHa3t1isiCMTd69roud/cly05yhwejSpOvnHlSvdo+teYTc9IiASUIvlu5zdv6ovuDYCoryFFEm5I9wApMbuorNijK0MGRkExdkpVNHG2OoJ5mhaKVkIoAiETFyPLiBc4sgGGKI6eXjiQARnrF20UqkxB4ukC5SK6ZysjJfS9RELHcdj0Sk+HYjJXq3p70Kx6YzNaXkShn0LI/UeiRdeupazIKv2ZIc/EZrWcjIi80C/QE+oatTN3vlMGOK1uxIIOPZpCnb3s/4Z3mx2dkXWrKdsAAAAASUVORK5CYII=) no-repeat;
      }
    }

    .flex-between-center {
      padding: 0.9375rem 0;
      position: relative;
    }

    .help {
      margin-top: 1.25rem;
      text-align: center;
    }
  }
}

</style>
