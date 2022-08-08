<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 结算进度组件
-->
<template>

  <!-- 投注详情信息 - start -->
  <van-popup v-model="isShowTradeInfo" class="trade-info-popup" position="center">
    <div class="tradeInfo">
      <div class="header flex tradeHead">
        <div class="flex-left">
          <i class="iconfont icon-fanhui2" />
        </div>

        <div class="flex-center-center title"> 交易详情</div>
        <div class="flex-right" />
      </div>

      <div class="line" />
      <div class="view">
        <div class="detailInfo">
          <div class="flex-between-center after">
            <p>Block Hash</p>
            <p class="blue">
              <a href="#" target="_blank">00000···6cea7619</a>
            </p>
          </div>

          <div class="flex-between-center after">
            <p>投注详情</p>
            <p>小</p>
          </div>

          <div class="flex-between-center after">
            <p>投注金额</p>
            <p>1.00USDT</p>
          </div>

          <div class="flex-between-center after">
            <p>奖金</p>
            <p class="yellow">0.00USDT</p>
          </div>

          <div class="flex-between-center after">
            <p>派奖金额</p>
            <p class="yellow">0.00USDT</p>
          </div>

          <div class="flex-between-center after">
            <p>订单日期</p>
            <p>2022/8/8 18:43:36</p>
          </div>

          <div class="flex-between-center after">
            <p>状态</p>
            <p class="status win">未中奖</p>
          </div>

        </div>
      </div>
    </div>
  </van-popup>
  <!-- 投注详情信息 - end -->
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="scss" scoped>

.trade-info-popup {
  width: 100%;
  height: 100%;
  max-width: 40rem;
  background-color: #fff;
  .tradeInfo {
    color: #333;
    font-size: .9375rem;
    font-weight: 500;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    .header {
      min-height: 3.4375rem;
      padding: 0 0.9375rem;
      background-color: #fff;
      color: #fff!important;
      background-image: url(../../assets/images/game/report.head.png);
      >div {
        display: flex;
        align-items: center;
        min-width: 3.125rem;
      }
      .icon-fanhui2 {
        font-size: 1.25rem;
      }

      .title {
        font-size: 1.125rem;
        font-weight: 700;
        flex: 1 1;
        color: #fff!important;
      }
    }

    .line {
      height: 0.625rem;
      width: 100%;
      background: #f7f6fc;
    }

    .detailInfo {
      padding: 0 1rem 1rem 1rem;
      text-align: center;
      .flex-between-center {
        padding: 0.9375rem 0;
        position: relative;
      }
      .status {
        padding: 0.25rem 0.3125rem;
        border-radius: 0.1875rem;
        background: #a8a8a8;
        color: #fff;
        font-size: .8125rem;
      }
      .win {
        background-color: red;
      }
    }
  }
}
</style>
