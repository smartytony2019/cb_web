<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 直属查询
-->
<template>
  <div class="partner-content">
    <!-- 我的业绩 - start -->
    <div class="part1">
      <div class="text1">我的业绩</div>
      <div class="flex wrap">
        <div class="listContent flex-column-center">
          <div>
            <img src="@/assets/images/promote/m1.png">
          </div>
          <div class="mar">直属人数</div>
          <div>{{ data.directNum }}</div>
        </div>

        <div class="listContent flex-column-center">
          <div>
            <img src="@/assets/images/promote/m8.png">
          </div>
          <div class="mar">团队人数</div>
          <div>{{ data.teamNum }}</div>
        </div>

        <div class="listContent flex-column-center">
          <div>
            <img src="@/assets/images/promote/m7.png">
          </div>
          <div class="mar">今日总业绩</div>
          <div>{{ data.todayPerformanceTotal }}</div>
        </div>
      </div>
    </div>
    <!-- 推广码 - end -->

    <!-- 查询下级会员 - start -->
    <div class="part1">
      <div class="text1">查询下级会员</div>
      <div class="mar">
        <input class="xijiinput" placeholder="请输入下级账号">
      </div>
      <div>
        <van-button class="btn-apply" type="primary" round size="large">搜索</van-button>
      </div>
    </div>
    <!-- 查询下级会员 - end -->

    <van-pull-refresh v-model="isLoadingRefresh" class="refresh" @refresh="onRefresh">
      <van-list
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="list">

          <div class="listItem bg-box">
            <div class="loginName">jack</div>
            <div class="flex-between-center">
              <span>直属业绩</span>
              <span>0</span>
            </div>
            <div class="flex-between-center">
              <span>团队业绩</span>
              <span>0</span>
            </div>
          </div>

        </div>
      </van-list>
    </van-pull-refresh>

  </div>
</template>
<script>
import api from '@/api'
export default {
  name: 'Direct',
  data() {
    return {
      isLoadingRefresh: false,
      finished: true,

      data: {}
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const res = await api.promote.myPerformance({})
      console.log(res)
      if (res && res.code === 0) {
        this.data = res.data
      }
    },
    onRefresh() {
      console.log(111)
    },
    onLoad() {
      console.log(222)
    }
  }
}
</script>

<style lang="scss" scoped>

.btn-apply {
  color: white;
  background: linear-gradient(187.43deg, rgb(255, 174, 80) 5.93%, rgb(234, 105, 32) 94.39%);
  border: 0px;
  height: 3.125rem;
  span {
    font-size: 1.125rem;
  }
}

.partner-content {
  padding-bottom: 0.625rem;
  background: #e9ecf1;
  .part1 {
    padding: 0.625rem;
    background: #fff;
    box-shadow: 0.1875rem 0.1875rem 0.1875rem hsl(0deg 0% 61% / 25%);
    margin-bottom: 0.625rem;
    .code {
      width: 7rem;
      height: 7rem;
      border: 0.0625rem solid #333;
      img {
        width: 100%;
      }
    }

    .part-right {
      text-align: left;
      .mb {
        margin-bottom: 0.3125rem;
      }

      .mb2 {
        margin-top: 0.625rem;
      }

      .input {
        width: 12.25rem;
        height: 1.75rem;
        border-radius: 0.3125rem;
        background: #e7e7e7;
        margin-right: 0.625rem;
        line-height: 1.75rem;
        padding-left: 0.625rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
        font-size: .875rem;
      }

      button {
        text-align: center;
        width: 3rem;
        height: 1.75rem;
        border: none;
        border-radius: 0.3125rem;
        background: linear-gradient(40.64deg,#fb9d37 23.09%,#fccf3f 76.91%);
        color: #fff;
      }
    }

    .text1 {
      color: #60768a;
      font-size: 1rem;
      width: 100%;
      padding-bottom: 0.625rem;
      border-bottom: 0.125rem solid #f0f6ff;
    }

    .wrap {
      flex-wrap: wrap;
      .listContent {
        width: 33.3%;
        margin: 0.625rem 0;
        font-size: .875rem;
        >div {
          &:first-child {
            width: 3.125rem;
            height: 3.125rem;
          }
        }
      }
    }

    .mar {
      margin: 0.625rem 0;
      text-align: center;
    }

    .xijiinput {
      width: 100%;
      background: #fff;
      border: 0.0625rem solid #f5fcff;
      box-sizing: border-box;
      height: 3rem;
      padding-left: 0.625rem;
      border-radius: 0.3125rem;
      color: #333;
      font-size: .875rem;
      box-shadow: inset -0.25rem -0.25rem 0.25rem rgb(161 158 158 / 25%), inset 0.25rem 0.25rem 0.25rem rgb(162 158 158 / 25%);
    }

    .m1 {
      width: 45%;
      border: 0.0625rem solid #98c1fe;
      border-radius: 0.3125rem;
      padding: 0.625rem;
      font-size: .875rem;
      >div{
        &:first-child {
          width: 3.125rem;
          height: 3.125rem;
        }
      }
    }
  }

  .list {
    padding: 0 0.625rem;
    .listItem {
      padding: 0.625rem 1.25rem;
      background-color: #fff;
      margin-bottom: 0.625rem;
      .loginName {
        font-size: 1.125rem;
        margin-bottom: 0.625rem;
      }

      .flex-between-center {
        margin-bottom: 0.5rem;
      }
    }
  }
}

</style>
