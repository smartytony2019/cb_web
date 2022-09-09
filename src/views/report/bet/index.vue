<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 投注报表
-->
<template>
  <div class="wrapper financial-report">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" @click="$router.go(-1)">
            <div class="back">
              <i class="iconfont  icon-fanhui2" />
            </div>
          </div>
          <div class="flex-center-center title">投注报表</div>
          <div class="flex-right" />
        </div>

        <div class="titles flex after before">
          <div class="titles_title">查询时间：</div>
          <div class="titles_value flex-center-center" @click="isShowCalendar = true">
            <span>{{ date }}</span>
          </div>
          <button class="flex-center-center">确定</button>
        </div>

        <div class="view">
          <div class="dataList">
            <van-pull-refresh v-model="isLoadingRefresh" @refresh="onRefresh">
              <van-list
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <div class="list">
                  <div class="titleOne">
                    <div class="flex-between-center">
                      <div class="oneTab">日期</div>
                      <div class="twoTab">投注次数</div>
                      <div class="threeTab">投注金额</div>
                      <div class="threeTab">中奖金额</div>
                      <div class="threeTab">输赢</div>
                    </div>

                    <template v-if="list.length>0">
                      <div v-for="(item,index) in list" :key="index" class="flex-between-center">
                        <div class="oneTab">{{ item.date }}</div>
                        <div class="twoTab">{{ item.betCount }}</div>
                        <div class="threeTab">{{ item.betAmount }}</div>
                        <div class="threeTab">{{ item.payoutAmount }}</div>
                        <div class="threeTab">{{ item.profitAmount }}</div>
                      </div>

                      <div class="flex-between-center bg">
                        <div class="oneTab">总计</div>
                        <div class="twoTab">{{ total.betCount }}</div>
                        <div class="threeTab">{{ total.betAmount }}</div>
                        <div class="threeTab">{{ total.payoutAmount }}</div>
                        <div class="threeTab">{{ total.profitAmount }}</div>
                      </div>
                    </template>
                  </div>
                </div>
              </van-list>

            </van-pull-refresh>

          </div>

          <!-- 日历 -->
          <van-calendar v-model="isShowCalendar" type="range" color="#1989fa" :min-date="minDate" @confirm="onConfirm" />

        </div>
      </div>
    </div>
    <Nav />
  </div>
</template>
<script>

import dayjs from 'dayjs'
import Nav from '@/components/Nav'
import api from '@/api'
export default {
  name: 'Promote',
  components: { Nav },
  data() {
    return {
      isShowCalendar: false,
      date: '',
      minDate: new Date(dayjs().year(), dayjs().month() - 1, 1),

      recordLoading: false,
      isLoadingRefresh: false,
      finished: false,
      list: [],
      total: {},
      form: {
        startTime: '',
        endTime: '',
        current: 0,
        size: 15
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const start = dayjs().add(-7, 'day').format('YYYY/MM/DD')
      const end = dayjs().format('YYYY/MM/DD')
      this.date = `${start}~${end}`

      this.form.startTime = dayjs().add(-7, 'day').format('YYYYMMDD')
      this.form.endTime = dayjs().format('YYYYMMDD')
    },

    async handleConfirm() {
      this.onRefresh()
    },

    async fetch() {
      console.log('------fetch------')
      const res = await api.statistics.financial(this.form)
      if (res && res.code === 0) {
        this.list = this.list.concat(res.data.data.records)
        this.total = res.data.total
        this.finished = res.data.data.records.length !== this.form.size
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

    onConfirm(date) {
      const [s, e] = date
      const start = dayjs(s).format('YYYY/MM/DD')
      const end = dayjs(e).format('YYYY/MM/DD')
      this.date = `${start} - ${end}`
      this.form.startTime = dayjs(s).format('YYYYMMDD')
      this.form.endTime = dayjs(e).format('YYYYMMDD')

      this.isShowCalendar = false
      this.onRefresh()
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  .titles {
    position: relative;
    width: 100%;
    height: 3rem;
    background: #fff;
    align-items: center;
    padding: 0 1rem;
    .titles_title {
      color: #333;
      font-size: .9375rem;
    }

    .titles_value {
      flex: 1;
      box-shadow: 0 0.0625rem 0.25rem rgb(0 0 0 / 20%);
      border-radius: 0.3125rem;
      text-align: left;
      font-size: 1rem;
      color: #969799;
      height: 1.6875rem;
    }

    button {
      width: 4.6875rem;
      height: 1.75rem;
      color: #fff;
      background: #5c7df1;
      border: 0;
      -webkit-appearance: none;
      border-radius: 0.3125rem;
      margin-left: 0.9375rem;
    }
  }

  .view {
    .list {
      overflow-x: scroll;
      overflow-y: hidden;
    }

    .titleOne {
      font-size: .8125rem;
      color: #333;
      background: #fff;
      div {
        text-align: center;
        line-height: 2.75rem;
      }
      >div {
        width: 100%;
      }
      .one {
        width: 25%;
      }
      .oneTab, .twoTab, .threeTab {
        border-right: 0.0625rem solid #f2f7ff;
        border-bottom: 0.0625rem solid #f2f7ff;
        width: 16%;
      }
    }

    .bg {
      background: #73a3f0;
      color: #fff;
      height: 2.3125rem;
      .oneTab {
        line-height: 2.3125rem;
        background-color: #73a3f0;
      }
    }
  }
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

</style>
