<template>
  <div class="wrapper">
    <div class="flex-1 index-page">
      <div class="page Lucky_Hash_Bg">
        <div class="head flex-between-center">
          <div class="flex-center-center" @click="$router.go(-1)">
            <i class="iconfont icon-fanhui2" />
            <span>幸运哈希 {{ play.name }}</span>
          </div>
          <div class="icon-drop" @click="isShowDrop = !isShowDrop">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgB7dZBDYUwEATQ2W/gIwUHWMAJSCiKCA7qACTgAFBQdiBY6Fz2JW16a7NtZmullARg8NGgvsn8AAU658+nDJ2dFWDpO2iuYEEIQc04eRa0EOSAmWUG0ezrHhpZ3QvAXpCgk743wPv/o67L38CJEILa9ydURDEzYOMBVl+00Hh6wQHNj/jBXjDhLUdt3HO8AYZ7MoUEz+JsAAAAAElFTkSuQmCC">
          </div>
          <GameHeadDrop :show="isShowDrop" @close="isShowDrop = false" />
        </div>

        <div class="view">
          <!-- 开奖区域 - start -->
          <div>
            <div class="en_name">Block Hash</div>
            <div class="orderShow Hash_group">
              <div v-if="!isOpenResult">
                <span>等待开奖中...</span>
              </div>

              <div v-else class="flex-center-center kjnumber">
                <div>
                  <span>{{ hash }}</span>
                  <span class="numberBox">
                    <span v-for="(item,index) in num1" :key="index">{{ item }}</span>
                  </span>
                </div>

                <a :href="url" target="_blank">详情</a>

                <div class="betStatus" :class="{not: flag ===1}">{{ betStatus }}</div>
              </div>
            </div>
          </div>
          <!-- 开奖区域 - end -->

          <div class="Hash_game_banner Lucky_hash_banner">
            <div class="bannerContent">
              <div class="bannerTitle">幸运哈希 {{ play.name }}</div>
              <div class="bannerText">赔率:{{ play.maxOdds }}</div>
              <div class="bannerText">限注：{{ play.min }}USDT-{{ play.max }}USDT</div>
            </div>
          </div>

          <div class="gameContent">
            <!-- 房间区域 - start -->
            <div class="game_name_list">
              <div>
                <div v-for="(item,index) in plays" :key="index" class="name_list_item" :class="{active:index==playIndex}" @click="handlePlay(item,index)">{{ item.name }}</div>
              </div>
            </div>
            <!-- 房间区域 - end -->
            <div class="flex-between-center new_win">
              <div>最新中奖信息</div>
              <div>
                游戏说明
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGuSURBVHgBrVaLcYMwDBW9DOAN6hHYIHSCjtB0ArIB6QRtJ3A7QboB6QRkA9iAbqBKiTgUYmRyl3enM8iS0M8yAAYQ0RHtiGqiFkf0wiuJvGUjmzHsaQlEhbD+iA6yMrwixhfRW5ZlHaRAxrfiISMQrQ3ZXGSGqLYp4zsR5nTksBAcsUrhDgzPGQ3nPrLvxFA+o+9EF68iEcVevHARxaDShip9PiLbiqzXG0GUvBH6EF2t3mMO5bJXayMnjyJhB1XAdSRiRmXouQd6fxb+J1xjaM8PasHfgSnt+COvRUTvW9YSJOQWboDKNWM/I3M6jOPDbcYbVQc/I7dnJ1b0zEXqlhqnpYHxBG+M08vp9Su4De9inJWfyPgxqSG53C+Qcyot5QJ5rm3PEXQQ74QpdCrTnp8jPfKXKvGqgDtBHbZShx4WKDqMzKmIXLjoMByPf57wqk9FG50MaAw7JVOoIr/AfIQtToedbJrjWjnyaBhvzC5TBW8xcddO9HIcR0eVEp5emVZdCrycuFeeW5c+e7IRVqeIwSksZGUciF4XXfrTD+H516TGyxutFV6Fibb9B6S0vMRZ5cBCAAAAAElFTkSuQmCC">
              </div>
            </div>
          </div>

          <!-- 订单滚动区域 - start -->
          <div class="orderList">
            <div class="list-title flex">
              <div>Block Hash </div>
              <div>投注金额</div>
              <div>中奖金额</div>
              <div>下注时间</div>
            </div>
            <div class="maquee">
              <ul style="animation: 30s linear 0s infinite normal none running scroll_Y;">
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
              </ul>

              <ul style="animation: 30s linear 0s infinite normal none running scroll_Y;">
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
                <li>
                  <div>00****fc21f1</div>
                  <div>1435<span>USDT</span></div>
                  <div>14063<span>USDT</span></div>
                  <div>15:33:02</div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 订单滚动区域 - end -->
        </div>

        <!-- 投注 -->
        <Betting :play="play" :odds="odds" @beforeHashResult="beforeHashResult" @afterHashResult="afterHashResult" />
      </div>
    </div>
  </div>
</template>

<script>
import GameHeadDrop from '@/components/GameHeadDrop'
import Betting from '@/components/Betting'
import api from '@/api'
export default {
  name: 'Hash',
  components: { GameHeadDrop, Betting },
  data() {
    return {
      isShowDrop: false,
      selecteOddsId: 0,
      list: [],
      odds: [],
      play: {},
      plays: [],
      playIndex: 0,

      isOpenResult: false,
      hash: '',
      url: '',
      num1: [],
      flag: '',
      betStatus: ''
    }
  },
  computed: {
    hashResult: {
      get() {
        return this.show
      },
      set(val) {
        if (val) {
          const blockHash = val.blockHash
          this.hash = blockHash.substr(0, 3) + '...' + blockHash.substr(blockHash.length - 7, 5)

          const arr = blockHash.split('')
          this.num1 = []
          this.num1.push(arr[arr.length - 2])
          this.num1.push(arr[arr.length - 1])

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

          this.isOpenResult = true
        } else {
          this.isOpenResult = false
        }
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      // 获取游戏id
      const id = this.$route.query.id
      if (id === undefined || id === '' || id <= 0) {
        this.$route.push({ path: '/' })
      }

      // 获取游戏信息
      let res = await api.hashPlay.find({ id })
      if (res.code !== 0) {
        this.$route.push({ path: '/' })
      }
      this.plays = res.data
      this.play = this.plays[0]

      // // 获取游戏赔率
      res = await api.hashOdds.findByGameId({ id })
      if (res.code !== 0) {
        this.$route.push({ path: '/' })
      }
      this.odds = res.data

      // 获取开奖记录
      await this.afterHashResult()
    },

    handlePlay(item, index) {
      this.playIndex = index
      this.play = item
      this.selecteOddsId = 0
      this.afterHashResult()
    },
    beforeHashResult() {
      this.isOpenResult = false
    },

    // 开奖后
    async afterHashResult() {
      const res = await api.hashResult.findRecord({ gameId: this.play.gameId, playId: this.play.id })
      if (res.code === 0 && res.data && res.data.length > 0) {
        this.hashResult = res.data[0]
      } else {
        this.hashResult = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  font-family: Avenir,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  background-color: #fff;
  flex-direction: column;
}

.index-page {
    height: calc(100% - 3.4375rem);
}

.Lucky_Hash_Bg {
  background-image: url(../../assets/images/game/bg.luckhash.png);
}

.page {
  color: #fff;
}

.head {
  padding: 0 1.25rem;
  height: 2.5rem;
  width: 100%;
  font-size: 1.0625rem;
  i {
    font-size: 1.25rem;
    margin-right: 0.3125rem;
  }
  img {
    width: 1rem;
    height: 0.8125rem;
  }

  .icon-drop {
    position: absolute;
    right: 0.8rem;
  }
}

.view {
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  .en_name {
    font-size: 1rem;
    margin-left: 0.3125rem;
  }
  .Hash_group {
    background-image: url(../../assets/images/game/group.hash.png);
  }
  .orderShow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.625rem auto 0.625rem;
    background-size: cover;
    border-radius: 0.5625rem;
    padding: 0.5rem 1.625rem;
    font-size: 1.125rem;
    text-align: center;
    height: 2.5rem;
    box-shadow: 0 0.375rem 0.3125rem -0.3125rem #2e2e2e;
    >div {
      text-align: center;
      width: 100%;
    }

    .kjnumber {
      >div {
        &:first-child {
          font-size: 1.25rem;
          letter-spacing: .0625rem;
          >.numberBox {
            span {
              display: inline-block;
              padding: 0.125rem 0.375rem;
              margin: 0 0.125rem;
              border-radius: 0.25rem;
              background-color: #fcab5f;
              &:first-child {
                background-color: #53e0f3;
              }
            }
          }
        }
        &:last-child {
          font-size: .9375rem;
          margin-left: 0.625rem;
        }
      }

      a {
        font-size: .9375rem;
        padding: 0.1875rem 0.3125rem;
        background: url(data:image/png;base64,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);
        background-size: 100% 100%;
        color: #fff;
        margin-left: 0.3125rem;
      }

      .betStatus {
        padding: 0.1875rem 0.3125rem;
        border-radius: 0.1875rem;
        background: red;
        color: #fff;
        font-size: .8125rem!important;
      }

    }
  }

  .Hash_game_banner {
    height: 8.375rem;
    background-size: 100% 100%;
    .bannerContent {
      padding: 3.125rem 1.25rem;
      .bannerTitle {
        font-size: 1.5625rem;
      }
      .bannerText {
        font-size: .8125rem;
        margin-top: 0.3125rem;
      }
    }
  }

  .gameContent {
    .game_name_list {
      margin: 1rem 0;
      >div {
        display: flex;
        justify-content: space-around;
      }
      .name_list_item {
        height: 2.125rem;
        font-weight: 700;
        background: rgba(230,234,244,.68);
        border-radius: 0.5625rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        color: #646566;
        font-size: 1rem;
        margin-left: 0.625rem;
        cursor: pointer;
        &.active {
          background: linear-gradient(180deg,#6f9fff,#2064ea);
          color: #fff;
          font-weight: 700;
        }
        &:first-child {
          margin-left: 0;
        }
      }
    }

    .new_win {
      font-size: 1rem;
      img {
        width: 0.8125rem;
        margin-left: 0.3125rem;
      }
    }
  }

  .orderList {
    width: 100%;
    background: rgba(0,0,0,.4);
    height: 25rem;
    display: flex;
    flex-direction: column;
    margin-top: 0.625rem;
    border-radius: 0.625rem;
    margin-bottom: 8.75rem;
    .list-title {
      padding: 0.625rem 0;
      >div {
        flex: 1 1;
        text-align: center;
        font-size: .9375rem;
      }
    }

    .maquee {
      width: 100%;
      height: 100%;
      overflow: hidden;
      ul {
        width: 100%;
        padding: 0 0.625rem;
        li {
          display: flex;
          border-bottom: 0.0625rem solid hsla(0,0%,100%,.12);
          padding: 0.25rem 0;
          >div{
            flex: 1 1;
            text-align: center;
            font-size: .875rem;
            span {
              color: #e5cf00;
            }
          }
        }
      }
    }
  }
}

</style>
