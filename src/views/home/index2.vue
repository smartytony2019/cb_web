<template>
  <div>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
    <h1>11</h1>
  </div>
</template>

<script>
export default {
  name: 'Index',
  metaInfo: {
    title: '页面标题',
    meta: [
      { name: 'viewport', content: '页width=device-width,initial-scale=1面描述' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ]
  },
  data() {
    return {
      isShowAppDown: true,
      switchLanguage: false,
      languageIndex: 0,
      languageDefault: null,
      languageList: [
        {
          id: 1,
          name: '中文',
          value: 'zh-CN',
          key: 'zh',
          url: require('@/assets/images/zh-CN.png')
        },
        {
          id: 2,
          name: 'ENG',
          value: 'en-US',
          key: 'en',
          url: require('@/assets/images/en-US.png')
        },
        {
          id: 3,
          name: 'VN',
          value: 'vi-VN',
          key: 'vi',
          url: require('@/assets/images/vi-VN.png')
        }
      ],

      gameIndex: 0,
      gameList: [
        {
          id: 1,
          name: '幸运哈希',
          enname: 'LUCKY_HASH',
          children: [
            {
              id: 1,
              gameId: 1,
              name: '体验房',
              maxOdds: '1.98',
              min: 0,
              max: 200,
              img: 'https://designer-trip.com/image/game/Gamelogo/hash.png'
            },
            {
              id: 2,
              gameId: 1,
              name: '初级房',
              maxOdds: '1.98',
              min: 10,
              max: 5000,
              img: 'https://designer-trip.com/image/game/Gamelogo/hash1.png'
            },
            {
              id: 3,
              gameId: 1,
              name: '中级房',
              maxOdds: '1.98',
              min: 100,
              max: 10000,
              img: 'https://designer-trip.com/image/game/Gamelogo/hash2.png'
            },
            {
              id: 4,
              gameId: 1,
              name: '高级房',
              maxOdds: '1.98',
              min: 100,
              max: 10000,
              img: 'https://designer-trip.com/image/game/Gamelogo/hash3.png'
            }
          ]
        },
        {
          id: 2,
          name: '哈希PK拾',
          enname: 'CHAMPION',
          children: [
            {
              id: 5,
              gameId: 2,
              name: '体验房',
              maxOdds: '1.98',
              min: 0,
              max: 200,
              img: 'https://designer-trip.com/image/game/Gamelogo/champion.png'
            },
            {
              id: 6,
              gameId: 2,
              name: '初级房',
              maxOdds: '1.98',
              min: 10,
              max: 5000,
              img: 'https://designer-trip.com/image/game/Gamelogo/champion1.png'
            },
            {
              id: 7,
              gameId: 2,
              name: '中级房',
              maxOdds: '1.98',
              min: 100,
              max: 10000,
              img: 'https://designer-trip.com/image/game/Gamelogo/champion2.png'
            },
            {
              id: 8,
              gameId: 2,
              name: '高级房',
              maxOdds: '1.98',
              min: 100,
              max: 10000,
              img: 'https://designer-trip.com/image/game/Gamelogo/champion3.png'
            }
          ]
        },

        {
          id: 3,
          name: '哈希牛牛',
          enname: 'HASH_NIUNIU',
          children: [
            {
              id: 9,
              gameId: 3,
              name: '体验房',
              maxOdds: '1.98',
              min: 0,
              max: 200,
              img: 'https://designer-trip.com/image/game/Gamelogo/pair.png'
            },
            {
              id: 10,
              gameId: 3,
              name: '初级房',
              maxOdds: '1.98',
              min: 10,
              max: 5000,
              img: 'https://designer-trip.com/image/game/Gamelogo/pair1.png'
            },
            {
              id: 11,
              gameId: 3,
              name: '中级房',
              maxOdds: '1.98',
              min: 100,
              max: 10000,
              img: 'https://designer-trip.com/image/game/Gamelogo/pair2.png'
            },
            {
              id: 12,
              gameId: 3,
              name: '高级房',
              maxOdds: '1.98',
              min: 100,
              max: 10000,
              img: 'https://designer-trip.com/image/game/Gamelogo/pair3.png'
            }
          ]
        },

        {
          id: 4,
          name: '哈希两面',
          enname: 'HASH_COMB',
          children: [
            {
              id: 13,
              gameId: 4,
              name: '体验房',
              maxOdds: '1.98',
              min: 0,
              max: 200,
              img: 'https://designer-trip.com/image/game/Gamelogo/comb.png'
            },
            {
              id: 14,
              gameId: 4,
              name: '初级房',
              maxOdds: '1.98',
              min: 10,
              max: 5000,
              img: 'https://designer-trip.com/image/game/Gamelogo/comb1.png'
            },
            {
              id: 15,
              gameId: 4,
              name: '中级房',
              maxOdds: '1.98',
              min: 100,
              max: 10000,
              img: 'https://designer-trip.com/image/game/Gamelogo/comb2.png'
            },
            {
              id: 16,
              gameId: 4,
              name: '高级房',
              maxOdds: '1.98',
              min: 100,
              max: 10000,
              img: 'https://designer-trip.com/image/game/Gamelogo/comb3.png'
            }
          ]
        },

        {
          id: 5,
          name: '哈希百家乐',
          enname: 'HASH_BJL',
          children: [
            {
              id: 17,
              gameId: 5,
              name: '体验房',
              maxOdds: '1.98',
              min: 0,
              max: 200,
              img: 'https://designer-trip.com/image/game/Gamelogo/bai.png'
            },
            {
              id: 18,
              gameId: 5,
              name: '初级房',
              maxOdds: '1.98',
              min: 10,
              max: 5000,
              img: 'https://designer-trip.com/image/game/Gamelogo/bai1.png'
            },
            {
              id: 19,
              gameId: 5,
              name: '中级房',
              maxOdds: '1.98',
              min: 100,
              max: 10000,
              img: 'https://designer-trip.com/image/game/Gamelogo/bai2.png'
            },
            {
              id: 20,
              gameId: 5,
              name: '高级房',
              maxOdds: '1.98',
              min: 100,
              max: 10000,
              img: 'https://designer-trip.com/image/game/Gamelogo/bai3.png'
            }
          ]
        },

        {
          id: 4,
          name: '敬请期待',
          enname: 'WAIT'
        }
      ]
    }
  },
  created() {
    this.languageDefault = this.languageList[this.languageIndex]
  },
  methods: {
    switchLanguageHandle(item) {
      this.languageIndex = item.id - 1
      this.switchLanguage = false
      this.languageDefault = this.languageList[this.languageIndex]

      const lang = item.key
      if (this.$i18n.locale === lang) {
        return
      }
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
    },
    gameChange(index) {
      this.gameIndex = index
    },
    gameEnter(item) {
      if (item.gameId === 1) {
        this.$router.push({ path: '/hash?id=' + item.id })
      }
      if (item.gameId === 2) {
        this.$router.push({ path: '/champion?id=' + item.id })
      }
      if (item.gameId === 3) {
        this.$router.push({ path: '/bull?id=' + item.id })
      }
      if (item.gameId === 4) {
        this.$router.push({ path: '/comb?id=' + item.id })
      }
      if (item.gameId === 5) {
        this.$router.push({ path: '/bjl?id=' + item.id })
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

.my-swipe {
  height: 100%;
}

.jackpot {
  background: #eff7ff;
  border-radius: 0.625rem;
  padding: 0.3125rem 0.625rem;
  margin-top: 10px;
  .title {
    font-size: .9375rem;
    font-weight: 700;
    padding: 0.625rem 0;
    position: relative;
    color: #333;
  }
  .flex-between-center {
    padding: 0.3125rem 0;
    img {
      width: 1.25rem;
      margin-right: 0.3125rem;
    }
  }
  .record {
    touch-action: pan-y;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    .item {
      font-size: 1.125rem;
      color: #6da0ff;
      font-weight: 500;
      height: 1.375rem;
      line-height: 1.375rem;
      background-color: #fff;
      text-align: center;
      overflow: hidden;
    }
  }
}

.newWin {
  margin-top: 0.3125rem;
  margin-bottom: 0.625rem;
  .newWinContent {
    margin-top: 0.625rem;
    padding: 0.625rem;
    background-color: rgba(230,234,244,.68);
    height: 12.5rem;
    overflow: hidden;
    border-radius: 0.625rem;
    .t1 {
      >div {
        color: #7a828d!important;
      }
    }
    .title {
      font-size: .9375rem;
      font-weight: 700;
      color: #333;
      padding: 0.3125rem 0 0.625rem 0;
      position: relative;
      text-align: center;
      &::after {
        background: #fff;
        height: 0.0938rem;
      }
    }
    .winItem {
      font-size: .875rem;
      padding: 0.5rem 0;
      display: flex;
      >div {
        flex: 1 1;
        text-align: center;
        &:nth-of-type(2),
        &:nth-of-type(3) {
          color: #ee4b00;
        }
      }
      span {
        color: #7a828d;
        font-size: .625rem;
      }
    }

    .maquee {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
}

.gameitem {
  width: 7.25rem;
  height: 2.5rem;
  background-size: 100% 100%;
  line-height: 2.5rem;
  text-align: center;
  span {
    margin-left: 1.4375rem;
    font-weight: 700;
    font-size: .875rem;
    color: #575a6b;
  }
}

.gameBox {
  margin-top: 0.3125rem;
  .title {
    font-size: .9375rem;
    padding-top: 0.625rem;
    padding-left: 0.625rem;
    color: #ee4b00;
    font-weight: 700;
  }
}

.game_content {
  display: flex;
  flex-wrap: wrap;
  min-height: 21.875rem;
  justify-content: center;
  .listBanner {
    width: 50%;
    height: 10.625rem;
    margin-bottom: 0.625rem;
    background-size: cover;
    .time_title {
      text-align: center;
      padding: 0.625rem;
      color: #fff;

    }
    .pad {
      padding: 0.9375rem 1.375rem 1.625rem 0.875rem;
      text-align: left;
      .playName {
        color: #fff;
        font-weight: 700;
        font-size: 1.375rem;
      }
      .high {
        color: #575a6b;
        margin: 0.25rem 0;
      }
      .odds {
        font-size: .9375rem;
        color: #fff;
        font-weight: 700;
        margin: 0 0.125rem;
      }
      .otherSize {
        color: #fff;
      }

      .gameButton {
        color: #575a6b;
        border: none;
        background: none;
        background: #fff;
        border-radius: 1rem;
        padding: 0.4375rem 0.8125rem;
        min-width: 5rem;
        margin-top: 0.3125rem;
      }
    }
  }
  .four[data-v-67079a18] {
    height: 10.625rem!important;
  }
  .nodata {
    width: 30%;
  }
  .morePlay {
    text-align: center;
    color: #333;
  }
}

.index-page {
    height: calc(100% - 3.4375rem);
}

.page {
  font-size: .75rem;
  background-color: transparent;
  .switch-language {
    width: 100%; justify-content: flex-end; position: relative;
  }
  .rightImg, .van-image {
    width: 1.0625rem;
    position: relative;
  }
  .language {
    font-size: .875rem;
    margin-left: 0.3125rem;
  }
  .rightup {
    width: 6.625rem;
    position: absolute;
    box-shadow: 0 0.125rem 0.8125rem rgb(0 0 0 / 18%);
    border-radius: 0.625rem;
    z-index: 9999;
    right: 0;
    top: 1.875rem;
    background-color: #fff;
    .rightBox {
      display: flex;
      align-items: center;
      color: #36373b;
      height: 3.125rem;
      justify-content: center;
      position: relative;
      img {
        width: 1rem;
        margin-right: 0.3125rem;
      }
      p {
        width: 5.5rem;
        color: #36373b;
        text-align: center;
        font-size: .9375rem;
        font-weight: 500;
        height: 3.125rem;
        line-height: 3.125rem;
      }
      .ac {
        color: #3979fe;
      }
    }
  }

  .view {
    background-color: #fff;
    flex: 1 1;
    overflow-y: auto;
    .home_bg {
      background: url(../../assets/images/bg.png);
      background-position: 0 -3.4375rem;
      padding: 0 0.9375rem;
    }
    .banner {
      width: 100%;
      height: 8.75rem;
      position: relative;
      display: block;
      margin: 0 auto;
      transform: translateZ(0);
      overflow: hidden;
      border-radius: 0.3125rem;
    }
    .Marquem-container {
      display: flex;
      height: 1.25rem;
      overflow: hidden;
      white-space: nowrap;
      margin: 0.9375rem 0 0.625rem 0;
      align-items: center;
      .icon_notice {
        width: 1.1875rem;
        height: 0.75rem;
      }
      .Notice {
        flex: 1 1;
        height: 1.25rem;
        overflow: hidden;
        position: relative;
        margin-left: 0.3125rem;
        .van-notice-bar {
          height: 1.25rem;
          padding: 0;
          font-size: .875rem;
          color: rgb(118, 118, 118);
          background: none;
        }
      }
      .more {
        width: 3.25rem;
        height: 1.25rem;
        background: #b8bfe2;
        color: #fff;
        border-radius: 0.3125rem;
        box-sizing: border-box;
      }
    }

    .login-info {
      height: 4.125rem;
      margin: auto;
      background: rgba(230,234,244,.68);
      border-radius: 0.625rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0.625rem;
      .unlogin {
        font-size: 1.0625rem;
        color: #ee4b00;
        margin-bottom: 0.3125rem;
      }

      .service {
        display: flex;
        >div {
          margin: 0 0.625rem;
          text-align: center;
          .bgimg {
            width: 1.5rem;
            height: 1.1875rem;
            margin: 0 auto 0.3125rem;
          }
          .serve {
            background-image: url(../../assets/images/service.png);
          }
          .illustrate {
            background-image: url(https://designer-trip.com/image/shouming.png);
          }
        }
      }
    }
  }

  .appdown {
    height: 3.125rem;
    padding: 0 0.9375rem;
    position: absolute;
    bottom: 3.4375rem;
    background-color: #fff;
    width: 100%;
    .close_app {
      color: rgb(122, 130, 141);
      font-size: 1.5625rem;
      margin-right: 0.625rem;
    }
    .appTitle {
      font-size: .9375rem;
      color: #3d72fa;
      font-weight: 400;
    }
    .downs {
      padding: 0.5rem;
      font-size: .8125rem;
      border-radius: 0.625rem;
      background-color: #3d72fa;
      color: #fff;
    }
  }
}

.titleLogo {
  img {
    height: 2.5rem;
    width: auto;
  }
}

.header {
  min-height: 3.4375rem;
  padding: 0 0.9375rem;
  background-color: #fff;
  .title {
    color: #575a6b;
    font-size: 1.125rem;
    font-weight: 700;
    flex: 1 1;
  }
  >div {
    display: flex;
    align-items: center;
    min-width: 3.125rem;
  }
}

</style>
