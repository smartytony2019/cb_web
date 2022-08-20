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
          <div class="flex-center-center title">帐户明细</div>
          <div class="flex-right" />
        </div>

        <div class="tradeRecord before">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>

        <div class="view">
          <div class="Record_List">

            <van-pull-refresh v-model="isLoadingRefresh" :head-height="80" @refresh="onRefresh">
              <van-list
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >

                <div v-for="(item,index) in list" :key="index" class="item after flex-between-center">
                  <div class="item_left flex-center-center">
                    <img src="@/assets/images/bi.png">
                    <div>
                      <div>{{ item.item }}</div>
                      <div class="time">{{ item.createTime }}</div>
                    </div>
                  </div>

                  <div class="item_right">
                    <span class="add">{{ flowMoney(item) }}</span>
                    <span>余额: {{ item.afterMoney }}</span>
                    <span>币种: {{ item.ext }}</span>
                  </div>
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
import api from '@/api'
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
      recordLoading: false,
      isLoadingRefresh: false,
      finished: false,
      value1: 0,
      option1: [
        { text: '所有', value: 0 },
        { text: '充值', value: 1 },
        { text: '提现', value: 2 },
        { text: '投注', value: 3 },
        { text: '活动', value: 4 },
        { text: '兑换', value: 5 }
      ],
      list: [],
      form: {
        current: 0,
        size: 10,
        type: 0
      }
    }
  },
  computed: {
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      // this.fetch()
    },
    async fetch() {
      console.log('------fetch------')
      const res = await api.memberFlow.findPage(this.form)
      if (res && res.code === 0) {
        this.list = this.list.concat(res.data.records)
        this.finished = res.data.records.length !== this.form.size
      }
    },
    async onRefresh() {
      console.log('onRefresh')
      this.form.current = 1
      this.finished = false
      this.list = []
      await this.fetch()
      this.isLoadingRefresh = false
    },
    async onLoad() {
      // 防止多次加载
      if (this.recordLoading) {
        return
      }
      console.log('onLoad')
      this.recordLoading = true
      this.form.current += 1
      await this.fetch()
      this.recordLoading = false
      this.isLoadingRefresh = false
    },
    flowMoney(item) {
      return item.flowMoney > 0 ? '+' + item.flowMoney : item.flowMoney
    }
  }
}
</script>

<style lang="scss" scoped>

.index-page {
  height: 100% !important;
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

      .item_right {
        display: flex;
        flex-direction: column;
        line-height: 1.2rem;
        >span {
          font-size:.5rem;
          text-align: right;
          color:#b3b3b3;
          &:first-child {
            font-size:1rem;
          }
          &.add {
            color:#e82300;
          }
          &.sub {
            color:#4080ff;
          }
        }
      }
    }
  }
}

</style>
