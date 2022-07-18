<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 帮助中心
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
          <div class="flex-center-center title">帮助中心</div>
          <div class="flex-right" />
        </div>

        <div class="view helpCenter">
          <div class="photo-box help_bg">
            <div class="photo-content flex-center-center">
              <img src="@/assets/images/photo.png">
              <div class="font-box">
                <h2>尊敬的会员</h2>
                <p>欢迎来到帮助中心</p>
              </div>
            </div>
            <h4>若相关问题仍未解决，可咨询在线客服</h4>
          </div>

          <div class="content-box">
            <div class="item bg-box">
              <div class="question"> Q1：什么是区块哈希值(Block hash)？ </div>
              <div class="answer">区块哈希值是一段数据的DNA，每个区块哈希值都是唯一的、随机的且不可破解的。</div>
              <a target="_blank" href="https://www.baidu.com">点击查看哈希值介绍。</a>
            </div>

            <div class="item bg-box">
              <div class="question"> Q1：什么是区块哈希值(Block hash)？ </div>
              <div class="answer">区块哈希值是一段数据的DNA，每个区块哈希值都是唯一的、随机的且不可破解的。</div>
              <a target="_blank" href="https://www.baidu.com">点击查看哈希值介绍。</a>
            </div>

            <div class="item bg-box">
              <div class="question"> Q1：什么是区块哈希值(Block hash)？ </div>
              <div class="answer">区块哈希值是一段数据的DNA，每个区块哈希值都是唯一的、随机的且不可破解的。</div>
              <a target="_blank" href="https://www.baidu.com">点击查看哈希值介绍。</a>
            </div>

            <div class="item bg-box">
              <div class="question"> Q1：什么是区块哈希值(Block hash)？ </div>
              <div class="answer">区块哈希值是一段数据的DNA，每个区块哈希值都是唯一的、随机的且不可破解的。</div>
              <a target="_blank" href="https://www.baidu.com">点击查看哈希值介绍。</a>
            </div>

            <div class="item bg-box">
              <div class="question"> Q1：什么是区块哈希值(Block hash)？ </div>
              <div class="answer">区块哈希值是一段数据的DNA，每个区块哈希值都是唯一的、随机的且不可破解的。</div>
              <a target="_blank" href="https://www.baidu.com">点击查看哈希值介绍。</a>
            </div>

            <div class="item bg-box">
              <div class="question"> Q1：什么是区块哈希值(Block hash)？ </div>
              <div class="answer">区块哈希值是一段数据的DNA，每个区块哈希值都是唯一的、随机的且不可破解的。</div>
              <a target="_blank" href="https://www.baidu.com">点击查看哈希值介绍。</a>
            </div>

            <div class="item bg-box">
              <div class="question"> Q1：什么是区块哈希值(Block hash)？ </div>
              <div class="answer">区块哈希值是一段数据的DNA，每个区块哈希值都是唯一的、随机的且不可破解的。</div>
              <a target="_blank" href="https://www.baidu.com">点击查看哈希值介绍。</a>
            </div>

            <div class="item bg-box">
              <div class="question"> Q1：什么是区块哈希值(Block hash)？ </div>
              <div class="answer">区块哈希值是一段数据的DNA，每个区块哈希值都是唯一的、随机的且不可破解的。</div>
              <a target="_blank" href="https://www.baidu.com">点击查看哈希值介绍。</a>
            </div>

            <div class="item bg-box">
              <div class="question"> Q1：什么是区块哈希值(Block hash)？ </div>
              <div class="answer">区块哈希值是一段数据的DNA，每个区块哈希值都是唯一的、随机的且不可破解的。</div>
              <a target="_blank" href="https://www.baidu.com">点击查看哈希值介绍。</a>
            </div>

            <div class="item bg-box">
              <div class="question"> Q1：什么是区块哈希值(Block hash)？ </div>
              <div class="answer">区块哈希值是一段数据的DNA，每个区块哈希值都是唯一的、随机的且不可破解的。</div>
              <a target="_blank" href="https://www.baidu.com">点击查看哈希值介绍。</a>
            </div>
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

.helpCenter {
  background: #ebecf1;
  .photo-box {
    color: #fff;
    height: 13.5rem;
    margin-top: -3.125rem;
    width: 100%;
    border: none;
    text-align: center;
    position: relative;
    padding-top: 5.1875rem;
    .photo-content {
      height: 3.625rem;
      img {
        width: 3.625rem;
        height: 3.625rem;
        margin-right: 0.625rem;
      }

      .font-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        color: #fff;
        h2 {
          font-size: 1.25rem;
          margin-bottom: 0.3125rem;
        }
        p {
          font-size: .8125rem;
        }
      }
    }

    h4 {
      width: 80%;
      border-top: 0.0625rem solid #94a1c9;
      margin: 1.375rem auto 0;
      padding-top: 0.625rem;
      color: #fff;
      text-align: center;
    }
  }

  .content-box {
    margin-top: 1.25rem;
    box-sizing: border-box;
    padding: 0 1rem;
    .item {
      border-radius: 0.625rem;
      margin-bottom: 0.625rem;
      padding: 0.625rem;
      .question {
        font-size: 1.125rem;
        display: flex;
        align-items: center;
        justify-content: start;
        color: #60768a;
        border-bottom: 0.0625rem solid #eee;
        font-weight: 700;
        line-height: 1.5625rem;
        padding: 0.4375rem 0;
      }

      .answer {
        margin-top: 0.625rem;
        line-height: 1.125rem;
        font-size: .8125rem;
        color: #333;
      }
      >a {
        display: block;
        margin-top: 0.625rem;
        color: #4080ff;
        font-size: .8125rem;
      }
    }
  }
}

</style>
