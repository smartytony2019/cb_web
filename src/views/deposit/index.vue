<template>

  <div class="wrapper deposit">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" @click="$router.go(-1)">
            <div class="back">
              <i class="iconfont  icon-fanhui2" />
            </div>
          </div>
          <div class="flex-center-center title">存款</div>
          <div class="flex-right">
            <span class="jyjl">交易记录</span>
          </div>
        </div>

        <div class="view">
          <div class="withdrawType">
            <div class="title">交易帐户</div>
            <div class="money-detail flex">
              <div class="detail-item flex-column-center">
                <h4>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGFSURBVHgB7ZY9S8NgEIDvYotftILgLrRYF52cHPygUpNODla66O6/yE9wdBM6iKCDW4tQCJKlY9FBt26CgopRIzbJedGoQZOGxKpQ8gzJe++9ue+EAMTExHQJDNKL4toRIhCEgqha3V/28fdqKxFkApGWIDyWz/5HAgL8E4EZc5CVbzuEK1z+tCO2eOf46xEIIKjHnkhS6ZxvE46ocD8XISRhS42FwvowJ+QOOJ3NSv0QMomOpS4WyzNExhgiGkSmZjEAD+xY6HMdEzKZwdlcrnTHWp2IJjmGSw4uUasdKH62faPkcu5pWnJTVXdvPHSBpRbF8jiiuc06CTx67pmxLMtCo3H6lEo9b4ni6k67PXRSr1euPw1Qky8XTuxNdyL5/MZoMqnPCQLNE8EZ+Axax768RW1NcfkWWOSSU4uneYSnepqNGry239dHtn3F63vTxAF2aMuqrpuKohze+tmOOtV2JjlH/JOpfidSwN1w/GNix73vOOp0up6zvw8Y8kchJuYXeQGe8YZ6Dwq84AAAAABJRU5ErkJggg==">
                  USDT
                </h4>
                <h2>{{ balance.fundingAccount || '-' }}</h2>
              </div>

              <div class="detail-item">
                <h4>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOGSURBVHgBrZRdSFRREMfPva5hS98Z0UtZRkVBaH48Je0qgSDUi70ZYdBDIIKQGIjuh99CSVER+SA9RCGEpWUvmaspBWUqiBaUJkUGRZiGwqJrv8l7xa53XY0G5s7cMzP/mTNnztH8fn+bUmobPBIKhTocDsfrmZmZAa/X+0P9B9J8Pl8W8pHx/wneCjs1TRtDDpG0T9f1V8jhQCDwBp5RqyDN4/FsAGAUfQIOzc3NHUdugXeSJBl5BN4Dxxs+ffgMREVFDQaDwQFieylyImwC+dAOH2IdPAloIdXmEtS42LGmpmb99PR0Euo+QDPwicM3gf81yHdqvsUFYL21SyDV9lPZboKzcbxEhZdLSkp8KgIRm0BsPereP4Call5aWtpr2qPkQ19/ut3uTIxOWnYjPT39CcmqXS7XgdTU1M7u7u5gGPBNxNyUduLvhqUD19LS0gKdnZ1fxEc3nTHeRZwUnQpkN26cM51OZx9AcTbg0qIe/LbCKdIa2upHr2MS2/hPXdiBENV+IKAK+YIdjcLjiYmJt2JiYvayXk5VXVQlk6Vo3TFa2Ir6GM4G7JeJQ9xzMNbKzpAvNUtVVRjW06Y8y7qXs7mIegEOUuUVZLXI2dnZeCo+gn4Qn/1Imbrtxnk8+ytBeXl5MgFPcYoDc9yS5Kz0F3UtLDYZzZ1wCB4hpkdGFjnE/2k4iV26NGtv6WM7js20oc7Gdg+xnylrItl7bnwP1Y+QPLjIx4PIJ1ES6x8dVhAM9QCcQ12SQLYuwwBIrY1N8eykYPei5gm4rOlWp6mpqRZEAg4uG4wdVD5iBy5TBXgr7OMMr5vrSxLU1tZO4tSAmmuDE4/tm3WRs9tF4nbU+zIQi226sqdmAk7IRTIXKisr5RGUln61OnMWVxEhRrrQarNNAHAA0QcvjCvv0D41PzHDi33Lyso8FHOYnWUUFRVNriiBQY0EnjF/GLmNAm6ZmAKAi+Es81BXnMB4OmLNwyaZ9P+zaa+oqJCX1MdaCT6D4XDCJjAu2h2Ac4yEh7gfE4Ytjr43yU1mYmrUMqQtZwToKAla5BlHyiUbRPejy43txp6jIpAeIUEXop/K85EbAf0OuF9s0dHRhWoF5IjkwNv0kOfgPOCbAT+FjGU5rbi4eEytgPSIDrreAOg2wGPhQyTMCTcx/5TAOOzbxm8pc9+hVkERWyTEDh4gJpmYarVK+g0YSM719+DmSwAAAABJRU5ErkJggg==">
                  TRX
                </h4>
                <h2>{{ balance.trx || '-' }}</h2>
              </div>
            </div>
          </div>

          <!-- 钱包地址 - start -->
          <div class="withdrawType">
            <div class="title">钱包地址</div>
            <div class="qr">
              <span>向交易帐户扫描充值</span>
              <vue-qr
                :logo-src="logoSrc"
                :size="191"
                :margin="0"
                :auto-color="true"
                :dot-scale="1"
                :text="qrText"
                color-dark="#333"
                color-light="#fff"
              />
            </div>
            <div class="xlaccount">
              <div>{{ info.withdrawWallet || '-' }}</div>
              <div class="copy">复制</div>
            </div>
          </div>
          <!-- 钱包地址 - end -->

          <!-- <div class="btnGroup">
            <div class="btn_submit depositBtn">存款流程</div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import api from '@/api'
import VueQr from 'vue-qr'
export default {
  name: 'Promote',
  components: {
    VueQr
  },
  data() {
    return {
      logoSrc: '',
      qrText: 'http://www.baidu.com',

      info: {},
      balance: {}
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      let res = await api.member.info()
      if (res && res.code === 0) {
        this.info = res.data
      }

      res = await api.member.balance({ deep: 0 })
      if (res && res.code === 0) {
        this.balance = res.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  height:100% !important;
}
.page {

  .withdrawType {
    margin-top: 0.625rem;
    background: #fff;
    margin-bottom: 0.625rem;
    padding: 1rem;

    .qr {
      display:flex;
      justify-content:center;
      align-items:center;
      margin-bottom:0.825rem;
      flex-direction: column;
      span {
        font-size: .8rem;
        color: #ca0000;
        padding: 0.8rem 0;
      }
      img {
        width:50%;
      }
    }

    .title {
      padding-bottom: 0.625rem;
      font-size: 1rem;
      color: #36373b;
      border-bottom: 0.0625rem solid #dfdbdb;
      margin-bottom: 0.625rem;
    }

    .detail-item {
      width: 50%;
      h4 {
        display: flex;
        color: #36373b;
        margin-bottom: 0.3125rem;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        img {
          width: 1.125rem;
          height: 1.125rem;
          display: inline-block;
          margin-right: 0.3125rem;
        }
      }

      h2 {
        color: #4080ff;
        font-size: 1.25rem;
        text-align: center;
        font-weight: 450;
      }
    }

    .xlaccount {
      width: 100%;
      /* height: 3.4375rem; */
      background: #eff7ff;
      -webkit-backdrop-filter: blur(.106667rem);
      backdrop-filter: blur(0.106667rem);
      border-radius: 0.3125rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.625rem;
      color: #333;
      font-size: .8125rem;
      padding:.5rem 0;
      .copy {
        color: #4080ff;
        padding-left: 1.5rem;
      }
    }
  }

  .btnGroup {
    padding: 0 2.75rem;
    .depositBtn {
      background: linear-gradient(180deg,#ffb8a2,#ff6e40);
      font-size: 1.0625rem;
    }
  }

  .jyjl {
    font-size: .9375rem;
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

</style>
