<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 哈希两面
-->
<template>
  <div class="wrapper">
    <div class="flex-1 index-page">
      <div class="page">

        <div class="headerFIVE">
          <div class="head flex-between-center">
            <div class="flex-center-center" @click="$router.go(-1)">
              <i class="iconfont icon-fanhui2" />
              <span>哈希两面 {{ play.name }}</span>
            </div>
            <div class="icon-drop" @click="isShowDrop = !isShowDrop">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgB7dZBDYUwEATQ2W/gIwUHWMAJSCiKCA7qACTgAFBQdiBY6Fz2JW16a7NtZmullARg8NGgvsn8AAU658+nDJ2dFWDpO2iuYEEIQc04eRa0EOSAmWUG0ezrHhpZ3QvAXpCgk743wPv/o67L38CJEILa9ydURDEzYOMBVl+00Hh6wQHNj/jBXjDhLUdt3HO8AYZ7MoUEz+JsAAAAAElFTkSuQmCC">
            </div>
            <GameHeadDrop :show="isShowDrop" @close="isShowDrop = false" />
          </div>

          <!-- 开奖结果 - start -->
          <div class="en_name">Block Hash</div>

          <div class="subxt flex-between-center">
            <div>开奖结果</div>
            <div class="flex xt">
              <div class="ac">大小</div>
              <div>单双</div>
              <div class="ac">个人走势</div>
              <div>全部走势</div>
            </div>
          </div>

          <div class="orderList">
            <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
              <div style="overflow: auto; height: 106%; width: 100%; position: absolute;">
                <div class="flex" style="margin-left: 30px;">
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 开奖结果 - end -->
        </div>

        <div class="view">
          <div class="gameContent">
            <div class="game_name_list">
              <div v-for="(item,index) in plays" :key="index" :class="{active: index==playIndex}" class="name_list_item" @click="handlePlay(item, index)"> {{ item.name }} </div>
            </div>
            <div class="content">
              <!-- 开奖结果 - start -->
              <div>
                <div class="orderShow Hash_group">
                  <div v-if="!isOpenResult">
                    <span>等待开奖中...</span>
                  </div>

                  <div v-else class="flex-center-center kjnumber">
                    <div>
                      <span>{{ hash }}</span>
                      <span class="numberBox">
                        <span>{{ num1 }}</span>
                      </span>
                    </div>

                    <a :href="url" target="_blank">详情</a>

                    <div class="betStatus" :class="{not: flag ===1}">{{ betStatus }}</div>
                  </div>
                </div>
              </div>
              <!-- 开奖结果 - end -->

              <!-- 游戏说明 - start -->
              <div class="flex-between-center new_win">

                <div>限注：{{ play.min }}USDT-{{ play.max }}USDT</div>
                <div>
                  游戏说明
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATgSURBVHgBxVndcdtGEN4FoLxYmjAVhK7AdAWmKohcgVyBCYaUZ/Ik8CkzEmlBbkBSBVYHhisQXYGpCsKZMC8OgfXu4XAASJA8QPT4exAB427xYXdv/4zQEP7wsgsJdMjFVwDYAYIWALXSpzgHpBlfzJDoC/9G4fgsggbAOot9P2gl3lGPN/k5GUsQzvhvhPG3URj+NbPdZkVQiJF3dM5v8aul8MuJNUYw01Lb/Fc+oAPVZG9tie4k+HYw7iFiUNYYztl0d2zGe1j+Nw3DYL5pv3IFwjcE7ApI7QJJNn88Ct+/u4WmBHvDyVVJa5ZCN5L98+INoXteIgoYXo8HfahDMDXp4Ue+7OYLacTaCrdpy5ro8DJgjZ4XWEzxmXscBv012U6VgMQ9jAw50RomL/kUBvsgJxBZIlMfHH4HR4NF/LFq7ZoGS2YVcvG3413OLH6WgPOK/bKthCI9wnJ5u3Of/3eb3F8+5SZfN3eJoPIRx7mxJVflCiVYnNZVkuxKfdZwuEZwbaGY9fLd1FbwRsiHHjkvq/zLyGILsE9+0rdzPHSfZ+uNDybuQVD4itE2cqvrU0j2gHu+iNS1+Wdq07/J1TZZkmXUIUzRokViDpDSoNKGd/AV9BdfTwbPtwn0/YsOec5Ddk8EX5x40c0OkZYnpjeBerdFrlrkJg9GSYfub6JFx2jDfHA8gl3w8KRwN3fi/0+KJ1x8DpfusTwzqwi720SGYX9eevdiqQ6qIogS5VMhM5sgnCQFzQB9rjoE8kL+MRojwhewA/rd6qPYJ3vy66UOanwpAgt8eH92Aj8ISHBHCEKuJdxEg13zEJM72BPED8uyVdllw/C+cNdxiuZqWrOtk+P4KCGoiOXy3mrz0isepK6DDv6ub6awJ9DB0U0xBKmwZVkDKt/FNAVydHghJm7rZ3vJsypVEuU+KgePcy/UAalqXPyiJQTTOi8rNp8ASZVr5RmnS6gJzumP+rLlwB6har38xqrQqEJCYIpjIZiaFo2pG8EfjE9KfieFbQNyaq+Dv+pLziSo8ybtSPq70TVXlgF/CzINzhyKkzQ+Ibb94Kpep1ZC3rNwPLWLeRWQnAw6h/Ppf/TYxhEB/KGeLpbyIIImIIpUHkivP0NTeMLBVIFTj70wj3+kioAIGkCb9BaeiIQ7QMzL6MjR2SNN0Ain8JNRKlyYm65m6Fo/b6Wx7OdAvRvLhUsaB5ee6QEkljU5LNzgn3IW+ac3mHyVa2iAYhyVXsYQTItFSLUoX6CLxTpg0wTqJPN+9qGw7v63w0ne0HOzlcXQPJPEbgB5sXiuRha1GBZGI4S18rp/dtFhNwv03lmmvRJBpcXENC4cKZwbXdPZ8UuSftqI49yqbcjISf+SuKZpX81Aa407p6xQV7RPyqfW5IqtLrtZOBmW3KtyNtMbjqXY7BqSTvx6Vxtam5y0GmyljJx0hh8mw87quspqhjuy15AVsNLXkvOgnHgfxLjaFlmqUS+EFGlbq9ZvHb+VzC34AeO3KrNaE9wk1IxzpcnaMsAUbYH3rMPp64SHoKdrQ1BIRsU5TCOC6Yv4NHNzvzEV8nyPY5OMPuY8WJ+r2pKro00lnIq58cJqnFdziK6Jro5zraA0dl13CFqLYBE6kHcJeWJAUo1ju/zfEBL0aYoxl15cMTVtab8DN1+gbklGWtAAAAAASUVORK5CYII=">
                </div>
              </div>
              <!-- 游戏说明 - end -->

              <!-- 投注内容 - start -->
              <div class="select_content">
                <div v-for="(item,index) in list" :key="index" class="playBlockNew" :class="{playActive: selecteOddsId === item.id}" @click="handleSelectCode(item, index)">
                  <div>{{ item.name }}</div>
                  <div>{{ item.odds }}</div>
                </div>
              </div>
              <!-- 投注内容 - end -->
            </div>
          </div>
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
  name: 'Comb',
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
      num1: '',
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

          this.isOpenResult = true
        } else {
          this.isOpenResult = false
        }
      }
    }
  },
  created() {
    document.getElementsByTagName('html')[0].style.fontSize = '16px'
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
      this.list = res.data

      // 获取开奖记录
      await this.afterHashResult()
    },
    handleSelectCode(item) {
      this.selecteOddsId = item.id
      this.odds[0] = item
    },
    handlePlay(item, index) {
      this.playIndex = index
      this.play = item
      this.selecteOddsId = 0
      this.afterHashResult()
    },

    // 开奖前
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

.headerFIVE {
  padding: 0 0.625rem;
  background: url(../../assets/images/hash_zuhe_head.png) no-repeat;
  background-size: 100% 100%;

  .head {
    height: 2.5rem;
    width: 100%;
    font-size: 1.0625rem;
    padding: 0 0.3125rem;
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
  .en_name {
    font-size: 1rem;
    margin-left: 0.5rem;
  }

  .subxt {
    padding-left: 0.5rem;
    height: 30px;
    .xt {
      height: 1.25rem;
      margin-left: 0.875rem;
      >div {
        background: #799aee;
        color: #fff;
        padding: 0 0.1875rem;
        display: flex;
        justify-content: center;
        height: 100%;
        align-items: center;
        border-radius: 1.25rem;
        min-width: 2.5rem;
        margin-left: 0.3125rem;
      }
      .ac {
        background: #66a8ff;
      }
    }
  }

  .orderList {
    width: 100%;
    background: rgba(0,0,0,.4);
    height: 8.125rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0.3125rem 0.625rem;
    border-radius: 0.625rem;
    background: rgba(0,0,0,.5);
    background-size: 100% 100%;
    .list-title {
      padding: 0.4375rem 0;
      >div {
        flex: 1 1;
        text-align: center;
        font-size: .8125rem;
      }
    }

    .lie {
      min-width: 2.5rem;
      .blank {
        width: 2.1875rem;
        height: 1.125rem;
        font-size: .8125rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #568bf8;
        color: #fff;
        margin: 0.1875rem auto;
      }
      .big {
        background: #f12d35;
      }
    }

  }

}

.Hash_group {
    background-image: url(../../assets/images/game/group.hash.png);
}

.view {
  padding-bottom: 8.125rem;
  display: flex;
  flex-direction: column;
  background: rgb(235, 236, 241);
  .game_name_list {
    display: flex;
    justify-content: space-around;
    padding: 0.625rem 0.625rem;
    background: #fff;

    .name_list_item{
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
  .gameContent {
    .content {
      padding: 0 0.9375rem;
    }
    .new_win {
      font-size: 1rem;
      padding-top: 0.625rem;
      color: #6f748c;
      img {
        width: 0.8125rem;
        margin-left: 0.3125rem;
      }
    }
    .select_content {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.625rem;
      .playBlockNew{
        width: 10.75rem;
        font-size: 1.0625rem;
        text-align: center;
        border-radius: 0.4375rem;
        background: #fff;
        padding: 0.9375rem 0;
        color: #60768a;
        box-shadow: 0 0.125rem 0.375rem rgb(0 0 0 / 5%);
        margin: 0 auto 0.625rem;
        >div {
          text-align: center;
          &:first-child {
            font-size: 1.625rem;
          }
          &:last-child {
            color: #a3a7b7;
            margin-top: 0.625rem;
          }
        }
      }

      .playActive {
        background: linear-gradient(118.11deg,#7fa7f8 -5.62%,#2568ed 108.48%)!important;
        box-shadow: 0 0.3125rem 0.4375rem rgb(59 119 239 / 38%);
        border-radius: 0.4375rem;
        color: #fff;
      }
    }
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
    height: 2.5rem;
    text-align: center;
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
              background-color: #f65da7;

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

      .not {
        background: #a8a8a8;
      }

    }
  }
}

.page {
  color: #fff;
}

.footer {
  background: #fff;
  border-top-left-radius: 1.0625rem;
  border-top-right-radius: 1.0625rem;
  color: #60768a;
  padding: 1.125rem 0.625rem;
  font-size: .9375rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  z-index: 999;
  left: 0;
  right: 0;
  max-width: 40rem;
  margin: 0 auto;
  .clear {
    width: 15%;
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
    margin: 0 0.125rem 0 0;
    >div {
      flex: 1 1;
      margin: 0 0.3125rem;
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
    max-width: 16.125rem;
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

</style>
