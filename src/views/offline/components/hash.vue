<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 幸运哈希
-->

<template>
  <div class="view">
    <div class="addressBox bg-box">
      <div class="title">请复制下面地址或扫码进行投注</div>
      <div class="qr">
        <template v-if="game && game.address">
          <vue-qr
            :logo-src="logoSrc"
            :size="120"
            :margin="0"
            :auto-color="true"
            :dot-scale="1"
            :text="game.address"
            color-dark="#333"
            color-light="#fff"
          />
        </template>
        <!-- <img src="data:image/png;base64,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" style="display: inline-block;"></img> -->
      </div>

      <div class="tips flex-center-center">
        投注成功后可以联系客服参与返佣
      </div>

      <div class="address flex-center-center">
        {{ game.address || '-' }}
      </div>

      <div>
        <van-button
          v-clipboard:copy="game.address"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          class="btn-copy"
          size="large"
          round
          type="primary"
        >一键复制</van-button>
      </div>
    </div>

    <div class="gz bg-box">
      <div class="title">游戏规则</div>
      <div class="contet">
        <div>
          <p class="t1">
            请到TRON转账TRC20-USDT，只接受
            <span style="color: red;">10.00-20000.00USDT</span>
            投注超出限额的投注，扣除千分之一手续费后返还本金。
          </p>
          <p class="t2">1.质押TRC20-USDT/TRX到游戏地址。</p>
          <p class="t2">2.获取你转账的区块哈希作为判断依据。</p>
        </div>

        <div>
          <p>3.Hash的<span style="color:red;">最后两位</span>分别为<span style="color:red;">数字和字母</span>中奖,其余情况都不中奖</p>
        </div>

        <div>
          4.中奖赔率:<span style="color: red;">1.98</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import VueQr from 'vue-qr'
export default {
  name: 'Hash',
  components: {
    VueQr
  },
  props: {
    game: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      logoSrc: ''
    }
  },
  created() {
  },
  methods: {
    onCopy(e) {
      this.$toast('copy successful')
    },
    onError(e) {
      this.$toast('copy failure')
    }
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  height:100% !important;
}
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;

  .jyjl {
    font-size: .9375rem;
  }

  .money-box {
    box-sizing: border-box;
    padding: 1rem;
    margin: 0.625rem;
    border-radius: 0.3125rem;
    img {
      width: 1.5rem;
    }
    .zj {
      margin-top: 0.625rem;
    }
    .textinfo {
      line-height: 1.25rem;
      color: red;
    }
    .totalMoney {
      color: #36373b;
      margin-bottom: 0.625rem;
      text-align: center;
    }
    .qr {
      width: 16.5625rem;
      height: 16.5625rem;
      margin: 0 auto;
      img {
        width: 100%!important;
      }
    }

    .showBalance {
      background-color: #eff7ff;
      padding: 0 0.625rem;
      margin-top: 0.625rem;
      height: 3.125rem;
      .cut {
        transform: rotate(90deg);
        width: 1.4375rem;
        height: 1.4375rem;
        img {
          width: 100%;
        }
      }

      .l1 {
        flex: 1 1;
        font-weight: 500;
        font-size: 1.25rem;
      }

      input {
        width: 100%;
        border: none;
        padding: 0.1875rem 0.625rem;
        background: none;
      }

      .dengyu {
        min-width: 2.5rem;
        text-align: center;
        font-size: 1.25rem;
        color: #333;
      }
    }

    .Ub {
      width: 6.25rem;
      justify-content: flex-start;
      &:last-child {
        justify-content: flex-end;
      }
    }

    .xlaccount {
      width: 100%;
      height: 3.4375rem;
      background: #eff7ff;
      -webkit-backdrop-filter: blur(.106667rem);
      backdrop-filter: blur(0.106667rem);
      border-radius: 0.3125rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 0.625rem;
      color: #333;
      font-size: .8125rem;
      .copy {
        color: #4080ff;
      }
    }

  }

  .money-detail {
    padding: 1rem 0 1rem 1rem;
    margin: 0.625rem;
    border: 0.0625rem solid #fff;
    border-radius: 0.3125rem;
    background: none;
    box-shadow: 0.5rem 0.8125rem 0.8125rem #e4e5ea;
    .detail-item {
      position: relative;
      width: 100%;
      display: flex;
      font-size: 1.1875rem;
      height: 3.4375rem;
      line-height: 3.4375rem;
      &::after {
        content: "";
        width: 90%;
        position: absolute;
        bottom: 0;
        right: 0;
        border-bottom: 0.0625rem solid #ccced1;
      }
      h4 {
        width: 30%;
        display: flex;
        color: #36373b;
        margin-bottom: 0.3125rem;
        align-items: center;
        text-align: left;
        img {
          width: 1.375rem;
          display: inline-block;
          margin-right: 0.625rem;
        }
      }
      h2 {
        width: 60%;
        text-align: right;
        color: #4080ff;
        font-size: 1.1875rem;
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
  .flex-right {
    color: #1a1c1e;
  }
}

.view {
  padding: 0 0.625rem;
  padding-bottom: 1.875rem;
  flex: 1 1;
  overflow-y: auto;
  .addressBox, .gz{
    padding: 0.9375rem 1.25rem;
    background-color: #fff;
    margin-top: 0.9375rem;
    .title {
      color: #333;
      font-size: 1rem;
      margin-bottom: 0.625rem;
    }

    div {
      line-height: 1.5625rem;
    }

    .qr {
      width: 16.5625rem;
      height: 16.5625rem;
      margin: 0 auto;
    }

    .tips {
      color: red;
      margin-bottom: 10px;
      text-align: center;
    }

    .address {
      padding: 0.9375rem 0.625rem;
      background-color: #eff7ff;
      border-radius: 0.3125rem;
      margin-bottom: 0.625rem;
      font-size: .9375rem;
      font-weight: 500;
    }
    .btn-copy {
      color: white;
      background: linear-gradient(rgb(255, 184, 162), rgb(255, 110, 64));
      border: 0px;
    }
  }
}

</style>
