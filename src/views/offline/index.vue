<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 哈希PK拾
-->

<template>
  <div class="wrapper offline">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" @click="$router.go(-1)">
            <div class="back">
              <i class="iconfont  icon-fanhui2" />
            </div>
          </div>
          <div class="flex-center-center title">{{ game.name }}</div>
          <div class="flex-right">
            <div>注册版</div>
          </div>
        </div>

        <template v-if="gameId == 1">
          <Comb :game="game" />
        </template>

        <template v-if="gameId == 3">
          <Champion :game="game" />
        </template>

        <template v-if="gameId == 4">
          <Hash :game="game" />
        </template>

        <template v-if="gameId == 5">
          <Bull :game="game" />
        </template>

      </div>
    </div>
  </div>
</template>
<script>

import Comb from './components/comb.vue'
import Bull from './components/bull.vue'
import Champion from './components/champion.vue'
import Hash from './components/hash.vue'
import api from '@/api'
export default {
  name: 'Offline',
  components: { Comb, Champion, Bull, Hash },
  data() {
    return {
      gameId: 1,
      game: {}
    }
  },
  created() {
    this.gameId = this.$route.query.id
    this.init()
  },
  methods: {
    async init() {
      const res = await api.game.find({ id: this.gameId })
      console.log(res)
      if (res === undefined || res.code !== 0) {
        this.$toast('获取数据失败')
        this.$router.go(-1)
        return
      }

      if (res.data.address === '' || res.data.address === undefined) {
        this.$router.go(-1)
        return
      }

      this.game = res.data
    }
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  height:100% !important;
}
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

.view {
  padding: 0 0.625rem;
  padding-bottom: 1.875rem;
  flex: 1 1;
  overflow-y: auto;
  .addressBox, .gz{
    padding: 0.9375rem 1.25rem;
    background-color: #fff;
    margin-top: 0.9375rem;
    .title {
      color: #333;
      font-size: 1rem;
      margin-bottom: 0.625rem;
    }

    div {
      line-height: 1.5625rem;
    }

    .qr {
      width: 16.5625rem;
      height: 16.5625rem;
      margin: 0 auto;
    }

    .tips {
      color: red;
      margin-bottom: 10px;
      text-align: center;
    }

    .address {
      padding: 0.9375rem 0.625rem;
      background-color: #eff7ff;
      border-radius: 0.3125rem;
      margin-bottom: 0.625rem;
      font-size: .9375rem;
      font-weight: 500;
    }
    .btn-copy {
      color: white;
      background: linear-gradient(rgb(255, 184, 162), rgb(255, 110, 64));
      border: 0px;
    }
  }
}

</style>
