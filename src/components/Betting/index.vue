<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 在线客服组件
-->
<template>
  <div class="footer">
    <div class="flex-between-center">
      <div class="clear">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADXSURBVHgB7ZaxCoJQFIbPsUtGiw/Q3ls0NvYK1R45RVYPICi0GC1NvkNbj1DP0Z5LKKgnNQQF7QaJNJx/O/dc/o+fs/wIEk235hDDzgQVVKv2BOBhqFzd/eom81JkHzAW4zpQtgfQQNBo6TiqzEvIPmRmiVxrbVbtZ4a9QCAtuD97yRh88pIma1I4N+wdtKAuxMd2kxWHPGXdfb7V+46gpWlO1sbL31tNxjCGMYxhDGMYw/4ZVuqNFFOQFtKmGpc66PvFuZSMRHQGpAf8LPQjostB10ul9QWCDjaFep4AmAAAAABJRU5ErkJggg==">
      </div>
      <div class="radiusBlock flex">
        <div>
          <img src="https://designer-trip.com/image/game/5.png">
        </div>
        <div>
          <img src="https://designer-trip.com/image/game/20.png">
        </div>
        <div>
          <img src="https://designer-trip.com/image/game/50.png">
        </div>
        <div>
          <img src="https://designer-trip.com/image/game/100.png">
        </div>
      </div>
      <div>
        <input v-model="form.amount" type="number" placeholder="输入金额" class="amount">
      </div>
    </div>
    <div class="flex-between-center m">
      <div class="lottery" @click="handleRecordClick">
        <p>投注</p>
        <p>记录</p>
      </div>
      <button class="button" @click="handleBet">
        <div class="flex-column-center">
          <div>立即投注</div>
          <div>USDT：0.00</div>
        </div>
      </button>
      <div class="hao lottery">
        <p>同步</p>
        <p>余额</p>
      </div>
    </div>

    <!-- 确认投注 - start -->
    <van-popup v-model="isShowBetConfirm" position="center" round>
      <div class="queren">
        <div class="title after">确认投注</div>
        <div class="gameName">哈希PK拾</div>
        <div class="qlist after">
          <span>玩法</span>
          <span>投注金额</span>
          <span>最高可赢</span>
        </div>
        <div class="qlist after">
          <span>{{ orderInfo.betNum }}</span>
          <span>{{ orderInfo.betAmount }}</span>
          <span>{{ orderInfo.maxWin }}</span>
        </div>
        <div class="count after">
          共<span>{{ orderInfo.count }}</span>
          注 共
          <span>{{ orderInfo.amount }}</span>
          USDT
        </div>

        <div class="ebtnbox flex-center-center">
          <div class="leftc">
            <button class="van-button van-button--default van-button--normal" style="color: white; background: linear-gradient(rgb(239, 244, 255), rgb(176, 184, 201)); border: 0px;" @click="handleBetCencal">
              <div class="van-button__content">
                <span class="van-button__text"> 取消 </span>
              </div>
            </button>
          </div>

          <div>
            <button class="van-button van-button--default van-button--normal" style="color: white; background: linear-gradient(rgb(162, 193, 255), rgb(64, 128, 255)); border: 0px;" @click="handleBetConfirm">
              <div class="van-button__content">
                <span class="van-button__text"> 确认投注 </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 确认投注 - end -->

    <!-- 投注记录 - start -->
    <van-popup v-model="isShowBetRecords" class="record-popup" position="bottom" round :style="{ height: '80%' }" closeable close-icon-position="top-left">
      <div class="orderBlock">
        <div class="title">投注记录</div>
        <div class="mescroll">

          <van-pull-refresh v-model="isLoadingRefresh" :head-height="80" @refresh="onRefresh">
            <van-list
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <div class="dataList">
                <div class="items" @click="handleTradeInfo">
                  <div class="flex-between-center">
                    <span>玩法:哈希两面</span>
                  </div>

                  <div class="flex-between-center">
                    <span>投注详情:小</span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAXCAYAAAA/ZK6/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC3SURBVHgBndO9DcMgEAVgjGLXHsEjeAA32SSeJN7E2YRIIFHiETxCCjr+YqKQAoE58gqkO71PugYkhOhRRbCUcqSULmDgn6Zp7oyxFQy+uUEQjuYiwomdR4IQ0kOBz9i2LUmhHMiiM/BBXdcJzvkABcg5N1hrSUBFECMQCMgYs14qwK61nqEn+fL1yA4BWyj7oXTSppTy5VdY4JryGXimyrmTHtM0zSgTXFOOQbH8A8cXXSDlv/IG9KlpCPF+fFMAAAAASUVORK5CYII="></img>
                  </div>

                  <div class="flex">
                    <div>投注金额:1.00</div>
                    <div>
                      中奖金额:<span style="color:red">1.95</span>
                    </div>
                  </div>
                </div>
              </div>
            </van-list>
          </van-pull-refresh></div>
      </div>
    </van-popup>
    <!-- 投注记录 - end -->

    <!-- 投注详情信息 - start -->
    <van-popup v-model="isShowTradeInfo" class="trade-info-popup" position="center">
      <div class="tradeInfo">
        <div class="header flex tradeHead">
          <div class="flex-left" @click="isShowTradeInfo=false">
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

    <!-- <div class="van-toast van-toast--middle" style="z-index: 2004;"><i class="van-icon van-icon-smile van-toast__icon" /><div class="van-toast__text">恭喜老板，您中奖啦!</div></div> -->

    <!-- <div class="van-toast van-toast--middle" style="z-index: 2004;">
      <i class="van-icon van-toast__icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABnZJREFUeF7lW2nIVFUYfp6/EeSPivagsu1HFG1otpgtpn0GSWYLkhlJRotRmka0WYlthpQmVLZCWQaVlWZoKVGZEEgRbZSZEfkjqf7Ujyee4cwwy52Zc+7cWfx64TIf37znXZ577nvPuwzRY5K0N4BDw3UIAALYBuBnXyR/7aVJVt41knQggHEAJgE4Nji9RxuF/wYwDMobAN4l+W23jCwcAElnAjgDwLkATi/I8M8NBID1JNcXJLMkpjAAJF0CYDaAUUUamCHrUwBLSL5UhJ6OAZBkh+24AegleUcYCH/mptwASDoIwC3B+dwGFLDQO8FAeGckUy4AJE0GsAjAYckau7dgNsnFqeKTAZC0AMAdqYp6xL+c5MwUXUkASFoNYEKKgj7wbiTpt1AURQMgaQeA/aOk9p9pJ8l9YsyIAkDS1wCOihE4QDzbSPrE2ZLaAiDpIQC3thM0oN+/TPKKVra1BEDSNADPDahzsWbNJ/lgM+amAEg6G8AHsVoGnG8myeVZNmYCEA45dv7IAXcsxbxJJN+qX9AMgEcH4ISX4lwM73skL2gLQDjbfxwjcTfkmUrylWq7G3aApFf7kNj0CssPSZ7VFICQ0hqAGJoH4HsA5wOYEbOgCzxPA1gD4HAATSN9nd7pJFeU/1ezAyR568fk8/NILiwLkXQegJsBNDxjXXDaIl0UeYSkj+YlknR7JAibSZ7SAIAkl67WRRo8ISsPl3RVCJ7HRcpJZfspOL6kfqEkg/9OpMAhkm+bt7IDJHkLGcUY2kQys9wlyTU/F0i8I1wALYqc6j5M8pcsgZI2AhgTqWwZyevqAfgMwMmRAsxm/idIPt/EoCMCELMSZGaxvhkct4MNlLMUt53kwRUAJDlp+DGnoT4wLSC5oYmBdwG4O6fsdSRdXM1y3FVmy81bihtPck3pEZB0LYCnchpZXubIeg/JGiAl+bWTt5L7DMmGN4wkO25gO6FS8aQMwOsALs4pbbNrgyQ3dWEHWPY4kn/Wy5bk9Nwxy4E3D5VqBmUAvgJwTKKUvwH4ZFWKphkG9ioGuOkyB8BpifabfUQZADvTrmNTLb8SRDIc79dbwI9ZzSkvApCRDL263yOYq1n8rDcEtj6fA84B8H6iH6MMwIkA3HpKoRoABuQk6LOHs9gUGjIADn4Ogql0GwCfzAYhF/Br3KW7VLraAPjE9ljqymHCP+f/DsDcTh6B4bAJZuQNgp04/xcAp92/hUsA3MTYF8DxAA7oRHji2ovyvgYT9ZTYnwWwsl07O6TlUwFck0dJ4poxeQ9CKXq2AriP5MqURaEsf1MYr0lZmsJ7dCdH4RhFawFMJultX0OS3Gf0drcNpceB5D8ZfN2sUVZygddsaIxHCTxPkry+ml/SZQBcPmuWwKwCsKp+/KVb7TmabGAXWmAbSI6tc34ZgNjevUvXbmn9UJYhyS06t+qKohdITisD4HG27QVJdl4xmuR3AVxvddcKfOdT6EsAU0g6U/VN2jNUgEenCGnBW6prVtcEPyporG0WyaXBaGeGrhOckNPoLwCMJflHkDcFQE1jI6dcx5v9vLYagDsB3JtTYHnZDpLeTSUqqHKzmKQTnbLMbwCM7NBOD1XdWA+ABxwz63oJyipZoiTfdd/9lDpDM1UTSZZK3pLmA7g/waYs1kpZv74x8gmAUzsQ7u1aAlGSp8icMRZBK0hOD3I7qTFaxBaSJ5WNqgfA0xQvdmDxIpJzJTlQuWXlwFUUXQnAnSA/pjd0ILRmViCrOeqt1qsWVwd+5Fpac/drYkBVkElpMeWyoo+LGiZFmg1I+DFoOVzURyfyqm64+5k7IAQaB0IHxOFEmXNCrYakhlOpbCnJzB5luzE5t8vcNtudaTXJC5s5EDMoWdQRuR8gbiXZclahLQAhJjjBKbLX3wswdpEc0U5RFAABBPcA/Cuv3YEqyU47Y6MBCCD41xmXtxPa5+/XknSzJoqSAAggeDrsgSjpvWd6nKTfXtGUDEAAoYiBimgjIxkXkvTNSaJcAAQQhgD43To+SWPxzFsAeNojcxi6nbrcAJQFS7oUgCeuXE/oJXXkeNnQjgGoAsKVXu+IlEmzPIAV4njhAFQB4VPXRAD+9G8LiyAXbD2K41Nd5khOXiWF7YAsAyT5deT5A1+pB6md7hGEPoGLK12hrgJQbbGkvUIT1ED4ckO0DIqd9WnTn6W/Se7qisd1Qv8Dar4/ZMIlri0AAAAASUVORK5CYII=" class="van-icon__image"></i>
      <div class="van-toast__text">很遗憾,就差一点点!</div>
    </div> -->
    <Loading v-if="isLoading" />

    <div v-if="isSettleProccess" class="settle-proccess">
      <div class="loadEffect _loadEffect">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <div>正在开奖中...</div>
      </div>
    </div>

  </div>
</template>

<script>
import { Toast } from 'vant'
import Loading from '@/components/Loading'
export default {
  name: 'Betting',
  components: { Loading },
  props: {
    show: {
      required: false,
      type: Boolean,
      default: true
    },
    game: {
      required: false,
      type: String,
      default: ''
    },
    odds: {
      required: false,
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isLoading: false,
      isLoadingRefresh: false,
      isSettleProccess: false,
      isShowTradeInfo: false,

      finished: true,
      isShowBetConfirm: false,
      isShowBetRecords: false,

      form: {
        game: '',
        odds: '',
        amount: ''
      },

      orderInfo: {
      }
    }
  },
  computed: {
    isShow: {
      get() {
        return this.show
      },
      set(val) {
        this.$emit('close', val)
      }
    }
  },
  created() {
    console.log(this.game)
    console.log(this.order)
  },
  methods: {
    handleBet() {
      if (this.odds.length === 0) {
        Toast('请选择投注号码')
        return
      }

      if (this.form.amount === '') {
        Toast('请输入投注金额')
        return
      }

      if (this.game === '') {
        Toast('请选择投注类型')
        return
      }

      // 注数
      const count = this.odds.length

      // 总金额
      const amount = this.form.amount * count

      // 投注号码
      const betNum = this.odds.map(item => item.name).join(',')

      console.log(this.odds)

      // 最高可赢金额
      const maxWin = this.odds.reduce((prev, curr) => curr.odds > prev.odds ? curr : prev).odds * this.form.amount

      this.orderInfo = {
        count,
        betNum,
        amount,
        maxWin,
        betAmount: this.form.amount
      }

      console.log(this.orderInfo)

      this.isShowBetConfirm = true
    },
    handleBetCencal() {
      this.isShowBetConfirm = false
    },

    /**
     * 确认投注
     */
    handleBetConfirm() {
      this.form.game = this.game
      this.form.odds = this.odds.map(item => item.code).join(',')
      console.log(this.form)
      // this.isShowBetConfirm = false
      // this.isLoading = true
      // const sleep = (time) => {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       resolve()
      //     }, time)
      //   })
      // }
      // sleep(2000).then(() => {
      //   this.isLoading = false
      //   this.isSettleProccess = true

      //   sleep(2000).then(() => {
      //     this.isSettleProccess = false
      //     Toast.setDefaultOptions({ duration: 3000 })
      //     // 成功
      //     // Toast.success('恭喜老板，您中奖啦!')

      //     // 失败
      //     Toast({
      //       message: '很遗憾,就差一点点!',
      //       icon: 'data:image/png;base64,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'
      //     })
      //   })
      // })
    },
    handleRecordClick() {
      this.isShowBetRecords = true
    },

    /**
     * 订单详情信息
     */
    handleTradeInfo() {
      this.isShowTradeInfo = true
    },

    onRefresh() {
    },
    onLoad() {

    }
  }
}
</script>

<style lang="scss" scoped>

.footer {
  background: #fff;
  border-top-left-radius: 1.0625rem;
  border-top-right-radius: 1.0625rem;
  color: #60768a;
  padding: 1.125rem 0.625rem;
  font-size: .9375rem;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  z-index: 999;
  left: 0;
  .clear {
    width: 9%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(119,125,149,.47843137254901963);
    img {
      margin-top: -0.125rem;
      width: 1.0625rem;
      height: 1.125rem;
    }
  }

  .radiusBlock {
    height: 2.0625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 0 2rem;
    >div {
      flex: 1 1;
      margin: 0 0 0 0.8rem;
      width: 3rem;
      height: 3rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
  .amount {
    width: 95%;
    height: 2rem;
    background: #eef1f8;
    border: none;
    box-sizing: border-box;
    box-shadow: inset 0 0.125rem 0.25rem #fff;
    border-radius: 0.5625rem;
    color: #4080ff;
    padding-left: 0.3125rem;
  }
  .m {
    margin-top: 0.9375rem;
  }
  .lottery {
    background: #eef1f8;
    border-radius: 0.5rem;
    padding: 0.625rem;
    text-align: center;
  }
  .button {
    background: #eef1f8;
    border-radius: 0.625rem;
    text-align: center;
    background: linear-gradient(180deg,#88b8ff,#4080ff);
    box-shadow: 0 0.375rem 0.625rem rgb(0 0 0 / 12%);
    flex: 1 1;
    height: 3rem;
    border: none;
    color: #fff;
    font-size: .875rem;
    font-weight: 400;
    margin: 0 0.3125rem;
    >div {
      >div {
        &:last-child {
          font-size: .8125rem;
          margin-top: 0.3125rem;
        }
      }
    }
  }
  .hao {
    background: linear-gradient(180deg,#4de0f4,#40baff);
    color: #fff;
    border-radius: 0.5rem;
    font-size: .8125rem;
    text-align: center;
    >p {
      margin-top: 0.125rem;
    }
  }
}

.queren {
  width: 22.75rem;
  color: #333;
  text-align: center;
  padding: 0 1rem;
  font-size: 1rem;
  .title {
    line-height: 2.75rem;
    font-size: 1rem;
    position: relative;
    >div {
      text-align: center;
    }
  }

  .gameName {
    text-align: left;
    margin: 1.375rem 0 0.6875rem 0;
  }

  .qlist {
    background: #f9faff;
    position: relative;
    color: #41434f;
    padding: 0 0.625rem;
    display: grid;
    align-items: center;
    height: 2.5rem;
    grid-template-columns: 35% 30% 35%;
    span {
      text-align: center;
    }
  }

  .count {
    position: relative;
    text-align: left;
    font-size: .9375rem;
    padding: 0.9375rem 0 0.8125rem 0;
    color: #41434f;
  }

  .ebtnbox {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 0 0.875rem 0;
    .van-button {
      border-radius: 0.625rem;
      width: 7.5625rem;
      height: 3.125rem;
      font-size: 1rem;
    }
  }
}

.orderBlock {
  color: #656565;
  position: relative;
  height: 100%;
  .title {
    padding: 0.9375rem 0.6875rem;
    text-align: center;
    font-size: 1.125rem;
  }

  .mescroll {
    overflow: auto;
    position: absolute;
    height: calc(100% - 3rem);
    width: 100%;

    .dataList {
      .items {
        position: relative;
        padding: 1.375rem;
        background: #eef1f8;
        border-radius: 0.625rem;
        color: #464857;
        font-size: .9375rem;
        overflow: hidden;
        margin: 0.3125rem 0.625rem;
        >div {
          margin-top: 0.5rem;
          &:first-child {
            font-size: 1.0625rem;
            margin-top: 0;
          }
        }

        .flex-between-center {
          img {
            width: 0.75rem;
            height: 1.4375rem;
          }
        }

        .flex {
          color: grey;
          font-size: .875rem;
          >div {
            flex: 1 1;
          }
        }
      }
    }
  }
}

.settle-proccess {
  position: fixed;
  z-index: 2005;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  max-width: 40rem;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .loadEffect {
    width: 100px;
    height: 100px;
    position: relative;
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #40b49d;
      position: absolute;
      animation: load 1.04s ease infinite;
      &:nth-child(1) {
            left: 0;
            top: 50%;
            margin-top: -10px;
            animation-delay: 0.13s;
        }
      &:nth-child(2) {
            left: 14px;
            top: 14px;
            animation-delay: 0.26s;
        }
      &:nth-child(3) {
            left: 50%;
            top: 0;
            margin-left: -10px;
            animation-delay: 0.39s;
        }
      &:nth-child(4) {
            top: 14px;
            right: 14px;
            animation-delay: 0.52s;
        }
      &:nth-child(5){
            right: 0;
            top: 50%;
            margin-top: -10px;
            animation-delay: 0.65s;
        }
      &:nth-child(6) {
            right: 14px;
            bottom:14px;
            animation-delay: 0.78s;
        }
      &:nth-child(7) {
            bottom: 0;
            left: 50%;
            margin-left: -10px;
            animation-delay: 0.91s;
        }
      &:nth-child(8) {
            bottom: 14px;
            left: 14px;
            animation-delay: 1.04s;
        }
    }
    @keyframes load{
      0% {
          transform: scale(1.2);
          opacity: 1;
      }
      100% {
          transform: scale(.3);
          opacity: 0.5;
      }
    }
    >div {
      color: #40b49d;
      position: absolute;
      bottom: -2rem;
    }
  }
}

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
