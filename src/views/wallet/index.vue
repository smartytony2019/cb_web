<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 钱包
-->
<template>
  <div class="wrapper deposit">
    <div class="flex-1 finance-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" @click="$router.go(-1)">
            <div class="back">
              <i class="iconfont  icon-fanhui2" />
            </div>
          </div>
          <div class="flex-center-center title"> 我的钱包 </div>
          <div class="flex-right">
            <span class="jyjl" />
          </div>
        </div>

        <div class="view">

          <div class="box">
            <div class="money-box bg-box">
              <div class="totalMoney">总资产</div>
              <div class="totalUsdt">
                <span>{{ balance.total || '-' }}</span>
                <img :class="{spinner:isReloadBalance}" src="data:image/png;base64,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" class="loadBalance" @click="reloadBalance">
              </div>

              <div class="typeData">
                <div class="accounts">
                  <div>
                    <span>资金帐户</span>
                    <span>{{ balance.fundingAccount || '-' }}</span>
                  </div>
                  <b />
                  <div>
                    <span>交易帐户</span>
                    <span>{{ balance.tradingAccount || '-' }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="money-box bg-box">
              <div class="address">
                <div style="text-align: left;">我的钱包地址</div>
                <div class="child-wallet">TChHWApCSBKRu4snrm5sXPSJyt9PSWPBZm</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>

import api from '@/api'
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
      isReloadBalance: false,
      balance: {},
      isLoadingRefresh: false,
      finished: true
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.loadBalance()
    },
    async loadBalance() {
      const res = await api.member.balance()
      if (res && res.code === 0) {
        this.balance = res.data
      }
    },
    async reloadBalance() {
      this.balance = {}
      this.isReloadBalance = true
      await this.loadBalance()
      this.isReloadBalance = false
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
.finance-page {
  height:100%;
}
.red {
  color:red;
}
.blue {
  color:blue;
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

  .box {
    display:flex;
    flex-direction: column;
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
      text-align: center;
      padding-bottom: .3rem;
      border-bottom: 1px solid #e5e5e5;
      .reload {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAmCAYAAAClI5npAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANpSURBVHgBxVhbTttAFD0zQRWtKjXdQVhBU6lQPsMKmq6AsAIC9L/Jdym4K2hYAdkB/uRRqekKSHeQj6rQQjw9187YExMHJ8T0SInssWfumTt37pxrYEF40zS1t3vmK2bEEh6I9aapmBLEcI0/HzNCYU7Umqb8W2ObIzQ5SFnaDNB7NsSG76lB3nFyEVhtmmoJGJx6qi/34u5SNOtKRpfOcIijb57y8RACKfci0Hh9c4P+kxI8dtzE/eiqIXYs8UnQWQ8YUNtBCd+tcYG5QblH955/Vg1lsEWf990+XIK06+ucwOXarvmIWQisfwg7eM7aDpRC23Xp6YHqnB2oFWm3bSQlM17h+0fueHynlUVCTTJuDFpOk89Bt6a5cbRUh2Q6IKkt20YPHtJA3b4n454fqHYmgbRxXrfZoYWckGC98FQvNWaL4ySzN9ghSe8OgdEsLuc1Pg1pEhLMF58ionEM0F3HTp/OoowLTvdVi3HRtfc64HLZa/lb2zN1uqIatjCyueZtLBh/GUfOLqlJLokJ0Pi2fZHX7WkBNy9k+2qFL/aeiSxcEjW29py9bC0UhCrTN5PYpd3eT4d4qYc6STScvo8CIV5QQZIjrjQamm55Zxskf6NgqFISjMQrbVRyoDwnSRSM69vEBm1XNde9MrofzHKMzgtZBrsbGAsVbQMCdw+SwqASW2WN/wztJIcyHgnG8bqmP/qWgMgsFAzJBc4x35cg/GEf/rLpuEAsLyU2qB9+av7F24LpsY6CwVMxlnL0RFf/CdBxnm8+wjLU4qsAvu5Fe98fNYnUbqIgrO6aBhIl7cuhF52Grq5T2C7CC3LoMenEooQBGJ6MIQEKBh+OF64iKb5QmOj4rYQ3Cj0q625MQBBQvzvv16dJ6VkxUtkNe69u8d5exwRETDIrxSSypLQIT8xoPC10XcEzSZaPq9hUdUP51mGnF/dVPOmqyhpPa02VwTpNQtARrUjx2rJl2SSdH5IUzzlFa5bxTAJTSERV0vi50Q84+AUrpdB4JHCPx97nLjvbT2qBXARCErbiQa4M2aHG27lmqiXxk1HbvVVVrvKc3qhxlo3MilikvKahaDuHxIf0UrpKmpuARfhRYgknPD+qkV2EUnv5Ft68amrmLyQs28W9NeRwbx7M842oz6DasO5+KP4BbpqPIwMTRs8AAAAASUVORK5CYII=) no-repeat;
        background-size: 100% 100%;
        margin-left: 0.625rem;
      }
      .loadBalance {
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
      margin-top:.6rem;
      .accounts {
        flex-direction: row;
        b {
          width:1px;
          height:2.2rem;
          background:#ddd;
        }
        >div {
          min-width:15rem;
          text-align:center;
          >span {
            display: block;
            &:first-child {
              color:#36373b;
              margin-bottom: 0.5rem;
            }
            &:last-child {
              color:#666;
              font-size:1.3rem;
            }
          }
        }
      }
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

  .record {
    flex:1;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 1rem;
    margin: 0.625rem;
    border-radius: 0.3125rem;
    background-color: #fff;
    .items {
      .item {
        position: relative;
        padding: 1rem;
        background: #eef1f8;
        border-radius: 0.625rem;
        color: #464857;
        font-size: 0.9375rem;
        overflow: hidden;
        margin: 0.8rem 0;
        >div {
          font-size: 1.0625rem;
          &:first-child {
            margin-top: 0;
          }
        }
        &:first-child {
          margin-top: 0;
        }
        .flex {
          color: grey;
          font-size: 0.875rem;
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
