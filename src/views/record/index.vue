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
          <div class="flex-center-center title">交易记录</div>
          <div class="flex-right" />
        </div>

        <div class="tradeRecord before">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>

        <div class="view">
          <div class="Record_List">

            <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
              <van-list
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >

                <div class="item after flex-between-center">
                  <div class="item_left flex-center-center">
                    <img data-v-97d68c6c="" src="https://designer-trip.com/image/bi.png">
                    <div>
                      <div>充值</div>
                      <div class="time">2022-7-18 19:51:21</div>
                    </div>
                  </div>

                  <div class="item_right"> 100Trx </div>
                </div>

                <div class="item after flex-between-center">
                  <div class="item_left flex-center-center">
                    <img data-v-97d68c6c="" src="https://designer-trip.com/image/bi.png">
                    <div>
                      <div>充值</div>
                      <div class="time">2022-7-18 19:51:21</div>
                    </div>
                  </div>

                  <div class="item_right"> 100Trx </div>
                </div>

                <div class="item after flex-between-center">
                  <div class="item_left flex-center-center">
                    <img data-v-97d68c6c="" src="https://designer-trip.com/image/bi.png">
                    <div>
                      <div>充值</div>
                      <div class="time">2022-7-18 19:51:21</div>
                    </div>
                  </div>

                  <div class="item_right"> 100Trx </div>
                </div>

                <div class="item after flex-between-center">
                  <div class="item_left flex-center-center">
                    <img data-v-97d68c6c="" src="https://designer-trip.com/image/bi.png">
                    <div>
                      <div>充值</div>
                      <div class="time">2022-7-18 19:51:21</div>
                    </div>
                  </div>

                  <div class="item_right"> 100Trx </div>
                </div>

              </van-list>

            </van-pull-refresh>

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
        { text: '充值', value: 0 },
        { text: '提现', value: 1 },
        { text: '投注', value: 2 },
        { text: '活动', value: 3 },
        { text: '兑换', value: 4 }
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

.tradeRecord {
  position: relative;
  display: flex;
  background-color: #fff;
  height: 3.125rem;
  align-items: center;
  padding: 0 0.625rem;
}

.view {
  .Record_List {
    margin-top: 0.625rem;
    .item {
      padding: 0.9375rem 0.9375rem;
      position: relative;
      background-color: #fff;
      .item_left {
        img {
          width: 2.5rem;
          height: 2.5rem;
          margin-right: 0.625rem;
        }
        .time {
          font-size: .75rem;
          margin-top: 0.3125rem;
        }
      }
    }
  }
}

</style>
