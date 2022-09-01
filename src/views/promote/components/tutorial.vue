<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 推广教程
-->
<template>
  <div class="promoteLesson">
    <div class="pic-box">
      <div class="detail">
        <img src="@/assets/images/promote/group_0.png">
      </div>
    </div>

    <div class="item-box">
      <div class="intro">
        <span>业绩是怎么算的</span>
      </div>
      <div class="content">答：业绩是推广玩家的流水情况，比如你推广一个玩家，他一把赢1000，一把输800，则他为您带来的业绩为1800。若未充值过，则不计算业绩。</div>
    </div>

    <div class="item-box">
      <div class="intro">
        <span>收益是怎么算的</span>
      </div>
      <div class="content" style="color: red">答：收益是自营业绩的流水*返佣比，加代理的返佣差收益构成。</div>
    </div>

    <div class="item-box">
      <div class="intro">
        <span>佣金多久结算</span>
      </div>
      <div class="content">答：采用日结模式，每日24：00结算佣金，业绩达到多少按佣金表发放，可在代理页面领取已发放佣金。</div>
    </div>

    <div class="item-box">
      <div class="intro">
        <span>佣金多久可以领取</span>
      </div>
      <div class="content">答：佣金从次日八点开始发放，中午十二点前发放完毕，发放到帐即可进行领取。</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tutorial',
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

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

</style>
