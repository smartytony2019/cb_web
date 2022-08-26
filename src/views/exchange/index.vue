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
          <div class="flex-center-center title">兑换</div>
          <div class="flex-right">
            <div>兑换记录</div>
          </div>
        </div>

        <van-tabs v-model="activeName">
          <!-- 站内兑换 - start -->
          <van-tab title="站内兑换" name="a">
            <div class="view">
              <div class="money-box bg-box">
                <div class="totalMoney">USDT 兑换 TRX</div>

                <div class="flex-between-center showBalance">
                  <div class="flex-center-center Ub">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA0CAYAAADBjcvWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOhSURBVHgB7ZdbbExdFMfXWvuc6Uc/UfXRj/qk6MVXNKGJS+KRBIkHkiY8UCR4EvHSaJHpoBKXeCGRJiSl8dI+kHjy5IEglCAMvbgnrQZhlF7mzNnLmhKRMMcZjDqyfy9n5uy111n/tddeZx8Ag8FgMBgMvx2YjnHxiepVoKkafj2oCao6Vted8TvBgjRgpDxE+B+GAuaR6ZgT/KEYYUHDCAsaaXVF1HAZGHb6MiYcJ51svZcJM+yW940GHyiEW5AGab3H0mFKw45yhbrFy6atsi5ZMQwZwOyxoDG0wjJShB/4vj3GPDgv/0RNbrYdGoP97nRt8T9yf2ryPiEOaMZCBF7u6UZzPVr4TprSXxrhLWi+T8DPEolQNIZ93S/W7X0LiN8l358wETLxSHVOKNueqrQz3yVVRIwjGbhNRqOYgPux0MCd7tUHeoHD4jPCkxu3lVsMV73ctj2w1Kc/kQgXNIXzrP54iZx4xxPhNHnueOmc3UzwWLmJe7H4qytdG+r7/IjFbwkqaqyZjayqGPRTOQWfpyznUuuKfV0y09P5T+uKDFh4MpyPCWcJApUhasu11aGOlbuiXjGkFhYOU1GBcxCJliHopa2Ve9J6j2Sk3UuiC4/vWEjITaK3rr1y9/5Upimbh4gqQ8LN4q3HHfNvK/wOSAn29PXfkOUISbJ3SdmnjD/lQPvaPTclQ6fl5zR6/ixa3LBtWcmxqhHJ0gAfsOWj4/pdK1mp0qNbcouOb9+Uk511ReYNA6RIci+nmvLNPVbcWLOYWW1E5gXixZEPzRYEvC1TW3ScrzmW6nq0NhJLno8G3X2s+/L6DXbP8NFzdYIUKyQZpmSn0Kg0OA7bIRy4t6ru4ufPSl7CtbXYPLZ3bDxLjVPKnsmk54nTGWIwR4Zfi/NT7MYPd6zbf90rdN/tfkLDlvzhOKyMERdJW54p4iZKKBOkP0lLhpfi6rmY9TPyG3DxgazXGykXFxFdl9lBRjcZvHRSpQBtJlSSJOUy5MjNSfJ7hIgfLcv8t1jlin9JBr9ApE4N+gI6cDau7GuP1kgSEX6wK3rNa6qgkp5JeS7ZxYp4sgYqkFPyf8QSGOMocTxKhM/ydsPnpLJ75RoTlwNyfSgxPwGmu9qyOjvaoRNqI+xHyJcBZogpJ7eWq4T6Aw/Bjg1DiTkEBw0jLGgYYUHDCAsaRljQMMKCRsaEKXaGNGkZ+2wZpKJCQWnp1z9LolGE5mYXDAaDwfALeA+aIWs1kWCE8gAAAABJRU5ErkJggg==">
                    USDT
                  </div>

                  <div class="cut">
                    <img src="https://designer-trip.com/image/change.png">
                  </div>

                  <div class="flex-center-center Ub">
                    <img src="data:image/png;base64,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">
                    TRX
                  </div>
                </div>

                <div class="flex-center-center zj">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP2SURBVHgB1ZpLTuNAEIYrJiAEC4JYo/GSHYENAgHK3GBuQOYEhBMwnIBwgsncgBskCBA7kpGQYIGAAQkk2AQJEG/m/1u25ZCX3e4Q55MiJ+1X/64qd3V1EmKIvb09++XlJZNMJiff398zHx8fqUQikcKulHsM2s7QdmZZVgXbCpq2Zmdnz8QACYlAuVxO3d3d5fB1CR2zRQMKw2cTn40oorSEbG9vZ3DjVXzNiEFwzQKstaYjKJQQug/cZh0u8kM6iI4gK+iBOzs7ube3t3KnRRDcI4sHVsSDWwp6TiCLwJXyeErL0h3y8/PzK+0OaimEwfzw8FDEE0pLd6ngjfgdVJsd0FRIjES4tBTTNEZiJoKk+/v7i812NhTCmIiZCJc0XjrrjXbUudbu7m4WIn5LvFnBCyDvb6gR4owTdClbIjAyMiITExOCdKWm/f7+Xg4PD+Xp6UkiUu3r65vyjzM1rgURq1FFkPHx8ToRZHh4WO0zQIoDs7/BE0JrcCASAzQS4TI4OCgm4MDMVMn97QmhNcQQrYSYxMn3FEqISWt8MZlisaimCUoIcqhupR+RGRgYUH1XQmCijieCnQIhkeXWctzKlh6FE7r9/f1vFqel0uMgncpYsMak9D5pxkgcc6qwKIvY0uOwYmPpVj/iBMtOgefsYUBCJ1+MeSHMpVqlKJ1KX3hVTh1TogE7bdu21zn+bmcNZsAzMzMqlX99ffXaT09PVZqvSxKBUnVKm6EZHR2VsbExCQuFf7YMBeoKYSmWwV4VTW5ubkxMkuTx8VFub29FF1VPxrYkmtA1Dg4OalxEB14j4gOpMEX5KxHg06R/63JycmLCqhULJZaSROT6+louLy8lLDzn6upKooJ615bFCTyDRSJCq4Tx86iWdGHfUbRTMSKofBfEAMfHx4HchCIYFybg2gq3Ssjz8/OGGIAdZLmnHUdHR0bedgRupfquhDj11JIYgGNBK5c5Pz+PNPB9okC34hcvRYGvrYkhGMR8ATRqv7i4EFPAGl6fPSELCwsl199MQKv43aedpTTwrEFqkkbEChdUtEd6P+5gSTFBYycofFP5rUHqithcYsNmXeJNFkXsP/6GujTeqXLnJb7kP4sgTVesYJmyxG8+X4GIqUY7mk6suMzFEyU+VJw+NaTlYijrqs5yV+8uhvpxlrty0h0CLU8HmrPzQkj3f5pILoPCmStywFwQESRw8WFxcbGAsYE+WpAOAxGbuNfU3Nxc4BxQ6081iB0bscNFlqyYpQQr/IKALQlJpL85OYKWuQymW+hThQNMI5iBtwrmdkQS4oeiUArKoFMsiqdZivWLo89jU3WKHSV8KkNDQ6Xp6el/YoD/bO0RrdvvqnUAAAAASUVORK5CYII=">
                </div>

                <div class="flex-between-center showBalance">
                  <div class="l1 flex">
                    <input type="number" placeholder="0" value="0">
                  </div>

                  <div class="dengyu">=</div>

                  <div class="l1 flex" style="justify-content: flex-end;">0.00</div>
                </div>

                <div class="btnGroup">
                  <div class="btn_submit">立即兑换</div>
                </div>

                <div class="textinfo">
                  *站内兑换，需保证钱包中有一定数量的TRX，若钱包TRX数量不足以支付波场交易费用，则会导致兑换失败。
                </div>
              </div>

              <div class="money-detail">
                <div class="detail-item">
                  <h4>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGFSURBVHgB7ZY9S8NgEIDvYotftILgLrRYF52cHPygUpNODla66O6/yE9wdBM6iKCDW4tQCJKlY9FBt26CgopRIzbJedGoQZOGxKpQ8gzJe++9ue+EAMTExHQJDNKL4toRIhCEgqha3V/28fdqKxFkApGWIDyWz/5HAgL8E4EZc5CVbzuEK1z+tCO2eOf46xEIIKjHnkhS6ZxvE46ocD8XISRhS42FwvowJ+QOOJ3NSv0QMomOpS4WyzNExhgiGkSmZjEAD+xY6HMdEzKZwdlcrnTHWp2IJjmGSw4uUasdKH62faPkcu5pWnJTVXdvPHSBpRbF8jiiuc06CTx67pmxLMtCo3H6lEo9b4ni6k67PXRSr1euPw1Qky8XTuxNdyL5/MZoMqnPCQLNE8EZ+Axax768RW1NcfkWWOSSU4uneYSnepqNGry239dHtn3F63vTxAF2aMuqrpuKohze+tmOOtV2JjlH/JOpfidSwN1w/GNix73vOOp0up6zvw8Y8kchJuYXeQGe8YZ6Dwq84AAAAABJRU5ErkJggg==">
                    USDT
                  </h4>
                  <h2>51.88</h2>
                </div>

                <div class="detail-item">
                  <h4>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOGSURBVHgBrZRdSFRREMfPva5hS98Z0UtZRkVBaH48Je0qgSDUi70ZYdBDIIKQGIjuh99CSVER+SA9RCGEpWUvmaspBWUqiBaUJkUGRZiGwqJrv8l7xa53XY0G5s7cMzP/mTNnztH8fn+bUmobPBIKhTocDsfrmZmZAa/X+0P9B9J8Pl8W8pHx/wneCjs1TRtDDpG0T9f1V8jhQCDwBp5RqyDN4/FsAGAUfQIOzc3NHUdugXeSJBl5BN4Dxxs+ffgMREVFDQaDwQFieylyImwC+dAOH2IdPAloIdXmEtS42LGmpmb99PR0Euo+QDPwicM3gf81yHdqvsUFYL21SyDV9lPZboKzcbxEhZdLSkp8KgIRm0BsPereP4Call5aWtpr2qPkQ19/ut3uTIxOWnYjPT39CcmqXS7XgdTU1M7u7u5gGPBNxNyUduLvhqUD19LS0gKdnZ1fxEc3nTHeRZwUnQpkN26cM51OZx9AcTbg0qIe/LbCKdIa2upHr2MS2/hPXdiBENV+IKAK+YIdjcLjiYmJt2JiYvayXk5VXVQlk6Vo3TFa2Ir6GM4G7JeJQ9xzMNbKzpAvNUtVVRjW06Y8y7qXs7mIegEOUuUVZLXI2dnZeCo+gn4Qn/1Imbrtxnk8+ytBeXl5MgFPcYoDc9yS5Kz0F3UtLDYZzZ1wCB4hpkdGFjnE/2k4iV26NGtv6WM7js20oc7Gdg+xnylrItl7bnwP1Y+QPLjIx4PIJ1ES6x8dVhAM9QCcQ12SQLYuwwBIrY1N8eykYPei5gm4rOlWp6mpqRZEAg4uG4wdVD5iBy5TBXgr7OMMr5vrSxLU1tZO4tSAmmuDE4/tm3WRs9tF4nbU+zIQi226sqdmAk7IRTIXKisr5RGUln61OnMWVxEhRrrQarNNAHAA0QcvjCvv0D41PzHDi33Lyso8FHOYnWUUFRVNriiBQY0EnjF/GLmNAm6ZmAKAi+Es81BXnMB4OmLNwyaZ9P+zaa+oqJCX1MdaCT6D4XDCJjAu2h2Ac4yEh7gfE4Ytjr43yU1mYmrUMqQtZwToKAla5BlHyiUbRPejy43txp6jIpAeIUEXop/K85EbAf0OuF9s0dHRhWoF5IjkwNv0kOfgPOCbAT+FjGU5rbi4eEytgPSIDrreAOg2wGPhQyTMCTcx/5TAOOzbxm8pc9+hVkERWyTEDh4gJpmYarVK+g0YSM719+DmSwAAAABJRU5ErkJggg==">
                    TRX
                  </h4>
                  <h2>51.88</h2>
                </div>
              </div>

            </div>
          </van-tab>
          <!-- 站内兑换 - end -->

          <!-- 线下兑换 - start -->
          <van-tab title="线下兑换" name="b">

            <div class="view">
              <div class="money-box bg-box">
                <div class="totalMoney">复制下面地址或扫码二维码进行转账兑换</div>
                <div class="totalMoney">1USDT≈13.51TRX</div>

                <div class="qr">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAGgJJREFUeF7tXXuwVtMbfrsQXSjdUFRuDY2EdBlkMJhUqnGZLmhojNJNjsuYUkRqiFBSGlKiBpWQjFwmU0RRSCbpIhVlQolKym+eo37ft9fl22vty/nOd87zzpx/9nnX2ms/ez3fu9ba76XCv//++69QiAARMCJQgQThzCACdgRIEM4OIpADARKE04MIkCCcA0QgGgK0INFwY6tyggAJUk5eNB8zGgIkSDTc2KqcIECClJMXzceMhgAJEg03tionCJAg5eRF8zGjIUCCRMONrcoJAiRIOXnRfMxoCJAg0XBjq3KCAAlSTl40HzMaAiRINNzYqpwgQIKUkxfNx4yGAAkSDTe2KicIJEaQrVu3ytKlS0slbBUrVpQrr7xSG9u6detk1apV2vVLLrlEqlatGrj++++/y6JFizTdFi1aSMOGDbXrb731VipYnHnmmdKoUaMSu98ZZ5whJ510kna/t99+Ww4cOJDKM8bt9LzzzpP69evH7aa4fWIEwYTo1KlTIoNKupPDDz9c9u7dq3X7+OOPS1FRkXb9+++/l5NPPjlw/dNPP5U2bdpoutOmTZMbbrhBu16hQoWkH6O4v2eeeUb69OlTYvd77LHH5I477tDuV6VKFfn7779Teca4nb755pvSsWPHuN2QICRI+BwiQRJK2kALEpxstCDh5EtLgxbEE1kusTwBy1KnBaEF4R4kB39IkJQJMmLECGnZsmX0nzDPliNHjpTFixcHWtksyIYNG+Tbb781brx37NgRuI5TrE8++UTTbd68uTRo0EC7Pn/+fOeRT5gwQRo3buyk/+GHH8rKlSs13QEDBmjXPvjgAxkzZox2fezYsdK0adPA9Z9++kl69+6t6foQ5Pzzz5chQ4Y4PUcSSsuWLZNhw4ZpXRXUEgvHge3bt08CD6c+rrnmGpk1a5YTQWwdnnLKKbJ27Vqn+yWh9NVXXwmOb12kb9++MnHiRE3V9Dv34osvyo033qjpLlmyRFq3bh24jufFc6viQ5Crr75aXnvtNZfHSEQHP0Km43sSJAe8JEgGHBIkPg9T/w5CCxL+kmhBwjEyadCCRMCNFoQWpOCXWFgvY9MbRypXriw1atTQuvAhyJ49e2T37t1aH+eee66sX7/eaXjVqlUTHALEEbiwwKXDRZLYgyxYsEDwjNmyceNGufjii7UhPPTQQ3Lbbbdp101f0m17kD/++EP++ecfl8ez6tSsWVPUb0tl1oL89ttvcswxx8QCDC8TpzSq+BDE9iXdZ2A2VxOfPnx0kyCI6X5wrYGLjav4EAS+bTh9iyO//vqr1KpVK9AFCZIDURIkCI7PKRYJ4k7VvGzSaUHcX5CqSQuSQYQWhBZEQ4AEIUGcfl65xOISixakgC0ITn9UwcmRyavg2WeflW3btjn9MOA0aP/+/cZTJfUi9EynR1OmTJHNmzcH1HFoMnjwYK3fyy67TPvqDiVu0p1eV0bJ5u5u+lBYHvYgJnd3BDoh4EkV+HN9/fXXToj7BEwhkAunbKog8AsBYC6ShKsJT7FEhAQJTjcSJIMHCUKCaD/GJAgJEpgUtCC0ILYv6bQgtCC0ICJCguTY1ZUlC4LAKNcApqFDh8q8efM0ZH7++Wftms8m/fTTTze60iAgzBRzsXz5cu1+Rx55pBx99NHcpLucRlh0+CXdMe2PDWMEJCHuwkV8CIIAKrjBq+LzodA2Jp5iubyt/3RIEBIk52zhMW/KMemF+B3ElDiOFiSIAD8UuluhYs2ytAchQTIvnxYkDxYEATSdO3f2pGBQHTlxEc+hik88yKuvvmr8sj19+nQ5/vjjA13v3LlTPv/8c+1+o0aNEgQgqWIKPoKriSnJwKRJkzRXk3r16smtt96q9YuMJIiYU8UUG2MDuF+/flo2F2zoTalVsee59tprta58LAhSl65YsSLW+547d64WIFdmfbFiIRXS2IcgPuOw5ea19WH63UE2Ekw4VUwx6XA9gQtKSUmaAVNpPQMJEgFZEiQCaCLFybrTiiiMNqLwViRIOEaxllg+3dOCBNHyWWL54OyjS4L4oHVQlxYkAmi0IFbQ8vIdJNordGtFgrjhpGpxiWXGLXWCIF/rscceG+2tRWiFtJpqMJAtNy9Og6ZOnardZfz48dqYbUusgQMHSrt27bQ+ZsyYoV1Dak9UP1IF34rUXMBwETGdeCG46t1339X6MLmffPTRR/LUU09pujh5O/XUUwPXd+3aZTwd69Wrl7EwkmmJhRzFppOwCK/RqQncedQ8zGhYUHmxnJ40ZaXSUv6gpF1NSjr1aMqv0bl7EsQZqv8USZAgYGklr/Z8LampkyCe0JIgJIjnlPm/eup7kKgDS7IdCUKCRJ1PiREEG82uXbtGHUeq7UAQuLeo8uSTT8rdd9+tXUdRHbX0cRJVbm17ELigqEVxmjVrJlgKqdK/f3+ZPHmydt1UxXfmzJlyyy23aLpIA6oWNUJJbMSgqGLzxUJe5NJa5XbOnDnGA44okywxgkS5eSG1SZMgJhyScDVJM6tJIb27OGMlQRzRI0EcgSpjaiSI4wslQRyBKmNqJIjjCyVBHIEqY2okiOMLJUEcgSpjaokRBKcgr7/+eirwIHAIlZxcBB+J1qxZE1CtVKmSDBo0SGuOAKiFCxdq12+++WZBRaNssRGkR48eWrUmtCsyxLq3bdtW4CumChI/1KlTJ3A5iU06TscwPlVweoeKUtmC58VzqwKXl+rVq2vXgSdwdREEpv34448uqlYdVLk64ogjAv9HGe/Zs2drbbp06aKdQka9eWIEsYXcRh1YdjvU8Hb15/JxVrRVmDKF3Pq6u/s8d2kOmALRTZGbOFZ2LT3HxHE5YtJ9JopNlwRJAsXcfdi8eUmQlGPSk3i1JEgSKJIgUVDkEssxLxaXWMHpxSWWJ924B/EELEude5Bw7MpsldvwR89oIB2NqcpRt27dBEV3XOS+++6TCy64IKCKUgSqbxUUUKt9+/btWrcnnniiHHbYYYHrNgsyZswYwamJKgiOcpUTTjhB2/DCz8l08vPggw9K9+7dnbrGqeKdd97ppIvnxXOrAnxMNe2Bp6nEg+lmW7Zs0erR161bV5ADWRWkNXr66ae1602aNJGKFSsGriP4zFTJ67jjjpOqVas6PXeYUqlaYiERNCaAKnhgUzJo08Mhsg5ZxpOWJL6DJDEmW4UpU9+2gKkkxhG3D5xKYm+pCn7gTJPedD+Us4OTbJpCgjiiS4I4AuWoRoI4ApWtRgsSDhotSAYjWpCDWHCJlZkUJEg5JshNN91kzEfboUMHbTN91FFHGQN84C5x1llnBX6KsZls1aqV9vOMfc0PP/wQ/rMtIt9884307t1b0x0+fLixtLNPdg/UAnHdVN5zzz3OgWlIrPbAAw84PZ+v0meffSbqJzSUklazpdj6rV27trHwEPIUo0y1KnALUktalzsL4vOSkBzalLA5CVcTn3EkoWs65k2i3zT7KOnMiiCfepJJguR4wyRImtM/vG8SJByjgEaaHwpNQyFBPF9QwuokiCegJIgnYFnqXGKFY8clVjhGAQ1aEE/AElanBfEE1MeCIPgJx5VxBBu2ZcuWaV3gBAvVmbIFpy3vvfeeptuoUSM57bTTtOtwz9i2bZvT8BDMhfzDcaRTp05agJatvxdeeMF4ODFt2jStCfLW4lTIRYAZ3GZc5aWXXpIDBw4E1IHZl19+6dQFArHGjRvnpAslkwVBFbBLL71U6wMVrVCBLAnJy5f0WrVqCZzP4ghyOyEQRxWTqwn8mvCLpwqARN4nVeBHtXbtWqfhYWIivU5JiU8ZaB9XE9/s7qbnnTVrljFi0qRr+5Juw9FEEJtuwaceJUGi04kECceOBBERWpDgRDHFvdGChJMpTINLLC6xiucIl1hmqpAgJAgJksOMJEYQ2z1QJQk+QdniuwcxOSuWlmNe2ybdFEyURAEdG86uwUu29klYEFvfPllNEA8Er+7SIiSIISbd5+WQIOFokSA5MKIFyYBDCxJOJloQEeESKzhRmjdvLsikmC1wgYcLiqtwieWKlJ8el1hcYiW2SeceJAf5EHikbsahjpy9anUnBAeZvmB/8cUXgkAcVRAktHPnzsBl2yYdZZKXL18e0EUOWZR2VsWWehRZQ+AK4SLIBAKLqAo+6KmSxBILpZ1XrVrldD+X8R/SsW3SP/74Y2dLhkwnl19+uXZbZCr57rvvAtf/+usvMbnHXHXVVcYANJ9nQZwI3IiSkMQsiM0XC1knMGAXQTYLZLVwERtBXNoe0vHJzWvrF4mn8UHORZIgiO1Lusv9c+n4ph419YVsMqZ67SZdRHPidDINKagv6SRIZgqQIBksSJCDWJAgJAgtSI7s7iQICUKCkCBOS2kuscrxEgsnVaj4o8ojjzyiBdEgZc+iRYs03SQ26YjxUIOjkHcWaWNU8dmk4ztFz549tT6QP9eUu9b0DeP999+X559/Xutj9OjRgvy82YJqSqYUOj6b9I4dO8rDDz+s3Q/PoX53QTGcpk2bGnXxsVcVVK/at29f4LLPJh0pfFCPXhWcNuIkMo6Uyk267YF8vqQnQZAk0v4kUWHK5H4+ceJEMR3/+sSk+xAkzTrpaYXc+uTmtc05EkRE0nRWJEEyUw/fq2CVVSFB4ti4rLa0IBkwaEHCJxUtSA5fLC6xwicQl1jhGJXKJZZtk47yveqG3LZJR8EXlAxWBZs5NS8riqc899xzmu4TTzwhS5cuDVyvXLmyTJ06VdPFETSyc6gyb948bdPsW4LNtAfBs5nqn5g26bZpgE0+NvsugkJCpj3PsGHDtKQUSGyxevVqrdsklljr16+XXbt2uQy5+P3HLSeObCkXXXSR0/3ClFJ3NQkbQPb/0yp/4JvVxDTmJAhiw8LkzWvTTSK7+5IlS6R169aBWyCLi6kqVhIEYTxIQmWgSZDwnxMSJByjJDVoQQwx6bQgGQRoQUpRnXRakPDfPlqQcIyS1KAFoQUpnk/cg5hplTpB+vfvL82aNXMi9datW43VbNEeJ1EuAneXHTt2BFT3798vkydP1prbUo+a7oO8s7Nnz3YZQrGOKUfthRdeKD169ND6KA2bdASkvfzyy9rYUML5l19+MY5ZDfO1BUz5bNJxOgk3FlWw1HOtwuX8khwUUydIEt68KBeMXK4uYnI1sbXzIYjLvbN14qb9sd0vrSWW7X5FRUUCnzVV9u7dq9V2t/XhQxBbH8jlbIrc9H0vvvokiOMSyxvYChW0Jj7evCRIEAESRKS4gLwp5JYWJDNZaEF8f6ri6dOC0ILknEFcYqV8zMs9SGb+cYkV/de84JdYPo+O6lAoiKJKWt9BfMYGXVMBHbhmwEUjDUkrcZwtHiSJZzC5u9v6RbluhCdkiy1pgy2zYsEX0PEBnQQJokWCZPAgQUSKC8LTgmQmBQlCggR+MkkQWhAusXKsuUgQEqTcEWTTpk3FdQNVwVfUBg0axLIgAwYM0NxHAPCCBQu0+w0cOFBatmzpsyXSdE1loJGac/jw4ZouSkDDxcJFkJ8WcSWqDBkyRJAdJVuQ5WTkyJGaLg4LTKWrkQJVFYwNZarjCLLBmHIBI3OM6wEo3of6FRzuQHivqsATAvl5VcHcUoPmbM9VUGWgTce8vhbEBIStiGecyRClrU8ZaFtMus99fT4U+vRr0+V3ENefgRC0fZJXkyDRpy4JEh27KC3z8iWdBInyqv5rQ4JExy5KSxIkCmpZbbjECgeQ3ryeuXlpQcInlU2DFiQ6dlFaJmZBkJ/WlDYG+V5r1qwZGBtOI0y5cnHa1bBhQ+05OnToINu3bw9cR4CPKbfrqFGjNLeGKMC4tpk+fbqWZghtTW4pPpt0nJqZUhI1adJE6tWrpw2vTZs2rkMuTpekBrFt3rxZkFtXFVQOw4mhKghsqlixotM98Z7UCmG1a9cWpFdSZdKkSTJlyhTternyxXJCNUvJVCfd1gcqHJletO89XfVtFaZ8cvOa7pVmEU+ftD+uOPjqIQAOYQyq2DIrkiA5ECZBwqefT5VbEiQcz0MaiS2x3G/pr0mChGNGgoRjFEWDBImCWlYbLrGiAcgl1kHcsM5Eyd9sweYOm01VcLqFtaYq3bp1K/YAdhGsYZGTNlvw62pyB8HBgrr5RzuUdkbRHReBW4oplyxKKKjis0nH4YZpE2sb0xVXXKH9C/mSkY1FlUJcYuFQx7U0N1YcSWVASd2CJFH+IG5MOqonIQuHKj4VplzIEqbjQ5CwvtT/mw4FUJ7a5KNViATxwaNUZne3PQAJkkGGBMlg4bvEIkFSzGpCCxKcXrQg7nTjEquoSEPLVILNHVK7Ji0ILYg2O7jE4hLL9JPBJdZBVObMmSOoMJQtKHGMylOqIJho8eLF2nUE/VSrVs3pRxwbtDVr1gR0K1WqJIMGDcr7Jh3VbNUS1baHgnvHo48+6vTMUPLZpHfv3l1w0pMtONEzlahG8FLcak3wH1NP9WwEwfs3BZU5AyEiXbp0cQ5iC+s39SVW2ADy+f+SPsXyeVbUMUcyB1fxIYhrn9Cz1Qfx6cPkzWsjiE+/JaFLgpTgHsTnhZIgPmilp0uCkCA5ZxctSEIht+lxOL2eucQKx5YEIUG0WZLWMW/4dMxocInlg1Z6uoktsZC9pGvXrumNNEbP+FAIvyRVUHkKf6pgc6yevNluj5Ofnj17xhidFFdUWrlyZaAPBDT55AKuUaOGNgb4sJkqa8FXTa0lb3sAmwXB/VBeO1vw/mfOnKl1Zdqkwz/O5O92//33y7333qv1gU296o8H/7M33ngjFvZhjRMjiC2rSdgASuL/ti/ptnubklfbdH1i0m19lHTqUUQfuh6llpYqt6bk1e3btxf8MKcpJIgBXRIkAwoJktAehBYk+u8YLUgGO5/s7rQg0edcoCWXWEEgucRyn1ipL7GQH9a1Qq37sO2a2NgiQ0e2pEkQ5AJu165drKEjl+zGjRsDfdiSNixfvlzWrVun3W/GjBnatcaNG0vbtm2169gEq+44vpt0HACouXKRN/iuu+5y2qTb7mezIL169ZI///wz0Ozss88W5DVOU1IniE8JtiQe1FQGOk2CJDFmUx82gvTt21fgFaxKobma+BIkLZzD+iVBYm7SwwCO+n8SJCpyybYjQUiQnDMqrS/ptCAHEeASK9ovGi1INNySbkULQgtCC5IDgbwQBG4fnTt3jkX2Fi1aCJwNVUlik46TsN27dzuND7mATZWuUPo4jlSvXl2Q/1YVVKlST+mgo5ZZxjUEXZnyF5vGtWXLFrn++uu1f+GjKapdxRGcvCEgy0WQDgqnby7SqlUrGT16tItqZJ28EMSW3d3nKTAhTJMwCYL4jMMncZxPvyWtu3bt2uL68IUkZeJDoU8JNp+XQ4L4oBWuS4KYMaIFCZ87OTVoQWICGKM5LUgO8GhBYswsQ1NaEFoQDQG4LpjiROrWrSvIhOIiPhYEOYrVQjK4R506daRy5coutytur+Y6RkMfdx7kI963b1/gfhs2bDC6pdgGVb9+fXHNKI98y2rsCPIzmwoB7dq1S/CnCnTVgj1wYxo/frymi5LTVapUccIzTKlcL7GSCLn1IYgtcRzSAeG7h4v4uJrY+vNxVrT1gVzHcOFxEZ+sJj4FdObPny/Iu6ZKqczNm0QZaBewD+kkscQiQXwQD+qSIJ7YkSBBwHxKsNGCZLCjBREpji1GCGUcoQUJJySXWHFm2H9tuQeJmReLe5DwScg9SEJ10sOhzmikaUH69esnOAnJFpSnRo5gVebOnStI0aOKqWAPTsZMp1U44VGXZDgl6t+/v9avbZM+dOhQZ/hQZll1V4FFHzx4sNbHO++8Y8yX7LMHQalsnJJlC1xpbr/9du1+XGIVwBLLNNMQLeeThsd0BNqnTx9BImdVfGLSbQRxZodFEXXZTWXjioqKjD5vPgTxGRsJQoKQIDkYQ4KQICQICZJBoDQ7K9q+g3CJlUGAS6yU82KRIJnJxj1I+G6ES6yD1ZBcA2hskOI0yJSP1icexGZBUJNbreNuu59tfKZNOvyDTPW78SOCuujZsnr1aqMbBdLi9OjRI3ymicgrr7wiIKUqCPBCPuBsgZ+TqQ45Asf27Nmj9aGe8kEBLh5IzxNHkAIJp4iqnHPOObJjx47AZVS+MlXFwgmZa537sLHm5TtI2KDi/D8JgiSR3d3VkQ/PavqSbsvujlMw06Q3YeZTJz0O5ofazpo1S4B/HCl3mRVLc9KGJHyxfCyITZcEySBDgsT5eXFoSwuSAYkWxGHChKhwiRXT1YQWJIMAl1g52Gbz5h0xYoS0bNkyPpUdexg5cqTmGmFLPZrEEgvLI1OWkXHjxjmOWGTChAlaJg/fPQhiI1RBUosxY8Zo18eOHasdCjgP9qAiiteoAUwo4Qz84whiVUzZXK677jotkKpMhNzGASuptmkSxMdZ0ed5fAnicyjgMw6bbkm7mpjGQYIk8SZFiiPfTM6DSVgQEiShl3SwG9t3EBIkWZwDvZEgyYNLC+KJaSFWmKIF8XzJWeokiCd2JEgQsLgePNyDhE/AgtqDbN261bm0cPijJ6uB0xZT9gtUalq1apV2M0TAmVxCTKNasWKFbNq0SftXx44dYz0E0hEtXLhQ6wPZTxo1aqRdxw9USQrwVE+xkrg/XGxcq18hFRDy86YpiX0HSXOQ7JsI5AsBEiRfyPO+BYEACVIQr4mDzBcCJEi+kOd9CwIBEqQgXhMHmS8ESJB8Ic/7FgQCJEhBvCYOMl8IkCD5Qp73LQgESJCCeE0cZL4QIEHyhTzvWxAIkCAF8Zo4yHwhQILkC3netyAQIEEK4jVxkPlCgATJF/K8b0EgQIIUxGviIPOFAAmSL+R534JAgAQpiNfEQeYLARIkX8jzvgWBwP8A/tkTmK8ThpUAAAAASUVORK5CYII=" style="display: inline-block;">
                </div>

                <div class="xlaccount">
                  <div>TQuJWS33E8pMjsCuA85ib8onc2mANHHHHH</div>
                  <div class="copy">复制</div>
                </div>

                <div class="textinfo">
                  使用去中心化钱包向以上钱包地址转帐USDT(TRC20)，系统将自动向您钱包返回相应数量的TRX。
                  <br>
                  <span style="color: red">注意：不允许使用交易所转账兑换，否则无法到帐造成的损失由自己承担!</span>
                </div>
              </div>
            </div>
          </van-tab>
          <!-- 线下兑换 - end -->
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Wallet',
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
