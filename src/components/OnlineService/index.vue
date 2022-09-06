<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 在线客服组件
-->
<template>
  <!-- 在线客服 - start -->
  <van-popup
    v-model="isShow"
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
</template>

<script>
export default {
  name: 'GameHeadDrop',
  props: {
    show: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
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
