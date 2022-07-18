<template>
  <div class="wrapper">
    <div class="flex-1 index-page">
      <div class="page Lucky_Hash_Bg">
        <div class="head flex-between-center">
          <div class="flex-center-center" @click="$router.go(-1)">
            <i class="iconfont icon-fanhui2" />
            <span>幸运哈希 体验房</span>
          </div>
          <div @click="isShowDetail = !isShowDetail">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgB7dZBDYUwEATQ2W/gIwUHWMAJSCiKCA7qACTgAFBQdiBY6Fz2JW16a7NtZmullARg8NGgvsn8AAU658+nDJ2dFWDpO2iuYEEIQc04eRa0EOSAmWUG0ezrHhpZ3QvAXpCgk743wPv/o67L38CJEILa9ydURDEzYOMBVl+00Hh6wQHNj/jBXjDhLUdt3HO8AYZ7MoUEz+JsAAAAAElFTkSuQmCC">
          </div>
          <div v-if="isShowDetail" class="rightUp">
            <div class="rightBox">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOwSURBVHgBvVa7b1NnFD/n+iY0A5U9VB256dwhYqjUKdcbA63dqt0qxSxMRSRSxRqiKk1BlWKKGBCCgMSesCNxwwCIhYh/wGZiQMJGPEzyPQ6/c69t/AjgwfZPvtf+Hj6/77w/ImB5SyKaMgIldSK1M1uyTVNEaC1FjkgCljxNEYEFs3hh60loigitvkWEQE5jxJnrsomvUi6g49VT3BxcD/TlHbF4Giuc9xXrZb5l/NJh6zB1uomwicaF01dt2TrKW+ehlJQ/Q6zP+Ighs2Qg1DmBQrRYudyKh4ixLSV1YzS1sT62IDVWEmiNwA0Xh4gzjRFbY2L+Y9MoaYSnLt6tWatK+eVhYry8mvozlv794psFGhEHXko2M3Fye2UugT57IM//ttFv7jSqEVjyKYV/3WhVrOSelC+836QRANPGKg/fN9Ox0I6OUSbO9hGrqRF5jEA4VGfjaSnVwPqzJ/9+HXfmyxut6Kd/3tVOrr893zsH/y5g/6vtc3O7OufD2UtqbnzieLWR7yPOgssNFZAyNuLki0qMPewk2NI/nwDBvpV76kvnaPXEanag98bFmkKYTzoydla4CY5dBFr+SHikm9OoXMocCHEwpPFbmim3nf+EmAooqtEMz276fR+j2EXM1ISd8hwEN3Cg4+Bc0sILUTv9VnNrOeZIgpnugULl9YzKJX5IY2hZUjnCfCm08gw2uYdRRdeYue7JFNmF2+xlgSXctiyxrsGwu71y7q4dVcL53rk0qrVy+UPCGiaL4VuifbN7d/1ogjCo6hhP3e+bYrJWqIuxv2BfE89itiaJztMX8DGPB3h/PNcoo/rkEZFJciETdH/96xUn/pTxvtiZ029jka/a4VyaTjs0AtLuxNoSWQa0DUqMOZi5T9CDfws3B4U8vFio/vBXYwHO/Tk48HdoBARaWDVi0aH6ib2Ptd4aM5qgx/8VKgfm5XePql82syLVWOA87rkHfP9nA76VY4javaf/jyZIsVedb466N41qR/2XAC9+CaUGsU4JTQhhVqslZelAo1kvJTjBLZoQQo1EGFrg7a6tDToLWKl27ds9mhBCvewx55j8R5Vr174p0oQR6kvzWKZ7yWz7WDsT08g9dxzgaLmRD1u2kQ2DBvrQq4Bz6nhdJuq1xMBwaL53vTPuhXZlRreaC4vpUnT6xSoi+HzaD7rC9Ccrv+Y4S9or2une2YTpbCjtpOD0is7dw2g5bP83Tdnspxg33+WJKs8jmvnqGE0YPEv12pXCsw9NCG+blSMckwAAAABJRU5ErkJggg==">
              <p class="van-hairline--bottom"> 走势图</p>
            </div>
            <div class="rightBox" @click="isShowIntro = !isShowIntro; isShowDetail = false">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHXSURBVHgB7VZZTsNADLWnw/JHOQFwAhAXAO6BWCQk4Ac4CssHiB+WC3AFboA4ARVboYilQoK0ncTYnkmTVEWC7+YpyrzxJicfz8al/fYNMM63hqcW99q7lQpsA7EBQSEHARICIakd+c1XOYnQ+8XMEQTqS20Sg5IM3t52sGvvXqJJCHh4iZZ9hlYTlstLq/geNIbkDI1IU8oxlABpAH0+oG8GVuzza7Tq0GjK0+v3KqGdFm5CE0mO55HkuMnFJX1iU/tQxVxCiRIlBg+4c0LVKILq0SbWlDs3Uwyx4XR90m1GnStcM7/LuIOarb+1rljnqmwZf2RuECe9blIQ8DiTcuptNy7YvMKDF3Y1tILSS34MCeGNvW20xrj2u/jvGy02UndSqDjzhSDIszyYVod0lAgJdbveMGRycaEjW29+zcJo9CH3t+bXgsPRieJn9H5WP/wlhv/oyPs1lChRYvCAG4duJTFAx+v2bO2gM2+GzdxvwQnvesakPGFu4D+xceyubf2jfSKiy/azxmfngpdWEXJWT9INNmvNC3NXoAM0l0Kkbt8UNme/POdklCimJot3VEuTeVqcdjrJjq7tkCpwd93Wh7xIQ07H9SgUD7MiE28dGFgBPP0BXUTzIbn7ESQAAAAASUVORK5CYII="></img>
              <p class="van-hairline--bottom"> 玩法说明</p>
            </div>
            <div class="rightBox">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASjSURBVHgBvVZNbFtFEJ5dP7eJBOhZ5MIprwekXqq6t976WnGAU1Kph7aXOkBRWoLiUIFAQn02QqqgamKkhlREyI6EBEJCcSQEPRHnBOLQOidyQX059UCRnZTG9vPuDt86P6hN/BNF6ki231vPzLczO/PtCOpBxmbZFw4NCWafhRgkwwkSggXRGr7KkqisiRZuj4hSN1+i05+jX6tUTMqAiTwifPOOOnBJbK1gH3gS0r6uYjkz/baY2xfgaJ490eR5OEqyXZBUhWJOsCxJSSEcrtrldJ7dRpOOw8swdIeJ2ePNyEPSjTN3rvSHXQEvT0cpisUmYWzT9oCkHJl9RyxRD3J5RqXgMkCkHn4rhvnNb646xbaAb32lsFOab6VPyJzpl9nCiKjSPiQ1xa48bAJEPL7lfSR/1ZnbBQhFj+L6HhO7OJ9s4d14lg4gqelmQIYy8FcVjj5R2Eqv3FbQsrmoDLvG0JcHBbNifWhNOW3IVZEzv73u2K/zU7WUNohQ0IMNbg9m02Vk85Ih4bYWDC19OxEvtdOPsZNtcGSLKXlhMrr03fuH5loRMssAOyFlKFuc2PvMLkzV0xFFFWQhY4xJ4ZPWgn+9ONXItwMswBcrM6KRV0Mc2DVx7mbNx88iiiX88cO+I3sZXvzi36SKOfclyUJ9PT5RzG5u6vythu3RjP38cO1w28ycu1mvwL+rNZ+WyoghGx12UWxn0JTxcaNFpR7p7DaYle8Booyu4jiGqIMoEjljbEeLIcmGk0C2/doWUFkdY5aLH+9uZGNk2RZGJ0CqmyVsCmnVvgNHxxGuWH8SLbfTF/LwMEW714dv1DycpY/HYkdAh0KjUZJCeOKNT59YDqRfrr/QkVd3gQXsNuO1RTwmheMkf/ro0HInfYtjgRxUJhPTvuT1oOY1YhuLYG30bSx195POYFaQUrKI0rCpIr3izGe1QepRWOo8bFxSzdN3g/65bvp+UHEtIGzWJHK7aqvU1OpHegF7LXjsK82+0TLzczZR7sWGlJO0gMApSxiXNtGdUz3ZNtlDVZNi0RsYRBMPabAE7MqyafQCkPFi0r1Z65KQwufH9a7n9r8JD9ug0I9F+fvniRJKexWbdk9eq/hdrRtUVQ3clT3KyQ8qKZD4IGpl9bcbLy61uDRSKot+ROiUT6YrHZu4HhfzEZv5DUeOdwPz4QtEH1iWsWdu11qA9yYHCkqTZQzPwQzTyQlrXoB9FXTcNaXrgjJKsaeYwz9uvdSq5p1mR2Qebun7eMQFzNly7uUMHUCS6X8yuIWu4zJfw+uJci4RPgVo5dh7j1JgufzmHzIXixGAE/saMeyRKKUzoLFWykHTZ/+8PbBDfbvo7NjYo2HkvdXYIL8Q5JxZmUl0bW4rR8f+9iXH8uAUD5FZQkmvTA88Zbsnfx4dfYhxL75o59GWAu5KI0SROVpQfX3lcCtqqwdm9sAbvpByHPeB3SSGVfSbUWdX7rwSPuu7I2G/OvowRRwLDAvPzrt25AQLbo2em8KWie090HKGjEjK/DUzsL9B+FnxrlROSd3ECCmSdj7BktuyZFzGgkJsoGQ4XgxnEz3Nr89V/gM+WJepAXaqOQAAAABJRU5ErkJggg=="></img>
              <p class="van-hairline--bottom"> 投注教程</p>
            </div>
            <div class="rightBox">
              <img src="data:image/png;base64,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"></img>
              <p class="van-hairline--bottom"> 在线客服</p>
            </div>
          </div>

          <!-- 玩法说明 - start -->
          <van-popup
            v-model="isShowIntro"
            position="bottom"
            :style="{ height: '60%' }"
            closeable
            close-icon="cross"
          >
            <div class="PlayInfo">
              <div class="title">玩法说明</div>
              <div class="content">
                <div class="content_title">
                  取区块链Block Hash值从右到左第一个数字（字母跳过）为开奖结果，押注范围0-9，下注号码与开奖结果相同即为中奖
                </div>

                <div class="flexTitle">
                  <div class="noBorder">
                    Block Hash
                  </div>

                  <div>开奖结果</div>
                </div>

                <div class="grid">
                  <div class="gridItem">
                    <div>5a</div>
                    <div class="noRight">中奖</div>
                  </div>
                  <div class="gridItem">
                    <div>c5</div>
                    <div class="noRight">中奖</div>
                  </div>
                  <div class="gridItem">
                    <div>bf</div>
                    <div class="noRight">不中奖</div>
                  </div>
                  <div class="gridItem">
                    <div>89</div>
                    <div class="noRight">不中奖</div>
                  </div>
                </div>

                <div class="odds">
                  赔率：1.98
                </div>

                <div class="order_text">
                  限注：0USDT-200USDT
                </div>
              </div>
            </div>
          </van-popup>
          <!-- 玩法说明 - end -->
        </div>

        <div class="view">
          <div>
            <div class="en_name">Block Hash</div>
            <div class="orderShow Hash_group">
              <div v-if="result === undefined">
                <span>等待开奖中...</span>
              </div>
              <div v-else class="flex-center-center kjnumber">
                <div>
                  <span>{{ hashCode }}</span>
                  <span class="numberBox">
                    <span>6</span>
                    <span>c</span>
                  </span>
                </div>
                <a href="#">详情</a>
                <div class="betStatus">已中奖</div>
              </div>
            </div>
          </div>

          <div class="Hash_game_banner Lucky_hash_banner">
            <div class="bannerContent">
              <div class="bannerTitle">幸运哈希 体验房</div>
              <div class="bannerText">赔率:1.98</div>
              <div class="bannerText">限注：0USDT-200USDT</div>
            </div>
          </div>

          <div class="gameContent">
            <div class="game_name_list">
              <div>
                <div v-for="(item,index) in rooms" :key="index+''" class="name_list_item" :class="{active:item.type==roomType}" @click="roomClick(item)">{{ item.name }}</div>
              </div>
            </div>
            <div class="flex-between-center new_win">
              <div>最新中奖信息</div>
              <div>
                游戏说明
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGuSURBVHgBrVaLcYMwDBW9DOAN6hHYIHSCjtB0ArIB6QRtJ3A7QboB6QRkA9iAbqBKiTgUYmRyl3enM8iS0M8yAAYQ0RHtiGqiFkf0wiuJvGUjmzHsaQlEhbD+iA6yMrwixhfRW5ZlHaRAxrfiISMQrQ3ZXGSGqLYp4zsR5nTksBAcsUrhDgzPGQ3nPrLvxFA+o+9EF68iEcVevHARxaDShip9PiLbiqzXG0GUvBH6EF2t3mMO5bJXayMnjyJhB1XAdSRiRmXouQd6fxb+J1xjaM8PasHfgSnt+COvRUTvW9YSJOQWboDKNWM/I3M6jOPDbcYbVQc/I7dnJ1b0zEXqlhqnpYHxBG+M08vp9Su4De9inJWfyPgxqSG53C+Qcyot5QJ5rm3PEXQQ74QpdCrTnp8jPfKXKvGqgDtBHbZShx4WKDqMzKmIXLjoMByPf57wqk9FG50MaAw7JVOoIr/AfIQtToedbJrjWjnyaBhvzC5TBW8xcddO9HIcR0eVEp5emVZdCrycuFeeW5c+e7IRVqeIwSksZGUciF4XXfrTD+H516TGyxutFV6Fibb9B6S0vMRZ5cBCAAAAAElFTkSuQmCC">
              </div>
            </div>
          </div>

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
export default {
  name: 'Hash',
  metaInfo: {
    title: '页面标题',
    meta: [
      { name: 'viewport', content: '页width=device-width,initial-scale=1面描述' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ]
  },
  data() {
    return {
      isShowIntro: false,
      isShowDetail: false,
      roomType: 1,
      result: '000000000288f0dc73f321bc1ede29140086ef5d200b84756d27800d38e4296c',
      rooms: [
        {
          name: '体验房',
          type: 1
        },
        {
          name: '初级房',
          type: 2
        },
        {
          name: '中级房',
          type: 3
        },
        {
          name: '高级房',
          type: 4
        }
      ]
    }
  },
  computed: {
    hashCode() {
      return this.result.substr(0, 4) + '...' + this.result.substr(-4)
    }
  },
  created() {
  },
  methods: {
    roomClick(item) {
      this.roomType = item.type
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
    background-image: url(https://designer-trip.com/image/game/group.hash.png);
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

.PlayInfo {
  padding: 0.625rem 0;
  font-size: .9375rem;
  color: #60768a;
  height: 100%;
  .title {
    padding: 0.9375rem 0.6875rem;
    text-align: center;
    font-size: 1.125rem;
  }

  .content {
    height: calc(100% - 3rem);
    overflow: auto;
    padding: 0 1.25rem;
    .content_title {
      font-size: 1rem;
      margin-bottom: 0.625rem;
      line-height: 1.375rem;
    }

    .flexTitle {
      background: #a3c0fb;
      width: 100%;
      display: flex;
      color: #fff;
      font-size: 1rem;
      >div {
        text-align: center;
        width: 50%;
        border-left: 0.0625rem solid #fff;
        line-height: 2.3125rem;
      }

      .noBorder {
        border: none;
      }
    }
  }

  .grid {
    width: 100%;

    .gridItem {
      display: flex;
      justify-content: space-between;
      >div {
        width: 50%;
        text-align: center;
        margin: 0 auto;
        padding: 0.5625rem 0;
        border-left: 0.0625rem solid #e9e9e9;
        border-bottom: 0.0625rem solid #e9e9e9;
      }

      .noRight {
        border-right: 0.0625rem solid #e9e9e9;
      }
    }
  }

  .odds, .order_text {
    margin: 0.625rem 0;
    font-size: .875rem;
  }
}

</style>
