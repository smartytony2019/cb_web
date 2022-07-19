<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 在线客服组件
-->
<template>
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
      <button class="button" @click="handleBet">
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

    <!-- 确认投注 - start -->
    <van-popup v-model="isShowBetConfirm" position="center" round>
      <div class="queren">
        <div class="title after">确认投注</div>
        <div class="gameName">哈希PK拾</div>
        <div class="qlist after">
          <span>玩法</span>
          <span>投注金额</span>
          <span>最高可赢</span>
        </div>
        <div class="qlist after">
          <span>1,2,8</span>
          <span>1</span>
          <span>9.80</span>
        </div>
        <div class="count after">
          共<span>3</span>
          注 共
          <span>3</span>
          USDT
        </div>

        <div class="ebtnbox flex-center-center">
          <div class="leftc">
            <button class="van-button van-button--default van-button--normal" style="color: white; background: linear-gradient(rgb(239, 244, 255), rgb(176, 184, 201)); border: 0px;" @click="handleBetCencal">
              <div class="van-button__content">
                <span class="van-button__text"> 取消 </span>
              </div>
            </button>
          </div>

          <div>
            <button class="van-button van-button--default van-button--normal" style="color: white; background: linear-gradient(rgb(162, 193, 255), rgb(64, 128, 255)); border: 0px;" @click="handleBetConfirm">
              <div class="van-button__content">
                <span class="van-button__text"> 确认投注 </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 确认投注 - end -->
  </div>
</template>

<script>
export default {
  name: 'Betting',
  props: {
    show: {
      required: false,
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isShowBetConfirm: false
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
  },
  methods: {
    handleBet() {
      this.isShowBetConfirm = true
    },
    handleBetCencal() {
      this.isShowBetConfirm = false
    },
    handleBetConfirm() {
      this.isShowBetConfirm = false
    }
  }
}
</script>

<style lang="scss" scoped>

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

.queren {
  width: 22.75rem;
  color: #333;
  text-align: center;
  padding: 0 1rem;
  font-size: 1rem;
  .title {
    line-height: 2.75rem;
    font-size: 1rem;
    position: relative;
    >div {
      text-align: center;
    }
  }

  .gameName {
    text-align: left;
    margin: 1.375rem 0 0.6875rem 0;
  }

  .qlist {
    background: #f9faff;
    position: relative;
    color: #41434f;
    padding: 0 0.625rem;
    display: grid;
    align-items: center;
    height: 2.5rem;
    grid-template-columns: 35% 30% 35%;
    span {
      text-align: center;
    }
  }

  .count {
    position: relative;
    text-align: left;
    font-size: .9375rem;
    padding: 0.9375rem 0 0.8125rem 0;
    color: #41434f;
  }

  .ebtnbox {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 0 0.875rem 0;
    .van-button {
      border-radius: 0.625rem;
      width: 7.5625rem;
      height: 3.125rem;
      font-size: 1rem;
    }
  }
}

</style>
