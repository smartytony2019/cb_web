<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 推广报表
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
          <div class="flex-center-center title">推广报表</div>
          <div class="flex-right" />
        </div>

        <div class="titles flex after before">
          <div class="titles_title">查询时间：</div>
          <div class="titles_value flex-center-center">
            <span>2022/07/18~2022/07/18</span>
          </div>
          <button class="flex-center-center">确定</button>
        </div>

        <div class="view">
          <div class="dataList">
            <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
              <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
              <template #pulling="props">
                <img
                  class="doge"
                  src="https://fastly.jsdelivr.net/npm/@vant/assets/doge.png"
                  :style="{ transform: `scale(${props.distance / 80})` }"
                >
              </template>

              <!-- 释放提示 -->
              <template #loosing>
                <img
                  class="doge"
                  src="https://fastly.jsdelivr.net/npm/@vant/assets/doge.png"
                >
              </template>

              <!-- 加载提示 -->
              <template #loading>
                <img
                  class="doge"
                  src="https://fastly.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg"
                >
              </template>

              <van-list
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <div class="list">
                  <div class="titleOne">
                    <div class="flex-between-center">
                      <div class="oneTab">日期</div>
                      <div class="twoTab">日期</div>
                      <div class="threeTab">日期</div>
                      <div class="threeTab">日期</div>
                      <div class="threeTab">日期</div>
                      <div class="threeTab">日期</div>
                      <div class="threeTab">日期</div>
                    </div>

                    <div class="flex-between-center bg">
                      <div class="oneTab">总计</div>
                      <div class="twoTab">1</div>
                      <div class="threeTab">1</div>
                      <div class="threeTab">1</div>
                      <div class="threeTab">1</div>
                      <div class="threeTab">1</div>
                      <div class="threeTab">1</div>
                    </div>
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
      width: 170%;
      div {
        text-align: center;
        line-height: 2.75rem;
      }
      >div {
        width: 100%;
      }
      .oneTab, .twoTab, .threeTab {
        border-right: 0.0625rem solid #f2f7ff;
        border-bottom: 0.0625rem solid #f2f7ff;
        width: 22%;
      }

      .oneTab {
        width: 25%!important;
        position: absolute;
        background-color: #fff;
      }

      .twoTab {
        margin-left: 14.5%;
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
