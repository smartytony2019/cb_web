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
          <div class="flex-center-center title">注单列表</div>
          <div class="flex-right" />
        </div>

        <div class="tradeRecord before">
          <van-dropdown-menu>
            <van-dropdown-item v-model="form.type" :options="option1" @change="handleMenuChange" />
          </van-dropdown-menu>
        </div>

        <div class="view">
          <div class="Record_List">

            <van-pull-refresh v-model="isLoadingRefresh" @refresh="onRefresh">
              <van-list
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >

                <div v-for="(item,index) in list" :key="index" class="item after flex-between-center" @click="$router.push({path:'/record/bet/detail?id='+item.id})">
                  <div class="item_left flex-center-center">
                    <img :src="imgSrc">
                    <div>
                      <div>{{ item.cateName }} - {{ item.gameName }} - {{ item.playName }}</div>
                      <div class="time">{{ item.createTime }}</div>
                    </div>
                  </div>

                  <div class="item_right">
                    <span class="add">{{ profitMoney(item) }}</span>
                    <span>投注金额: {{ item.moneyAmount }}</span>
                    <span>派彩金额: {{ item.payoutMoney }}</span>
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
  data() {
    return {
      recordLoading: false,
      isLoadingRefresh: false,
      finished: false,
      gameId: '',
      imgSrc: '',
      option1: [
        { text: '所有时间', value: 0 },
        { text: '今天', value: 1 },
        { text: '昨天', value: 2 },
        { text: '一个月内', value: 3 }
      ],
      list: [],
      form: {
        current: 0,
        size: 10,
        type: 0,
        gameId: ''
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const id = this.$route.query.id || '1'
      if (id === '1') {
        this.imgSrc = require('@/assets/images/otherGame/blockchain_ac.png')
      }
      if (id === '2') {
        this.imgSrc = require('@/assets/images/otherGame/live_ac.png')
      }
      if (id === '3') {
        this.imgSrc = require('@/assets/images/otherGame/Sports_ac.png')
      }
      this.form.gameId = id
    },
    profitMoney(item) {
      return item.profitMoney > 0 ? '+' + item.profitMoney : item.profitMoney
    },
    async fetch() {
      console.log('------fetch------')
      const res = await api.hashBet.findPage(this.form)
      if (res && res.code === 0) {
        this.list = this.list.concat(res.data.records)
        this.finished = res.data.records.length !== this.form.size
      }
      this.recordLoading = false
    },
    async onRefresh() {
      console.log('onRefresh', this.isLoadingRefresh)
      this.form.current = 1
      this.finished = false
      this.list = []
      this.recordLoading = true
      await this.fetch()
      this.isLoadingRefresh = false
    },
    async onLoad() {
      // 防止多次加载
      if (this.recordLoading || this.isLoadingRefresh) {
        return
      }

      console.log('onLoad', this.isLoadingRefresh)
      this.form.current += 1
      this.recordLoading = true
      await this.fetch()
      this.isLoadingRefresh = false
    },
    async handleMenuChange(val) {
      this.form.type = val
      this.form.current = 1
      this.list = []
      this.finished = false
      this.recordLoading = true
      await this.fetch()
      this.isLoadingRefresh = false
    }
  }
}
</script>

<style lang="scss" scoped>

.index-page {
  height:100% !important;
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
