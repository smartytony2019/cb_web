<template>
  <div class="flex-1 index-page">
    <div class="page">
      <div class="header flex">
        <div class="flex-left">
          <div class="van-image">
            <img class="img-icon" src="@/assets/images/caidan_ic.png" alt="">
          </div>
        </div>

        <div class="flex-center-center title">
          <div class="titleLogo">
            <img src="@/assets/images/header_logo_zh.png" alt="">
          </div>
        </div>

        <div class="flex-right">
          <div class="flex-center-center switch-language">
            <img src="@/assets/images/zh-CN.png" alt="" class="rightImg">
            <label class="language">中文</label>
            <div class="rightup" v-if="switchLanguage">
              <div class="rightBox">
                <p class="hairline ac">
                  <img src="@/assets/images/zh-CN.png" alt=""> 
                   中文 
                </p>
              </div>
              <div class="rightBox">
                <p class="hairline ac">
                  <img src="@/assets/images/zh-CN.png" alt=""> 
                   中文 
                </p>
              </div>
              <div class="rightBox">
                <p class="hairline ac">
                  <img src="@/assets/images/zh-CN.png" alt=""> 
                   中文 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="view">
        <div class="home_bg">
          <!-- 轮播图 - start -->
          <div class="banner home_Banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item>
                <van-image width="100%" height="100%" src="https://designer-trip.com/image/Activity/newcomer1Cn.jpg" />
              </van-swipe-item>
              <van-swipe-item>
                <van-image width="100%" height="100%" src="https://designer-trip.com/image/Activity/newcomer2Cn.jpg" />
              </van-swipe-item>
              <van-swipe-item>
                <van-image width="100%" height="100%" src="https://designer-trip.com/image/Activity/newcomer3Cn.png" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <!-- 轮播图 - end -->

          <!-- 公告 - start -->
          <div class="Marquem-container">
            <div class="icon_notice">
              <img src="../../assets/images/notice_ic.png" class="img-icon">
            </div>
            <div class="Notice">
              <van-notice-bar
                text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
              />
            </div>
            <div class="more flex-center-center">
              更多
            </div>
          </div>
          <!-- 公告 - end -->

          <!-- 会员信息 - start -->
          <div class="login-info">
            <div class="nologin">
              <div class="unlogin">中心钱包</div>
              <div class="">登录后查看</div>
            </div>

            <div class="service">
              <div>
                <div class="serve bgimg"></div>
                <span>客服</span>
              </div>
              <div>
                <div class="illustrate bgimg"></div>
                <span>说明</span>
              </div>
            </div>
          </div>
          <!-- 会员信息 - end -->

          <!-- 奖池 - start -->
          <div class="jackpot">
            <div class="title after">派奖池 JACKPOT</div>
            <div>
              <div class="flex-between-center">
                <div class="flex-center-center">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA0CAYAAADBjcvWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOhSURBVHgB7ZdbbExdFMfXWvuc6Uc/UfXRj/qk6MVXNKGJS+KRBIkHkiY8UCR4EvHSaJHpoBKXeCGRJiSl8dI+kHjy5IEglCAMvbgnrQZhlF7mzNnLmhKRMMcZjDqyfy9n5uy111n/tddeZx8Ag8FgMBgMvx2YjnHxiepVoKkafj2oCao6Vted8TvBgjRgpDxE+B+GAuaR6ZgT/KEYYUHDCAsaaXVF1HAZGHb6MiYcJ51svZcJM+yW940GHyiEW5AGab3H0mFKw45yhbrFy6atsi5ZMQwZwOyxoDG0wjJShB/4vj3GPDgv/0RNbrYdGoP97nRt8T9yf2ryPiEOaMZCBF7u6UZzPVr4TprSXxrhLWi+T8DPEolQNIZ93S/W7X0LiN8l358wETLxSHVOKNueqrQz3yVVRIwjGbhNRqOYgPux0MCd7tUHeoHD4jPCkxu3lVsMV73ctj2w1Kc/kQgXNIXzrP54iZx4xxPhNHnueOmc3UzwWLmJe7H4qytdG+r7/IjFbwkqaqyZjayqGPRTOQWfpyznUuuKfV0y09P5T+uKDFh4MpyPCWcJApUhasu11aGOlbuiXjGkFhYOU1GBcxCJliHopa2Ve9J6j2Sk3UuiC4/vWEjITaK3rr1y9/5Upimbh4gqQ8LN4q3HHfNvK/wOSAn29PXfkOUISbJ3SdmnjD/lQPvaPTclQ6fl5zR6/ixa3LBtWcmxqhHJ0gAfsOWj4/pdK1mp0qNbcouOb9+Uk511ReYNA6RIci+nmvLNPVbcWLOYWW1E5gXixZEPzRYEvC1TW3ScrzmW6nq0NhJLno8G3X2s+/L6DXbP8NFzdYIUKyQZpmSn0Kg0OA7bIRy4t6ru4ufPSl7CtbXYPLZ3bDxLjVPKnsmk54nTGWIwR4Zfi/NT7MYPd6zbf90rdN/tfkLDlvzhOKyMERdJW54p4iZKKBOkP0lLhpfi6rmY9TPyG3DxgazXGykXFxFdl9lBRjcZvHRSpQBtJlSSJOUy5MjNSfJ7hIgfLcv8t1jlin9JBr9ApE4N+gI6cDau7GuP1kgSEX6wK3rNa6qgkp5JeS7ZxYp4sgYqkFPyf8QSGOMocTxKhM/ydsPnpLJ75RoTlwNyfSgxPwGmu9qyOjvaoRNqI+xHyJcBZogpJ7eWq4T6Aw/Bjg1DiTkEBw0jLGgYYUHDCAsaRljQMMKCRsaEKXaGNGkZ+2wZpKJCQWnp1z9LolGE5mYXDAaDwfALeA+aIWs1kWCE8gAAAABJRU5ErkJggg=="/>
                  USDT
                </div>
                <div>
                  <div class="record">
                    <div class="item border">
                      <div v-for="item in 10" :key="item+''" style="transform: translateY(0%); transition: all 2000ms ease 0s;">
                        {{item-1}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-between-center">
                <div class="flex-center-center">
                  <img src="data:image/png;base64,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">
                  TRX
                </div>
                <div>
                  <div class="record">
                    <div class="item border">
                      <div v-for="item in 10" :key="item+''" style="transform: translateY(0%); transition: all 2000ms ease 0s;">
                        {{item-1}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 奖池 - end -->

          <!-- 游戏 - start -->
          <div class="gameBox">
            <div class="title">哈希彩种 HOT</div>
             <van-tabs class="tab-style list-tab-style"
              swipeable>
              
              <van-tab v-for="item in 6" :key="item+''">
                <!--自定义标题（#title必不可少）-->
                <template #title>
                    <div class="gameitem LUCKY_HASH">
                      <span>幸运哈希</span>
                    </div>
                </template>
                
                <div class="game_content">
                  <div class="listBanner four">
                    <div class="time_title">体验房</div>
                    <div class="pad">
                      <div class="playName">幸运哈希</div>
                      <div class="high">
                        最高赔率
                        <span class="odds">1.98</span>
                      </div>
                      <div class="high">
                         限注
                        <span class="otherSize">0-200U</span>
                      </div>
                      <button class="gameButton">立即去玩</button>
                    </div>
                  </div>
                  <div class="listBanner four">
                    <div class="time_title">体验房</div>
                    <div class="pad">
                      <div class="playName">幸运哈希</div>
                      <div class="high">
                        最高赔率
                        <span class="odds">1.98</span>
                      </div>
                      <div class="high">
                         限注
                        <span class="otherSize">0-200U</span>
                      </div>
                      <button class="gameButton">立即去玩</button>
                    </div>
                  </div>


                  <div class="listBanner four">
                    <div class="time_title">体验房</div>
                    <div class="pad">
                      <div class="playName">幸运哈希</div>
                      <div class="high">
                        最高赔率
                        <span class="odds">1.98</span>
                      </div>
                      <div class="high">
                         限注
                        <span class="otherSize">0-200U</span>
                      </div>
                      <button class="gameButton">立即去玩</button>
                    </div>
                  </div>


                  <div class="listBanner four">
                    <div class="time_title">体验房</div>
                    <div class="pad">
                      <div class="playName">幸运哈希</div>
                      <div class="high">
                        最高赔率
                        <span class="odds">1.98</span>
                      </div>
                      <div class="high">
                         限注
                        <span class="otherSize">0-200U</span>
                      </div>
                      <button class="gameButton">立即去玩</button>
                    </div>
                  </div>
                </div>
              </van-tab>
            </van-tabs>
          </div>
          <!-- 游戏 - end -->



        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      switchLanguage: false,
      tabList:[ // 榜单图标变量
        {tabName:'甜蜜榜',id:0,
          tabUrl:`${urlPath}tmb-tab.png`,
          tabUrlAct:`${urlPath}tmb-tab-active.png`
        },
        {tabName:'贡献榜',id:1,
          tabUrl:`${urlPath}gxb-tab.png`,
          tabUrlAct:`${urlPath}gxb-tab-active.png`
        },
        {tabName:'威望榜',id:2,
          tabUrl:`${urlPath}wwb-tab.png`,
          tabUrlAct:`${urlPath}wwb-tab-active.png`}
      ],
    }
  },
  created() {
  }

}
</script>

<style lang="scss" scoped>

.my-swipe {
  height: 100%;
}

.jackpot {
  background: #eff7ff;
  border-radius: 0.625rem;
  padding: 0.3125rem 0.625rem;
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

.gameitem {
  width: 7.25rem;
  height: 2.5rem;
  background-size: 100% 100%;
  line-height: 2.5rem;
  text-align: center;
  background-image: url(https://designer-trip.com/image/ac_haxi.png);
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
    background-image: url(https://designer-trip.com/image/game/Gamelogo/hash.png);
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
