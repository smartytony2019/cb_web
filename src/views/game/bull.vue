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

              <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgB7dZBDYUwEATQ2W/gIwUHWMAJSCiKCA7qACTgAFBQdiBY6Fz2JW16a7NtZmullARg8NGgvsn8AAU658+nDJ2dFWDpO2iuYEEIQc04eRa0EOSAmWUG0ezrHhpZ3QvAXpCgk743wPv/o67L38CJEILa9ydURDEzYOMBVl+00Hh6wQHNj/jBXjDhLUdt3HO8AYZ7MoUEz+JsAAAAAElFTkSuQmCC">
              </div>

              <div class="rightUp" style="display:none;">
                <div class="rightBox">
                  <img data-v-6422cdcc="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOwSURBVHgBvVa7b1NnFD/n+iY0A5U9VB256dwhYqjUKdcbA63dqt0qxSxMRSRSxRqiKk1BlWKKGBCCgMSesCNxwwCIhYh/wGZiQMJGPEzyPQ6/c69t/AjgwfZPvtf+Hj6/77w/ImB5SyKaMgIldSK1M1uyTVNEaC1FjkgCljxNEYEFs3hh60loigitvkWEQE5jxJnrsomvUi6g49VT3BxcD/TlHbF4Giuc9xXrZb5l/NJh6zB1uomwicaF01dt2TrKW+ehlJQ/Q6zP+Ighs2Qg1DmBQrRYudyKh4ixLSV1YzS1sT62IDVWEmiNwA0Xh4gzjRFbY2L+Y9MoaYSnLt6tWatK+eVhYry8mvozlv794psFGhEHXko2M3Fye2UugT57IM//ttFv7jSqEVjyKYV/3WhVrOSelC+836QRANPGKg/fN9Ox0I6OUSbO9hGrqRF5jEA4VGfjaSnVwPqzJ/9+HXfmyxut6Kd/3tVOrr893zsH/y5g/6vtc3O7OufD2UtqbnzieLWR7yPOgssNFZAyNuLki0qMPewk2NI/nwDBvpV76kvnaPXEanag98bFmkKYTzoydla4CY5dBFr+SHikm9OoXMocCHEwpPFbmim3nf+EmAooqtEMz276fR+j2EXM1ISd8hwEN3Cg4+Bc0sILUTv9VnNrOeZIgpnugULl9YzKJX5IY2hZUjnCfCm08gw2uYdRRdeYue7JFNmF2+xlgSXctiyxrsGwu71y7q4dVcL53rk0qrVy+UPCGiaL4VuifbN7d/1ogjCo6hhP3e+bYrJWqIuxv2BfE89itiaJztMX8DGPB3h/PNcoo/rkEZFJciETdH/96xUn/pTxvtiZ029jka/a4VyaTjs0AtLuxNoSWQa0DUqMOZi5T9CDfws3B4U8vFio/vBXYwHO/Tk48HdoBARaWDVi0aH6ib2Ptd4aM5qgx/8VKgfm5XePql82syLVWOA87rkHfP9nA76VY4javaf/jyZIsVedb466N41qR/2XAC9+CaUGsU4JTQhhVqslZelAo1kvJTjBLZoQQo1EGFrg7a6tDToLWKl27ds9mhBCvewx55j8R5Vr174p0oQR6kvzWKZ7yWz7WDsT08g9dxzgaLmRD1u2kQ2DBvrQq4Bz6nhdJuq1xMBwaL53vTPuhXZlRreaC4vpUnT6xSoi+HzaD7rC9Ccrv+Y4S9or2une2YTpbCjtpOD0is7dw2g5bP83Tdnspxg33+WJKs8jmvnqGE0YPEv12pXCsw9NCG+blSMckwAAAABJRU5ErkJggg==">
                  <p class="van-hairline--bottom"> 走势图</p>
                </div>
                <div class="rightBox">
                  <img data-v-6422cdcc="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOwSURBVHgBvVa7b1NnFD/n+iY0A5U9VB256dwhYqjUKdcbA63dqt0qxSxMRSRSxRqiKk1BlWKKGBCCgMSesCNxwwCIhYh/wGZiQMJGPEzyPQ6/c69t/AjgwfZPvtf+Hj6/77w/ImB5SyKaMgIldSK1M1uyTVNEaC1FjkgCljxNEYEFs3hh60loigitvkWEQE5jxJnrsomvUi6g49VT3BxcD/TlHbF4Giuc9xXrZb5l/NJh6zB1uomwicaF01dt2TrKW+ehlJQ/Q6zP+Ighs2Qg1DmBQrRYudyKh4ixLSV1YzS1sT62IDVWEmiNwA0Xh4gzjRFbY2L+Y9MoaYSnLt6tWatK+eVhYry8mvozlv794psFGhEHXko2M3Fye2UugT57IM//ttFv7jSqEVjyKYV/3WhVrOSelC+836QRANPGKg/fN9Ox0I6OUSbO9hGrqRF5jEA4VGfjaSnVwPqzJ/9+HXfmyxut6Kd/3tVOrr893zsH/y5g/6vtc3O7OufD2UtqbnzieLWR7yPOgssNFZAyNuLki0qMPewk2NI/nwDBvpV76kvnaPXEanag98bFmkKYTzoydla4CY5dBFr+SHikm9OoXMocCHEwpPFbmim3nf+EmAooqtEMz276fR+j2EXM1ISd8hwEN3Cg4+Bc0sILUTv9VnNrOeZIgpnugULl9YzKJX5IY2hZUjnCfCm08gw2uYdRRdeYue7JFNmF2+xlgSXctiyxrsGwu71y7q4dVcL53rk0qrVy+UPCGiaL4VuifbN7d/1ogjCo6hhP3e+bYrJWqIuxv2BfE89itiaJztMX8DGPB3h/PNcoo/rkEZFJciETdH/96xUn/pTxvtiZ029jka/a4VyaTjs0AtLuxNoSWQa0DUqMOZi5T9CDfws3B4U8vFio/vBXYwHO/Tk48HdoBARaWDVi0aH6ib2Ptd4aM5qgx/8VKgfm5XePql82syLVWOA87rkHfP9nA76VY4javaf/jyZIsVedb466N41qR/2XAC9+CaUGsU4JTQhhVqslZelAo1kvJTjBLZoQQo1EGFrg7a6tDToLWKl27ds9mhBCvewx55j8R5Vr174p0oQR6kvzWKZ7yWz7WDsT08g9dxzgaLmRD1u2kQ2DBvrQq4Bz6nhdJuq1xMBwaL53vTPuhXZlRreaC4vpUnT6xSoi+HzaD7rC9Ccrv+Y4S9or2une2YTpbCjtpOD0is7dw2g5bP83Tdnspxg33+WJKs8jmvnqGE0YPEv12pXCsw9NCG+blSMckwAAAABJRU5ErkJggg==">
                  <p class="van-hairline--bottom"> 走势图</p>
                </div>
                <div class="rightBox">
                  <img data-v-6422cdcc="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOwSURBVHgBvVa7b1NnFD/n+iY0A5U9VB256dwhYqjUKdcbA63dqt0qxSxMRSRSxRqiKk1BlWKKGBCCgMSesCNxwwCIhYh/wGZiQMJGPEzyPQ6/c69t/AjgwfZPvtf+Hj6/77w/ImB5SyKaMgIldSK1M1uyTVNEaC1FjkgCljxNEYEFs3hh60loigitvkWEQE5jxJnrsomvUi6g49VT3BxcD/TlHbF4Giuc9xXrZb5l/NJh6zB1uomwicaF01dt2TrKW+ehlJQ/Q6zP+Ighs2Qg1DmBQrRYudyKh4ixLSV1YzS1sT62IDVWEmiNwA0Xh4gzjRFbY2L+Y9MoaYSnLt6tWatK+eVhYry8mvozlv794psFGhEHXko2M3Fye2UugT57IM//ttFv7jSqEVjyKYV/3WhVrOSelC+836QRANPGKg/fN9Ox0I6OUSbO9hGrqRF5jEA4VGfjaSnVwPqzJ/9+HXfmyxut6Kd/3tVOrr893zsH/y5g/6vtc3O7OufD2UtqbnzieLWR7yPOgssNFZAyNuLki0qMPewk2NI/nwDBvpV76kvnaPXEanag98bFmkKYTzoydla4CY5dBFr+SHikm9OoXMocCHEwpPFbmim3nf+EmAooqtEMz276fR+j2EXM1ISd8hwEN3Cg4+Bc0sILUTv9VnNrOeZIgpnugULl9YzKJX5IY2hZUjnCfCm08gw2uYdRRdeYue7JFNmF2+xlgSXctiyxrsGwu71y7q4dVcL53rk0qrVy+UPCGiaL4VuifbN7d/1ogjCo6hhP3e+bYrJWqIuxv2BfE89itiaJztMX8DGPB3h/PNcoo/rkEZFJciETdH/96xUn/pTxvtiZ029jka/a4VyaTjs0AtLuxNoSWQa0DUqMOZi5T9CDfws3B4U8vFio/vBXYwHO/Tk48HdoBARaWDVi0aH6ib2Ptd4aM5qgx/8VKgfm5XePql82syLVWOA87rkHfP9nA76VY4javaf/jyZIsVedb466N41qR/2XAC9+CaUGsU4JTQhhVqslZelAo1kvJTjBLZoQQo1EGFrg7a6tDToLWKl27ds9mhBCvewx55j8R5Vr174p0oQR6kvzWKZ7yWz7WDsT08g9dxzgaLmRD1u2kQ2DBvrQq4Bz6nhdJuq1xMBwaL53vTPuhXZlRreaC4vpUnT6xSoi+HzaD7rC9Ccrv+Y4S9or2une2YTpbCjtpOD0is7dw2g5bP83Tdnspxg33+WJKs8jmvnqGE0YPEv12pXCsw9NCG+blSMckwAAAABJRU5ErkJggg==">
                  <p class="van-hairline--bottom"> 走势图</p>
                </div>
              </div>

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
                <div class="itemImg itemImgOrange flex-center-center">庄</div>
                <div class="boxs flex-center-center" />
                <div class="boxs flex-center-center">...</div>
              </div>

              <div class="flex-between-center">
                <div class="itemImg itemImgGreen flex-column-center">闲</div>
                <div class="boxs flex-center-center" />
                <div class="boxs flex-center-center blue">...</div>
              </div>
            </div>

            <div class="playContent flex-between-center">
              <!-- 左边区域 - start -->
              <div class="niuniu">
                <div class="l_bet l_top flex-column-center">
                  <div class="bigSize">
                    庄<span>(平倍)</span>
                  </div>
                  <div class="smallSize">
                    1:0.95
                  </div>
                </div>

                <div class="l_bet r_bottom flex-column-center">
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
                <div class="threeBox flex-column-center red">
                  <div>庄<span>(超级翻倍)</span></div>
                  <div>1:0.95</div>
                </div>
                <div class="threeBox flex-column-center">
                  <div>和局</div>
                  <div>9.5</div>
                </div>
                <div class="threeBox flex-column-center blue">
                  <div>闲<span>(超级翻倍)</span></div>
                  <div>1:0.95</div>
                </div>
              </div>
              <!-- 中间区域 - end -->

              <!-- 右边区域 - start -->
              <div class="niuniu">
                <div class="r_bet r_top flex-column-center">
                  <div class="bigSize">
                    庄<span>(翻倍)</span>
                  </div>
                  <div class="smallSize">1:0.95</div>
                </div>

                <div class="r_bet flex-column-center">
                  <div class="bigSize">闲<span>(翻倍)</span></div>
                  <div class="smallSize">1:0.95</div>
                </div>
              </div>
              <!-- 右边区域 - end -->
            </div>
          </div>

        </div>

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
              <input type="number" placeholder="输入金额" class="amount">
            </div>
          </div>
          <div class="flex-between-center m">
            <div class="lottery">
              <p>投注</p>
              <p>记录</p>
            </div>
            <button class="button">
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
        </div>
      </div>
    </div>
  </div></template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  metaInfo: {
    title: '页面标题',
    meta: [
      { name: 'viewport', content: '页width=device-width,initial-scale=1面描述' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ]
  },
  data() {
    return {
      switchLanguage: false
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

.rightUp {
  width: 8.5rem;
  position: absolute;
  box-shadow: 0 0.125rem 0.8125rem rgb(0 0 0 / 18%);
  border-radius: 0.625rem;
  z-index: 9999;
  right: 1.25rem;
  top: 2.5rem;
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
      height: 0.8125rem;
    }
    p {
      width: 5.5rem;
      color: #36373b;
      text-align: center;
      font-size: .9375rem;
      font-weight: 500;
      height: 3.125rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
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
      .bigSize {
        /* margin-top: 0.9375rem; */
      }
      .l_top {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAC6CAYAAADxjuLaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNi0wNVQxMTozMjo0OCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDYtMDVUMTE6MzM6NDErMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDYtMDVUMTE6MzM6NDErMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YzRiMTI2YWUtNjFjZS0yYjRj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);
        background-size: 100% 100%;
      }
      .r_bet {
        background: url(data:image/png;base64,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);
        background-size: 100% 100%;
        color: #4080ff;
      }
      .r_top {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAC6CAYAAADxjuLaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF3WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNi0wNVQxMTozMjo0OCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDYtMDVUMTc6MTY6NTUrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDYtMDVUMTc6MTY6NTUrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YTJhZjI3NDMtOGU5NS0yNDQ0LTlhNmMtODk5ZWE5YmMyNGFjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmM0YjEyNmFlLTYxY2UtMmI0Yy1iY2MwLWU3ZmU3YmVlMTQ3MiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmM0YjEyNmFlLTYxY2UtMmI0Yy1iY2MwLWU3ZmU3YmVlMTQ3MiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzRiMTI2YWUtNjFjZS0yYjRjLWJjYzAtZTdmZTdiZWUxNDcyIiBzdEV2dDp3aGVuPSIyMDIyLTA2LTA1VDExOjMyOjQ4KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMmFmMjc0My04ZTk1LTI0NDQtOWE2Yy04OTllYTliYzI0YWMiIHN0RXZ0OndoZW49IjIwMjItMDYtMDVUMTc6MTY6NTUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7rCEswAAC7FJREFUeJzt3X9o1PUDx/HX+37s7tztbjd3m6f7USZmIEFb5I9IKyNUbERgNCkMlELEhDD7gUEUQSAVC4nQ9YNBYYUaacpia1Q0wj8mhax919w355butrXb7Xa/P/f+/vG5fX1jOufcvB+f1wM+ePhjfv64594/Pp/7TEgpoTADKEgfFgAifdDUZPpQX6eueJ0CoCmvU7f+NOl6LOlfRfq1C0BJ+lc7AFOGzivXSFz7za8BSKaPhHJoVxzJyddCCAnKCJEeIawA5icSiYUnT560njhxInjixInIpUuXkhk+v5zgcDhE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);
        background-size: 100% 100%;
        color: #fc3939;
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

</style>
