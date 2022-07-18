<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 取款
-->
<template>

  <div class="wrapper deposit">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" @click="$router.go(-1)">
            <div class="back">
              <i class="iconfont  icon-fanhui2" />
            </div>
          </div>
          <div class="flex-center-center title">提款</div>
          <div class="flex-right">
            <span class="jyjl">交易记录</span>
          </div>
        </div>

        <div class="view">
          <div class="withdrawType">
            <div class="title">我的余额</div>
            <div class="money-detail flex">
              <div class="detail-item flex-column-center">
                <h4>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGFSURBVHgB7ZY9S8NgEIDvYotftILgLrRYF52cHPygUpNODla66O6/yE9wdBM6iKCDW4tQCJKlY9FBt26CgopRIzbJedGoQZOGxKpQ8gzJe++9ue+EAMTExHQJDNKL4toRIhCEgqha3V/28fdqKxFkApGWIDyWz/5HAgL8E4EZc5CVbzuEK1z+tCO2eOf46xEIIKjHnkhS6ZxvE46ocD8XISRhS42FwvowJ+QOOJ3NSv0QMomOpS4WyzNExhgiGkSmZjEAD+xY6HMdEzKZwdlcrnTHWp2IJjmGSw4uUasdKH62faPkcu5pWnJTVXdvPHSBpRbF8jiiuc06CTx67pmxLMtCo3H6lEo9b4ni6k67PXRSr1euPw1Qky8XTuxNdyL5/MZoMqnPCQLNE8EZ+Axax768RW1NcfkWWOSSU4uneYSnepqNGry239dHtn3F63vTxAF2aMuqrpuKohze+tmOOtV2JjlH/JOpfidSwN1w/GNix73vOOp0up6zvw8Y8kchJuYXeQGe8YZ6Dwq84AAAAABJRU5ErkJggg==">
                  USDT
                </h4>
                <h2>0</h2>
              </div>

              <div class="detail-item">
                <h4>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOGSURBVHgBrZRdSFRREMfPva5hS98Z0UtZRkVBaH48Je0qgSDUi70ZYdBDIIKQGIjuh99CSVER+SA9RCGEpWUvmaspBWUqiBaUJkUGRZiGwqJrv8l7xa53XY0G5s7cMzP/mTNnztH8fn+bUmobPBIKhTocDsfrmZmZAa/X+0P9B9J8Pl8W8pHx/wneCjs1TRtDDpG0T9f1V8jhQCDwBp5RqyDN4/FsAGAUfQIOzc3NHUdugXeSJBl5BN4Dxxs+ffgMREVFDQaDwQFieylyImwC+dAOH2IdPAloIdXmEtS42LGmpmb99PR0Euo+QDPwicM3gf81yHdqvsUFYL21SyDV9lPZboKzcbxEhZdLSkp8KgIRm0BsPereP4Call5aWtpr2qPkQ19/ut3uTIxOWnYjPT39CcmqXS7XgdTU1M7u7u5gGPBNxNyUduLvhqUD19LS0gKdnZ1fxEc3nTHeRZwUnQpkN26cM51OZx9AcTbg0qIe/LbCKdIa2upHr2MS2/hPXdiBENV+IKAK+YIdjcLjiYmJt2JiYvayXk5VXVQlk6Vo3TFa2Ir6GM4G7JeJQ9xzMNbKzpAvNUtVVRjW06Y8y7qXs7mIegEOUuUVZLXI2dnZeCo+gn4Qn/1Imbrtxnk8+ytBeXl5MgFPcYoDc9yS5Kz0F3UtLDYZzZ1wCB4hpkdGFjnE/2k4iV26NGtv6WM7js20oc7Gdg+xnylrItl7bnwP1Y+QPLjIx4PIJ1ES6x8dVhAM9QCcQ12SQLYuwwBIrY1N8eykYPei5gm4rOlWp6mpqRZEAg4uG4wdVD5iBy5TBXgr7OMMr5vrSxLU1tZO4tSAmmuDE4/tm3WRs9tF4nbU+zIQi226sqdmAk7IRTIXKisr5RGUln61OnMWVxEhRrrQarNNAHAA0QcvjCvv0D41PzHDi33Lyso8FHOYnWUUFRVNriiBQY0EnjF/GLmNAm6ZmAKAi+Es81BXnMB4OmLNwyaZ9P+zaa+oqJCX1MdaCT6D4XDCJjAu2h2Ac4yEh7gfE4Ytjr43yU1mYmrUMqQtZwToKAla5BlHyiUbRPejy43txp6jIpAeIUEXop/K85EbAf0OuF9s0dHRhWoF5IjkwNv0kOfgPOCbAT+FjGU5rbi4eEytgPSIDrreAOg2wGPhQyTMCTcx/5TAOOzbxm8pc9+hVkERWyTEDh4gJpmYarVK+g0YSM719+DmSwAAAABJRU5ErkJggg==">
                  TRX
                </h4>
                <h2>0</h2>
              </div>
            </div>
          </div>

          <div class="withdrawType">
            <div class="title">提现类型</div>
            <div class="withtype flex">
              <div class="bk">USDT</div>
              <div>TRX</div>
            </div>
          </div>

          <div class="withdrawType">
            <div class="title">提现金额</div>
            <div class="xlaccount cell">
              <div class="trc20_icon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABoCAYAAAAU9xXbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAeJSURBVHgB7ZxtbBzFGcefZ3bvTOw0wYZAAyp1iHs2l7aoDqQS5UOlFrVKq36osKWA1KSN1H5pK4R4jY28RoEgQAgBX0BAcAIfsOEDiAiQQJDwGgLhNRAfMcYkQUSJg4HEzt3tzPDfPYeXoCQ+23vnCc9P2WRfbmdm5z/PzDzPzoZIOBImQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEYYZQrSVdJ8JSMktJYC0T81HT9qnCZO8NGnSqeCsKdgo5jGU1lFu++v803bS3K/ytj3a54oLl0+R7REthZKeT09gcJUFfnz7WZUWCU4hgjiGCOYYI5hgimGOIYI4hgjmGCOYYIphjVFwwky8wonDyWeokqXhoalZh5GCYaridFdfSlECQ1Np/IUo6v6zbmF9gYzeSmnJbHaYqUJ2WHkWkp5p1d+BlFhRfwt6Ssu6zdH1ueaqbKJh6tJ0TitgfSdwj2aix2eqMYdHrg1LHOPmtK9AwsvJVj/MOzJTzr5RYcZmj/EqvXGTS4RgimGOIYI4hgjmGw4JVbsyfScxMBzYI0JCCaIeyWaqlUf3zkE09M6ch00lwv+dYS/OY+Gr86Mxyksa88mlMuR5FOsNKh6Pwx/I4LsIv3Fvz2dxd71xx5WjcGLq7GeUwNMOormCoqWxfkNKaTtU6fzKH6lwUqAV2Px+T2FZcjnqAPLY6/Dha6zCICt9pDH/l4dgwraQyBYMUzyPtTaQ4BQe6Ho5NIxl7FpQMsY0h1TrkOoKqeQ3XR3D9dWNVzp+jR7b/fc1++JB0rFVNSVN5wQJSmWzHfBqjP+LoPNRgK0TIwJV+iw3v0koPpsh73XJxJNSpPXTaF7t2LL0zX3K20erh8lJXV2QCnOkJXyW255eVP3F3btC/Pt7twhalF8CJDgJuaqDZ/JPC2dbz5ipt61E7S1C2n1myv0KGsxXxLki+BU7cRhUWNvbvrD1YaSushGDcuDaoqeHC39Ayz8eD/wEijaGFbzbWvE9WPbfjY3+QstuY2vuih59Y64X5ZXo6N09KsOWrg3JuoN42RfMWcWao2AozX+KzabVWXYBre2Bsz2hFG3YMpN+qhHhJxhK56f5rT0X38h/0NiuhAnowvof88OJcamAI4mhyA1sqax/liF6j0kYQ0WsuLGy12v+vMvaJ5gXFYbO+IyiGuzd8/M8HDlESoJdJRjC0/uZ1q35vWd2HTBawtTfbdPqW/mVdw9Xs/6cViNhPtAV7KzIPXbPAau8uNvRIWp2xuemBzkt3rFg9QNNNUrHEpoc6L0KYb0MsFtMd/Rtyq3KXBPtOGLG+j81detNHNJb6B/bfQK3+FqG/J89Zv6q8twgTJAnBGAP2VbCyWfERZnTU2zvjpsfTTS4TzSwxNlPsOvxCG+8vSbz3m37BYENW8cvfHLL9X8u6jmVtbW0enaCcfffVczOfhJ3YvfDwOeUX30wioj/9gqGQxX0HbsO/j42fmQPzevDtv2Yeb15/XXvL2msaS1P0qRL5Q1V6PRRZDtyT5p5Vv25a13GZP8vfiJNd4xfhgvDl2y9Zs5USILFpfbY3SOtDxTb4mZdR5G99y7A19lVEFl70auwT2qQ/yy2j/XCKbLljXHPPtRfjEc6xpLyoEWAW6sFnwganofTOzeA8imA1kzKY/ITM5tnty9e8MuFMolRQS4vv/rc/Vl8/345So2b/TyjrRXC4M7g2d/x3X6IEz5vQ7xhYGbxHCcHjW1KTAZ7XG9Q1HDx0oVXeCuTShtzUESUYwvkhGOYHqPOtqPOdxUK4dXD3jXvj8FTkn7X1mQl0LxxHIaKQ0mFiB5viQYWO94ywGMq2lXxB+F0tY4sWantosfX4ZNbqd9G4hByySGX2d29DoiNwqB82rNd++FHNlkR9MTuZN7aTBfHBpobhlJpTv5RZX4B234TpyZ9RipOOckdUwfso9nv486intdGgrtRuWOhXaPZjbEMNS7VGM/wkW4RZFY3GNMdjRLs0FFCe9WBtVqVgb/B3tW+jG8hGx7W4Vs/ano5y1ECMtCFzJse9Adcd9TmY96JkTyO/D3C0KTfr3FeovX3iDv8UqV4sMZqELFpkm87KtyjF56Hp/BK9TysqfTaefuH4B39VWnMS//kUZRk01u7HbGkTRsshKqZe6n9q256o3NUKDM+caP34wpwoGGzzhVO8UVVbrOMGG5rfwFR+CotKoxYbMCgtRJ96Biq0FseNP+hij88IctqHwO4BWEspmGz5C0WmiAIMFIz3biq0B/K+P1Y7tG3/+0Ff4XifsVYSd9YH/iD4S5TpuW4LZoqLy0kmXjW14oYgCvZ+L/jryAu2iq9LnDSlFl6q1CAYX/rVWX63dDidOEJPziFLBBxDBHMMEcwxRDDHEMEcQwRzDBHMMUQwxxDBHEMEcwwRzDFEMMcQwRxDBHMMEcwxRDDHEMEcQwRzjGMLNi0rdIXp5NiCnZhfmziNdImOIYI5hruCdUcfKdgfXYNzZ13ikQRkzFrq9jxz2sRv8siLPrhwGNdngeV/MsdurPAVBEEQBEEQBEEQBEEQBEEQhASJ/4tzQRAEQRB+bHwNhoDWBU/GKMgAAAAASUVORK5CYII=">
              </div>

              <div class="input_box">
                <input type="number" placeholder="请输入提现金额" class="withdrawinput">
              </div>
            </div>
          </div>

          <div class="withdrawType">
            <div class="title">虚拟币账户</div>
            <div class="xlaccount">
              <div class="qb">
                <img src="data:image/png;base64,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">
              </div>

              <div>TDJJqGNpkZpSioBegZM8yyq1K7YnZA17nu</div>

              <div class="copy">
                <i class="iconfont icon-xuanzhong" />
              </div>
            </div>
          </div>

          <div class="btnGroup">
            <div class="btn_submit">立即提现</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Promote',
  metaInfo: {
    title: '页面标题',
    meta: [
      { name: 'viewport', content: '页width=device-width,initial-scale=1面描述' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ]
  },
  data() {
    return {
      tabIndex: 0,
      imageList: [],
      tabs: {
        nav: [
          {
            id: 0,
            name: '全部活动',
            type: 0
          },
          {
            id: 1,
            name: '限时活动',
            type: 1
          },
          {
            id: 2,
            name: '新手活动',
            type: 2
          },
          {
            id: 3,
            name: '日常活动',
            type: 3
          }
        ],
        images: [
          {
            id: 1,
            type: 1,
            image: 'https://designer-trip.com/image/Activity/newcomer1Cn.jpg',
            time: '2022-07-02 - 2022-07-09'
          },
          {
            id: 2,
            type: 1,
            image: 'https://designer-trip.com/image/Activity/newcomer2Cn.jpg',
            time: '2022-07-02 - 2022-07-09'
          },
          {
            id: 3,
            type: 2,
            image: 'https://designer-trip.com/image/Activity/newcomer3Cn.png',
            time: '2022-07-02 - 2022-07-09'
          },
          {
            id: 4,
            type: 3,
            image: 'https://designer-trip.com/image/Activity/dailitiaocaoCn.jpg',
            time: '2022-07-02 - 2022-07-09'
          }
        ]
      }
    }
  },
  created() {
    this.imageList = this.tabs.images
  },
  methods: {
    handleTabChange(index) {
      this.tabIndex = index
      if (index === 0) {
        this.imageList = this.tabs.images
      } else {
        const item = this.tabs.nav[index]
        this.imageList = this.tabs.images.filter(f => f.type === item.type)
      }
    },
    handleItemClick(item) {
      this.$router.push({
        path: '/activity/detail',
        query: {
          id: item.id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background: #f2f7ff;

  .withdrawType {
    margin-top: 0.625rem;
    background: #fff;
    margin-bottom: 0.625rem;
    padding: 1rem;
    .title {
      padding-bottom: 0.625rem;
      font-size: 1rem;
      color: #36373b;
      border-bottom: 0.0625rem solid #dfdbdb;
      margin-bottom: 0.625rem;
    }

    .detail-item {
      width: 50%;
      h4 {
        display: flex;
        color: #36373b;
        margin-bottom: 0.3125rem;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        img {
          width: 1.125rem;
          height: 1.125rem;
          display: inline-block;
          margin-right: 0.3125rem;
        }
      }

      h2 {
        color: #4080ff;
        font-size: 1.25rem;
        text-align: center;
        font-weight: 450;
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

      .trc20_icon {
        width: 1.875rem;
      }

      .input_box {
        width: 100%;
        input {
          height: 100%;
          font-weight: 700;
          font-size: 1.25rem;
          display: block;
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
          margin: 0;
          padding: 0;
          color: #323233;
          line-height: inherit;
          text-align: left;
          background-color: transparent;
          border: 0;
          resize: none;
        }
      }

      .qb {
        width: 0.75rem;
      }

    }

    .withtype {
      justify-content: space-around;
      width: 100%;
      >div {
        box-sizing: border-box;
        width: 7.1875rem;
        height: 2.25rem;
        text-align: center;
        line-height: 2.25rem;
        color: #36373b;
        border: 0.0625rem solid #aeafb1;
        border-radius: 0.3125rem;
      }
      .bk {
        border: none!important;
        color: #3661e3!important;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAABCCAYAAAAi/4gBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPPSURBVHgB7d0/bxtlHMDx3/O4Dv+KFBADYsFVN1j8CpDDUNIw2FGhVRdqA40QLER9ATW8AJqFJYkUh4GoQVW8NC0sOYSYcXekupW6W1WTtrF9T58nqdvGsRPf+UnV5L6fIed7fJayfPW7exwpSnrI/bgwenz97QuhCXOiJGuXMgIkV12M1JTW1euzXyz2ukB1L5yeulrQRi+ExtSMMRX9+rFg9dczdwRIqImLy9mw3c5qncqLlqwSXe4OSnV9YMaIydvl4o25s38LgB3Gi0sZldZrysji6vy5cmf9WUgTU1fLxkj+YXNjLKiUGgKgp0JxZXQz3Vyzd2zBjflz025Nux92EhVtRBeICNhftTLZGGmmx+wYKpz65veCW9uaSBNTy7fDzfbYzcr5ugAYyPi3SzmtUisbzfUTansambwdUZMCIJLTF5fX7KGq7UzK29u6qgCITLVlUYyxk8moTFu3bgmAyMKRdqCUyrqNBiMAYnMNaQEwNEICPCAkwANCAjwgJMADQgI8ICTAA0ICPCAkwANCAjwgJMADQgI8ICTAA0ICPCAkwANCAjwgJMADQgI8ICTAA0ICPCAkwANCAjwgJGBIzdc+lmMCILZPp025pZhIQGwuIqPksntNSEAML0bkEBIQUXdEDiEBEfSKyCEkYED9InIICRjAXhE5hATsY7+IHEIC9jBIRA4hAX0MGpFDSEAPUSJyCAnoEjUih5CAF8SJyCEk4Km4ETmEBMhwETmEhMQbNiKHkJBoUSM6/kbvdUJCYkWN6P13RWYvifxc2v0eISGR4kT0y/f2+I7I//d2v09ISJxhIqr8KfLbX7uvISQkykFE5BASEuOgInIICYnQiejMJyJzl7Yj2UuUiBxCwpG3YxIZkZMfPI2kT0xRI1KmuRVSfeKHax8KcAR1385d+2c7DhdJr5iiRuQYSde0KKmpRyYnwBHT75nIxdErpjgROco8rmttdBCqsCjAEbLfxkJ3TNmT8SJyVLhZVYXiymgz3brdNq3Jm/PnAwEOuSi7c1+dEil+9vw8akT2vq6+dkWd0NXKZCMMw5LWqYVccWFUgEMs6hZ3ZzI5kSOydPtu2R1VZ+HzqT+uhCbMPWxujAWVUkOAQ8bHX3FHYUIpBzPqJ/f62fb39dkvp+0vUX1z5K3/xr9byghwiLzsiFS4PtOJaOu8+4Lxr5eKKqUvK6NqSuuqMeGt1bmzNQFeUS8zIvudUSM090vBzHvVHev9PuCCss9NeXtFxp5mBXgFuX/y1Rr5SA6K+7LVqHRdyeNaavNu0Hzw72KvR58nR32c9Psk9nAAAAAASUVORK5CYII=) top no-repeat;
        background-size: 100% 100%;
      }
    }
    .cell {
      padding: 0.625rem 1.125rem;
    }
  }

  .btnGroup {
    padding: 0 2.75rem;

    .btn_submit {
      margin: 1.25rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      height: 2.625rem;
      background: linear-gradient(180deg,#a2c1ff,#4080ff);
      border-radius: 0.3125rem;
      color: #fff;
      text-align: center;
    }
  }

  .jyjl {
    font-size: .9375rem;
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
