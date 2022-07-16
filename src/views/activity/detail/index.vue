<template>

  <div class="wrapper activity">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" @click="$router.go(-1)">
            <div class="back"><i class="iconfont  icon-fanhui2" /></div>
          </div>
          <div class="flex-center-center title">优惠活动</div>
          <div class="flex-right" />
        </div>

        <div class="view">
          <div class="content">
            <div class="title before after flex-between-center">
              <div>充币初体验</div>
            </div>

            <div class="img">
              <div class="van-image" style="width: 100%; height: 100%;">
                <img src="https://designer-trip.com/image/Activity/newcomer1Cn.jpg" class="van-image__img">
              </div>
            </div>

            <div class="atime">活动时间:2022-07-02-2022-07-09</div>

            <div class="acontent">
              奖励说明：新用户首次充币<span style="color: #ff0000;">100</span>TRX，立即领取
              <span style="color: #ff0000;">8</span> USDT彩金，注册钱包地址余额达到要求的可联系客服领取加赠彩金最高
              <span style="color: #ff0000;">38</span> USDT，当天转入的余额不计算有效价值。每一会员仅限参与一次。
              <br>
              注册钱包地址资产500+，加赠<span style="color: #ff0000;">18</span> USDT
              <br>
              注册钱包地址资产1000+，加赠<span style="color: #ff0000;">38</span> USDT
              <br>
              活动限制：自注册日起,限时第7日23:59:59完成存款并领取。
              <br>
              领取方式：联系在线客服申请
              <br>
              点击联系：<a href="https://vfvfdws.chatnow.mstatik.com/widget/standalone.html?eid=c1656e2b4b6c4d67d63ebad6b11657a4">24小时在线客服</a>
              <br>
              点击联系：<a href="https://t.me/habo_intl">Telegram客服</a>
            </div>
          </div>
        </div>

        <div class="lq">
          <button class="van-button van-button--info van-button--large" style="color: white; background: linear-gradient(rgb(162, 193, 255), rgb(64, 128, 255)); border: 0px;">
            <div class="van-button__content">
              <span class="van-button__text"> 申请领取 </span>
            </div>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'PromoteDetail',
  metaInfo: {
    title: '页面标题',
    meta: [
      { name: 'viewport', content: '页width=device-width,initial-scale=1面描述' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ]
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.index-page {
  height: 100% !important;
}

.content {
  background-color: #fff;
  .title {
    padding: 0.625rem 1.25rem;
    background-color: #fff;
    font-size: 1.125rem;
    color: #333;
    position: relative;
    font-weight: 400;
    margin-top: 0.625rem;
    font-weight: 600;
  }

  .img {
    margin: 0.625rem;
    border-radius: 0.3125rem;
    overflow: hidden;
  }

  .atime {
    height: 1.875rem;
    line-height: 1.875rem;
    padding-left: 1.25rem;
    font-size: .8125rem;
    font-weight: 400;
  }

  .acontent {
    padding: 0.625rem 1.25rem;
    background-color: #fff;
    line-height: 1.4375rem;
  }
}

.lq {
  padding: 0.9375rem 1.25rem;
  background-color: #fff;
  border-radius: 1.25rem 1.25rem 0 0;
  filter: drop-shadow(0 -0.0625rem 0.1875rem rgba(187,193,207,.4));
  button {
    &.van-button {
      border-radius: 0.3125rem;
      height: 2.8125rem;
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
