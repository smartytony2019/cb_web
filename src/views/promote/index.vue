<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 推广
-->
<template>

  <div class="wrapper promote">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" />
          <div class="flex-center-center title">推广</div>
          <div class="flex-right" />
        </div>

        <div class="view">
          <div class="banner">
            <img src="https://designer-trip.com/image/daili_banner_0.png" class="img-icon">
          </div>

          <van-tabs swipeable>
            <van-tab v-for="(item,index) in tabs" :key="index+''">
              <!--自定义标题（#title必不可少）-->
              <template #title>
                <span class="van-tab__text">{{ item.name }}</span>
              </template>

              <!-- 我的推广 -->
              <template v-if="index == 0">
                <My />
              </template>

              <!-- 直属查询 -->
              <template v-if="index == 1">
                <Direct />
              </template>

              <!-- 团队业绩 -->
              <template v-if="index == 2">
                <Team />
              </template>

              <!-- 推广教程 -->
              <template v-if="index == 3">
                <Tutorial />
              </template>

              <!-- 代理返佣表 -->
              <template v-if="index == 4">
                <div class="promoteForm">
                  <div class="table-box">
                    <div class="title">代理返佣表</div>
                  </div>

                  <div class="table-content">
                    <div class="content-item">
                      <div class="line">代理级别</div>
                      <div class="line">团队业绩/日</div>
                      <div class="line">返佣额度</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>

                    <div class="content-item">
                      <div class="line">1</div>
                      <div class="line">0-2000</div>
                      <div class="line">50/万</div>
                    </div>
                  </div>
                </div>
              </template>

            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <van-calendar v-model="isShowCalendar" color="#1989fa" :min-date="minDate" :max-date="maxDate" />
    <Nav />
  </div>
</template>
<script>
import dayjs from 'dayjs'
import Nav from '@/components/Nav'
import My from './components/my'
import Direct from './components/direct'
import Team from './components/team'
import Tutorial from './components/tutorial'
export default {
  name: 'Promote',
  components: { Nav, My, Direct, Team, Tutorial },
  data() {
    return {
      minDate: new Date(dayjs().year(), dayjs().month(), 1),
      maxDate: new Date(dayjs().year(), dayjs().month(), 1),
      isLoadingRefresh: false,
      finished: true,
      isShowCalendar: false, // 是否显示日历
      tabs: [
        {
          name: '我的推广'
        },
        {
          name: '直属查询'
        },
        {
          name: '团队业绩'
        },
        {
          name: '推广教程'
        },
        {
          name: '代理返佣表'
        }
      ]
    }
  },
  created() {
    console.log(dayjs().add(7, 'day'))
    console.log(new Date(2022, 9, 1))
    this.$store.dispatch('app/setNavIndex', 2)
    console.log('Promote created')
  },
  methods: {
    handleDateSelect() {
      this.isShowCalendar = !this.isShowCalendar
    },
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
.page {
  background: #e5e5e5;
}

.btn-apply {
  color: white;
  background: linear-gradient(187.43deg, rgb(255, 174, 80) 5.93%, rgb(234, 105, 32) 94.39%);
  border: 0px;
  height: 3.125rem;
  span {
    font-size: 1.125rem;
  }
}

.view {
  .banner {
    height: 9.625rem;
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
}

.partner-content {
  padding-bottom: 0.625rem;
  background: #e9ecf1;
  .part1 {
    padding: 0.625rem;
    background: #fff;
    box-shadow: 0.1875rem 0.1875rem 0.1875rem hsl(0deg 0% 61% / 25%);
    margin-bottom: 0.625rem;
    .code {
      width: 7rem;
      height: 7rem;
      border: 0.0625rem solid #333;
      img {
        width: 100%;
      }
    }

    .part-right {
      text-align: left;
      .mb {
        margin-bottom: 0.3125rem;
      }

      .mb2 {
        margin-top: 0.625rem;
      }

      .input {
        width: 12.25rem;
        height: 1.75rem;
        border-radius: 0.3125rem;
        background: #e7e7e7;
        margin-right: 0.625rem;
        line-height: 1.75rem;
        padding-left: 0.625rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
        font-size: .875rem;
      }

      button {
        text-align: center;
        width: 3rem;
        height: 1.75rem;
        border: none;
        border-radius: 0.3125rem;
        background: linear-gradient(40.64deg,#fb9d37 23.09%,#fccf3f 76.91%);
        color: #fff;
      }
    }

    .text1 {
      color: #60768a;
      font-size: 1rem;
      width: 100%;
      padding-bottom: 0.625rem;
      border-bottom: 0.125rem solid #f0f6ff;
    }

    .wrap {
      flex-wrap: wrap;
      .listContent {
        width: 33.3%;
        margin: 0.625rem 0;
        font-size: .875rem;
        >div {
          &:first-child {
            width: 3.125rem;
            height: 3.125rem;
          }
        }
      }
    }

    .mar {
      margin: 0.625rem 0;
      text-align: center;
    }

    .xijiinput {
      width: 100%;
      background: #fff;
      border: 0.0625rem solid #f5fcff;
      box-sizing: border-box;
      height: 3rem;
      padding-left: 0.625rem;
      border-radius: 0.3125rem;
      color: #333;
      font-size: .875rem;
      box-shadow: inset -0.25rem -0.25rem 0.25rem rgb(161 158 158 / 25%), inset 0.25rem 0.25rem 0.25rem rgb(162 158 158 / 25%);
    }

    .m1 {
      width: 45%;
      border: 0.0625rem solid #98c1fe;
      border-radius: 0.3125rem;
      padding: 0.625rem;
      font-size: .875rem;
      >div{
        &:first-child {
          width: 3.125rem;
          height: 3.125rem;
        }
      }
    }
  }
}

.tableContent {
  padding: 0.3125rem;
  margin: 0.3125rem;
  .date {
    width: 12.5rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 1.875rem;
    margin-left: 0.3125rem;
    border-radius: 0.9375rem;
    padding: 0 0.625rem;
    margin-bottom: 0.3125rem;
    img {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.3125rem;
    }
  }

  .dataList {
    display: flex;
    flex-wrap: wrap;
    .listContent {
      width: calc(50% - 0.625rem);
      padding: 0.625rem;
      background-color: #fff;
      margin: 0.3125rem;
      border-radius: 0.625rem;
      height: 10.6875rem;
      .mar {
        margin-bottom: 1.25rem;
        text-align: center;
      }
      img {
        width: 4.375rem;
        height: 4.375rem;
      }
      >div {
        &:last-child {
          margin-top: 0.625rem;
        }
      }
    }
  }
}

.promoteLesson {

  .pic-box {
    box-sizing: border-box;
    padding: 1rem;
    background: #fdfdfd;
    .detail {
      margin: 0.625rem 0;
      width: 100%;
      min-height: 25.9375rem;
      img {
        width:100%;
      }
    }
  }

  .item-box {
    box-sizing: border-box;
    padding: 1rem;
    background: #fdfdfd;
    margin: 0.625rem 0;
    font-size: 1rem;
    .intro {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 3.5rem;
      border-bottom: 0.0625rem solid #e1e1e1;
      color: #60768a;
      &:before {
        content: "";
        position: absolute;
        width: 1rem;
        height: 1rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR6SURBVHgBvZbPiyNFFMdfJe1hQTCyM4K3+Bc4/gW7OXjw5oAnETY5CIKHScAfjCCTuSjIQmZO7sVJRmRZZMXx5EkS/4P8B8aT4A82/sCd6a56b997VdWp7kx2lj1sQU1313S9b33er46BDWM8pR0CeFXunYVf333dzOAJRn/8oGXPYcdaC2Dt4s7g5cVl75n6wunPtEcEBzxbSGAQAfhe5sI6OHz/DTO5zNCnd4sbeV4Mc2tvFgWC443W8UZj5s7i8clga7JR+OsZjVnnlkNeJyAV5qsIh3s5wIyJdge7Zil7hmNqwbViVCDeynNn8sJBYVmYjSBv8HtIpI5O+tcHUasRbyZTGvEBVVQo5bAOdZow4/NNymAa9zWfxykb76Ij3SdC4A8YRPVROPrd0V+jCvFXP1HXGDiJrkV5Ef2GaEzvxQt6CH4RzPCcyVjwILdoCk9KTGyEVid5twEEcfG8o87kw+1ZposG9sRgOCGVsY3CUMY5UBgqHA75Rb4SixCwJscUjXcvJbQaNW+Mh2uaA77MzJc/UruZwS/ReEkYREoD4UBCy+8QCxkW4sQlJvVxtTod+Hcw7KOSNpI7arYzeg5uOFd1r8O1GFH0iIpyPJXQKiVPIHatrnla8vtDPFNRjS/Z3YwsvJbEsCSjkFzB3UaNaXKlonEGUUS/J2ZzcDEF1ShMxrQz9k4rPgciEwihTDZPTyLq4+kJ1b18IrnnJNPyEdeukdaI+YUXMn0XtdChThndLTHT8rI+idStnLLict8oUGk1sZBWhKXSunjGCbEEn3ksZMq6i/EUSjFmvZt9Amm5CL3TqxeEQBxdbFaCZuVu71r4u2ERf/BxCobZgE5eK9ATSslYqVUfV1J3s6i841JSWtUrAq1iWmkkepBZdgHZvIluyQutstY0tkrB9S7x9KXDBxP3ctNQUm0SElMXs1JLx1TKp5JUPrMW9z6+ftYYcs9loiPvQqUkzVi2uSINNSpdyVoj/4+92CUJpaKhlEpSSKau46n81V7d+D87ZpFFLs2gYCFtDKiURYhpOW0sm1ivVDYKpKp702TSZ6XdHpbCwx5T567H4iRCHEu9cg+W1kg2ECslYUmZilYoa/dxGsJeOMfq63S7d23GH+/j3Lc9Ez9tcq8NP1C6kEjxk4dJS1wTTNeJDu/tb8+i3toPgffu/Ddml3RD2yOU5kBYNof1/ktr9Vp3Ny+cfru/1U11GnXh84fFwDrLvxo4c4U2KZe0D6eu9rZryVTSm3l+8W+/rrNGLKM7etDiTjZlwzvROAZLqVgUrJBW6M28uPinczZ8ZVnXaFwmPBm8uORdHaY8Q0wpq9maxpDCQkJ+tkl0I3E63rn95xF3zb1IC1B3ZUror1zTx9/tb/UfZ7cBV4xvPtjqc90e0obsTUX9/2lwlaiMK4njePuL33eQmt+zfPsySja14KD07icl87hxJXEcdz96aQ6Yd/hDfZqKhtDOCsg7Tyqqx4SnGG999kefs/7Af+/w8P4n20fwrMabn//WlglPOR4BHv8U09KIOioAAAAASUVORK5CYII=) no-repeat 100% 100%;
        background-size: 100% 100%;
        display: inline-block;
        margin-right: 0.625rem;
      }
      span {
        color: #60768a;
        margin-left: 1.25rem;
      }
    }

    .content {
      line-height: 1.375rem;
      margin-top: 0.625rem;
      color: #60768a;
    }
  }

}

.promoteForm {
  .table-box {
    box-sizing: border-box;
    background: #fdfdfd;
    .title {
      padding-left: 1rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 3.5rem;
      border-bottom: 0.0625rem solid #eff0f1;
      color: #60768a;
      font-size: 1rem;
    }
  }

  .table-content {
    background: #fdfdfd;
    .content-item {
      display: flex;
      height: 2.8125rem;
      justify-content: center;
      align-items: center;
      border-bottom: 0.0625rem solid #eff0f1;
      .line {
        width: 30%;
        text-align: center;
      }
    }
  }
}
</style>
