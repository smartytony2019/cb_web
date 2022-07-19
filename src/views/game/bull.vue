<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 哈希两面
-->
<template>
  <div class="wrapper">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="view">
          <div class="contentHeader">
            <div class="head flex-between-center">
              <div class="flex-center-center" @click="$router.go(-1)">
                <i class="iconfont icon-fanhui2" />
                <span>幸运哈希 体验房</span>
              </div>

              <div class="icon-drop" @click="isShowDrop = !isShowDrop">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgB7dZBDYUwEATQ2W/gIwUHWMAJSCiKCA7qACTgAFBQdiBY6Fz2JW16a7NtZmullARg8NGgvsn8AAU658+nDJ2dFWDpO2iuYEEIQc04eRa0EOSAmWUG0ezrHhpZ3QvAXpCgk743wPv/o67L38CJEILa9ydURDEzYOMBVl+00Hh6wQHNj/jBXjDhLUdt3HO8AYZ7MoUEz+JsAAAAAElFTkSuQmCC">
              </div>
              <GameHeadDrop :show="isShowDrop" @close="isShowDrop = false" />
            </div>

            <div>
              <div class="en_name">Block Hash</div>
              <div class="orderShow bjl_group">
                <div>
                  <span>等待开奖中...</span>
                </div>
              </div>
            </div>

            <div class="Hash_game_banner Hash_bjl_banner">
              <div class="bannerContent">
                <div class="bannerTitle">幸运哈希 体验房</div>
                <div class="bannerText">赔率:1.98</div>
                <div class="bannerText">限注：0USDT-200USDT</div>
              </div>
            </div>

            <div class="gameContent">
              <div class="game_name_box">
                <div class="game_name_list">
                  <div class="name_list_item active"> 体验房 </div>
                  <div class="name_list_item"> 体验房 </div>
                  <div class="name_list_item"> 体验房 </div>
                  <div class="name_list_item"> 体验房 </div>
                </div>
              </div>
              <div class="flex-between-center new_win">
                <div />
                <div>
                  游戏说明
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGuSURBVHgBrVaLcYMwDBW9DOAN6hHYIHSCjtB0ArIB6QRtJ3A7QboB6QRkA9iAbqBKiTgUYmRyl3enM8iS0M8yAAYQ0RHtiGqiFkf0wiuJvGUjmzHsaQlEhbD+iA6yMrwixhfRW5ZlHaRAxrfiISMQrQ3ZXGSGqLYp4zsR5nTksBAcsUrhDgzPGQ3nPrLvxFA+o+9EF68iEcVevHARxaDShip9PiLbiqzXG0GUvBH6EF2t3mMO5bJXayMnjyJhB1XAdSRiRmXouQd6fxb+J1xjaM8PasHfgSnt+COvRUTvW9YSJOQWboDKNWM/I3M6jOPDbcYbVQc/I7dnJ1b0zEXqlhqnpYHxBG+M08vp9Su4De9inJWfyPgxqSG53C+Qcyot5QJ5rm3PEXQQ74QpdCrTnp8jPfKXKvGqgDtBHbZShx4WKDqMzKmIXLjoMByPf57wqk9FG50MaAw7JVOoIr/AfIQtToedbJrjWjnyaBhvzC5TBW8xcddO9HIcR0eVEp5emVZdCrycuFeeW5c+e7IRVqeIwSksZGUciF4XXfrTD+H516TGyxutFV6Fibb9B6S0vMRZ5cBCAAAAAElFTkSuQmCC">
                </div>
              </div>
            </div>

          </div>

          <div class="gameContainer">
            <div class="orderFlex flex-between-center">
              <div class="flex-between-center">
                <div class="itemImg itemImgOrange flex-center-center activePlayItem">庄</div>
                <div class="boxs flex-center-center" />
                <div class="boxs flex-center-center">...</div>
              </div>

              <div class="flex-between-center">
                <div class="itemImg itemImgGreen flex-column-center activePlayItem">闲</div>
                <div class="boxs flex-center-center" />
                <div class="boxs flex-center-center blue">...</div>
              </div>
            </div>

            <div class="playContent flex-between-center">
              <!-- 左边区域 - start -->
              <div class="niuniu">
                <div class="l_bet l_top flex-column-center activePlayItem">
                  <div class="bigSize">
                    庄<span>(平倍)</span>
                  </div>
                  <div class="smallSize">
                    1:0.95
                  </div>
                </div>

                <div class="l_bet r_bottom flex-column-center activePlayItem">
                  <div class="bigSize">
                    闲<span>(平倍)</span>
                  </div>
                  <div class="smallSize">
                    1:0.95
                  </div>
                </div>
              </div>
              <!-- 左边区域 - end -->

              <!-- 中间区域 - start -->
              <div class="middle bull">
                <div class="threeBox flex-column-center red activePlayItem">
                  <div>庄<span>(超级翻倍)</span></div>
                  <div>1:0.95</div>
                </div>
                <div class="threeBox flex-column-center activePlayItem">
                  <div>和局</div>
                  <div>9.5</div>
                </div>
                <div class="threeBox flex-column-center blue activePlayItem">
                  <div>闲<span>(超级翻倍)</span></div>
                  <div>1:0.95</div>
                </div>
              </div>
              <!-- 中间区域 - end -->

              <!-- 右边区域 - start -->
              <div class="niuniu">
                <div class="r_bet r_top flex-column-center activePlayItem">
                  <div class="bigSize">
                    庄<span>(翻倍)</span>
                  </div>
                  <div class="smallSize">1:0.95</div>
                </div>

                <div class="r_bet flex-column-center activePlayItem">
                  <div class="bigSize">闲<span>(翻倍)</span></div>
                  <div class="smallSize">1:0.95</div>
                </div>
              </div>
              <!-- 右边区域 - end -->
            </div>
          </div>
        </div>

        <!-- 投注 -->
        <Betting />
      </div>
    </div>
  </div>
</template>

<script>

import GameHeadDrop from '@/components/GameHeadDrop'
import Betting from '@/components/Betting'

export default {
  name: 'Bull',
  components: { GameHeadDrop, Betting },
  metaInfo: {
    title: '页面标题',
    meta: [
      { name: 'viewport', content: '页width=device-width,initial-scale=1面描述' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ]
  },
  data() {
    return {
      isShowDrop: false
    }
  },
  created() {
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

.bjl_group {
    background-image: url(https://designer-trip.com/image/game/group.bjl.png);
}
.itemImgOrange {
    background-image: url(https://designer-trip.com/image/game/orange.png);
}
.itemImgGreen {
    background-image: url(https://designer-trip.com/image/game/green.png);
}

.page {
  color: #fff;
}

.view {
  .contentHeader {
    width: 100%;
    background-color: #385bb1;
    padding: 0 1.25rem 0.625rem 1.25rem;
    .head {
      height: 2.5rem;
      width: 100%;
      font-size: 1.0625rem;
      i {
        font-size: 1.25rem;
        margin-right: 0.3125rem;
      }
      img{
        width: 1rem;
        height: 0.8125rem;
      }

      .icon-drop {
        position: absolute;
        right: 0.8rem;
      }
    }
  }

  .en_name {
    font-size: 1rem;
  }
  .orderShow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.625rem auto 0.625rem;
    background-size: cover;
    border-radius: 0.5625rem;
    padding: 0.5rem 0.3125rem;
    font-size: 1.125rem;
    height: 2.5rem;
    text-align: center;
    box-shadow: 0 0.375rem 0.3125rem -0.3125rem #2e2e2e;
  }
  .bjl_group {
    background-image: url(https://designer-trip.com/image/game/group.bjl.png);
    >div {
      text-align: center;
      width: 100%;
    }
  }

  .Hash_game_banner {
    height: 8.375rem;
    background-size: 100% 100%;
    border-radius: 0.625rem;
  }
  .Hash_bjl_banner {
    background-image: url(https://designer-trip.com/image/game/banner.bjl.png);
    .bannerContent {
      padding: 2.5rem 1.25rem;
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
    .game_name_box {
      min-height: 1.9375rem;
    }

    .game_name_list {
      display: flex;
      justify-content: space-around;
      margin: 1rem 0;
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

  .gameContainer {
    background-color: #4430ba;
    border-radius: 0 0 4.375rem 4.375rem;
    width: 100%;
    padding: 0.625rem 1.375rem;
    box-shadow: 0 0.25rem 0.25rem rgb(0 0 0 / 10%);
    .orderFlex {
      margin: 0.4375rem 0;
      >div {
        font-size: 1rem;
        font-weight: 700;
        min-width: 40%;
      }
      .itemImg {
        width: 2.5rem;
        height: 2.5rem;
      }

      .boxs {
        min-width: 3.875rem;
        padding: 0 0.3125rem;
        height: 2.1875rem;
        margin-left: 0.3125rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABACAYAAAAtWJjYAAACe0lEQVR4nO3dMY7aQBTG8WeMWZBiA4kioeQCKdLQBqw0FMjQIToKKjgFFRegpeAWli8A5AQpcgATIUWBDYmEw8A6es442hvEfnx/yRg6ND/NyDQ8g561XC6t+Xz+7ng8vo2iqHK73QpEFBP63xmmaT6Vy+VzvV7fzWazL9PpVPF3iuOYDP3G8DzP3m63H06n05WIfhHRbyJ6Al9m4g31QEQvHMcptlqtT0EQ/GS+BDEIgofRaPTxcDiciOiRiCINCMTsVNBXmYhq1WrVXiwW6/F4HBlxHJuu677fbDYVIvpGRBccoZmON16JiF632+3zer3+zLLWbrdz9A4EYPaLtdOjdisl52wYhkofoQDMR+wUhWF4SRGLSikGvN37yuSsm1KKHz6LBX3GxtiFuSs1M1JElN8SRJTzgCggIAoIiAICooCAKCAgCgiIAgKigIAoICAKCIgCAqKAgCggIAoIiAICooCAKCAgCgiIAgKigIAoICAKCIgCAqKAgCggIAoIiAICooCAKCAgCgiIAgKigIAoICAKCIgCAqKAgCggIAoIiAICooCAKCAgCgiIAgKigIAoICAKKJl7YVnWva9DLqvVaskfDieIruua+PPa3FVoNptminj1PI8/mPe+Kjmr0Ov1Ej9+uUwmkx/dbtfBbsxNRqfTsdmN/RJE27a/85yo4XBoAzLzGYPBwFmtViV2Y790VhQ/2bxSSr0JgsDyff/k+/55v99f733FslKj0Sj2+/1Kv993PM9TlmV9JSJGVP8GfvF8BSLiI/WlvpfxEyRTPekBNDzP66Dv12TgF49ue5ap5xCVNKqB4zUTpTMwGI2n0vD1dxgNEf0BGB21BbhfeeQAAAAASUVORK5CYII=) no-repeat;
        background-size: 100% 100%;
        text-align: center;
      }
    }

    .playContent {
      width: 100%;
      justify-content: center;
      .l_bet, .r_bet {
        width: 6.125rem;
        height: 5.75rem;
        font-size: 1.875rem;
        color: #fc3939;
        background: url(data:image/png;base64,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);
        background-size: 100% 100%;
        font-weight: 700;
        >div {
          text-align: center;
        }
      }
      .l_bet {
        &.activePlayItem {
          background: url(data:image/png;base64,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) no-repeat;
          background-size: 100% 100%
        }
      }
      .bigSize {
        /* margin-top: 0.9375rem; */
      }
      .l_top {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAC6CAYAAADxjuLaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNi0wNVQxMTozMjo0OCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDYtMDVUMTE6MzM6NDErMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDYtMDVUMTE6MzM6NDErMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YzRiMTI2YWUtNjFjZS0yYjRj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);
        background-size: 100% 100%;
        &.activePlayItem {
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAC4CAYAAACxWDOWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNi0wNVQxMTozMjo0OCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDYtMDVUMTE6MzM6MzQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDYtMDVUMTE6MzM6MzQrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MWQxZmY3YWUtMWRiNy04YzQ5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");
          background-size: 100% 100%
        }
      }
      .r_bet {
        background: url(data:image/png;base64,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);
        background-size: 100% 100%;
        color: #4080ff;
        &.activePlayItem {
          background: url(data:image/png;base64,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) no-repeat;
          background-size: 100% 100%
        }
      }
      .r_top {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAC6CAYAAADxjuLaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF3WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNi0wNVQxMTozMjo0OCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDYtMDVUMTc6MTY6NTUrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDYtMDVUMTc6MTY6NTUrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YTJhZjI3NDMtOGU5NS0yNDQ0LTlhNmMtODk5ZWE5YmMyNGFjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmM0YjEyNmFlLTYxY2UtMmI0Yy1iY2MwLWU3ZmU3YmVlMTQ3MiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmM0YjEyNmFlLTYxY2UtMmI0Yy1iY2MwLWU3ZmU3YmVlMTQ3MiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzRiMTI2YWUtNjFjZS0yYjRjLWJjYzAtZTdmZTdiZWUxNDcyIiBzdEV2dDp3aGVuPSIyMDIyLTA2LTA1VDExOjMyOjQ4KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMmFmMjc0My04ZTk1LTI0NDQtOWE2Yy04OTllYTliYzI0YWMiIHN0RXZ0OndoZW49IjIwMjItMDYtMDVUMTc6MTY6NTUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7rCEswAAC7FJREFUeJzt3X9o1PUDx/HX+37s7tztbjd3m6f7USZmIEFb5I9IKyNUbERgNCkMlELEhDD7gUEUQSAVC4nQ9YNBYYUaacpia1Q0wj8mhax919w355butrXb7Xa/P/f+/vG5fX1jOufcvB+f1wM+ePhjfv64594/Pp/7TEgpoTADKEgfFgAifdDUZPpQX6eueJ0CoCmvU7f+NOl6LOlfRfq1C0BJ+lc7AFOGzivXSFz7za8BSKaPhHJoVxzJyddCCAnKCJEeIawA5icSiYUnT560njhxInjixInIpUuXkhk+v5zgcDhE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);
        background-size: 100% 100%;
        color: #fc3939;
        &.activePlayItem {
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAC4CAYAAACxWDOWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF3WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNi0wNVQxMTozMjo0OCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDYtMDVUMTc6MTc6MDMrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDYtMDVUMTc6MTc6MDMrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWQxNzI1NjItNzhiYS1lNzQ2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");
          background-size: 100% 100%
        }
      }

      .r_bottom {
        color: #4080ff;
      }

      .middle {
        width: 44%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 0.1875rem;
        .threeBox {
          height: 2.9375rem;
          margin-top: 0.3125rem;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAABWCAYAAADboOrOAAAC/klEQVR4nO3ZMU4bQRiG4X+9XmOk7GISRULJBVKkoQ1YaSjQ4g7RUVD5FlRcgNYFt7D2AoacIEUOYEdIUUziRGLjwUw0q7XEATD+iveRxqOtthi9ml/ryJ4YDAbJxcXFh7u7u/dlWW4uFouGmXkD8NyiOI4f2+32/fb29uT8/Pxbv993y3dUYXrvozzP05ubm0+z2ezBzP6a2T8ze+Q4gJUJF9+Gmb3Ksqy5t7f3pSiKPyHJKsyiKDZOT08/T6fTmZn9MrOyjpIwgdVp1KttZp2tra308vJydHZ2Vkbe+7jb7X68vr7eNLMfZjZnfAVeVLggW2b2dn9//340Gn0NtSaTySSrb0qiBF6er9v7VbfYqmbc8Xjs6vGVKIH1CO2V4/F4vgyz6ZwLUS44EGCtFs658NG12ajnW89tCazdssNoGSYAHVWYAMQQJiCIMAFBhAkIIkxAEGECgggTEESYgCDCBAQRJiCIMAFBhAkIIkxAEGECgggTEESYgCDCBAQRJiCIMAFBhAkIIkxAEGECgggTEESYgCDCBAQRJiCIMAFBhAkIIkxAEGECgggTEESYgCDCBAQRJiCIMAFBhAkIIkxAEGECgggTEESYgCDCBAQRJiCIMAFBhAkIIkxAEGECgggTEESYgCDCBAQRJiCIMAFBhAkIIkxAEGECgggTEESYgCDCBAQRJiCIMAFBhAkIIkxAEGECgggTEESYgCDCBAQRJiCIMAFBhAkIIkxAUAjTJ0nC2QACOp1OFJqswux2u7GZRRwMsFaN3d3deBnmQ57n4SHmTIC1ahwdHVVNhp95v9//fXh4mHFrAmsTHRwcpKHF0GQVZpqmPweDQXJycpISJ/DiouPj4+zq6qoVWgxNVhF678PXnzfOuXdFUSTD4XA2HA7vb29vHzgjYDV2dnaavV5vs9frZXmeuyRJvptZCNMtwwx708zCOPu63tv8nQKs1KOZlWY2M7NpvYfL0Efe+6cvDh+AWvVq1mMtoy3w/EJ4YYUQ5/VaVK8xs/8xtbIx7n7EEAAAAABJRU5ErkJggg==) no-repeat;
          background-size: 100% 100%;
          width: 100%;
          color: #23a71d;
          font-weight: 700;
          >div {
            &:first-child {
              margin: 0.3125rem 0;
              font-size: 1.125rem!important;
            }
            &:last-child {
              font-weight: 500;
            }
          }

          &.threeBox.activePlayItem {
            background: url(data:image/png;base64,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) no-repeat;
            background-size: 100% 100%
          }
        }
      }

      .bull {
        .red {
          color: #fc3939!important;
        }
        .blue {
          color: #4080ff!important;
        }
        .threeBox {
          height: 3.6875rem;
          margin-top: 0;
          >div {
            text-align: center;
            &:first-child {
              font-size: 1.125rem!important;
            }
          }
          &:nth-of-type(2) {
            margin: 0.125rem 0;
          }
          span {
            color: #fff;
            font-size: .8125rem;
          }
        }
      }

      .niuniu {
        .bigSize {
          font-size: 1.25rem;
          span {
            font-size: .8125rem;
            color: #fff;
          }
        }
        .smallSize {
          margin-top: 0.3125rem;
          font-size: 1rem;
          font-weight: 400;
        }
      }
    }
  }
}

</style>
