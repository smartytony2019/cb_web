<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 钱包
-->
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
          <div class="flex-center-center title">兑换</div>
          <div class="flex-right">
            <div>兑换记录</div>
          </div>
        </div>

        <div class="view">

          <div class="money-box bg-box">
            <div class="totalMoney">总资产(USDT)</div>
            <div class="totalUsdt">
              <span>51.88</span>
              <i class="reload" />
            </div>
            <div class="address">
              <div style="text-align: left;">我的钱包地址</div>
              <div class="child-wallet">TChHWApCSBKRu4snrm5sXPSJyt9PSWPBZm</div>
            </div>

            <div class="typeData">
              <div>
                <img src="https://designer-trip.com/image/mycukuan.png">
                <p>存款</p>
              </div>
              <div>
                <img src="https://designer-trip.com/image/qukuan.png">
                <p>存款</p>
              </div>
              <div>
                <img src="https://designer-trip.com/image/wallet.png">
                <p>兑换</p>
              </div>
            </div>
          </div>

          <div class="money-detail">
            <div class="detail-item">
              <h4>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGFSURBVHgB7ZY9S8NgEIDvYotftILgLrRYF52cHPygUpNODla66O6/yE9wdBM6iKCDW4tQCJKlY9FBt26CgopRIzbJedGoQZOGxKpQ8gzJe++9ue+EAMTExHQJDNKL4toRIhCEgqha3V/28fdqKxFkApGWIDyWz/5HAgL8E4EZc5CVbzuEK1z+tCO2eOf46xEIIKjHnkhS6ZxvE46ocD8XISRhS42FwvowJ+QOOJ3NSv0QMomOpS4WyzNExhgiGkSmZjEAD+xY6HMdEzKZwdlcrnTHWp2IJjmGSw4uUasdKH62faPkcu5pWnJTVXdvPHSBpRbF8jiiuc06CTx67pmxLMtCo3H6lEo9b4ni6k67PXRSr1euPw1Qky8XTuxNdyL5/MZoMqnPCQLNE8EZ+Axax768RW1NcfkWWOSSU4uneYSnepqNGry239dHtn3F63vTxAF2aMuqrpuKohze+tmOOtV2JjlH/JOpfidSwN1w/GNix73vOOp0up6zvw8Y8kchJuYXeQGe8YZ6Dwq84AAAAABJRU5ErkJggg==">
                USDT
              </h4>
              <h2>51.88</h2>
            </div>

            <div class="detail-item">
              <h4>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOGSURBVHgBrZRdSFRREMfPva5hS98Z0UtZRkVBaH48Je0qgSDUi70ZYdBDIIKQGIjuh99CSVER+SA9RCGEpWUvmaspBWUqiBaUJkUGRZiGwqJrv8l7xa53XY0G5s7cMzP/mTNnztH8fn+bUmobPBIKhTocDsfrmZmZAa/X+0P9B9J8Pl8W8pHx/wneCjs1TRtDDpG0T9f1V8jhQCDwBp5RqyDN4/FsAGAUfQIOzc3NHUdugXeSJBl5BN4Dxxs+ffgMREVFDQaDwQFieylyImwC+dAOH2IdPAloIdXmEtS42LGmpmb99PR0Euo+QDPwicM3gf81yHdqvsUFYL21SyDV9lPZboKzcbxEhZdLSkp8KgIRm0BsPereP4Call5aWtpr2qPkQ19/ut3uTIxOWnYjPT39CcmqXS7XgdTU1M7u7u5gGPBNxNyUduLvhqUD19LS0gKdnZ1fxEc3nTHeRZwUnQpkN26cM51OZx9AcTbg0qIe/LbCKdIa2upHr2MS2/hPXdiBENV+IKAK+YIdjcLjiYmJt2JiYvayXk5VXVQlk6Vo3TFa2Ir6GM4G7JeJQ9xzMNbKzpAvNUtVVRjW06Y8y7qXs7mIegEOUuUVZLXI2dnZeCo+gn4Qn/1Imbrtxnk8+ytBeXl5MgFPcYoDc9yS5Kz0F3UtLDYZzZ1wCB4hpkdGFjnE/2k4iV26NGtv6WM7js20oc7Gdg+xnylrItl7bnwP1Y+QPLjIx4PIJ1ES6x8dVhAM9QCcQ12SQLYuwwBIrY1N8eykYPei5gm4rOlWp6mpqRZEAg4uG4wdVD5iBy5TBXgr7OMMr5vrSxLU1tZO4tSAmmuDE4/tm3WRs9tF4nbU+zIQi226sqdmAk7IRTIXKisr5RGUln61OnMWVxEhRrrQarNNAHAA0QcvjCvv0D41PzHDi33Lyso8FHOYnWUUFRVNriiBQY0EnjF/GLmNAm6ZmAKAi+Es81BXnMB4OmLNwyaZ9P+zaa+oqJCX1MdaCT6D4XDCJjAu2h2Ac4yEh7gfE4Ytjr43yU1mYmrUMqQtZwToKAla5BlHyiUbRPejy43txp6jIpAeIUEXop/K85EbAf0OuF9s0dHRhWoF5IjkwNv0kOfgPOCbAT+FjGU5rbi4eEytgPSIDrreAOg2wGPhQyTMCTcx/5TAOOzbxm8pc9+hVkERWyTEDh4gJpmYarVK+g0YSM719+DmSwAAAABJRU5ErkJggg==">
                TRX
              </h4>
              <h2>51.88</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Wallet',
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
    .totalMoney {
      color: #36373b;
      margin-bottom: 0.625rem;
      text-align: center;
    }

    .totalUsdt {
      position: relative;
      color: #36373b;
      font-size: 1.625rem;
      text-indent: 0.9375rem;
      text-align: left;
      &:before {
        position: absolute;
        left: 0;
        bottom: 0.125rem;
        width: 1rem;
        height: 1rem;
        content: "";
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGFSURBVHgB7ZY9S8NgEIDvYotftILgLrRYF52cHPygUpNODla66O6/yE9wdBM6iKCDW4tQCJKlY9FBt26CgopRIzbJedGoQZOGxKpQ8gzJe++9ue+EAMTExHQJDNKL4toRIhCEgqha3V/28fdqKxFkApGWIDyWz/5HAgL8E4EZc5CVbzuEK1z+tCO2eOf46xEIIKjHnkhS6ZxvE46ocD8XISRhS42FwvowJ+QOOJ3NSv0QMomOpS4WyzNExhgiGkSmZjEAD+xY6HMdEzKZwdlcrnTHWp2IJjmGSw4uUasdKH62faPkcu5pWnJTVXdvPHSBpRbF8jiiuc06CTx67pmxLMtCo3H6lEo9b4ni6k67PXRSr1euPw1Qky8XTuxNdyL5/MZoMqnPCQLNE8EZ+Axax768RW1NcfkWWOSSU4uneYSnepqNGry239dHtn3F63vTxAF2aMuqrpuKohze+tmOOtV2JjlH/JOpfidSwN1w/GNix73vOOp0up6zvw8Y8kchJuYXeQGe8YZ6Dwq84AAAAABJRU5ErkJggg==) no-repeat;
        background-size: 100% 100%;
      }

      .reload {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAmCAYAAAClI5npAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANpSURBVHgBxVhbTttAFD0zQRWtKjXdQVhBU6lQPsMKmq6AsAIC9L/Jdym4K2hYAdkB/uRRqekKSHeQj6rQQjw9187YExMHJ8T0SInssWfumTt37pxrYEF40zS1t3vmK2bEEh6I9aapmBLEcI0/HzNCYU7Umqb8W2ObIzQ5SFnaDNB7NsSG76lB3nFyEVhtmmoJGJx6qi/34u5SNOtKRpfOcIijb57y8RACKfci0Hh9c4P+kxI8dtzE/eiqIXYs8UnQWQ8YUNtBCd+tcYG5QblH955/Vg1lsEWf990+XIK06+ucwOXarvmIWQisfwg7eM7aDpRC23Xp6YHqnB2oFWm3bSQlM17h+0fueHynlUVCTTJuDFpOk89Bt6a5cbRUh2Q6IKkt20YPHtJA3b4n454fqHYmgbRxXrfZoYWckGC98FQvNWaL4ySzN9ghSe8OgdEsLuc1Pg1pEhLMF58ionEM0F3HTp/OoowLTvdVi3HRtfc64HLZa/lb2zN1uqIatjCyueZtLBh/GUfOLqlJLokJ0Pi2fZHX7WkBNy9k+2qFL/aeiSxcEjW29py9bC0UhCrTN5PYpd3eT4d4qYc6STScvo8CIV5QQZIjrjQamm55Zxskf6NgqFISjMQrbVRyoDwnSRSM69vEBm1XNde9MrofzHKMzgtZBrsbGAsVbQMCdw+SwqASW2WN/wztJIcyHgnG8bqmP/qWgMgsFAzJBc4x35cg/GEf/rLpuEAsLyU2qB9+av7F24LpsY6CwVMxlnL0RFf/CdBxnm8+wjLU4qsAvu5Fe98fNYnUbqIgrO6aBhIl7cuhF52Grq5T2C7CC3LoMenEooQBGJ6MIQEKBh+OF64iKb5QmOj4rYQ3Cj0q625MQBBQvzvv16dJ6VkxUtkNe69u8d5exwRETDIrxSSypLQIT8xoPC10XcEzSZaPq9hUdUP51mGnF/dVPOmqyhpPa02VwTpNQtARrUjx2rJl2SSdH5IUzzlFa5bxTAJTSERV0vi50Q84+AUrpdB4JHCPx97nLjvbT2qBXARCErbiQa4M2aHG27lmqiXxk1HbvVVVrvKc3qhxlo3MilikvKahaDuHxIf0UrpKmpuARfhRYgknPD+qkV2EUnv5Ft68amrmLyQs28W9NeRwbx7M842oz6DasO5+KP4BbpqPIwMTRs8AAAAASUVORK5CYII=) no-repeat;
        background-size: 100% 100%;
        margin-left: 0.625rem;
      }
    }

    .address {
      margin: 1rem 0;
      font-size: .8125rem;
      >div {
        &:first-child {
          margin-bottom: 0.625rem;
        }
      }

      .child-wallet {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.875rem;
        color: #4080ff;
        border: 0.0625rem solid #e9e9e9;
        border-radius: 0.3125rem;
        background: #e9e9e9;
      }
    }

    .typeData {
      display: flex;
      justify-content: space-around;
      >div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: center;
        img {
          width: 2.1875rem;
          height: 1.6875rem;
          margin-bottom: 0.625rem;
        }
        p {
          font-size: .8125rem;
          color: #333;
        }
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

</style>
