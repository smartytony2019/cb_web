<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 划转
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
          <div class="flex-center-center title">划转</div>
          <div class="flex-right">
            <span class="jyjl" />
          </div>
        </div>

        <div class="view">
          <div class="withdrawType flex transfer-box">
            <div class="left">
              <span>从</span>
              <span>到</span>
            </div>
            <div class="middle">
              <div class="item" @click="handleItemClick(0)">
                <div class="con">
                  <span>{{ columns[selected.from] }}</span>
                  <span>USDT</span>
                </div>

                <div class="arrow">
                  <van-icon name="arrow" />
                </div>
              </div>

              <div class="item" @click="handleItemClick(1)">
                <div class="con">
                  <span>{{ columns[selected.to] }}</span>
                  <span>USDT</span>
                </div>

                <div class="arrow">
                  <van-icon name="arrow" />
                </div>
              </div>
            </div>
            <div class="right">
              <van-icon name="sort" @click="exchange" />
            </div>
          </div>

          <div class="withdrawType">
            <div class="xlaccount cell">
              <div class="trc20_icon">
                <img src="data:image/png;base64,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">
              </div>

              <div class="input_box">
                <input v-model="form.money" type="number" placeholder="请输入划转金额" class="withdrawinput">
              </div>

              <div class="all_box">
                <span @click="handleTransferAll">全部划转</span>
              </div>
            </div>
            <div class="info">
              最多可转: <span>{{ transferble || '-' }} USDT</span>
              <b v-if="selected.from === 0">** 需要TRX燃料费</b>
            </div>
          </div>

          <div class="btnGroup">
            <button class="btn_submit" @click="handleConfirm">确定</button>
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :default-index="defaultIndex"
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>

    <!-- 加载层 - start -->
    <Loading v-if="isLoading" />
    <!-- 加载层 - end -->
  </div>
</template>
<script>
import api from '@/api'
import Loading from '@/components/Loading'
export default {
  name: 'Promote',
  metaInfo: {
    title: '页面标题',
    meta: [
      { name: 'viewport', content: '页width=device-width,initial-scale=1面描述' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ]
  },
  components: { Loading },
  data() {
    return {
      isReloadBalance: false,
      balance: {},
      isLoading: false,
      value: '',
      defaultIndex: 0,
      columns: ['资金帐户', '交易帐户'],
      showPicker: false,
      selected: {
        from: 0,
        to: 1
      },
      form: {
        direction: 0,
        money: ''
      },
      itemIndex: 0
    }
  },
  computed: {
    transferble() {
      if (this.selected.from === 0) {
        return this.balance && this.balance.fundingAccount
      } else {
        return this.balance && this.balance.tradingAccount
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.loadBalance(0)
    },
    async loadBalance(deep) {
      const res = await api.member.balance({ deep })
      if (res && res.code === 0) {
        this.balance = res.data
      }
    },
    async reloadBalance() {
      this.balance = {}
      this.isReloadBalance = true
      await this.loadBalance(1)
      this.isReloadBalance = false
    },
    handleItemClick(item) {
      this.itemIndex = item
      this.defaultIndex = item === 0 ? this.selected.from : this.selected.to
      this.showPicker = true
    },
    onConfirm(value, index) {
      if (this.itemIndex === 0) {
        this.selected.from = index === 0 ? 0 : 1
        this.selected.to = index === 1 ? 0 : 1
      } else {
        this.selected.to = index === 0 ? 0 : 1
        this.selected.from = index === 1 ? 0 : 1
      }
      this.value = value
      this.showPicker = false
    },
    exchange() {
      const tmp = this.selected.from
      this.selected.from = this.selected.to
      this.selected.to = tmp
    },
    async handleConfirm() {
      if (this.form.money <= 0) {
        this.$toast('请输入正确的划转金额')
        return
      }

      this.form.direction = this.selected.from
      this.isLoading = true
      const res = await api.member.transfer(this.form)
      const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
      }
      await sleep(3000)
      this.isLoading = false
      if (res && res.code === 0) {
        this.form.direction = 0
        this.form.money = ''
        this.selected.from = 0
        this.selected.to = 1

        this.$toast('转账成功')
        this.reloadBalance()
      } else {
        this.$toast(res.msg || '转账失败')
      }
    },
    handleTransferAll() {
      this.form.money = this.transferble
    }
  }
}
</script>

<style lang="scss" scoped>

.index-page {
  height:100% !important;
}
.page {
  background: #f2f7ff;

  .transfer-box {
    .left {
      width: 5rem;
      display:flex;
      flex-direction: column;
      justify-content: center;
      line-height:5rem;
    }
    .middle {
      flex: 1;
      display:flex;
      flex-direction: column;
      justify-content: center;
      line-height:5rem;
      .item {

        &:first-child{
          border-bottom: 1px solid #dfdbdb;
        }
        display:flex;
        .con {
          flex: 1;
          display: flex;
          flex-direction: column;
          line-height:1rem;
          justify-content: center;
          span {
            &:first-child {
              color:#36373b;
              padding-bottom:.3rem;
            }
            &:last-child {
              color: #7a828d
            }
          }
        }

      }
    }

    .right {
      width: 7rem;
      display:flex;
      align-items:center;
      justify-content: center;
      i {
        font-size: 2rem;
        border: 2px solid #79828d;
        border-radius: 10%;
      }
    }
  }

  .withdrawType {
    margin-top: 0.625rem;
    background: #fff;
    margin-bottom: 0.625rem;
    padding: 1rem;
    .title {
      padding-bottom: 0.625rem;
      font-size: 1rem;
      color: #36373b;
      border-bottom: 0.0625rem solid #dfdbdb;
      margin-bottom: 0.625rem;
    }

    .info {
      span {
        color: #36373b;
      }
      b {
        color:#ff782c;
        font-weight: normal;
        padding-left: 2rem;
      }
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
      height: 3.4375rem;
      background: #fff;
      -webkit-backdrop-filter: blur(.106667rem);
      backdrop-filter: blur(0.106667rem);
      /* border-radius: 0.3125rem; */
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 0.625rem;
      color: #333;
      font-size: .8125rem;
      border-bottom: 1px solid #ddd;
      .copy {
        color: #4080ff;
      }

      .trc20_icon {
        width: 1.875rem;
      }

      .input_box {
        flex: 1;
        input {
          height: 100%;
          font-weight: 700;
          font-size: 1.25rem;
          display: block;
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
          margin: 0;
          padding: 0;
          color: #323233;
          line-height: inherit;
          text-align: left;
          background-color: transparent;
          border: 0;
          resize: none;
        }
      }

      .all_box {
        span {
          color:#3661e3;
        }
      }

      .qb {
        width: 0.75rem;
      }

    }

    .withtype {
      justify-content: space-around;
      width: 100%;
      >div {
        box-sizing: border-box;
        width: 7.1875rem;
        height: 2.25rem;
        text-align: center;
        line-height: 2.25rem;
        color: #36373b;
        border: 0.0625rem solid #aeafb1;
        border-radius: 0.3125rem;
      }
      .bk {
        border: none!important;
        color: #3661e3!important;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAABCCAYAAAAi/4gBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPPSURBVHgB7d0/bxtlHMDx3/O4Dv+KFBADYsFVN1j8CpDDUNIw2FGhVRdqA40QLER9ATW8AJqFJYkUh4GoQVW8NC0sOYSYcXekupW6W1WTtrF9T58nqdvGsRPf+UnV5L6fIed7fJayfPW7exwpSnrI/bgwenz97QuhCXOiJGuXMgIkV12M1JTW1euzXyz2ukB1L5yeulrQRi+ExtSMMRX9+rFg9dczdwRIqImLy9mw3c5qncqLlqwSXe4OSnV9YMaIydvl4o25s38LgB3Gi0sZldZrysji6vy5cmf9WUgTU1fLxkj+YXNjLKiUGgKgp0JxZXQz3Vyzd2zBjflz025Nux92EhVtRBeICNhftTLZGGmmx+wYKpz65veCW9uaSBNTy7fDzfbYzcr5ugAYyPi3SzmtUisbzfUTansambwdUZMCIJLTF5fX7KGq7UzK29u6qgCITLVlUYyxk8moTFu3bgmAyMKRdqCUyrqNBiMAYnMNaQEwNEICPCAkwANCAjwgJMADQgI8ICTAA0ICPCAkwANCAjwgJMADQgI8ICTAA0ICPCAkwANCAjwgJMADQgI8ICTAA0ICPCAkwANCAjwgJGBIzdc+lmMCILZPp025pZhIQGwuIqPksntNSEAML0bkEBIQUXdEDiEBEfSKyCEkYED9InIICRjAXhE5hATsY7+IHEIC9jBIRA4hAX0MGpFDSEAPUSJyCAnoEjUih5CAF8SJyCEk4Km4ETmEBMhwETmEhMQbNiKHkJBoUSM6/kbvdUJCYkWN6P13RWYvifxc2v0eISGR4kT0y/f2+I7I//d2v09ISJxhIqr8KfLbX7uvISQkykFE5BASEuOgInIICYnQiejMJyJzl7Yj2UuUiBxCwpG3YxIZkZMfPI2kT0xRI1KmuRVSfeKHax8KcAR1385d+2c7DhdJr5iiRuQYSde0KKmpRyYnwBHT75nIxdErpjgROco8rmttdBCqsCjAEbLfxkJ3TNmT8SJyVLhZVYXiymgz3brdNq3Jm/PnAwEOuSi7c1+dEil+9vw8akT2vq6+dkWd0NXKZCMMw5LWqYVccWFUgEMs6hZ3ZzI5kSOydPtu2R1VZ+HzqT+uhCbMPWxujAWVUkOAQ8bHX3FHYUIpBzPqJ/f62fb39dkvp+0vUX1z5K3/xr9byghwiLzsiFS4PtOJaOu8+4Lxr5eKKqUvK6NqSuuqMeGt1bmzNQFeUS8zIvudUSM090vBzHvVHev9PuCCss9NeXtFxp5mBXgFuX/y1Rr5SA6K+7LVqHRdyeNaavNu0Hzw72KvR58nR32c9Psk9nAAAAAASUVORK5CYII=) top no-repeat;
        background-size: 100% 100%;
      }
    }
    .cell {
      padding: 0.625rem 1.125rem 0 0;
    }
  }

  .btnGroup {
    padding: 0 2.75rem;

    .btn_submit {
      width:100%;
      display: block;
      border:0;
      margin: 1.25rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      height: 2.625rem;
      background: linear-gradient(180deg,#a2c1ff,#4080ff);
      border-radius: 0.3125rem;
      color: #fff;
      text-align: center;
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
