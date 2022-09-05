<template>
  <div class="wrapper home">
    <div class="flex-1 index-page">
      <div class="page loginBg">

        <!-- 切换语言 - start -->
        <div class="flex-center-center rights" @click="switchLanguage = !switchLanguage">
          <img :src="languageDefault.url" alt="" class="rightImg">
          <label class="language">{{ languageDefault.name }}</label>
          <div v-if="switchLanguage" class="rightup" @click.stop>
            <div v-for="(item,index) in languageList" :key="index+''" class="rightBox" @click="handleswitchLanguage(item)">
              <p class="van-hairline--bottom" :class="index == languageIndex ? 'ac' : ''">
                <img :src="item.url" alt="">
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
        <!-- 切换语言 - end -->

        <!-- 内容区域 - start -->
        <div class="view">
          <div class="logo">
            <img src="https://designer-trip.com/image/logo1.png">
          </div>

          <div class="zanzu">
            <div class="line" />
            <p>赞助伙伴</p>
            <div class="line" />
          </div>

          <div class="zanzu">
            <img src="https://designer-trip.com/image/sponsor1.png">
            <img src="https://designer-trip.com/image/sponsor2.png">
            <img src="https://designer-trip.com/image/sponsor3.png">
          </div>

          <div class="logReg">
            <!-- 登录 - start -->
            <transition name="fade">
              <Login v-show="isLogin" @handleSwitch="handleSwitch" />
            </transition>
            <!-- 登录 - end -->

            <!-- 注册 - start -->
            <transition name="fade">
              <Register v-show="!isLogin" @handleSwitch="handleSwitch" />
            </transition>
            <!-- 注册 - end -->
          </div>
        </div>
        <!-- 内容区域 - end -->
        <!-- login fadeL-enter-active fadeL-enter-to -->
        <!-- login reg fadeR-enter-active fadeR-leave-to -->
      </div>
    </div>

  </div>
</template>

<script>
import Login from './components/login'
import Register from './components/register'
export default {
  name: 'Index',
  components: { Login, Register },
  data() {
    return {
      isLogin: true,
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
      ]

    }
  },
  created() {
    this.languageDefault = this.languageList[this.languageIndex]
  },
  methods: {
    handleswitchLanguage(item) {
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
    handleSwitch() {
      this.isLogin = !this.isLogin
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

.rights {
  position: absolute;
  top: 1.875rem;
  right: 1.25rem;
  color: #fff;
  .rightImg, .van-image {
    width: 1.0625rem;
  }
}

.img-icon {
  width: 100%;
  height: 100%;
}

.page {
  background-size: 100% 100%;
  .switch-language {
    width: 100%; justify-content: flex-end; position: relative;
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
    display: flex;
    flex-direction: column;

    .zanzu {
      margin: auto;
      color: #fff;
      font-size: .75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.25rem;
      .line {
        width: 5.0625rem;
        height: 0.0625rem;
        background: #fff;
      }
      p {
        margin: 0 0.625rem;
        color: #fff;
      }
      img {
        width: 4.5625rem;
        margin: 0 0.625rem;
      }
    }

    .logReg {
      position: relative;
      margin: auto;
      width: 88%;
      max-width: 25rem;
      flex: 1 1;
      padding-top: 1.25rem;
    }

    .login {
      width: 100%;
      position: absolute;
      margin: auto;
      display: flex;
      margin-top: 0.75rem;
      color: #fff;
      >div {
        &:first-child {
          background: hsla(0,0%,75.3%,.45);
          border-radius: 0.6875rem 0 0 0.6875rem;
          .van-cell1 {
            background: rgba(69,69,69,.64);
          }
        }

        &:last-child {
          background: rgba(12,12,12,.4);
          border-radius: 0 0.6875rem 0.6875rem 0;
          .van-cell1 {
            background: hsla(0,0%,75.3%,.45);
          }
        }
      }
      .right {
        padding: 0.6875rem 0;
        flex: 1 1;
        .title {
          font-size: 1.0625rem;
          text-align: center;
          margin: 0.625rem 0 1.25rem 0;
        }

        .van-cell1 {
          width: 16.25rem;
          margin: auto;
          padding: 0.625rem 0.9375rem;
          border-radius: 1.75rem;
          margin-top: 0.625rem;
          height: 3.125rem;
          display: flex;
          align-items: center;
          .icon-img {
            width: 1.1875rem;
            height: 1.1875rem;
          }

          .input {
            padding: 0 0.4375rem;
            width: 100%;
            margin-top: -0.1875rem;
          }

          input {
            display: block;
            box-sizing: border-box;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 0;
            color: #fff;
            height: 1.875rem;
            line-height: inherit;
            text-align: left;
            background-color: transparent;
            border: 0;
            resize: none;
            font-size: .9375rem;
          }
        }

        .cqur {
          margin: 1.25rem auto 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 16.25rem;
          padding-left: 0.9375rem;
          label {
            margin-left: 0.3125rem;
          }
        }

        .submint {
          margin: 1.25rem auto 0;
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          width: 16.25rem;
          margin: 1rem auto 0;
        }
      }

      .left {
        background: rgba(12,12,12,.4);
        border-radius: 0 0.6875rem 0.6875rem 0;
        letter-spacing: .625rem;
        width: 3.75rem;
        line-height: 3.75rem;
        -ms-writing-mode: tb-rl;
        writing-mode: tb-rl;
        min-height: 20.625rem;
        color: #fff;
        font-size: .9375rem;
        text-align: center;
        img {
          width: 1.5625rem;
        }
      }

    }

    .reg {
      margin-top: 0!important;
    }

    .logo {
      width: 3.75rem;
      margin: auto;
      margin-top: 1.375rem;
      img {
        width: 100%;
      }
    }

  }

}

</style>
