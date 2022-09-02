<template>
  <div class="wrapper home">
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

          <!-- 切换语言 - start -->
          <div class="flex-right" @click="switchLanguage = !switchLanguage">
            <div class="flex-center-center switch-language">
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
          </div>
          <!-- 切换语言 - end -->
        </div>

        <!-- 内容区域 - start -->
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
              <!-- <div class="nologin">
                <div class="unlogin">中心钱包</div>
                <div class="">登录后查看</div>
              </div> -->
              <div class="islogin">
                <div class="name">smartytony</div>
                <div class="balance">
                  <span>0.00</span>
                  <img :class="{spinner:isReloadBalance}" src="data:image/png;base64,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" @click="handleReloadBalance">
                </div>
              </div>

              <div class="service">
                <div @click="$router.push({path:'/deposit'})">
                  <div class="cunkuan bgimg" />
                  <span>存款</span>
                </div>
                <div @click="$router.push({path:'/withdraw'})">
                  <div class="qukuan bgimg" />
                  <span>提款</span>
                </div>
                <div>
                  <div class="serve bgimg" />
                  <span>客服</span>
                </div>
                <div @click="$router.push({path:'/help'})">
                  <div class="illustrate bgimg" />
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
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA0CAYAAADBjcvWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOhSURBVHgB7ZdbbExdFMfXWvuc6Uc/UfXRj/qk6MVXNKGJS+KRBIkHkiY8UCR4EvHSaJHpoBKXeCGRJiSl8dI+kHjy5IEglCAMvbgnrQZhlF7mzNnLmhKRMMcZjDqyfy9n5uy111n/tddeZx8Ag8FgMBgMvx2YjnHxiepVoKkafj2oCao6Vted8TvBgjRgpDxE+B+GAuaR6ZgT/KEYYUHDCAsaaXVF1HAZGHb6MiYcJ51svZcJM+yW940GHyiEW5AGab3H0mFKw45yhbrFy6atsi5ZMQwZwOyxoDG0wjJShB/4vj3GPDgv/0RNbrYdGoP97nRt8T9yf2ryPiEOaMZCBF7u6UZzPVr4TprSXxrhLWi+T8DPEolQNIZ93S/W7X0LiN8l358wETLxSHVOKNueqrQz3yVVRIwjGbhNRqOYgPux0MCd7tUHeoHD4jPCkxu3lVsMV73ctj2w1Kc/kQgXNIXzrP54iZx4xxPhNHnueOmc3UzwWLmJe7H4qytdG+r7/IjFbwkqaqyZjayqGPRTOQWfpyznUuuKfV0y09P5T+uKDFh4MpyPCWcJApUhasu11aGOlbuiXjGkFhYOU1GBcxCJliHopa2Ve9J6j2Sk3UuiC4/vWEjITaK3rr1y9/5Upimbh4gqQ8LN4q3HHfNvK/wOSAn29PXfkOUISbJ3SdmnjD/lQPvaPTclQ6fl5zR6/ixa3LBtWcmxqhHJ0gAfsOWj4/pdK1mp0qNbcouOb9+Uk511ReYNA6RIci+nmvLNPVbcWLOYWW1E5gXixZEPzRYEvC1TW3ScrzmW6nq0NhJLno8G3X2s+/L6DXbP8NFzdYIUKyQZpmSn0Kg0OA7bIRy4t6ru4ufPSl7CtbXYPLZ3bDxLjVPKnsmk54nTGWIwR4Zfi/NT7MYPd6zbf90rdN/tfkLDlvzhOKyMERdJW54p4iZKKBOkP0lLhpfi6rmY9TPyG3DxgazXGykXFxFdl9lBRjcZvHRSpQBtJlSSJOUy5MjNSfJ7hIgfLcv8t1jlin9JBr9ApE4N+gI6cDau7GuP1kgSEX6wK3rNa6qgkp5JeS7ZxYp4sgYqkFPyf8QSGOMocTxKhM/ydsPnpLJ75RoTlwNyfSgxPwGmu9qyOjvaoRNqI+xHyJcBZogpJ7eWq4T6Aw/Bjg1DiTkEBw0jLGgYYUHDCAsaRljQMMKCRsaEKXaGNGkZ+2wZpKJCQWnp1z9LolGE5mYXDAaDwfALeA+aIWs1kWCE8gAAAABJRU5ErkJggg==">
                    USDT
                  </div>
                  <div>
                    <div class="record">
                      <div class="item border">
                        <div v-for="item in 10" :key="item+''" style="transform: translateY(0%); transition: all 2000ms ease 0s;">
                          {{ item-1 }}
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
                          {{ item-1 }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 奖池 - end -->

            <!-- 游戏 - start -->
            <div class="lottory flex">
              <div v-if="cates.length>0" class="sub_left">

                <div v-for="(item,index) in cates" :key="index" class="flex-center-center" :class="{active:index===cateIndex}" @click="cateIndex=index">
                  <div class="cate" :class="'cate_'+item.id" />
                  <div>{{ item.name }}</div>
                </div>

              </div>

              <div class="gameContent">
                <div class="gamelist">
                  <div v-if="cates.length>0" class="inner_box_hash">
                    <div v-for="(item,index) in cates[cateIndex].list" :key="index" class="game" :class="'game_'+item.id" @click="handleGameClick(item)" />
                  </div>
                </div>
              </div>

            <!-- <div class="gameBox">
              <div class="title">哈希彩种 HOT</div>
              <van-tabs class="tab-style list-tab-style" swipeable @click="gameChange">
                <van-tab v-for="(item,index) in gameList" :key="index+''">
                  <template #title>
                    <div class="gameitem" :class="index === gameIndex? item.enname+'_active': item.enname">
                      <span>{{ item.name }}</span>
                    </div>
                  </template>

                  <div class="game_content">
                    <template v-if="item.children && item.children.length>0">
                      <div v-for="(cItem,cIndex) in item.children" :key="cIndex+''" class="listBanner four" :style="{backgroundImage: 'url('+cItem.img+')'}" @click="gameEnter(cItem)">
                        <div class="time_title">{{ cItem.name }}</div>
                        <div class="pad">
                          <div class="playName">{{ item.name }}</div>
                          <div class="high">
                            最高赔率
                            <span class="odds">{{ cItem.maxOdds }}</span>
                          </div>
                          <div class="high">
                            限注
                            <span class="otherSize">{{ cItem.min }}-{{ cItem.max }}U</span>
                          </div>
                          <button class="gameButton">立即去玩</button>
                        </div>
                      </div>
                    </template>
                    <template v-else>
                      <div style="text-align: center;">
                        <img src="@/assets/images/nodata.png" class="nodata">
                        <div class="morePlay">更多游戏正在研发中...</div>
                      </div>
                    </template>

                  </div>
                </van-tab>
              </van-tabs>
            </div> -->
            <!-- 游戏 - end -->

            <!-- 中奖榜 - start -->
            <!-- <div class="newWin">
              <div class="newWinContent bg-box">
                <div class="title after">最新中奖榜 NEW</div>
                <div class="winItem t1">
                  <div>用户名</div>
                  <div>下注金额</div>
                  <div>中奖</div>
                  <div>游戏</div>
                </div>
                <div class="maquee">
                  <div style="animation: 30s linear 0s infinite normal none running scroll_Y;">
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                  </div>
                  <div style="animation: 30s linear 0s infinite normal none running scroll_Y;">
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                    <div class="winItem">
                      <div>xct***</div>
                      <div>1435<span>USDT</span></div>
                      <div>14063<span>USDT</span></div>
                      <div>哈希PK拾</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            <!-- 中奖榜 - end -->

            </div>
          </div>
          <!-- 内容区域 - end -->

          <!-- APP下载 - start -->
          <div v-if="isShowAppDown" class="appdown after flex-between-center">
            <div class="flex-center-center">
              <i class="close_app van-icon van-icon-close" @click="isShowAppDown = !isShowAppDown" />
              <div>
                <div class="appTitle">下载哈博APP，体验更多竞彩乐趣</div>
              </div>
            </div>
            <a href="#">
              <div class="downs">立即下载</div>
            </a>
          </div>
        <!-- APP下载 - start -->
        </div>
      </div>
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import api from '@/api/index'
export default {
  name: 'Index',
  components: { Nav },
  data() {
    return {
      isReloadBalance: false,
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
      ],
      cates: [],
      cateIndex: 0
    }
  },
  created() {
    this.$store.dispatch('app/setNavIndex', 0)
    this.languageDefault = this.languageList[this.languageIndex]
    this.init()
  },
  methods: {
    async init() {
      // 获取类目
      const res = await api.category.findAll()
      if (res && res.code !== 0) {
        return
      }
      this.cates = res.data
    },
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
    gameChange(index) {
      this.gameIndex = index
    },
    handleReloadBalance() {
      this.isReloadBalance = true
      const sleep = (time, callbakc) => {
        setTimeout(() => {
          callbakc()
        }, time)
      }
      sleep(3000, () => {
        this.isReloadBalance = false
      })
    },
    handleGameClick(item) {
      // this.$router.push({ path: '/offline?id=' + item.id })
      if (item.id === 1) {
        this.$router.push({ path: '/comb?id=' + item.id })
      }
      if (item.id === 2) {
        this.$router.push({ path: '/bjl?id=' + item.id })
      }
      if (item.id === 3) {
        this.$router.push({ path: '/champion?id=' + item.id })
      }
      if (item.id === 4) {
        this.$router.push({ path: '/hash?id=' + item.id })
      }
      if (item.id === 5) {
        this.$router.push({ path: '/bull?id=' + item.id })
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

.lottory {
  min-height: 32rem;
  margin-top: 0.625rem;
  .sub_left {
    width: 5rem;
    >div {
      width: 4.375rem;
      height: 3.125rem;
      background: url(data:image/png;base64,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);
      background-size: 100% 100%;
      margin: 0.4375rem 0;
      img {
        width: 1.5625rem;
        transition: all .5s ease;
      }
    }

    .active {
      .cate_1 {
        background:url('../../assets/images/otherGame/blockchain_ac.png') center no-repeat;
        background-size: contain;
      }
      .cate_2 {
        background:url('../../assets/images/otherGame/live_ac.png') center no-repeat;
        background-size: contain;
      }
      .cate_3 {
        background:url('../../assets/images/otherGame/Sports_ac.png') center no-repeat;
        background-size: contain;
      }
    }

    .cate {
      width:1.56rem;
      height:100%;
    }

    .cate_1 {
      background:url('../../assets/images/otherGame/blockchain.png') center no-repeat;
      background-size: contain;
    }

    .cate_2 {
      background:url('../../assets/images/otherGame/live.png') center no-repeat;
      background-size: contain;
    }

    .cate_3 {
      background:url('../../assets/images/otherGame/Sports.png') center no-repeat;
      background-size: contain;
    }

    .active {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABUCAYAAABnT9INAAAACXBIWXMAAAsTAAALEwEAmpwYAAANf0lEQVR42tSWS3IURxCGa+e7+AAcgJ0XBglpJBn0NDfgJjYYY2PM0xYCZCEhRkDAJQh2rOAIRGg3XelOVMnXETU1Nd3MoKmO+OP7UT4qs8oGuUl8vTdyZvGF7KwcyfvV5/Jp41AGm4fiLz8X//MzkcuHJ1Jv7KRDiE/nc2ak/DzdZ/S6u97BWl8+6Z3o3egdudP8Fl7Kj70jeV0PdTypZblE83D6mv6Drx7Ksd6Z3p37Vt/8Gzm70pcP01o4/4C5+Oz8BzJq/4sv5IPepZvW13st3y/15a3+L995iQOI75JfqA6gSu9S71TvdrJ//b2WK5vPpNo68KIHKc0bGSY94BYMHmbr82rOFCSQ8zrnT2t/vduFV3LFTeJbPJLtzQPxW/vhgEC8MujAaN4bVSHXp+o1BoOHKJnPmcO1D6N9mC1x/nT31zvWu3Zdvx/68l2vL+8+N3t6oi2jaR/iU3Gt9UZ8YCRqv9F5iHr4rfZfPpR3evft/82qCzf3/MmwSny8gHmYV1yvvZXJ87rPk69H6LT217t3bb4Lfdne3BPJaWPPG5u+S/6E5CG+U6/T3l/fYLxf21/JlfU98Rv/eTGZtJExFjFqBOLppz7QvDF/fv68TRj1z8132vvrG+hbZH91X9uTyg6ItOshXmY2X70R5frPzD76Fr2+fJ9+sGfydv2JJouo1BvxibhqFyKkucqx+1PT7J3LT56H0ufP2v76JsP/KnwpZ9d3xWtBShtPxBg8HE8eRiI2fr1A/IgLhql5Zm7/XfH6NtGDLe3Lx/XHIbkmngZr6gMRWof4OJ7oj0/XixEfyGzZfsn8Wd2/91Q+uuZ37kjOfV78kRfjUD02piRQL9WYuGB6mheIVzJbIF4S9cwSnxf3m/X99Y34NX5f3gwdcMdoXoxBHg7R6o7RPLRaKCEmyfxYAvEtzkezvv98/UbOvuVdOV4LSYHBw+FxMQZ5yIKpgfL9YZBAzlaiUfM9gjabcdb3X34ix06/uRdyZvWhl6HaEYgQOa2VPw+fzod4ZTuVsr++lZvblx37waVtOI6oCR4GL8YgD6lN9EPpfFFm+ufnL2V/fSu3uCvvvxRAvHJS+hfiJ5WP2u5Tyv4L9Vu5pcfy6WL9B9UliBA5iXwOMQ8z6lyfny+fX8r++lZu+aEMvgz0D4xFLMpPxitj0yfqWys/H1RpDJIvpeyvb+VWtsUnkx5AhMhp+nT8pwdG8xDl+k0qjkrZX9/K1QXeGkS6X0E8B0K8MqNk/X2Ib8YrZct58vsUs3/9Vs6C3VRB/FfnT38eVNr+buVeXXDPi0q9ESEtMCLUyKFXoj++6/n581D6/NL2dyt3mwUQoToX4kfkQ/x4/W2uxHzZfDxxRH5p+zttsHynEpV6I37MuOouVGnMGCvfX4eFmgOj/Fbi/NL2d8t3KMhp5Y43Bg/xPhXXWpjpH4sYNR7iR1ywkfzS9ndLtysa3oZNT7yCtZZg04+Ie2X3/tTjA20PZb4f+aXt75b+poF6YyRi6QvjZznF5+E7xfPzaY6R/NL2d2qQh6pbFcSPiMPgIT46r3s/D+k1xvmotP3d0i0vpt6tyhg8bHji1ARVEN+9P8z0y+YnVdr+rvdXJQlpgpIDoUpjsL3y5/Gzqam0/d3izUbRTahahJGsLl2v3huDKkhtuh81zV6d+yNipe3vGEAP8UZ84Fj6E+Jz8Un3a7dPafs7NQtBizASsVH5HgYP8+pezyxt9yltf7fwB39Qb0SInKafVDyvRYhPzqcxmMovbX83MukGRIicpm8bz50/3fNK299d+H0gF25UQ6Uxo0qLjLE0BvGNOMS3qWeG5mzJfihdX9r+rv4BCRCvTGoA8SP6DQKj/JlQCfu7+et1wfVKVPMwaCDwpLERoWaO9TXio3jH8/PnofT5pe3v5n9jodoHBl2HeOKI2qn2C6R+YFRpzGjeGGSevqXt7/QHc9cGKg0a8W3iUKUxiDL9O+W3FP1K29/NX1NjGsDgYV0Emz6OJ6S9jJGIjVePHzuOmLW0/d35q3Xy1Wq4rhnND2Ct8xCvTMpqU/2h5UJ8Is5sY89bSWn7u/O/0kC9MRIxGqo34pU5xefhvzbe6rzS9ndqUAVVvwxgrbnaB+KJay3EE0ch9n91Z/IcVRWF8bfwb2DHjh1r03OThCQMiv4B4ECVQzGUpYDMCQZCIMiQFJMCxSAprUSFAhGk1EQtLVcs2bJzyQYy9Rv6eE73ufU1NJfb/TKQ96q++n3k3HvuGQJbIhDekc993/6eIZS0/r23hyIyekuCyooHLYpA+Bhxx/u284OhoXqh5bxFSevfkwYtwlBsDeJMDLnfc+ePQPVgY0pa/966UzUNi1eK1hlaxAmUqlOg5gIhy3uQ5T58g/m1N2v9Ekta/54WpYpAlsSU6pXGnwTrhJjlPPxc5ZPalKjd0U/S+vfEvHmiKvbKuIpA+AW6j9rd/SCWtP49KdAcUI8GQJaea/A8vH0g+JlDcfKL1NvPR5S0/j0xVh03tOgECB8v7n5fCgbhZ/de0vr33vgyJJX8UGl8YAivrJfEQPi4cXc9EgNx3l0flLT+n10YqB5sQvZ8xwLDqtTP3/vufEnr31tbuRy+UBJTwuM8JwBZHDNUD9rzxX8fbzzrm8qXtP69tQMRDgwYqo6B6sE64a4lnyPuyAc1kT8wVIUgzieo/4gXdjyitUcDkQRB1hr2SnjEa++oQpDFMRBy55/9ebdQf3L6l38S15yKyms4aVUBqB7kS2AsSS5lvRBr7D68Le7Op0xK/6tPhWWv63QYrjkSUmMKDC0KQXhLXIoAa7zrfsy4vd6k9N91Ogq9jgvRpDmwuj8wrBdiSNgPqgedQi57/gCEd71viWtuZe17Sem/40J5wls5XH6EokJQdDgAWVKMEl4ZQ+586uesnn6wVknpf+X18iNvxT0aXX04JNGqvsDQeENVAKoHXXLfX8VeCY84ZK0XbKa+pPQvu/Ly47SlcxBFsuwF94EiiSljyPEevOU83m68nhCEFy76/mVHsiuv+CctbfumXC38UAC+QF2gSM4a1t+HRxxyvYfYwuRf9P23XSuT7MqTr3CHHlYPhQRWi1GqVxp/EKwTYpbzmltZ6+PnA5vtZ7H3X7xFDz3z5caop/1sVA32WguQGAiPAg6GhvBKu5q5H4Lwtvqa7WfR9t9+PqLcH9SNhf1Ny3M/E3XqIDq5CFEXKJKYEues5+ERx53aXLbzkDu/+tBQpd5dj/GLr3+O53k3hb+e+y898uM02nYhos4v8CB7pUW9ILwrHj+fDF8Jr4Rmkz9YdP3LTvJjNOI9/7WO07LcffI7+zCAjgMgvNCiAyC8M+56zx5XIl9oqFLf8P0KF0//vIvcL+TLbrCpZ/+WnSn8WKYObfx5oUlVDwhvG4jEwIbOgwQ5zseJO7Xw/csOZBe5MTrj2b6uf2gJH3i8YrgsiZzCg/DKOdFKEF64WDSP/Revl0l2ITvxXvYVf6f2/DgFrV9F1NHNA2Ix1YP1kodAeFe8sXxQM/l9Q1UAuut5Zf3L7GUHsguvkS8/RpvzvxG1nouqSfb7IvEgvFAVgKJusF64b88PIrflvEPx3vcXvH+ZeY5nLzvwmvly43Q+9ytR4WJI7frwbNXORSlVAWjOvOw+CG/LDy+EYuWf//7bugOedXVZMnuv2a91nF7L3aXz2dtlyl/lpfVw8n0+q0KLAhDeEpcmwBrvum+Nr2SvVA+68rk1j/0fCCh/LSSZtcxcZu/F/fK3aXN2JAqyV0IqDuiDe5kQtM/QIpxR+QRqI0zLefiY8TbJrRRJTFnrEQcJtc5d/zJLmWn2akgyY5m1NxdfcZTaM8Ph48xlTj7k04qDOoA9vmEsIYcln3hD+MbuQ7PP5443rWKvX5mlzDQzHD2WGXtz+WVv0JLcxfBM5lzgpwdLlDnqU6Gbl7e3xAUEDcoH4RHf7YPw1nytHFPCKx2Kkc9Rv1syK5kZz65E6UEmz1Jm2sWz9ebry5ylZZnBYDTdP0Op3hlKd09Tevc0ZbdNU2H7DBV3lGjF56yd0nQzkiUFhrV+oc/bF7Zb6bgvvcsMCjtY26uzyfCMUt2sXp7XkRJlBkujmUu0zFuoL3e0tDxzsNST3j/zICXFfDJJLZtYH0xQy/qn1LKB9d4EpTbynz9iciy9dZLPMXdMUXoXaw9r3xRlDnBDfaz+GcoMzFD2eImyQyXKnfEpd571NeuST/krAeWHAyp8F1JhJKT898wbrFsRi/lTxAqpeC+i4l3WHZHE9MxN1g/sR1mcI389oNxlzntJ3zjH757md4eYx7mOAeYRrukQ19bD2j9dqTmzi8k9SC+pLaxNLO6xZSP3/K72zjNIfcg/38wzkXO7JUfpgcxMZue9yq+4b2pp5tOZLS1bJq9ykf+m1k/8l9rw9EnL+5ORNJH6WJqaqDSX/oyXtL26sMxeHUTvNGX7ZnhhuqyTZmFMHmJloJdZ1/zKwvLfBrIwWYAsQxejS7pfZgmrvqCLK5jF3eRFjVRyVHNdY11hXQp4YX71zSGpoVIL18T1cW1SY7pHFsbaOcULY23jpW3VhXGPLfzLKT2n3nn65HWegcyCf4mvymxkRnMx6/8BDot74jfDUBUAAAAASUVORK5CYII=);
      background-size: 100% 100%;
      color: #fff;
    }
  }

  .gameContent {
    flex: 1 1;
    margin-left: 0.625rem;
    min-height: 100%;
    position: relative;
    .gamelist {
      height: 100%;
      overflow: hidden;
      position: absolute;
      left: 0;
      width: 100%;
      .inner_box_hash {
        flex-wrap: wrap;
        width: 100%;
        max-height: 100%;
        display: flex;
        position: absolute;
        left: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        >div {
          width: 100%;
          min-height: 6.875rem;
          background-size: 100% 100%;
        }

        .game_1 {
          background-image: url(../../assets/images/otherGame/HASH_COMB_0.png);
        }

        .game_2 {
          background-image: url(../../assets/images/otherGame/HASH_BJL_0.png);
        }

        .game_3 {
          background-image: url(../../assets/images/otherGame/CHAMPION_0.png);
        }

        .game_4 {
          background-image: url(../../assets/images/otherGame/LUCKY_HASH_0.png);
        }

        .game_5 {
          background-image: url(../../assets/images/otherGame/HASH_NIUNIU_0.png);
        }

        .game_6 {
          background-image: url(../../assets/images/otherGame/ag_live_0.png);
        }

        .game_7 {
          background-image: url(../../assets/images/otherGame/IM_sports_0.png);
        }

      }
    }
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

      .name {
        text-align: left;
        font-size: .9375rem;
      }

      .balance {
        color: #e82300;
        font-size: 1.25rem;
        margin-top: 0.3125rem;
        img {
          width: 0.8125rem;
          margin-left: 0.5rem;
        }
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
