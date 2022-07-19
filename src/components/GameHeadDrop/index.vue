<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 在线客服组件
-->
<template>
  <div>
    <div v-if="isShow" class="rightUp">
      <div class="rightBox">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOwSURBVHgBvVa7b1NnFD/n+iY0A5U9VB256dwhYqjUKdcbA63dqt0qxSxMRSRSxRqiKk1BlWKKGBCCgMSesCNxwwCIhYh/wGZiQMJGPEzyPQ6/c69t/AjgwfZPvtf+Hj6/77w/ImB5SyKaMgIldSK1M1uyTVNEaC1FjkgCljxNEYEFs3hh60loigitvkWEQE5jxJnrsomvUi6g49VT3BxcD/TlHbF4Giuc9xXrZb5l/NJh6zB1uomwicaF01dt2TrKW+ehlJQ/Q6zP+Ighs2Qg1DmBQrRYudyKh4ixLSV1YzS1sT62IDVWEmiNwA0Xh4gzjRFbY2L+Y9MoaYSnLt6tWatK+eVhYry8mvozlv794psFGhEHXko2M3Fye2UugT57IM//ttFv7jSqEVjyKYV/3WhVrOSelC+836QRANPGKg/fN9Ox0I6OUSbO9hGrqRF5jEA4VGfjaSnVwPqzJ/9+HXfmyxut6Kd/3tVOrr893zsH/y5g/6vtc3O7OufD2UtqbnzieLWR7yPOgssNFZAyNuLki0qMPewk2NI/nwDBvpV76kvnaPXEanag98bFmkKYTzoydla4CY5dBFr+SHikm9OoXMocCHEwpPFbmim3nf+EmAooqtEMz276fR+j2EXM1ISd8hwEN3Cg4+Bc0sILUTv9VnNrOeZIgpnugULl9YzKJX5IY2hZUjnCfCm08gw2uYdRRdeYue7JFNmF2+xlgSXctiyxrsGwu71y7q4dVcL53rk0qrVy+UPCGiaL4VuifbN7d/1ogjCo6hhP3e+bYrJWqIuxv2BfE89itiaJztMX8DGPB3h/PNcoo/rkEZFJciETdH/96xUn/pTxvtiZ029jka/a4VyaTjs0AtLuxNoSWQa0DUqMOZi5T9CDfws3B4U8vFio/vBXYwHO/Tk48HdoBARaWDVi0aH6ib2Ptd4aM5qgx/8VKgfm5XePql82syLVWOA87rkHfP9nA76VY4javaf/jyZIsVedb466N41qR/2XAC9+CaUGsU4JTQhhVqslZelAo1kvJTjBLZoQQo1EGFrg7a6tDToLWKl27ds9mhBCvewx55j8R5Vr174p0oQR6kvzWKZ7yWz7WDsT08g9dxzgaLmRD1u2kQ2DBvrQq4Bz6nhdJuq1xMBwaL53vTPuhXZlRreaC4vpUnT6xSoi+HzaD7rC9Ccrv+Y4S9or2une2YTpbCjtpOD0is7dw2g5bP83Tdnspxg33+WJKs8jmvnqGE0YPEv12pXCsw9NCG+blSMckwAAAABJRU5ErkJggg==">
        <p class="van-hairline--bottom"> 走势图</p>
      </div>
      <div class="rightBox" @click="isShowIntro = true; isShow = false">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHXSURBVHgB7VZZTsNADLWnw/JHOQFwAhAXAO6BWCQk4Ac4CssHiB+WC3AFboA4ARVboYilQoK0ncTYnkmTVEWC7+YpyrzxJicfz8al/fYNMM63hqcW99q7lQpsA7EBQSEHARICIakd+c1XOYnQ+8XMEQTqS20Sg5IM3t52sGvvXqJJCHh4iZZ9hlYTlstLq/geNIbkDI1IU8oxlABpAH0+oG8GVuzza7Tq0GjK0+v3KqGdFm5CE0mO55HkuMnFJX1iU/tQxVxCiRIlBg+4c0LVKILq0SbWlDs3Uwyx4XR90m1GnStcM7/LuIOarb+1rljnqmwZf2RuECe9blIQ8DiTcuptNy7YvMKDF3Y1tILSS34MCeGNvW20xrj2u/jvGy02UndSqDjzhSDIszyYVod0lAgJdbveMGRycaEjW29+zcJo9CH3t+bXgsPRieJn9H5WP/wlhv/oyPs1lChRYvCAG4duJTFAx+v2bO2gM2+GzdxvwQnvesakPGFu4D+xceyubf2jfSKiy/azxmfngpdWEXJWT9INNmvNC3NXoAM0l0Kkbt8UNme/POdklCimJot3VEuTeVqcdjrJjq7tkCpwd93Wh7xIQ07H9SgUD7MiE28dGFgBPP0BXUTzIbn7ESQAAAAASUVORK5CYII="></img>
        <p class="van-hairline--bottom"> 玩法说明</p>
      </div>
      <!-- <div class="rightBox">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASjSURBVHgBvVZNbFtFEJ5dP7eJBOhZ5MIprwekXqq6t976WnGAU1Kph7aXOkBRWoLiUIFAQn02QqqgamKkhlREyI6EBEJCcSQEPRHnBOLQOidyQX059UCRnZTG9vPuDt86P6hN/BNF6ki231vPzLczO/PtCOpBxmbZFw4NCWafhRgkwwkSggXRGr7KkqisiRZuj4hSN1+i05+jX6tUTMqAiTwifPOOOnBJbK1gH3gS0r6uYjkz/baY2xfgaJ490eR5OEqyXZBUhWJOsCxJSSEcrtrldJ7dRpOOw8swdIeJ2ePNyEPSjTN3rvSHXQEvT0cpisUmYWzT9oCkHJl9RyxRD3J5RqXgMkCkHn4rhvnNb646xbaAb32lsFOab6VPyJzpl9nCiKjSPiQ1xa48bAJEPL7lfSR/1ZnbBQhFj+L6HhO7OJ9s4d14lg4gqelmQIYy8FcVjj5R2Eqv3FbQsrmoDLvG0JcHBbNifWhNOW3IVZEzv73u2K/zU7WUNohQ0IMNbg9m02Vk85Ih4bYWDC19OxEvtdOPsZNtcGSLKXlhMrr03fuH5loRMssAOyFlKFuc2PvMLkzV0xFFFWQhY4xJ4ZPWgn+9ONXItwMswBcrM6KRV0Mc2DVx7mbNx88iiiX88cO+I3sZXvzi36SKOfclyUJ9PT5RzG5u6vythu3RjP38cO1w28ycu1mvwL+rNZ+WyoghGx12UWxn0JTxcaNFpR7p7DaYle8Booyu4jiGqIMoEjljbEeLIcmGk0C2/doWUFkdY5aLH+9uZGNk2RZGJ0CqmyVsCmnVvgNHxxGuWH8SLbfTF/LwMEW714dv1DycpY/HYkdAh0KjUZJCeOKNT59YDqRfrr/QkVd3gQXsNuO1RTwmheMkf/ro0HInfYtjgRxUJhPTvuT1oOY1YhuLYG30bSx195POYFaQUrKI0rCpIr3izGe1QepRWOo8bFxSzdN3g/65bvp+UHEtIGzWJHK7aqvU1OpHegF7LXjsK82+0TLzczZR7sWGlJO0gMApSxiXNtGdUz3ZNtlDVZNi0RsYRBMPabAE7MqyafQCkPFi0r1Z65KQwufH9a7n9r8JD9ug0I9F+fvniRJKexWbdk9eq/hdrRtUVQ3clT3KyQ8qKZD4IGpl9bcbLy61uDRSKot+ROiUT6YrHZu4HhfzEZv5DUeOdwPz4QtEH1iWsWdu11qA9yYHCkqTZQzPwQzTyQlrXoB9FXTcNaXrgjJKsaeYwz9uvdSq5p1mR2Qebun7eMQFzNly7uUMHUCS6X8yuIWu4zJfw+uJci4RPgVo5dh7j1JgufzmHzIXixGAE/saMeyRKKUzoLFWykHTZ/+8PbBDfbvo7NjYo2HkvdXYIL8Q5JxZmUl0bW4rR8f+9iXH8uAUD5FZQkmvTA88Zbsnfx4dfYhxL75o59GWAu5KI0SROVpQfX3lcCtqqwdm9sAbvpByHPeB3SSGVfSbUWdX7rwSPuu7I2G/OvowRRwLDAvPzrt25AQLbo2em8KWie090HKGjEjK/DUzsL9B+FnxrlROSd3ECCmSdj7BktuyZFzGgkJsoGQ4XgxnEz3Nr89V/gM+WJepAXaqOQAAAABJRU5ErkJggg=="></img>
        <p class="van-hairline--bottom"> 投注教程</p>
      </div> -->
      <div class="rightBox" @click="isShowService = true; isShow = false">
        <img src="data:image/png;base64,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"></img>
        <p class="van-hairline--bottom"> 在线客服</p>
      </div>
    </div>

    <!-- 玩法说明 - start -->
    <van-popup
      v-model="isShowIntro"
      position="bottom"
      round
      :style="{ height: '60%', backgroundColor: '#fff' }"
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
              <div>开奖：5a，下注：5</div>
              <div class="noRight">中奖</div>
            </div>
            <div class="gridItem">
              <div>开奖：a6，下注：6</div>
              <div class="noRight">中奖</div>
            </div>
            <div class="gridItem">
              <div>开奖：76，下注：7</div>
              <div class="noRight">不中奖</div>
            </div>
            <div class="gridItem">
              <div>开奖：d4，下注：6</div>
              <div class="noRight">不中奖</div>
            </div>
          </div>

          <div class="odds">
            赔率：9.8
          </div>

          <div class="order_text">
            限注：0USDT-200USDT
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 玩法说明 - end -->

    <!-- 在线客服 - start -->
    <van-popup
      v-model="isShowService"
      :style="{ background: 'none' }"
    >
      <div class="bg_service">
        <div style="text-align: center;">
          <img src="@/assets/images/kf_port.png" style="width: 90px; height: 90px;">
        </div>

        <div class="t1">Hi,请联系以下客服</div>

        <div class="list flex-center-center">
          <div class="service_icon" />
          <a href="#" target="_blank">24小时在线客服</a>
        </div>

        <div class="list flex-center-center">
          <div class="telegram_icon" />
          <a href="#" target="_blank">Telegram客服</a>
        </div>

        <div class="list flex-center-center">
          <div class="telegram_icon" />
          <a href="#" target="_blank">Telegram频道</a>
        </div>
      </div>
    </van-popup>
    <!-- 在线客服 - end -->
  </div>
</template>

<script>
export default {
  name: 'GameHeadDrop',
  props: {
    show: {
      required: false,
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isShowIntro: false,
      isShowDetail: false,
      isShowService: false
    }
  },
  computed: {
    isShow: {
      get() {
        return this.show
      },
      set(val) {
        this.$emit('close', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.bg_service {
  width: 17.125rem;
  min-height: 20.25rem;
  padding: 1.375rem 2.0625rem 0.6875rem;
  border-radius: 0.3125rem;
  .t1 {
    text-align: center;
    color: #333;
    font-size: .9375rem;
    font-weight: 700;
  }

  .list {
    background: linear-gradient(90deg,#a2c1ff,#4080ff);
    border-radius: 0.3125rem;
    text-align: center;
    margin: 0.625rem 0;
    color: #fff;
    padding: 0.375rem 0.0625rem;
    >div {
      width: 1.0625rem;
      height: 1.0625rem;
      margin-right: 0.625rem;
    }
    a {
      color: #fff;
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

.bg_service {
  width: 17.125rem;
  min-height: 20.25rem;
  padding: 1.375rem 2.0625rem 0.6875rem;
  border-radius: 0.3125rem;
  .t1 {
    text-align: center;
    color: #333;
    font-size: .9375rem;
    font-weight: 700;
  }

  .list {
    background: linear-gradient(90deg,#a2c1ff,#4080ff);
    border-radius: 0.3125rem;
    text-align: center;
    margin: 0.625rem 0;
    color: #fff;
    padding: 0.375rem 0.0625rem;
    >div {
      width: 1.0625rem;
      height: 1.0625rem;
      margin-right: 0.625rem;
    }
    a {
      color: #fff;
    }
  }
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
    img {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
