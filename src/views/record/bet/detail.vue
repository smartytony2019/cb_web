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
          <div class="flex-center-center title">注单详情</div>
          <div class="flex-right" />
        </div>

        <div class="line" />

        <div class="view">
          <div class="detailInfo">
            <div class="amount">
              <i />
              1.00
            </div>

            <div class="flex-between-center ">
              <span>订单号</span>
              <span>{{ sn }}</span>
            </div>
            <div class="flex-between-center ">
              <span>交易类型</span>
              <span>下注</span>
            </div>

            <div class="flex-between-center ">
              <span>资金类型</span>
              <span>USDT</span>
            </div>

            <div class="flex-between-center ">
              <span>状态</span>
              <span :class="flag === 1 ? 'blue' : 'red'">{{ betStatus }}</span>
            </div>

            <div class="flex-between-center ">
              <span>交易时间</span>
              <span>{{ createTime }}</span>
            </div>

            <div class="flex-between-center ">
              <span>订单号</span>
              <a :href="url" target="_blank">{{ hash }}</a>
            </div>

            <p class="help"> 如需帮助，请<span class="blue">联系客服</span></p>
          </div>
        </div>
      </div>
    </div>
    <Nav />
  </div>
</template>
<script>
import api from '@/api'
export default {
  name: 'Record',
  data() {
    return {
      detail: {},
      betStatus: '',
      flag: 0,
      hash: '',
      sn: '',
      createTime: '',
      url: ''
    }
  },
  computed: {
    item: {
      get() {
        return {}
      },
      set(val) {
        const blockHash = val.blockHash
        this.hash = blockHash.substr(0, 5) + '...' + blockHash.substr(blockHash.length - 9, 9)

        const arr = blockHash.split('')
        const isNumber = (str) => {
          var regPos = /^[0-9]+.?[0-9]*/ // 判断是否是数字。
          if (regPos.test(str)) {
            return true
          } else {
            return false
          }
        }
        for (let i = arr.length - 1; i > 0; i--) {
          if (isNumber(arr[i])) {
            this.num1 = arr[i]
            break
          }
        }

        this.url = 'https://nile.tronscan.org/#/block/' + val.blockHeight
        if (val.network === 'mainnet') {
          this.url = 'https://tronscan.org/#/block/' + val.blockHeight
        }
        if (val.flag === 1) {
          this.betStatus = '未中奖'
        } else if (val.flag === 2) {
          this.betStatus = '已中奖'
        } else if (val.flag === 3) {
          this.betStatus = '和局'
        }
        this.flag = val.flag
        this.sn = val.sn
        this.createTime = val.createTime
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const id = this.$route.query.id
      const res = await api.hashBet.find({ id })
      if (res && res.code === 0) {
        this.item = res.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  height:100% !important;
}
.line {
  height: 0.625rem;
  width: 100%;
  background: #f7f6fc;
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
  background-color: #fff;
  .detailInfo {
    padding: 1rem;
    text-align: center;
    color: #333;
    font-size: .8125rem;
    font-weight: 500;
    .amount {
      font-weight: 600;
      position: relative;
      margin: 1.375rem auto 0;
      display: inline-block;
      font-size: 1.125rem;
      color: #000;
      height: 2.5625rem;
      text-align: center;
      i {
        left: -1.6rem;
        top: -0.3rem;
        position: absolute;
        display: block;
        width: 1.375rem;
        height: 1.375rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgB7ZTPS0JBEMdn9j0lLAK7RRFikJ689Rd06FTHLoIiFP0FQZnBU9I6eKhLvw6JdYjqn4jo6iWCwIvPKLqpFWr5Y6fVxKTUVono4Ace7O7Mzndmdt8C9OhRA9sZLZFlC5VKbX0aSS6EE61saivD8L5mMrJiAowKSMLF19KZwR+htjMSwGXjnAFaCGisMkbCO46k141Yragl0v2vYIv69oTQYi0Nf9wd0mT3SgnZK5eCVCsp3Cu2TH2s8hPO6aBsVBIJZzDZlZAt6nUQ4Djj5XSJ2HNeoeSDK5SyHa3t1isiCMTd69roud/cly05yhwejSpOvnHlSvdo+teYTc9IiASUIvlu5zdv6ovuDYCoryFFEm5I9wApMbuorNijK0MGRkExdkpVNHG2OoJ5mhaKVkIoAiETFyPLiBc4sgGGKI6eXjiQARnrF20UqkxB4ukC5SK6ZysjJfS9RELHcdj0Sk+HYjJXq3p70Kx6YzNaXkShn0LI/UeiRdeupazIKv2ZIc/EZrWcjIi80C/QE+oatTN3vlMGOK1uxIIOPZpCnb3s/4Z3mx2dkXWrKdsAAAAASUVORK5CYII=) no-repeat;
      }
    }

    .flex-between-center {
      padding: 0.9375rem 0;
      position: relative;
    }

    .help {
      margin-top: 1.25rem;
      text-align: center;
    }
  }
}

</style>
