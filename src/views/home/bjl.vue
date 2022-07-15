<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 哈希百家乐
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
                <span>哈希百家乐 体验房</span>
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
                <div class="bannerTitle">哈希百家乐 体验房</div>
                <div class="bannerText">最高赔率: 11</div>
                <div class="bannerText">限注：0USDT-200USDT</div>
              </div>
            </div>

            <div class="gameContent">
              <div class="game_name_list">
                <div>
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
            <div class="orderContent flex-between-center">
              <div class="porkerFlex flex-between-center">
                <div class="white">
                  <img src="https://designer-trip.com/image/game/bei.png">
                </div>
                <div class="white">
                  <img src="https://designer-trip.com/image/game/bei.png">
                </div>
              </div>
              <div class="white m">
                <img src="https://designer-trip.com/image/game/vs.png">
              </div>
              <div class="porkerFlex flex-between-center">
                <div class="white">
                  <img src="https://designer-trip.com/image/game/bei.png">
                </div>
                <div class="white">
                  <img src="https://designer-trip.com/image/game/bei.png">
                </div>
              </div>
            </div>

            <div class="orderFlex flex-between-center">
              <div class="flex-between-center">
                <div class="itemImg itemImgOrange flex-center-center">庄</div>
                <div class="boxs flex-center-center">...</div>
              </div>
              <div class="flex-between-center">
                <div class="itemImg itemImgGreen flex-column-center">庄</div>
                <div class="boxs flex-center-center">...</div>
              </div>
            </div>

            <div class="playContent flex-between-center">
              <div class="l_bet flex-column-center">
                <div class="bigSize">庄</div>
                <div class="smallSize">1.95</div>
              </div>

              <div class="middle">
                <div class="firstBox flex-column-center">
                  <div>庄对</div>
                  <div>11</div>
                </div>

                <div class="twoBox flex-column-center">
                  <div>闲对</div>
                  <div>11</div>
                </div>

                <div class="threeBox flex-column-center">
                  <div>和</div>
                  <div>8</div>
                </div>
              </div>

              <div class="r_bet flex-column-center">
                <div class="bigSize">闲</div>
                <div class="smallSize">1.95</div>
              </div>
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

.itemImgOrange {
    background-image: url(https://designer-trip.com/image/game/orange.png);
}

.itemImgGreen {
  background-image: url(https://designer-trip.com/image/game/green.png);
}
.page {
  color: #fff;
}

.head {
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
    }
  }
}

.view {
  flex: 1 1;
  overflow-y: auto;

  .contentHeader {
    width: 100%;
    background-color: #385bb1;
    padding: 0 1.25rem 0.625rem 1.25rem;
  }

  .en_name {
    font-size: 1rem;
  }
  .bjl_group {
    background-image: url(https://designer-trip.com/image/game/group.bjl.png);
  }
  .Hash_bjl_banner {
    background-image: url(https://designer-trip.com/image/game/banner.bjl.png);
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
    >div {
      text-align: center;
      width: 100%;
    }
  }

  .Hash_game_banner {
    height: 8.375rem;
    background-size: 100% 100%;
    border-radius: 0.625rem;
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

  .gameContainer{
    background-color: #4430ba;
    border-radius: 0 0 4.375rem 4.375rem;
    width: 100%;
    padding: 0.625rem 1.375rem;
    box-shadow: 0 0.25rem 0.25rem rgb(0 0 0 / 10%);
    .porkerFlex {
      width: 40%;
      max-width: 12.5rem;
    }
    .white {
      border-radius: 0.3125rem;
      border: 0.0625rem solid #fff;
      width: 3.125rem;
      padding: 0.3125rem 0.25rem 0.1875rem;
      img {
        width: 100%;
      }
    }

    .m {
      border: none;
    }

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
        .smallSize {
          margin-top: 0.625rem;
          font-size: 1rem;
          font-weight: 400;
        }
      }

      .r_bet {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAC6CAYAAADxjuLaAAALiElEQVR4nO3d209c1QKA8bVmzzAzMFdgBjmFtlKkVLFNBxMalKKZ2gIWUy+t2iI2ppAYUaJpqsZUTfTJS9RoTbwmJmpMfTMN8cW+1J6/4Dycx3MqtRctUEBuA8zJKmtyljhQ7szM/n7JpLRPhexv1m3PRgrDp59+6nrzzTer+/v7N4yNjXmnpqYcQoikAHKHtCxr2uPxjIbD4YsnT578d2dnZyL13d0IIplMypaWFv/58+frBwcHJ4UQw0KIcSHENBcCcpB6o3cLIXyBQMB59913/7Onp2dIpXAjiJ6eHndbW1tjX1/foBBiQAgxpmMgCOQih355hBChYDDo/+CDD84dPXp0TCaTSauhoaHml19+8QohfhdCTDBNgk2oASFPCBG55557Rs+dO/cvVYnr4sWLAT0yEAPsJKmv+QHdQN6NuVRvb29CT5OIAXajrvmx3t7eiVQQzkQioWKY4lKATU0lEgm1ieR06HlUktEBNpa6/mUqCMD2UkEA0AgCMBAEYCAIwEAQgIEgAANBAAaCAAwEARgIAjAQBGAgCMBAEICBIAADQQAGggAMBAEYCAIwEARgIAjAQBCAgSAAA0EABoIADAQBGAgCMBAEYCAIwEAQgIEgAANBAAaCAAwEARgIAjAQBGAgCMBAEICBIAADQQAGggAMBAEYCAIwEARgIAjAQBCAgSAAA0EABoIADAQBGAgCMBAEYCAIwEAQgIEgAANBAAaCAAwEARgIAjAQBGAgCMBAEIAQIhQKSSFEkiAAIaTL5VJBMEIAisvlEowQwAyZn5/PCAGkJJNJ1hCAJgOBACMEoKWCYIQAFL/fr4KYJghgZoQQjBDADAdBAP+ngphmygTMcBQWFiYIApghy8rKCALQHLfddtuoCkImk8mIlPIfQohr/HRgRwUFBeHh4eHfhRBXGSFgd7K6ulrd2TfJLhMghLVp0yZLCDFFEIAQjvLycqGD4F4m2J61cePGSYIAZlg1NTWjeg1BELA3n89nNTQ0DDNCAELInTt3ur1e7zhBAEJYW7ZsUTtM6pQ6KQgCNmdt3bp1OjU6CIKAzTnvuOOOMT1C3EAQsK1wOOzas2fPYGqHSRAEbMzR2NioFtRjTJkAIawdO3aoz1FPpBbUgiBgY65YLDZhrh8EQcCuKioq3Pfff/8AQQBCWPF43OP1ekfMBbUgCNiUtXPnTnX+MG6uHwRBwI7y8vLc+/btG9IL6r8gCNiNvO+++7wVFRWDs6dLgiBgQ9a9996r7l8ak1JOzf72CQJ2425ubh7R64e/IQjYiWxubs7fsWNH/+zt1hSCgJ2o7VanEGLEvF3DRBCwjby8PM++ffvUp+PGpZTJdN83QcAuHI8++mhBTU3NQLrt1hSCgF1YTU1NUk+Xpuf6ngkCtlBZWel98MEH+/V2a9rpkiAI2IR15MgRXzAYHJxrdymFIGAHec3NzeqDQCNSyjmnS4IgYAOOtrY2f11dXd9ch3EmgkCusx555BG1mB6a6+zBRBDIZepGvsCBAwfU6DA632I6hSCQy6z29vY8IcT1dHe2pkMQyFXy9ttvL3j44YcHFrKYTiEI5Cqrs7MzPxAIzHsyPRtBIBep0SG/ra1NLaT/XOjoIAgCOcp67rnnfEVFRQvaajURBHKN3L59u+/IkSPqVHo43afi5kMQyDXW888/n+/3+xc9OgiCQI6R9fX1vkOHDqlt1qHFjg6CIJBjrJdfftnr9/uvLWV0EASBHCLb29vDra2t1/TaYcE7SyaCQE5wu92u7u5udT33L+bcYTaCQC5wnDhxoigWi11dzuggCAK5oKqqKr+zs1OtGQYWes/SXAgC2c751ltvBcrKyq4u9I7W+RAEspk8evRo6ODBg+rM4bqUclmjgyAIZLNIJOJ+9dVX1TW85G3W2QgC2cr53nvvFVVWVl5Z7kLaRBDIRvLpp58OPvnkk/0rsZA2EQSyTnV1tfe1115Tj7T/fSUW0iaCQLZxfvjhh+FNmzZdXsmpUgpBIJs4Xn/99eK9e/f+oU+kV2yqlEIQyBZy7969ge7ubrWb9Md8T/BeDoJAVigrK3N/9NFH3nA4fGWxHwtdDIJANnB++eWXRVVVVZfUrtJKHMDNhSCQ6axTp05F9Lqh72YPK14ugkAmkx0dHeFjx46N6C3WeR9lvxIIAplKxuNx/9tvv61+Fdal1Vw3mAgCGWnbtm2eTz75xBcKhS4t9fPRS0EQyDjRaDTvm2++UYvo39R5g5RyVdcNJoJARvF4PK7vvvuuJBaLXdLnDWsWgyAIZBjr9OnTJfF4/IpeRK/K4dt8CAKZwvr+++9L9VMzrq7FjlI6BIFMYH399dcljz32mLo/6cpiHl+/0ggC68367LPPou3t7epJ3ZdW4w7WxSAIrCfHqVOnoh0dHcNCiN/W6qxhPk4uB6yTGyNDR0fHn8bIsCZnDfMhCKwH69tvvy05fPhwapq0ZgdvN0MQWFMej8d5+vTpW1pbWwcyaWRIIQisGXUCrc4ZGhsb1dbqZb1myJgYBItqrBEZi8U8P//88y2NjY1XM3FkSCEIrDb50EMP+X788cfimpqaizqGdd9NmgtBYDXJ7u7u8Oeff+7bsGHDr/rQbTRTYxCsIbCK1BlDSUdHx6TL5bqgn5KRWI/bMRaDILDiNm7cmPfVV1+pm/QG9eJ5cC1v4V4OpkxYSXL//v2+s2fPlsbjcXW36q/6oQBZEYNghMAKcrz77ruRZ555xpGfn39BP5F7LJPXC+kQBJatsrLS/cUXX0QbGxuH9cJ5IBvWC+kwZcJyyK6urvD58+dVDGqKpEaGPinlRDbGIBghsFRq4fzxxx9HW1tb1aMl/6tHhaybIs1GEFgsx0svvRR+8cUXC6LR6B/6c8/qJr3JbB0VTASBBVO3X7z//vvR3bt3qweH/SdXRgUTQeCmPB6P9c4770QOHz7sKiwsvKpHhT9zZVQwEQTmI1944YVQV1dXsKKiQo0Gveq3feqnYeTMqGAiCKQjW1pavCdPnozs2rVrxFg0j67mk7czAUHAJHfv3u155ZVXiuPx+JTL5bqsn7g9nIvTo3QIAkJ/XsH9xhtvFO/Zs0d4vd5rRggTuTo9Socg7E3W1dV5Tpw4UdTc3Cy9Xm+fvit1KJfXCfMhCHuSTzzxRMGxY8cKGxoapl0uV78OYViHkHGfZFsrBGEv8vjx48HHH388VFtbO64fGXldb6HaOoQUgrCB2tpad1dXV2E8HveUl5erUeCiDmHEbmuEmyGIHKUO07q7uwMHDhwI3HXXXdNOp/N66hlI6nRZ341KCLMQRG6Rzz77bKCpqSlQV1dnRSKRESMC9bWaJk3ZYft0qVQQSZfLJRKJrPlQEwwej8fx1FNP+R544IHArl27nJFIZFR/OGdYrw0YDRbhRhANDQ3W2bNnpfo6a/7nNnbnnXfmHTx40F9fX58fi8WscDg8ZmyXpkaCCSHENKPB4qggJltaWlQQlvo6m/7zdqEWxfv37y/Yvn17fk1NjbOiokKtCVK/qlaNAqM6ggRTouWRyWTSOzQ0VH7o0CHPTz/91M8osb5KS0utpqamgtraWk91dbW7qqrKWV5ePqUv+hH9GjNGgQTbpUuXTP71cldBqJEhdOHChc3Hjx8f/eGHH4aIYvVt3brVpW6X2LZtm3vLli3uW2+91VlWVuYsLS1V7/7j+qIfNd79J/QIMGmX+4rWwt+CEDP/6BJCFCUSiX/09PS4zpw5M3jmzJnRy5cvM4W6CfWOHgwG1RuL3Lx5s2VZliMYDDqKi4sdhYWFzlAo5IxGo85AIGCpfyspKXFEIhHp8/mm9AU+oS/48XQXvn4xDVolcwUh9XoiIIQo1H96eAjBgiTTvKb1a0q/Uhd2wnhNzXpNpv7Oxb920k2ZzL+r6VOefjl1MDInfxIrI/XDS/dnKozZgUwbL2QSIcT/AI1WJ5teydx6AAAAAElFTkSuQmCC);
        background-size: 100% 100%;
        color: #4080ff;
      }

      .middle {
        width: 44%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 0.1875rem;
        .firstBox, .twoBox {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABWCAYAAAAqh3MGAAACsElEQVR4nO3dMW4aQRjF8bcsi0HKLpAokpVcIEUat7FRGhdooUPuXLjiFq58AVoKboH2AuCcIEUOAJGlKODgSN4wwESzWiSfwOwT7y8NKyrQ/DSfplsPLxoOh8Hd3d2n5XL5MU3T2na7LQGwUK+Z5/v+rlqtPjebzfnt7e2Pfr9v9r+fgVlrvTiOw/v7+y+r1WoD4C+AfwB2ojpI7qCcAHgTRVH5/Pz8W5IkT44qA0uS5OT6+vrrYrFYAXgEkOZYAjtMpXxVATTq9Xo4GAwmNzc3qWet9Vut1ufpdFoD8AvAWmOwMLkDVQHw/uLi4nkymXx3isF8Po/ykyWsYmVzk8fcqJLNytlsZvIxKKzi5UzS2Wy23oOVjTEOa3vsO1PgtsYYdwksl/I5aXW6Ct3ex9uDKY4yMEWUwMgSGFkCI0tgZAmMLIGRJTCyBEaWwMgSGFkCI0tgZAmMLIGRJTCyBEaWwMgSGFkCI0tgZAmMLIGRJTCyBEaWwMgSGFkCI0tgZAmMLIGRJTCyBEaWwMgSGFkCI0tgZAmMLIGRJTCyBEaWwMgSGFkCI0tgZAmMLIGRJTCyBEaWwMgSGFkCI0tgZAmMLIGRJTCyBEaWwMgSGFkCI0tgZAmMLIGRJTCyBEaWwMgSGFkCI0tgZDkwGwTBse9D4Ws0GtnrmzOwVqvl6/XAha50dnbm78E2cRy7L/6x70qBK3U6nczKfaz7/f6fdrsd6ZQVMu/y8jJ0Rs4qAwvD8PdwOAyurq5CoRUqr9frRaPRqOKMnFWGY611t453xpgPSZIE4/F4NR6Pnx8eHjbHvmOH6PT0tNztdmvdbjeK49gEQfATgAMzezD3LANwY/Ft/qzq2n+wdgBSACsAi/zpDo/1rLUv/5S7eFTyVc7Ho0bk6+ZA3HJA63xts78A4D//xbIxUoGKvwAAAABJRU5ErkJggg==) no-repeat;
          background-size: 100% 100%;
          width: 48%;
          height: 2.5625rem;
          font-weight: 700;
          color: #fc3939;
          >div {
            text-align: center;
            font-size: .9375rem;
            font-weight: 400;
            &:first-child {
              margin: 0.3125rem 0;
              font-weight: 700;
              font-size: .9375rem;
            }
          }
        }
        .twoBox {
          color: #4080ff;
        }
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
              font-size: .9375rem;
              font-width: 700;
            }
          }
        }
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
