<template>
  <div class="wrapper home">
    <div class="flex-1 index-page">
      <div class="page loginBg">

        <!-- 切换语言 - start -->
        <div class="flex-center-center rights" @click="switchLanguage = !switchLanguage">
          <img :src="languageDefault.url" alt="" class="rightImg">
          <label class="language">{{ languageDefault.name }}</label>
          <div v-if="switchLanguage" class="rightup" @click.stop>
            <div v-for="(item,index) in languageList" :key="index+''" class="rightBox" @click="handleswitchLanguage(item)">
              <p class="van-hairline--bottom" :class="index == languageIndex ? 'ac' : ''">
                <img :src="item.url" alt="">
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
        <!-- 切换语言 - end -->

        <!-- 内容区域 - start -->
        <div class="view">
          <div class="logo">
            <img src="https://designer-trip.com/image/logo1.png">
          </div>

          <div class="zanzu">
            <div class="line" />
            <p>赞助伙伴</p>
            <div class="line" />
          </div>

          <div class="zanzu">
            <img src="https://designer-trip.com/image/sponsor1.png">
            <img src="https://designer-trip.com/image/sponsor2.png">
            <img src="https://designer-trip.com/image/sponsor3.png">
          </div>

          <div class="logReg">
            <!-- 登录 - start -->
            <transition name="fade">
              <div v-show="isLogin" class="login">
                <div class="right">
                  <div class="title">登录</div>

                  <div class="van-cell1">
                    <div class="icon-img">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAABRpJREFUWEe1mHeolnUUxz/fdtEeNo2yaVvSwDQb/iFESZZElgkVlmlTNG0QQQstKygquU2saNDOhmFFaEW2bEd7UVRmZmW0Tnwv5ydP732ee1+FDrxw3/f5nfN8z/qe87tiBSQiVgF2A/YFBgPbAesBy4DvgBeBV4BXJfm3tkTtnIqIXsCJ+dmpDZ2fgLuADklv9HS+WxARsQYwBTgHWLdibAnwLvA5sBRYG9gC2BnoDRS7/wD3ApMkfd0EphFEROwN3Ar0S+Xf07vbgJck/VlnNCJ2AY4BTgG2zDOLgLMlzarTqQUREcOBe4C1gABmAtMkfdZTaMvziHDknMKLgI3SzgxJk1ttdAEREYOApzPEPwLHSXqy6eX5smWS/m6IzPbA/ZWIXijp4urZ/4CICFf7AmBT4GPgSElvthqPCOfddXIYsA3gGnFnXCtpTs15d9AtwMh8NqaamuUgIsKh9wtd/Y5AP0lf1Bj0i11sLsYuj4EbJY2v0XN7G+BQwFHrXzqnCuJM4BrAFT1S0oM1hnYAXk9uWAxcbU4AtgImAPukzumSrqvRd6G+BWySKR8mKTpBZBTcQhsDT0g6tCG/DukJwG/AAElu005JG08BQ4BFkpzSrqGKOCvB+9lgSfMLCBv2CxwFG3+txovVAAM1cU2RNL3mjLnik0zVwZKeqzmzKuA0O3r3STq6gHgEOByw0iEOUY2yPTM5uXb2kPRezRnbc3rMLeMl3dAQjZOAm4CfXdgFhIloTWC4pEcbFN33joQrfaikZxuK71NgW2C0pDsbbK0D/JrPhigi9gIW5hDaoIkJM+9u3/5uR0n714AYBxTve0n6vg5E2prrqAPnGkQJzQdA37pUVIpvDHB7fncNTZS0JKfr8W7PTNdsSW7lRomIywwAuNkgLgXOA56XdGAPii7OB7J+fNQ5/SjJzSmwfAsMkuQC7Q7EVOByYLZBGL2HTWNrVi3lZJ2WOlXCcjG7TiZIer87AJmOicAMYK5BmMcvaCcSLWDcjuYTU7j3h3mS3BltSUSUSDxmEIUjPgR2lWSu+N8lIpwKA+kwiN2BtwG3qbvjj3YQRHSy7frWyc5aLOmvdnQzHU7dQZ3Elz+4Z927IyQ91GQoIsz9o7O13NqbA2ZA14M3LDvzMjCrjnWL3Rz/Pm8ZWEC44kcA8839rSmJiB2BM4Cx2YLtOGxPp9ftIhFR+MS11LuAsHdl9TpA0rwK6kmAi9d0bbGiR7Ip3l1gj/xsa8AE5mI16CIe+2MluZ096Ly3fpkz6G5JowqI1fOBwztH0rBUKJ3jr94T3ZreF0oou0QkictzyGTk64HFXeOBtjQi7NQV+ft+khZU94lTgeszv8d6SAHn52HPEw+kr9rJQ8Xj0xK4Se4d4Kjc3Dx/HvdmtnyfSCVHwzOkbzKhB5o/BnDEyrZuRJjOTfV22ClxR7kDvbl17iOtO6ZnvG9Q1VW9T8lnu1FoPRcRpfDLI29uXn47pW7bHgA8k5cd536cJN+mVkoiwpH19WHPNDBZ0pVVY033DpPIwxk6n/cl6CpJ5oG2JCK8Kp6cdeVdxFzidf+SVgPd3cDsQYcnYiqZDb38eoR7TvxSE3YTl29uo/LiYyCWbwAvv8tT0GMkyoFsN2/hHnDFoB+b4r1/eNPy3y7qzfK64E26iIG7KKdK+qEphO3eyjcE3LYOr+m6Jz17fkfeyj0Yu5WejHVRjog+ucgOzP9PmAHtscnshbxALVyRYfYvjhb/5QMxlg8AAAAASUVORK5CYII=" class="img-icon">
                    </div>
                    <div class="input">
                      <input type="text" placeholder="用户名" class="loginiput">
                    </div>
                  </div>

                  <div class="van-cell1">
                    <div class="icon-img">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABKlJREFUWEe9l3molVUUxX+reaCoSJpthMgGI4vSSrIiCoqysEnTRixMsXkiDbMyyCKTytK0ycqi8o9e8yBN0mADQUXzBEYjNkLpivU4n9x333ffu0m24XHfvd8++6yzv73XXke0abbXBg4ChgD9gW2B9cryJcAnwBvAc8ACSX+3E1q9OdneFDgHOB3YqDf/8vxr4A5gmqQfelrTEoDtVYGLgIsbTvoH8DLwCvAR8DOQGBsCOwEDgX2ANcumPwETJE1vBaIWQDn1IyVY1n4OXAPMk5RNW5rtjYFRwLnA5sWxAxghKYC6WDcAtrcHngW2Blw2vlLSn22mv9PN9vrAZGBsWfde6kfS941xugAo6F8HtgF+BIZJSlF1M9t7ADsDS4FFkj5o4TcMuBdYHXgX2FfSr5VvM4CngYOBVHUcg7qL2d4NuA3Yu+nRU8AYSR/XrDkceLiAmCtpeDcAts8Cbi4PkqoXagLtBwTkWuXZZ0CKtW/5nqwNkvRhzdqRwJ3l96GSHs3/nRmwvQHwZan2qZLOrwmwRqn8bJbMDJeUlGZ9qv9BYAtgoaR8r3tt9wPHlb22k7S0AjARuKK8976SfqsBkHc5D/gd2FFSen252d4FeLtkZLCkF2tibFI6KhkcJeku2V4F+LRU/URJk1qgvwk4O+9S0jEtfMKEA4BLJE1p4XMjMA54SdL+AZBiWggsC4jmk1VBbKeSTwRmSjqjRfDrgaHAVZJmtvCp9svjLQPgQuBa4C1Jaa1asz0bODmFKmlMK7/efi8Z/xYIYR0fAHOBE4BZksL3Xay0XTY+AtgBSJuFivPq6ixDKNwQwpkhKZ3SHPNJ4BBgSgCE2weF8yUlE42FlYy8CqQDVsRC2/0lpcMa495ehtsDAZBW2hUYLSkE0+g4rVDpF2UIVUOmJzDJQP5ywj7AeZJSG41xr8vvQEcAvAnkpGGxiog6nW3PAk4FZkvKZ9tm+5miH7p1hO2qE+YHQOV4taTLmpCmkk8DutBnOyhsLwAG17Wk7XtCZGHGALgFODNMJunY/wlA6iq64YIAGAHcDSyWtNnKBlDG9HelsIcEQLg9RRbrMoRs/+evwHbILKSWkdynmgXPAwcUxZNhURXhygAQsXNgsi5pZAXgSKBzPAJ7SkpnNHbBHEmntFN8DeCrjS6VFDmXeIcCjxefAZIWLRcktl8D9gLyOVDSMtuRVOmMX8oUy+xvx8KEkXbrpMAlzbAdCf9OkfPzJR2VQI0Adi+6PptMlzTWduZ7Jlyk+YpYlHMyusT2Q0CmaMZ5P0mdddcsycYDN5SdJkmaaDuS+7BymojUdixxo4CfiLawHYKL4oqdJCk80Gl1qnhOkdV5Hs4eLymo/7UVpRV6j5iJTZZ0eWOgOgCZclOzcXGMWBkn6bF2EdhO3HRThlulFyPtJzTH6OlmNLoAWbcsilxPRjokfVMHxnbkfIorgqVf8QnpZNDlotPNerwb2s7lJNeqyOrKopySlcz5xqtZqj4AKksn3NdJt9LiVtnr9XKahbaj83Kqo8uI7eltfFUU8q2S0gU9WlsAqgi2VwOifnM52QrI99hfhc6jit8Ph/S2cfX8H5JE/XRaV9gQAAAAAElFTkSuQmCC" class="img-icon">
                    </div>
                    <div class="input">
                      <input type="password" placeholder="密码" class="loginiput">
                    </div>
                  </div>

                  <div class="van-cell1">
                    <div class="icon-img">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABKlJREFUWEe9l3molVUUxX+reaCoSJpthMgGI4vSSrIiCoqysEnTRixMsXkiDbMyyCKTytK0ycqi8o9e8yBN0mADQUXzBEYjNkLpivU4n9x333ffu0m24XHfvd8++6yzv73XXke0abbXBg4ChgD9gW2B9cryJcAnwBvAc8ACSX+3E1q9OdneFDgHOB3YqDf/8vxr4A5gmqQfelrTEoDtVYGLgIsbTvoH8DLwCvAR8DOQGBsCOwEDgX2ANcumPwETJE1vBaIWQDn1IyVY1n4OXAPMk5RNW5rtjYFRwLnA5sWxAxghKYC6WDcAtrcHngW2Blw2vlLSn22mv9PN9vrAZGBsWfde6kfS941xugAo6F8HtgF+BIZJSlF1M9t7ADsDS4FFkj5o4TcMuBdYHXgX2FfSr5VvM4CngYOBVHUcg7qL2d4NuA3Yu+nRU8AYSR/XrDkceLiAmCtpeDcAts8Cbi4PkqoXagLtBwTkWuXZZ0CKtW/5nqwNkvRhzdqRwJ3l96GSHs3/nRmwvQHwZan2qZLOrwmwRqn8bJbMDJeUlGZ9qv9BYAtgoaR8r3tt9wPHlb22k7S0AjARuKK8976SfqsBkHc5D/gd2FFSen252d4FeLtkZLCkF2tibFI6KhkcJeku2V4F+LRU/URJk1qgvwk4O+9S0jEtfMKEA4BLJE1p4XMjMA54SdL+AZBiWggsC4jmk1VBbKeSTwRmSjqjRfDrgaHAVZJmtvCp9svjLQPgQuBa4C1Jaa1asz0bODmFKmlMK7/efi8Z/xYIYR0fAHOBE4BZksL3Xay0XTY+AtgBSJuFivPq6ixDKNwQwpkhKZ3SHPNJ4BBgSgCE2weF8yUlE42FlYy8CqQDVsRC2/0lpcMa495ehtsDAZBW2hUYLSkE0+g4rVDpF2UIVUOmJzDJQP5ywj7AeZJSG41xr8vvQEcAvAnkpGGxiog6nW3PAk4FZkvKZ9tm+5miH7p1hO2qE+YHQOV4taTLmpCmkk8DutBnOyhsLwAG17Wk7XtCZGHGALgFODNMJunY/wlA6iq64YIAGAHcDSyWtNnKBlDG9HelsIcEQLg9RRbrMoRs/+evwHbILKSWkdynmgXPAwcUxZNhURXhygAQsXNgsi5pZAXgSKBzPAJ7SkpnNHbBHEmntFN8DeCrjS6VFDmXeIcCjxefAZIWLRcktl8D9gLyOVDSMtuRVOmMX8oUy+xvx8KEkXbrpMAlzbAdCf9OkfPzJR2VQI0Adi+6PptMlzTWduZ7Jlyk+YpYlHMyusT2Q0CmaMZ5P0mdddcsycYDN5SdJkmaaDuS+7BymojUdixxo4CfiLawHYKL4oqdJCk80Gl1qnhOkdV5Hs4eLymo/7UVpRV6j5iJTZZ0eWOgOgCZclOzcXGMWBkn6bF2EdhO3HRThlulFyPtJzTH6OlmNLoAWbcsilxPRjokfVMHxnbkfIorgqVf8QnpZNDlotPNerwb2s7lJNeqyOrKopySlcz5xqtZqj4AKksn3NdJt9LiVtnr9XKahbaj83Kqo8uI7eltfFUU8q2S0gU9WlsAqgi2VwOifnM52QrI99hfhc6jit8Ph/S2cfX8H5JE/XRaV9gQAAAAAElFTkSuQmCC" class="img-icon">
                    </div>
                    <div class="input">
                      <input type="password" placeholder="点击完成验证" class="loginiput">
                    </div>
                  </div>

                  <div class="cqur">
                    <i class="van-icon van-icon-checked" />
                    <label>记住密码</label>
                  </div>

                  <div class="submint">
                    <button class="btn">登录</button>
                  </div>

                  <div class="bottom">
                    <div>先去逛逛</div>
                    <div>在线客服</div>
                  </div>

                </div>

                <div class="left" @click="handleSwitch">
                  <img src="data:image/png;base64,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">
                  注册新用户
                </div>
              </div>
            </transition>
            <!-- 登录 - end -->

            <!-- 注册 - start -->
            <transition name="fade">
              <div v-show="!isLogin" class="login reg">
                <div class="left" @click="handleSwitch">
                  <img src="data:image/png;base64,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">
                  返回登录
                </div>

                <div class="right">
                  <div class="title">注册</div>

                  <!-- 用户名 -->
                  <div class="van-cell1">
                    <div class="icon-img">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAABRpJREFUWEe1mHeolnUUxz/fdtEeNo2yaVvSwDQb/iFESZZElgkVlmlTNG0QQQstKygquU2saNDOhmFFaEW2bEd7UVRmZmW0Tnwv5ydP732ee1+FDrxw3/f5nfN8z/qe87tiBSQiVgF2A/YFBgPbAesBy4DvgBeBV4BXJfm3tkTtnIqIXsCJ+dmpDZ2fgLuADklv9HS+WxARsQYwBTgHWLdibAnwLvA5sBRYG9gC2BnoDRS7/wD3ApMkfd0EphFEROwN3Ar0S+Xf07vbgJck/VlnNCJ2AY4BTgG2zDOLgLMlzarTqQUREcOBe4C1gABmAtMkfdZTaMvziHDknMKLgI3SzgxJk1ttdAEREYOApzPEPwLHSXqy6eX5smWS/m6IzPbA/ZWIXijp4urZ/4CICFf7AmBT4GPgSElvthqPCOfddXIYsA3gGnFnXCtpTs15d9AtwMh8NqaamuUgIsKh9wtd/Y5AP0lf1Bj0i11sLsYuj4EbJY2v0XN7G+BQwFHrXzqnCuJM4BrAFT1S0oM1hnYAXk9uWAxcbU4AtgImAPukzumSrqvRd6G+BWySKR8mKTpBZBTcQhsDT0g6tCG/DukJwG/AAElu005JG08BQ4BFkpzSrqGKOCvB+9lgSfMLCBv2CxwFG3+txovVAAM1cU2RNL3mjLnik0zVwZKeqzmzKuA0O3r3STq6gHgEOByw0iEOUY2yPTM5uXb2kPRezRnbc3rMLeMl3dAQjZOAm4CfXdgFhIloTWC4pEcbFN33joQrfaikZxuK71NgW2C0pDsbbK0D/JrPhigi9gIW5hDaoIkJM+9u3/5uR0n714AYBxTve0n6vg5E2prrqAPnGkQJzQdA37pUVIpvDHB7fncNTZS0JKfr8W7PTNdsSW7lRomIywwAuNkgLgXOA56XdGAPii7OB7J+fNQ5/SjJzSmwfAsMkuQC7Q7EVOByYLZBGL2HTWNrVi3lZJ2WOlXCcjG7TiZIer87AJmOicAMYK5BmMcvaCcSLWDcjuYTU7j3h3mS3BltSUSUSDxmEIUjPgR2lWSu+N8lIpwKA+kwiN2BtwG3qbvjj3YQRHSy7frWyc5aLOmvdnQzHU7dQZ3Elz+4Z927IyQ91GQoIsz9o7O13NqbA2ZA14M3LDvzMjCrjnWL3Rz/Pm8ZWEC44kcA8839rSmJiB2BM4Cx2YLtOGxPp9ftIhFR+MS11LuAsHdl9TpA0rwK6kmAi9d0bbGiR7Ip3l1gj/xsa8AE5mI16CIe+2MluZ096Ly3fpkz6G5JowqI1fOBwztH0rBUKJ3jr94T3ZreF0oou0QkictzyGTk64HFXeOBtjQi7NQV+ft+khZU94lTgeszv8d6SAHn52HPEw+kr9rJQ8Xj0xK4Se4d4Kjc3Dx/HvdmtnyfSCVHwzOkbzKhB5o/BnDEyrZuRJjOTfV22ClxR7kDvbl17iOtO6ZnvG9Q1VW9T8lnu1FoPRcRpfDLI29uXn47pW7bHgA8k5cd536cJN+mVkoiwpH19WHPNDBZ0pVVY033DpPIwxk6n/cl6CpJ5oG2JCK8Kp6cdeVdxFzidf+SVgPd3cDsQYcnYiqZDb38eoR7TvxSE3YTl29uo/LiYyCWbwAvv8tT0GMkyoFsN2/hHnDFoB+b4r1/eNPy3y7qzfK64E26iIG7KKdK+qEphO3eyjcE3LYOr+m6Jz17fkfeyj0Yu5WejHVRjog+ucgOzP9PmAHtscnshbxALVyRYfYvjhb/5QMxlg8AAAAASUVORK5CYII=" class="img-icon">
                    </div>

                    <div class="input">
                      <input type="text" placeholder="用户名" class="loginiput">
                    </div>
                  </div>

                  <!-- 提现密码 -->
                  <div class="van-cell1">
                    <div class="icon-img">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABJ9JREFUeF7tm0moXEUUhr9fEBWc0JWzOGBwiBqDYMBhozigQaOChOCsyUpdiSuTjYiCCooajRiDxgmziFPiKoJxJM5BgkgUo+JOHHERfjmhOpb9+r2qbrvfu92vD9xVnVP3/H+dqjp161wxy0WzHD9jAsYR0FAGbM8FFgHnJBfflrS83+42agrYnp9AB/DjO4B9QtKt/SRhxgmwvSADfVQFuOMkfVOhV6UyIwTYPi8DfUiVp/8qLZP0eJc2k6pPGwG2zweuTMAPrgTwPvA9cFWmv05STJG+yEAJsH1JBnq/So/fBJ6R9GLo274A2JjZ/gbMlfRtZX9TqvWdANuXp1GO0d6r0snngdWS3uqkb/tL4KSs7XpJqyv7HiwBtvdIoxyA46kh9Y8YZWCtpM0lILbvAe7K9CJCrivZ1bTXODuhH9t7Z6AX1rwI2JFAvyHp3UqbXWq2zwJym5+ABf2YBtUE2N4/A31RJYAI3eeATZJiQetZBjUNJiXA9p7AxcC56ZlX6f3nwHvAZ8BXlTY1atcCedhvAJZK+q7GeDKdCQTYjnTz7PQECU2XIPkdYL2k17p1djcBtiMhWQtEkjKs8qqky7pxfhcBtg9PCUc3tk3V3Srp5FrnWgR8DJzewWhTOpT8BfwC/F7b8TTpxYHpsA7vWiwporkosn030H7MfAF4SNIHxR5mWMF2pMkvtbmxHThZ0p8l94KAZ4HFmeIqSTeXDJvUntavH9t8mifpk5KfQUBsV/HxoSWnSoqtbKjEdkRBfmi6RlJE8pQSBDjXkFSdHJU6n872DlN5uaQVJR/GBIwjYHSnwIqaj6ijPAXGBIxEBNi+MN0NxDeBqeRoIJ6WROaaS2SzW4DNku5tNTR6CkySpZZ2tpr27ZKOCcXGEmA7zvlH1qDpUecjSWc2kgDby4BHewTWjdkjTSVgDbAkQxKn0lJWd1oB+aHA1UB++7SjqQTEaS5f0OZLigXsf4ntB4A7sk52NpWAgZ1PJmS+TUyFu/EpHYXPSKO6RVJ8Mp9URpGA/Bj8sqSY57OKgK6myyhGwErgljTkxQKKkSMggKd6AyTFdjmljCQBJdB5+7AQEB8z88SmL9fhtlcBN2aE/N3UPOCxuPdrG9lSeEfidOAU0bBPh3qFbU0l4ArglW5Cu0fdJY0kIC1sr6fb6R6xFc1WSlraWAISCVFucz9wbBFOvcJOYI2kG8Kk0QQkEqLOKC5vjyhgbK8fiBKcTzObuNfcCnwhafcdZ+MJqB3YVNcQ95wtmXUfReOCd0zAOALGU6D7NSBKT/fNQucASb/WLj5N0bP9IHB75s+dku4r+Re7QFRqRsl6SxZJWlcybFq77SizjYLsliyUtL7kZxDwJHBTpviDpNh3h0ZsR1LzVJvDcyRtK4EIAqL48Ok2xShrfRj4sNTBDLcfBJzSocZpo6S4UitKq0osCOhL8XHxjdOjcKKkqirVvFAy5sul0+PfQN9SlQG2PPhPPZDt+CGpb7+jDBTmxM5jvt8mKf+5ouhCp1rhWEnj54Q5wAnFHmZW4ec43ABfAxt62b6HsiKsn5yPCegnm8PY16yPgH8A/w0mz6T79DoAAAAASUVORK5CYII=" class="img-icon">
                    </div>

                    <div class="input">
                      <input type="text" placeholder="提现钱包地址(不可修改)" class="loginiput">
                    </div>
                  </div>

                  <!-- 密码 -->
                  <div class="van-cell1">
                    <div class="icon-img">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABKlJREFUWEe9l3molVUUxX+reaCoSJpthMgGI4vSSrIiCoqysEnTRixMsXkiDbMyyCKTytK0ycqi8o9e8yBN0mADQUXzBEYjNkLpivU4n9x333ffu0m24XHfvd8++6yzv73XXke0abbXBg4ChgD9gW2B9cryJcAnwBvAc8ACSX+3E1q9OdneFDgHOB3YqDf/8vxr4A5gmqQfelrTEoDtVYGLgIsbTvoH8DLwCvAR8DOQGBsCOwEDgX2ANcumPwETJE1vBaIWQDn1IyVY1n4OXAPMk5RNW5rtjYFRwLnA5sWxAxghKYC6WDcAtrcHngW2Blw2vlLSn22mv9PN9vrAZGBsWfde6kfS941xugAo6F8HtgF+BIZJSlF1M9t7ADsDS4FFkj5o4TcMuBdYHXgX2FfSr5VvM4CngYOBVHUcg7qL2d4NuA3Yu+nRU8AYSR/XrDkceLiAmCtpeDcAts8Cbi4PkqoXagLtBwTkWuXZZ0CKtW/5nqwNkvRhzdqRwJ3l96GSHs3/nRmwvQHwZan2qZLOrwmwRqn8bJbMDJeUlGZ9qv9BYAtgoaR8r3tt9wPHlb22k7S0AjARuKK8976SfqsBkHc5D/gd2FFSen252d4FeLtkZLCkF2tibFI6KhkcJeku2V4F+LRU/URJk1qgvwk4O+9S0jEtfMKEA4BLJE1p4XMjMA54SdL+AZBiWggsC4jmk1VBbKeSTwRmSjqjRfDrgaHAVZJmtvCp9svjLQPgQuBa4C1Jaa1asz0bODmFKmlMK7/efi8Z/xYIYR0fAHOBE4BZksL3Xay0XTY+AtgBSJuFivPq6ixDKNwQwpkhKZ3SHPNJ4BBgSgCE2weF8yUlE42FlYy8CqQDVsRC2/0lpcMa495ehtsDAZBW2hUYLSkE0+g4rVDpF2UIVUOmJzDJQP5ywj7AeZJSG41xr8vvQEcAvAnkpGGxiog6nW3PAk4FZkvKZ9tm+5miH7p1hO2qE+YHQOV4taTLmpCmkk8DutBnOyhsLwAG17Wk7XtCZGHGALgFODNMJunY/wlA6iq64YIAGAHcDSyWtNnKBlDG9HelsIcEQLg9RRbrMoRs/+evwHbILKSWkdynmgXPAwcUxZNhURXhygAQsXNgsi5pZAXgSKBzPAJ7SkpnNHbBHEmntFN8DeCrjS6VFDmXeIcCjxefAZIWLRcktl8D9gLyOVDSMtuRVOmMX8oUy+xvx8KEkXbrpMAlzbAdCf9OkfPzJR2VQI0Adi+6PptMlzTWduZ7Jlyk+YpYlHMyusT2Q0CmaMZ5P0mdddcsycYDN5SdJkmaaDuS+7BymojUdixxo4CfiLawHYKL4oqdJCk80Gl1qnhOkdV5Hs4eLymo/7UVpRV6j5iJTZZ0eWOgOgCZclOzcXGMWBkn6bF2EdhO3HRThlulFyPtJzTH6OlmNLoAWbcsilxPRjokfVMHxnbkfIorgqVf8QnpZNDlotPNerwb2s7lJNeqyOrKopySlcz5xqtZqj4AKksn3NdJt9LiVtnr9XKahbaj83Kqo8uI7eltfFUU8q2S0gU9WlsAqgi2VwOifnM52QrI99hfhc6jit8Ph/S2cfX8H5JE/XRaV9gQAAAAAElFTkSuQmCC" class="img-icon">
                    </div>

                    <div class="input">
                      <input type="text" placeholder="密码" class="loginiput">
                    </div>
                  </div>

                  <!-- 确认密码 -->
                  <div class="van-cell1">
                    <div class="icon-img">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABKlJREFUWEe9l3molVUUxX+reaCoSJpthMgGI4vSSrIiCoqysEnTRixMsXkiDbMyyCKTytK0ycqi8o9e8yBN0mADQUXzBEYjNkLpivU4n9x333ffu0m24XHfvd8++6yzv73XXke0abbXBg4ChgD9gW2B9cryJcAnwBvAc8ACSX+3E1q9OdneFDgHOB3YqDf/8vxr4A5gmqQfelrTEoDtVYGLgIsbTvoH8DLwCvAR8DOQGBsCOwEDgX2ANcumPwETJE1vBaIWQDn1IyVY1n4OXAPMk5RNW5rtjYFRwLnA5sWxAxghKYC6WDcAtrcHngW2Blw2vlLSn22mv9PN9vrAZGBsWfde6kfS941xugAo6F8HtgF+BIZJSlF1M9t7ADsDS4FFkj5o4TcMuBdYHXgX2FfSr5VvM4CngYOBVHUcg7qL2d4NuA3Yu+nRU8AYSR/XrDkceLiAmCtpeDcAts8Cbi4PkqoXagLtBwTkWuXZZ0CKtW/5nqwNkvRhzdqRwJ3l96GSHs3/nRmwvQHwZan2qZLOrwmwRqn8bJbMDJeUlGZ9qv9BYAtgoaR8r3tt9wPHlb22k7S0AjARuKK8976SfqsBkHc5D/gd2FFSen252d4FeLtkZLCkF2tibFI6KhkcJeku2V4F+LRU/URJk1qgvwk4O+9S0jEtfMKEA4BLJE1p4XMjMA54SdL+AZBiWggsC4jmk1VBbKeSTwRmSjqjRfDrgaHAVZJmtvCp9svjLQPgQuBa4C1Jaa1asz0bODmFKmlMK7/efi8Z/xYIYR0fAHOBE4BZksL3Xay0XTY+AtgBSJuFivPq6ixDKNwQwpkhKZ3SHPNJ4BBgSgCE2weF8yUlE42FlYy8CqQDVsRC2/0lpcMa495ehtsDAZBW2hUYLSkE0+g4rVDpF2UIVUOmJzDJQP5ywj7AeZJSG41xr8vvQEcAvAnkpGGxiog6nW3PAk4FZkvKZ9tm+5miH7p1hO2qE+YHQOV4taTLmpCmkk8DutBnOyhsLwAG17Wk7XtCZGHGALgFODNMJunY/wlA6iq64YIAGAHcDSyWtNnKBlDG9HelsIcEQLg9RRbrMoRs/+evwHbILKSWkdynmgXPAwcUxZNhURXhygAQsXNgsi5pZAXgSKBzPAJ7SkpnNHbBHEmntFN8DeCrjS6VFDmXeIcCjxefAZIWLRcktl8D9gLyOVDSMtuRVOmMX8oUy+xvx8KEkXbrpMAlzbAdCf9OkfPzJR2VQI0Adi+6PptMlzTWduZ7Jlyk+YpYlHMyusT2Q0CmaMZ5P0mdddcsycYDN5SdJkmaaDuS+7BymojUdixxo4CfiLawHYKL4oqdJCk80Gl1qnhOkdV5Hs4eLymo/7UVpRV6j5iJTZZ0eWOgOgCZclOzcXGMWBkn6bF2EdhO3HRThlulFyPtJzTH6OlmNLoAWbcsilxPRjokfVMHxnbkfIorgqVf8QnpZNDlotPNerwb2s7lJNeqyOrKopySlcz5xqtZqj4AKksn3NdJt9LiVtnr9XKahbaj83Kqo8uI7eltfFUU8q2S0gU9WlsAqgi2VwOifnM52QrI99hfhc6jit8Ph/S2cfX8H5JE/XRaV9gQAAAAAElFTkSuQmCC" class="img-icon">
                    </div>

                    <div class="input">
                      <input type="text" placeholder="确认密码" class="loginiput">
                    </div>
                  </div>

                  <!-- 邀请码 -->
                  <div class="van-cell1">
                    <div class="icon-img">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAArpJREFUeF7tmk2ITlEYx3//ndSwQ7KwI6MmURILs7LAwkJZKPlesZE19hbESkRJs5gilLJhbChFkvFRslI2FpKyoP46b+8dx537ztz3nRr3zjln97733nOf/+8+5+N5ziMSb0pcPxlA9oDECeQhkLgD5EmwcgjY3gHsA7YDq1vuJR+BR8BtSQ/LWqYBsH0VONxy0b3MvybpSHzxHwC2zwJnFqj4QtZpSeeLH1MAbA8B3xe4+ELeUkkdrTGAtcC7CMA3YI+kiTZDsR3msbvAkkjHsKS3ZQDhxsfRTROSRtssvrDddtAV9BVttPiwsQdkANkD8hDIc0CeBPMq8JdAXgaT3wcARyWFaKq1zfYIcGGQjVAh+j4wLulmmyjYDlHfAWBbhd21doLl564DxyT9bjqIGlHtQACC7mfAIUnvmwqhhvhgek8Aq4DPwEZgM7C3QugVScebCMD2fqA8VH8B94DLwEpgGfBqWjBUJch2AHAJWF66vknSiyZBsB2EPQFCWF+0B8AJSZ962VorLW47uPyaqJPGeYHti8DJyMbnwE5JX2f6UHUBbAGeRh19kBST/u/OYPsNMBwZslVSbHOljbUAhCdtfwFWRL0slvSz+G07jLPdNUiMAXckjcf32t4FnCqt1726uyUpjPdOs70ImLKl+/eQpB+z2dMPgJfAhqjDEUmvuwb0m0y9IelgCUC/fZyTFJ4JANYBk1F/k5LWzyY+XM8A6lBKfgjYTnsSTHYZTGoj1D1ASHcr3AUQ5wSr5sc2BEPhbLOzPM7QBooGkw2Hk02IhEPRpFNiOSucfFY4A8j1AblAIleI1A2Xm3xfLpHJNUL1iqSSL5NLu1BywOxuk+e+XrZVl8pGOfZ0i6UjCOmWy7fRp+dic+2Dkbm8pMnPZgBN/jrzYVv2gPmg3OR3ZA9o8teZD9v+APKf/FD5W9wpAAAAAElFTkSuQmCC" class="img-icon">
                    </div>

                    <div class="input">
                      <input type="text" placeholder="邀请码" class="loginiput">
                    </div>
                  </div>

                  <!-- 验证(未完成) -->
                  <div class="van-cell1">
                    <div class="icon-img">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAABRpJREFUWEe1mHeolnUUxz/fdtEeNo2yaVvSwDQb/iFESZZElgkVlmlTNG0QQQstKygquU2saNDOhmFFaEW2bEd7UVRmZmW0Tnwv5ydP732ee1+FDrxw3/f5nfN8z/qe87tiBSQiVgF2A/YFBgPbAesBy4DvgBeBV4BXJfm3tkTtnIqIXsCJ+dmpDZ2fgLuADklv9HS+WxARsQYwBTgHWLdibAnwLvA5sBRYG9gC2BnoDRS7/wD3ApMkfd0EphFEROwN3Ar0S+Xf07vbgJck/VlnNCJ2AY4BTgG2zDOLgLMlzarTqQUREcOBe4C1gABmAtMkfdZTaMvziHDknMKLgI3SzgxJk1ttdAEREYOApzPEPwLHSXqy6eX5smWS/m6IzPbA/ZWIXijp4urZ/4CICFf7AmBT4GPgSElvthqPCOfddXIYsA3gGnFnXCtpTs15d9AtwMh8NqaamuUgIsKh9wtd/Y5AP0lf1Bj0i11sLsYuj4EbJY2v0XN7G+BQwFHrXzqnCuJM4BrAFT1S0oM1hnYAXk9uWAxcbU4AtgImAPukzumSrqvRd6G+BWySKR8mKTpBZBTcQhsDT0g6tCG/DukJwG/AAElu005JG08BQ4BFkpzSrqGKOCvB+9lgSfMLCBv2CxwFG3+txovVAAM1cU2RNL3mjLnik0zVwZKeqzmzKuA0O3r3STq6gHgEOByw0iEOUY2yPTM5uXb2kPRezRnbc3rMLeMl3dAQjZOAm4CfXdgFhIloTWC4pEcbFN33joQrfaikZxuK71NgW2C0pDsbbK0D/JrPhigi9gIW5hDaoIkJM+9u3/5uR0n714AYBxTve0n6vg5E2prrqAPnGkQJzQdA37pUVIpvDHB7fncNTZS0JKfr8W7PTNdsSW7lRomIywwAuNkgLgXOA56XdGAPii7OB7J+fNQ5/SjJzSmwfAsMkuQC7Q7EVOByYLZBGL2HTWNrVi3lZJ2WOlXCcjG7TiZIer87AJmOicAMYK5BmMcvaCcSLWDcjuYTU7j3h3mS3BltSUSUSDxmEIUjPgR2lWSu+N8lIpwKA+kwiN2BtwG3qbvjj3YQRHSy7frWyc5aLOmvdnQzHU7dQZ3Elz+4Z927IyQ91GQoIsz9o7O13NqbA2ZA14M3LDvzMjCrjnWL3Rz/Pm8ZWEC44kcA8839rSmJiB2BM4Cx2YLtOGxPp9ftIhFR+MS11LuAsHdl9TpA0rwK6kmAi9d0bbGiR7Ip3l1gj/xsa8AE5mI16CIe+2MluZ096Ly3fpkz6G5JowqI1fOBwztH0rBUKJ3jr94T3ZreF0oou0QkictzyGTk64HFXeOBtjQi7NQV+ft+khZU94lTgeszv8d6SAHn52HPEw+kr9rJQ8Xj0xK4Se4d4Kjc3Dx/HvdmtnyfSCVHwzOkbzKhB5o/BnDEyrZuRJjOTfV22ClxR7kDvbl17iOtO6ZnvG9Q1VW9T8lnu1FoPRcRpfDLI29uXn47pW7bHgA8k5cd536cJN+mVkoiwpH19WHPNDBZ0pVVY033DpPIwxk6n/cl6CpJ5oG2JCK8Kp6cdeVdxFzidf+SVgPd3cDsQYcnYiqZDb38eoR7TvxSE3YTl29uo/LiYyCWbwAvv8tT0GMkyoFsN2/hHnDFoB+b4r1/eNPy3y7qzfK64E26iIG7KKdK+qEphO3eyjcE3LYOr+m6Jz17fkfeyj0Yu5WejHVRjog+ucgOzP9PmAHtscnshbxALVyRYfYvjhb/5QMxlg8AAAAASUVORK5CYII=" class="img-icon">
                    </div>

                    <div class="input">
                      <input type="text" placeholder="点击完成验证" class="loginiput">
                    </div>
                  </div>

                  <div class="submint">
                    <div class="btn">注册</div>
                  </div>
                </div>
              </div>
            </transition>
            <!-- 注册 - end -->
          </div>
        </div>
        <!-- 内容区域 - end -->
        <!-- login fadeL-enter-active fadeL-enter-to -->
        <!-- login reg fadeR-enter-active fadeR-leave-to -->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Index',
  metaInfo: {
    title: '页面标题',
    meta: [
      { name: 'viewport', content: '页width=device-width,initial-scale=1面描述' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ]
  },
  data() {
    return {
      isLogin: true,
      switchLanguage: false,
      languageIndex: 0,
      languageDefault: null,
      languageList: [
        {
          id: 1,
          name: '中文',
          value: 'zh-CN',
          key: 'zh',
          url: require('@/assets/images/zh-CN.png')
        },
        {
          id: 2,
          name: 'ENG',
          value: 'en-US',
          key: 'en',
          url: require('@/assets/images/en-US.png')
        },
        {
          id: 3,
          name: 'VN',
          value: 'vi-VN',
          key: 'vi',
          url: require('@/assets/images/vi-VN.png')
        }
      ]

    }
  },
  created() {
    this.languageDefault = this.languageList[this.languageIndex]
  },
  methods: {
    handleswitchLanguage(item) {
      this.languageIndex = item.id - 1
      this.switchLanguage = false
      this.languageDefault = this.languageList[this.languageIndex]

      const lang = item.key
      if (this.$i18n.locale === lang) {
        return
      }
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
    },
    handleSwitch() {
      this.isLogin = !this.isLogin
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

.rights {
  position: absolute;
  top: 1.875rem;
  right: 1.25rem;
  color: #fff;
  .rightImg, .van-image {
    width: 1.0625rem;
  }
}

.img-icon {
  width: 100%;
  height: 100%;
}

.page {
  background-size: 100% 100%;
  .switch-language {
    width: 100%; justify-content: flex-end; position: relative;
  }
  .language {
    font-size: .875rem;
    margin-left: 0.3125rem;
  }
  .rightup {
    width: 6.625rem;
    position: absolute;
    box-shadow: 0 0.125rem 0.8125rem rgb(0 0 0 / 18%);
    border-radius: 0.625rem;
    z-index: 9999;
    right: 0;
    top: 1.875rem;
    background-color: #fff;
    .rightBox {
      display: flex;
      align-items: center;
      color: #36373b;
      height: 3.125rem;
      justify-content: center;
      position: relative;
      img {
        width: 1rem;
        margin-right: 0.3125rem;
      }
      p {
        width: 5.5rem;
        color: #36373b;
        text-align: center;
        font-size: .9375rem;
        font-weight: 500;
        height: 3.125rem;
        line-height: 3.125rem;
      }
      .ac {
        color: #3979fe;
      }
    }
  }

  .view {
    display: flex;
    flex-direction: column;

    .zanzu {
      margin: auto;
      color: #fff;
      font-size: .75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.25rem;
      .line {
        width: 5.0625rem;
        height: 0.0625rem;
        background: #fff;
      }
      p {
        margin: 0 0.625rem;
        color: #fff;
      }
      img {
        width: 4.5625rem;
        margin: 0 0.625rem;
      }
    }

    .logReg {
      position: relative;
      margin: auto;
      width: 88%;
      max-width: 25rem;
      flex: 1 1;
      padding-top: 1.25rem;
    }

    .login {
      width: 100%;
      position: absolute;
      margin: auto;
      display: flex;
      margin-top: 0.75rem;
      color: #fff;
      >div {
        &:first-child {
          background: hsla(0,0%,75.3%,.45);
          border-radius: 0.6875rem 0 0 0.6875rem;
          .van-cell1 {
            background: rgba(69,69,69,.64);
          }
        }

        &:last-child {
          background: rgba(12,12,12,.4);
          border-radius: 0 0.6875rem 0.6875rem 0;
          .van-cell1 {
            background: hsla(0,0%,75.3%,.45);
          }
        }
      }
      .right {
        padding: 0.6875rem 0;
        flex: 1 1;
        .title {
          font-size: 1.0625rem;
          text-align: center;
          margin: 0.625rem 0 1.25rem 0;
        }

        .van-cell1 {
          width: 16.25rem;
          margin: auto;
          padding: 0.625rem 0.9375rem;
          border-radius: 1.75rem;
          margin-top: 0.625rem;
          height: 3.125rem;
          display: flex;
          align-items: center;
          .icon-img {
            width: 1.1875rem;
            height: 1.1875rem;
          }

          .input {
            padding: 0 0.4375rem;
            width: 100%;
            margin-top: -0.1875rem;
          }

          input {
            display: block;
            box-sizing: border-box;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 0;
            color: #fff;
            height: 1.875rem;
            line-height: inherit;
            text-align: left;
            background-color: transparent;
            border: 0;
            resize: none;
            font-size: .9375rem;
          }
        }

        .cqur {
          margin: 1.25rem auto 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 16.25rem;
          padding-left: 0.9375rem;
          label {
            margin-left: 0.3125rem;
          }
        }

        .submint {
          margin: 1.25rem auto 0;
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          width: 16.25rem;
          margin: 1rem auto 0;
        }
      }

      .left {
        background: rgba(12,12,12,.4);
        border-radius: 0 0.6875rem 0.6875rem 0;
        letter-spacing: .625rem;
        width: 3.75rem;
        line-height: 3.75rem;
        -ms-writing-mode: tb-rl;
        writing-mode: tb-rl;
        min-height: 20.625rem;
        color: #fff;
        font-size: .9375rem;
        text-align: center;
        img {
          width: 1.5625rem;
        }
      }

    }

    .reg {
      margin-top: 0!important;
    }

    .logo {
      width: 3.75rem;
      margin: auto;
      margin-top: 1.375rem;
      img {
        width: 100%;
      }
    }

  }

}

</style>
