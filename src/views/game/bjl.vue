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
                <div class="itemImg itemImgGreen flex-column-center">闲</div>
                <div class="boxs flex-center-center">...</div>
              </div>
            </div>

            <!-- 投注区 - start -->
            <div class="playContent flex-between-center">
              <div class="l_bet flex-column-center activePlayItem">
                <div class="bigSize">庄</div>
                <div class="smallSize">1.95</div>
              </div>

              <div class="middle">
                <div class="firstBox flex-column-center activePlayItem">
                  <div>庄对</div>
                  <div>11</div>
                </div>

                <div class="twoBox flex-column-center activePlayItem">
                  <div>闲对</div>
                  <div>11</div>
                </div>

                <div class="threeBox flex-column-center activePlayItem">
                  <div>和</div>
                  <div>8</div>
                </div>
              </div>

              <div class="r_bet flex-column-center activePlayItem">
                <div class="bigSize">闲</div>
                <div class="smallSize">1.95</div>
              </div>
            </div>
            <!-- 投注区 - end -->
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
  name: 'Bjl',
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

  .icon-drop {
    position: absolute;
    right: 0.8rem;
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
      .l_bet {
        &.activePlayItem {
          background: url(data:image/png;base64,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) no-repeat;
          background-size: 100% 100%
        }
      }

      .r_bet {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAC6CAYAAADxjuLaAAALiElEQVR4nO3d209c1QKA8bVmzzAzMFdgBjmFtlKkVLFNBxMalKKZ2gIWUy+t2iI2ppAYUaJpqsZUTfTJS9RoTbwmJmpMfTMN8cW+1J6/4Dycx3MqtRctUEBuA8zJKmtyljhQ7szM/n7JpLRPhexv1m3PRgrDp59+6nrzzTer+/v7N4yNjXmnpqYcQoikAHKHtCxr2uPxjIbD4YsnT578d2dnZyL13d0IIplMypaWFv/58+frBwcHJ4UQw0KIcSHENBcCcpB6o3cLIXyBQMB59913/7Onp2dIpXAjiJ6eHndbW1tjX1/foBBiQAgxpmMgCOQih355hBChYDDo/+CDD84dPXp0TCaTSauhoaHml19+8QohfhdCTDBNgk2oASFPCBG55557Rs+dO/cvVYnr4sWLAT0yEAPsJKmv+QHdQN6NuVRvb29CT5OIAXajrvmx3t7eiVQQzkQioWKY4lKATU0lEgm1ieR06HlUktEBNpa6/mUqCMD2UkEA0AgCMBAEYCAIwEAQgIEgAANBAAaCAAwEARgIAjAQBGAgCMBAEICBIAADQQAGggAMBAEYCAIwEARgIAjAQBCAgSAAA0EABoIADAQBGAgCMBAEYCAIwEAQgIEgAANBAAaCAAwEARgIAjAQBGAgCMBAEICBIAADQQAGggAMBAEYCAIwEARgIAjAQBCAgSAAA0EABoIADAQBGAgCMBAEYCAIwEAQgIEgAANBAAaCAAwEARgIAjAQBGAgCMBAEIAQIhQKSSFEkiAAIaTL5VJBMEIAisvlEowQwAyZn5/PCAGkJJNJ1hCAJgOBACMEoKWCYIQAFL/fr4KYJghgZoQQjBDADAdBAP+ngphmygTMcBQWFiYIApghy8rKCALQHLfddtuoCkImk8mIlPIfQohr/HRgRwUFBeHh4eHfhRBXGSFgd7K6ulrd2TfJLhMghLVp0yZLCDFFEIAQjvLycqGD4F4m2J61cePGSYIAZlg1NTWjeg1BELA3n89nNTQ0DDNCAELInTt3ur1e7zhBAEJYW7ZsUTtM6pQ6KQgCNmdt3bp1OjU6CIKAzTnvuOOOMT1C3EAQsK1wOOzas2fPYGqHSRAEbMzR2NioFtRjTJkAIawdO3aoz1FPpBbUgiBgY65YLDZhrh8EQcCuKioq3Pfff/8AQQBCWPF43OP1ekfMBbUgCNiUtXPnTnX+MG6uHwRBwI7y8vLc+/btG9IL6r8gCNiNvO+++7wVFRWDs6dLgiBgQ9a9996r7l8ak1JOzf72CQJ2425ubh7R64e/IQjYiWxubs7fsWNH/+zt1hSCgJ2o7VanEGLEvF3DRBCwjby8PM++ffvUp+PGpZTJdN83QcAuHI8++mhBTU3NQLrt1hSCgF1YTU1NUk+Xpuf6ngkCtlBZWel98MEH+/V2a9rpkiAI2IR15MgRXzAYHJxrdymFIGAHec3NzeqDQCNSyjmnS4IgYAOOtrY2f11dXd9ch3EmgkCusx555BG1mB6a6+zBRBDIZepGvsCBAwfU6DA632I6hSCQy6z29vY8IcT1dHe2pkMQyFXy9ttvL3j44YcHFrKYTiEI5Cqrs7MzPxAIzHsyPRtBIBep0SG/ra1NLaT/XOjoIAgCOcp67rnnfEVFRQvaajURBHKN3L59u+/IkSPqVHo43afi5kMQyDXW888/n+/3+xc9OgiCQI6R9fX1vkOHDqlt1qHFjg6CIJBjrJdfftnr9/uvLWV0EASBHCLb29vDra2t1/TaYcE7SyaCQE5wu92u7u5udT33L+bcYTaCQC5wnDhxoigWi11dzuggCAK5oKqqKr+zs1OtGQYWes/SXAgC2c751ltvBcrKyq4u9I7W+RAEspk8evRo6ODBg+rM4bqUclmjgyAIZLNIJOJ+9dVX1TW85G3W2QgC2cr53nvvFVVWVl5Z7kLaRBDIRvLpp58OPvnkk/0rsZA2EQSyTnV1tfe1115Tj7T/fSUW0iaCQLZxfvjhh+FNmzZdXsmpUgpBIJs4Xn/99eK9e/f+oU+kV2yqlEIQyBZy7969ge7ubrWb9Md8T/BeDoJAVigrK3N/9NFH3nA4fGWxHwtdDIJANnB++eWXRVVVVZfUrtJKHMDNhSCQ6axTp05F9Lqh72YPK14ugkAmkx0dHeFjx46N6C3WeR9lvxIIAplKxuNx/9tvv61+Fdal1Vw3mAgCGWnbtm2eTz75xBcKhS4t9fPRS0EQyDjRaDTvm2++UYvo39R5g5RyVdcNJoJARvF4PK7vvvuuJBaLXdLnDWsWgyAIZBjr9OnTJfF4/IpeRK/K4dt8CAKZwvr+++9L9VMzrq7FjlI6BIFMYH399dcljz32mLo/6cpiHl+/0ggC68367LPPou3t7epJ3ZdW4w7WxSAIrCfHqVOnoh0dHcNCiN/W6qxhPk4uB6yTGyNDR0fHn8bIsCZnDfMhCKwH69tvvy05fPhwapq0ZgdvN0MQWFMej8d5+vTpW1pbWwcyaWRIIQisGXUCrc4ZGhsb1dbqZb1myJgYBItqrBEZi8U8P//88y2NjY1XM3FkSCEIrDb50EMP+X788cfimpqaizqGdd9NmgtBYDXJ7u7u8Oeff+7bsGHDr/rQbTRTYxCsIbCK1BlDSUdHx6TL5bqgn5KRWI/bMRaDILDiNm7cmPfVV1+pm/QG9eJ5cC1v4V4OpkxYSXL//v2+s2fPlsbjcXW36q/6oQBZEYNghMAKcrz77ruRZ555xpGfn39BP5F7LJPXC+kQBJatsrLS/cUXX0QbGxuH9cJ5IBvWC+kwZcJyyK6urvD58+dVDGqKpEaGPinlRDbGIBghsFRq4fzxxx9HW1tb1aMl/6tHhaybIs1GEFgsx0svvRR+8cUXC6LR6B/6c8/qJr3JbB0VTASBBVO3X7z//vvR3bt3qweH/SdXRgUTQeCmPB6P9c4770QOHz7sKiwsvKpHhT9zZVQwEQTmI1944YVQV1dXsKKiQo0Gveq3feqnYeTMqGAiCKQjW1pavCdPnozs2rVrxFg0j67mk7czAUHAJHfv3u155ZVXiuPx+JTL5bqsn7g9nIvTo3QIAkJ/XsH9xhtvFO/Zs0d4vd5rRggTuTo9Socg7E3W1dV5Tpw4UdTc3Cy9Xm+fvit1KJfXCfMhCHuSTzzxRMGxY8cKGxoapl0uV78OYViHkHGfZFsrBGEv8vjx48HHH388VFtbO64fGXldb6HaOoQUgrCB2tpad1dXV2E8HveUl5erUeCiDmHEbmuEmyGIHKUO07q7uwMHDhwI3HXXXdNOp/N66hlI6nRZ341KCLMQRG6Rzz77bKCpqSlQV1dnRSKRESMC9bWaJk3ZYft0qVQQSZfLJRKJrPlQEwwej8fx1FNP+R544IHArl27nJFIZFR/OGdYrw0YDRbhRhANDQ3W2bNnpfo6a/7nNnbnnXfmHTx40F9fX58fi8WscDg8ZmyXpkaCCSHENKPB4qggJltaWlQQlvo6m/7zdqEWxfv37y/Yvn17fk1NjbOiokKtCVK/qlaNAqM6ggRTouWRyWTSOzQ0VH7o0CHPTz/91M8osb5KS0utpqamgtraWk91dbW7qqrKWV5ePqUv+hH9GjNGgQTbpUuXTP71cldBqJEhdOHChc3Hjx8f/eGHH4aIYvVt3brVpW6X2LZtm3vLli3uW2+91VlWVuYsLS1V7/7j+qIfNd79J/QIMGmX+4rWwt+CEDP/6BJCFCUSiX/09PS4zpw5M3jmzJnRy5cvM4W6CfWOHgwG1RuL3Lx5s2VZliMYDDqKi4sdhYWFzlAo5IxGo85AIGCpfyspKXFEIhHp8/mm9AU+oS/48XQXvn4xDVolcwUh9XoiIIQo1H96eAjBgiTTvKb1a0q/Uhd2wnhNzXpNpv7Oxb920k2ZzL+r6VOefjl1MDInfxIrI/XDS/dnKozZgUwbL2QSIcT/AI1WJ5teydx6AAAAAElFTkSuQmCC);
        background-size: 100% 100%;
        color: #4080ff;
        &.activePlayItem {
          background: url(data:image/png;base64,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) no-repeat;
          background-size: 100% 100%
        }
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
          &.activePlayItem {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABUCAYAAABqUaJKAAAFGUlEQVR4nO2dXW7bVhCFD8krB30ukOan795C+tiHpHvoRgL43UGypLQLqJfQBbRp+5AFxJbogjYvNTycoaQ2QDr1OcAFJVqi7fl05g6vgDvNxa+3GFUAvALwAsA34/MbANtx7MyxN8dbc5wuNoqf/9/V0P/XjKM1x84cizkOYzPG+C8AVwB+ujy/e44K6msArwE8A3A9ArLDwrKjJ0gerIeqhkZrANlhIdlxBuADgHeX5/g4gBpe9AbA0xGSHTfkKobVB7AkHxKDKg6oMxp/Ario6W5w0iczrh1nrcGy6Y/1UMBx2kOQ9iJI/OGvcRsM9LKMc1IFU2F5zto6sOSoWGuOKjS29KGvMazvfzG86PkI4joAVn+2NcDW0l/VQwXW0OO1tLcZj14M7Xufl/GkB+qaYN0QKHaVHDWX5yiu9HYjrBrDqobSZSlOhceweL6y6Y/LdIHai0HVsrwYSF4mgpcmi0lpFpQHLCoqvHlKiuen6PbGgzSlyEKBj2CtpT+B8uWBKk61zIVDS867Y1NMwHl4KZFdZVcplPrmsqmvpr2dKR4YknXSosIu5A52VjT4fkqOWso6ZDcC8GIUFRyzpbtCOdNzlgeOCwqBWooBVDd5oOyc5C4sFJO6dlR2HwInR63Lc0o0J3VUsi/uVdlRkbsiaAIVi0F5kBrjos4BtHBUT/dEO3rMLvMuVtf7pL3aMSadOccAt2b+4rhPbIoJsDf4PolBMig5aq9mjIX3HRUXGF6sZ3O/LRX7E6HxJ0Brfffy1vrs80Mx7T0mhZzgfWPLb/SqvF6pbxKvMvTGXRGMKJYTGwZ16vB+gbRXbwqJnoqKk0ZdPbdzyy2dWxtw4AjWvWwK/Kcxnc61kFIoAnWqK+SiWJ8llq2CnEK37ChB++9oxkJzVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIJVBIxKG+TdenLaMaiFZwUaqLUdyo8wY71WWKpOSqJ6l5IjSHZ0Lm1gWA/OsmPyakxnc6VI98cjbrzS32sbeDmak3c2n8TawbVOhdt6bwdPUGyqVQbK8ax9GK6xuAOFP+AL8btCvic/aO0VelevMFvF8Q0iveMSTkCjgerC/bpU+qbqyVQFpgX2xBaCV7MF7TdWaJN1u0Oj5K/77nd35wfe3Gf2BSHNrd2qxv88ram9o/RvudLRaC4Gxufc3mUI2gf051FoJaKut2sDY9B5zmKL8KQqrhBiEAtdchRtpVrBG/mKM9+mwMAuK+ENqhfiqu+dgUUj0Vq9CDZC3kNEi0gdbuJFaW+7gAo11kenG0QeA9SJ1ChPFCHmiRvzHEGjQFxC4eqqMxUM8pYvOLDzSijbtYMa1NBbajNEEOCA4qb/ArUUgyqpYqO098A5xEBm0ZdPd8EJTgcJ6lh8rq8tb7opremt7MAVj1/1zrvdwDfBoWD/SVbp/eeNz/JUffyHOXNU8VJfwzqt+FFVwB+PFA4cBvYY5v6PzRo3ndzLcUyaurP85V11tXwop8BfA/gCV2cb9IiSHKUrzVHrcFiR/0xMKotyN8CeA3gmeOkCFJUSAjUvfjLPw/U2g1whfT28hw3tZj4COACwA8AvgPwGMBXTunOTZK9plRWSn1++vMqQLsi9AHALwDeX55jCwB/A40tGf4/mmzhAAAAAElFTkSuQmCC) no-repeat;
            background-size: 100% 100%
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

          &.activePlayItem {
            background: url(data:image/png;base64,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) no-repeat;
            background-size: 100% 100%
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

</style>
