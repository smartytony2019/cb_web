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

        <div class="view">
          <ul>
            <li>
              <div class="item" @click="$router.push({path:'/record/bet/list'})">
                <div class="icon cate_1" />
                <div class="text">
                  <div class="name">哈希注单</div>
                  <div class="icon-arrow"><van-icon name="arrow" /></div>
                </div>
              </div>
            </li>
            <li>
              <div class="item" @click="$router.push({path:'/record/bet/list'})">
                <div class="icon cate_2" />
                <div class="text">
                  <div class="name">彩票注单</div>
                  <div class="icon-arrow"><van-icon name="arrow" /></div>
                </div>
              </div>
            </li>
            <li>
              <div class="item" @click="$router.push({path:'/record/bet/list'})">
                <div class="icon cate_3" />
                <div class="text">
                  <div class="name">体育注单</div>
                  <div class="icon-arrow"><van-icon name="arrow" /></div>
                </div>
              </div>
            </li>
          </ul>
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

.view {

  .cate_1 {
    background:url('../../../assets/images/otherGame/blockchain_ac.png') center no-repeat;
    background-size: contain;
  }
  .cate_2 {
    background:url('../../../assets/images/otherGame/live_ac.png') center no-repeat;
    background-size: contain;
  }
  .cate_3 {
    background:url('../../../assets/images/otherGame/Sports_ac.png') center no-repeat;
    background-size: contain;
  }

  ul {
    padding:1rem;
  }
  li {
    background-color: #fff;
    margin-top:1rem;
    padding: .8rem 0;
    border-radius: 0.5rem;
  }
  .item {
    display: flex;
    flex-direction: row;
    .icon {
      width:2rem;
      height:2rem;
      margin:0 .8rem;
    }
    .text {
      display: flex;
      flex:1;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .name {
        font-size:1rem;
      }
      .icon-arrow {
        margin-right:.8rem;
        i {
          font-size:1.2rem;
        }
      }
    }
  }
}

</style>
