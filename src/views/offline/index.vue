<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 钱包
-->
<template>
  <div class="wrapper exchange">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" @click="$router.go(-1)">
            <div class="back">
              <i class="iconfont  icon-fanhui2" />
            </div>
          </div>
          <div class="flex-center-center title">幸运哈希</div>
          <div class="flex-right">
            <div>注册版</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Wallet',
  metaInfo: {
    title: '页面标题',
    meta: [
      { name: 'viewport', content: '页width=device-width,initial-scale=1面描述' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ]
  },
  data() {
    return {
      activeName: 'a'
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;

  .jyjl {
    font-size: .9375rem;
  }

  .money-box {
    box-sizing: border-box;
    padding: 1rem;
    margin: 0.625rem;
    border-radius: 0.3125rem;
    img {
      width: 1.5rem;
    }
    .zj {
      margin-top: 0.625rem;
    }
    .textinfo {
      line-height: 1.25rem;
      color: red;
    }
    .totalMoney {
      color: #36373b;
      margin-bottom: 0.625rem;
      text-align: center;
    }
    .qr {
      width: 16.5625rem;
      height: 16.5625rem;
      margin: 0 auto;
      img {
        width: 100%!important;
      }
    }

    .showBalance {
      background-color: #eff7ff;
      padding: 0 0.625rem;
      margin-top: 0.625rem;
      height: 3.125rem;
      .cut {
        transform: rotate(90deg);
        width: 1.4375rem;
        height: 1.4375rem;
        img {
          width: 100%;
        }
      }

      .l1 {
        flex: 1 1;
        font-weight: 500;
        font-size: 1.25rem;
      }

      input {
        width: 100%;
        border: none;
        padding: 0.1875rem 0.625rem;
        background: none;
      }

      .dengyu {
        min-width: 2.5rem;
        text-align: center;
        font-size: 1.25rem;
        color: #333;
      }
    }

    .Ub {
      width: 6.25rem;
      justify-content: flex-start;
      &:last-child {
        justify-content: flex-end;
      }
    }

    .xlaccount {
      width: 100%;
      height: 3.4375rem;
      background: #eff7ff;
      -webkit-backdrop-filter: blur(.106667rem);
      backdrop-filter: blur(0.106667rem);
      border-radius: 0.3125rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 0.625rem;
      color: #333;
      font-size: .8125rem;
      .copy {
        color: #4080ff;
      }
    }

  }

  .money-detail {
    padding: 1rem 0 1rem 1rem;
    margin: 0.625rem;
    border: 0.0625rem solid #fff;
    border-radius: 0.3125rem;
    background: none;
    box-shadow: 0.5rem 0.8125rem 0.8125rem #e4e5ea;
    .detail-item {
      position: relative;
      width: 100%;
      display: flex;
      font-size: 1.1875rem;
      height: 3.4375rem;
      line-height: 3.4375rem;
      &::after {
        content: "";
        width: 90%;
        position: absolute;
        bottom: 0;
        right: 0;
        border-bottom: 0.0625rem solid #ccced1;
      }
      h4 {
        width: 30%;
        display: flex;
        color: #36373b;
        margin-bottom: 0.3125rem;
        align-items: center;
        text-align: left;
        img {
          width: 1.375rem;
          display: inline-block;
          margin-right: 0.625rem;
        }
      }
      h2 {
        width: 60%;
        text-align: right;
        color: #4080ff;
        font-size: 1.1875rem;
      }
    }
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
  .flex-right {
    color: #1a1c1e;
  }
}

</style>
