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
          <div class="flex-center-center title"> 资金详情 </div>
          <div class="flex-right">
            <span class="jyjl" />
          </div>
        </div>

        <div class="view">

          <div class="box">
            <div class="money-box bg-box">
              <div class="totalMoney">总资产</div>
              <div class="totalUsdt">
                <span>51.88</span>
                <i class="reload" />
              </div>

              <div class="typeData">
                <div class="accounts">
                  <div>
                    <span>资金帐户</span>
                    <span>51.88</span>
                  </div>
                  <b />
                  <div>
                    <span>交易帐户</span>
                    <span>51.88</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="record">
              <van-pull-refresh v-model="isLoadingRefresh" class="refresh" @refresh="onRefresh">
                <van-list
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad"
                >
                  <div class="items">

                    <div class="item">
                      <div class="flex-between-center">
                        <span>投注</span>
                      </div>
                      <div class="flex-between-center">
                        <span />
                        <span class="red">+1000.00</span>
                      </div>
                      <div class="flex">
                        <div>时间: 2022-05-02 00:00:00</div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="flex-between-center">
                        <span>投注</span>
                      </div>
                      <div class="flex-between-center">
                        <span />
                        <span class="red">+1000.00</span>
                      </div>
                      <div class="flex">
                        <div>时间: 2022-05-02 00:00:00</div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="flex-between-center">
                        <span>投注</span>
                      </div>
                      <div class="flex-between-center">
                        <span />
                        <span class="red">+1000.00</span>
                      </div>
                      <div class="flex">
                        <div>时间: 2022-05-02 00:00:00</div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="flex-between-center">
                        <span>投注</span>
                      </div>
                      <div class="flex-between-center">
                        <span />
                        <span class="red">+1000.00</span>
                      </div>
                      <div class="flex">
                        <div>时间: 2022-05-02 00:00:00</div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="flex-between-center">
                        <span>投注</span>
                      </div>
                      <div class="flex-between-center">
                        <span />
                        <span class="red">+1000.00</span>
                      </div>
                      <div class="flex">
                        <div>时间: 2022-05-02 00:00:00</div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="flex-between-center">
                        <span>投注</span>
                      </div>
                      <div class="flex-between-center">
                        <span />
                        <span class="red">+1000.00</span>
                      </div>
                      <div class="flex">
                        <div>时间: 2022-05-02 00:00:00</div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="flex-between-center">
                        <span>投注</span>
                      </div>
                      <div class="flex-between-center">
                        <span />
                        <span class="red">+1000.00</span>
                      </div>
                      <div class="flex">
                        <div>时间: 2022-05-02 00:00:00</div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="flex-between-center">
                        <span>投注</span>
                      </div>
                      <div class="flex-between-center">
                        <span />
                        <span class="red">+1000.00</span>
                      </div>
                      <div class="flex">
                        <div>时间: 2022-05-02 00:00:00</div>
                      </div>
                    </div>
                  </div>
                </van-list>
              </van-pull-refresh>
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
  data() {
    return {
      isLoadingRefresh: false,
      finished: true
    }
  },
  created() {
  },
  methods: {
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
      /* &:before {
        position: absolute;
        left: 0;
        bottom: 0.125rem;
        width: 1rem;
        height: 1rem;
        content: "";
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGFSURBVHgB7ZY9S8NgEIDvYotftILgLrRYF52cHPygUpNODla66O6/yE9wdBM6iKCDW4tQCJKlY9FBt26CgopRIzbJedGoQZOGxKpQ8gzJe++9ue+EAMTExHQJDNKL4toRIhCEgqha3V/28fdqKxFkApGWIDyWz/5HAgL8E4EZc5CVbzuEK1z+tCO2eOf46xEIIKjHnkhS6ZxvE46ocD8XISRhS42FwvowJ+QOOJ3NSv0QMomOpS4WyzNExhgiGkSmZjEAD+xY6HMdEzKZwdlcrnTHWp2IJjmGSw4uUasdKH62faPkcu5pWnJTVXdvPHSBpRbF8jiiuc06CTx67pmxLMtCo3H6lEo9b4ni6k67PXRSr1euPw1Qky8XTuxNdyL5/MZoMqnPCQLNE8EZ+Axax768RW1NcfkWWOSSU4uneYSnepqNGry239dHtn3F63vTxAF2aMuqrpuKohze+tmOOtV2JjlH/JOpfidSwN1w/GNix73vOOp0up6zvw8Y8kchJuYXeQGe8YZ6Dwq84AAAAABJRU5ErkJggg==) no-repeat;
        background-size: 100% 100%;
      } */

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
