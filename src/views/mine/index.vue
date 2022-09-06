<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 我的
-->
<template>
  <div class="wrapper">
    <div class="flex-1 index-page">
      <div class="page">
        <!-- 内容区域 - start -->
        <div class="view">
          <div class="mine-info-box">
            <div class="service">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHjSURBVHgBxVeNdYJADA4uUEagE+gGpROUEdigbqAjuAF2AtoJaCfATqAb4AZp7pFoPE894O71ey/veLn8E3JHAp5AxJSWguiFKCdKmQQ7pp8kSbYQCsYx0YqoQ3/sjY6P/eSB8wUtNVHGrCPRB/SZHpiA93WFRN7sv1JFDjAU5DxXWZt1za/BR3fJVRDdHIbAZK6ct0QZDITRsYJYjFFsfbO+YStlG9IXmY9SNUjBLwhJqH4knOMZfiXzC0Lbze8JSvYVBAbZbNh2c0sgi5G9sq+rkLoESnn3EAmqF0rhzdS+ZP0N8fBl+boIYM7rL8TDjtcMHAHIe5lTiQoIDO7+N/Fhb77jNfaB5oAebBorESgV00ytWgcBE4GX47iygsn191lZUXcnofHOC1c16XnD/AZUNAtLecv8NYwE9ieowafFP80c3YQdxMNN2zP4Z5gAjvz8bO09QTycR7Fqwlrx/E6vB1B2ThcS7I/nWjehdtbh+QJh0MJEqATla9CX20yECrweFkZx9G1IBZCqL0onWrgETSAlxjmOG1WFyYkNdV6p7MMmxz20dDUr9gOnUc7XEBLY/zFprJjv+ptaQmig+5RrLcd7nPAp33Oe4n0M+psaG0TjcLrhvojf6VaTmdIP7vA/d6O4qficjwMAAAAASUVORK5CYII=">
              <span>客服</span>
            </div>

            <!-- 登录信息 - start -->
            <div class="login-info">
              <div class="port flex-center-center"> {{ info.username && info.username.substring(0,1).toUpperCase() }} </div>
              <div class="login-right">
                <p>{{ info.username }}</p>
                <p>加入哈博国际 13天</p>
              </div>
            </div>
            <!-- 登录信息 - end -->

            <!-- 资产 - start -->
            <div class="assets-box">
              <div class="bg-box">
                <div class="left">
                  <div class="title">
                    总资产
                    <img :class="{spinner:isReloadBalance}" src="data:image/png;base64,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" class="loadBalance" @click="reloadBalance">
                  </div>

                  <div class="money flex-between-center">
                    <div class="title">
                      <span>{{ balance.total || '-' }}<b>USDT</b></span>
                      <span>{{ balance.trx || '-' }}<b>TRX</b></span>
                    </div>
                  </div>

                  <div class="finance flex-between-center">
                    <div class="title">今日赢亏: 300$ <span>-0.2%</span></div>
                  </div>
                </div>

                <div class="right" @click="$router.push('/mine/finance')">资产详情</div>
              </div>
            </div>
            <!-- 资产 - end -->

            <!-- 按钮 - start -->
            <div class="main-item">
              <!-- <div class="item">
                <img src="@/assets/images/invitecode.png">
                <p>邀请码</p>
              </div> -->
              <div class="item" @click="$router.push({path:'/wallet'})">
                <img src="@/assets/images/myWallet.png">
                <p>我的钱包</p>
              </div>
              <div class="item" @click="$router.push({path:'/withdraw'})">
                <img src="@/assets/images/shop.png">
                <p>提款</p>
              </div>
              <div class="item" @click="$router.push({path:'/deposit'})">
                <img src="@/assets/images/bi.png">
                <p>存款</p>
              </div>
              <div class="item" @click="$router.push({path:'/exchange'})">
                <img src="@/assets/images/jiaoyi.png">
                <p>兑换</p>
              </div>
              <div class="item" @click="$router.push({path:'/transfer'})">
                <img src="@/assets/images/invitecode.png">
                <p>资金划转</p>
              </div>
            </div>
            <!-- 按钮 - end -->

            <!-- 我的团队 - start -->
            <div class="team-data-box">
              <div class="bg-box">
                <div class="title_group flex-between-center after">
                  <div>我的团队</div>
                  <div>查看业绩详情</div>
                </div>
                <div class="items flex-between-center">
                  <div class="item flex">
                    <p>直属人数：</p>
                    <div class="val">1</div>
                  </div>
                  <div class="item flex">
                    <p>团队人数：</p>
                    <div class="val">1</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 我的团队 - end -->

            <!-- 佣金 - start -->
            <div class="team-data-box">
              <div class="bg-box">
                <div class="title_group flex-between-center after">
                  <div>我的团队</div>
                  <div>查看业绩详情</div>
                </div>
                <div class="items flex-between-center">
                  <div class="item flex">
                    <p>直属人数：</p>
                    <div class="val">1</div>
                  </div>
                  <div class="item flex">
                    <p>团队人数：</p>
                    <div class="val">1</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 佣金 - end -->

            <!-- 列表 - start -->
            <div class="data-list">
              <div class="bg-box">
                <div class="list-item flex-between-center after" @click="$router.push({path:'/record/flow'})">
                  <div class="item-left flex-center-center">
                    <img src="@/assets/images/financial_ic.png">
                    <p>帐户流水</p>
                  </div>
                  <div class="item-right">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHySURBVHgBnZWxUttAEIZ3z4ZMqPwISm17RhRxWvsNSMXZKWK6DKbQG4Q8AUlhTbqYxgiaKE/gpI0LxCB6P4IqGNCgZffGmpEBixP/jOXTnP9v19pbLe5+Gs2AyMEs6wXBzwVUlAICFwAdUmqm9RcHKkrVgHr8neSQnR2vUQWAchkM9t17wHNZE0B0d73RC8PviQ1AyWU69SPMaG9JdDe3UutMVL4IAn9ShLzZSo9sALXiTRzPo2b7PQOwy7duq91xri7nf6wBIjb8K0LazQ8Yx///WgOeQBC6ZZDaOrItZC0gh7RbnXcMcNdBSgEifrBhEdJsdRZX8fwi30ew1O5gJAfNlTURDM9OxseyVraAt5sbcuQjExVhovVBt1IGouHQa9zcpufscvjIJ5RSrxJApLXnEKazHGL9F1a0DItESaUMTHTF0QEc/iTyKrAGSHdKl+KyEmzeli6u2wKKZinj9MQ3FbEC6P5oQksz3JN3duof53svAowZ4bOJnNEhm38U90uroAcHhyvmwP/2+DdYagb6WmZeC7A1PwsomlmT0+l4D0q0Auj3R16GcGRrXgFovT8khb9M2gQRt+s2WMhUQQZL0Xx3Y1rXSnUzlRBnMpLYvVCUfQzDsdVUMhnwSPvN5oaYkapP6Do/hQVkBK8xix4A44f37kiIIg4AAAAASUVORK5CYII=">
                  </div>
                </div>

                <div class="list-item flex-between-center after" @click="$router.push({path:'/record/bet/index'})">
                  <div class="item-left flex-center-center">
                    <img src="@/assets/images/marke_ic.png">
                    <p>注单列表</p>
                  </div>
                  <div class="item-right">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHySURBVHgBnZWxUttAEIZ3z4ZMqPwISm17RhRxWvsNSMXZKWK6DKbQG4Q8AUlhTbqYxgiaKE/gpI0LxCB6P4IqGNCgZffGmpEBixP/jOXTnP9v19pbLe5+Gs2AyMEs6wXBzwVUlAICFwAdUmqm9RcHKkrVgHr8neSQnR2vUQWAchkM9t17wHNZE0B0d73RC8PviQ1AyWU69SPMaG9JdDe3UutMVL4IAn9ShLzZSo9sALXiTRzPo2b7PQOwy7duq91xri7nf6wBIjb8K0LazQ8Yx///WgOeQBC6ZZDaOrItZC0gh7RbnXcMcNdBSgEifrBhEdJsdRZX8fwi30ew1O5gJAfNlTURDM9OxseyVraAt5sbcuQjExVhovVBt1IGouHQa9zcpufscvjIJ5RSrxJApLXnEKazHGL9F1a0DItESaUMTHTF0QEc/iTyKrAGSHdKl+KyEmzeli6u2wKKZinj9MQ3FbEC6P5oQksz3JN3duof53svAowZ4bOJnNEhm38U90uroAcHhyvmwP/2+DdYagb6WmZeC7A1PwsomlmT0+l4D0q0Auj3R16GcGRrXgFovT8khb9M2gQRt+s2WMhUQQZL0Xx3Y1rXSnUzlRBnMpLYvVCUfQzDsdVUMhnwSPvN5oaYkapP6Do/hQVkBK8xix4A44f37kiIIg4AAAAASUVORK5CYII=">
                  </div>
                </div>
              </div>
            </div>
            <!-- 列表 - end -->

            <!-- 列表 - start -->
            <div class="data-list">
              <div class="bg-box">
                <div class="list-item flex-between-center after" @click="$router.push({path:'/report/financial'})">
                  <div class="item-left flex-center-center">
                    <img src="@/assets/images/financial_ic.png">
                    <p>财务报表</p>
                  </div>
                  <div class="item-right">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHySURBVHgBnZWxUttAEIZ3z4ZMqPwISm17RhRxWvsNSMXZKWK6DKbQG4Q8AUlhTbqYxgiaKE/gpI0LxCB6P4IqGNCgZffGmpEBixP/jOXTnP9v19pbLe5+Gs2AyMEs6wXBzwVUlAICFwAdUmqm9RcHKkrVgHr8neSQnR2vUQWAchkM9t17wHNZE0B0d73RC8PviQ1AyWU69SPMaG9JdDe3UutMVL4IAn9ShLzZSo9sALXiTRzPo2b7PQOwy7duq91xri7nf6wBIjb8K0LazQ8Yx///WgOeQBC6ZZDaOrItZC0gh7RbnXcMcNdBSgEifrBhEdJsdRZX8fwi30ew1O5gJAfNlTURDM9OxseyVraAt5sbcuQjExVhovVBt1IGouHQa9zcpufscvjIJ5RSrxJApLXnEKazHGL9F1a0DItESaUMTHTF0QEc/iTyKrAGSHdKl+KyEmzeli6u2wKKZinj9MQ3FbEC6P5oQksz3JN3duof53svAowZ4bOJnNEhm38U90uroAcHhyvmwP/2+DdYagb6WmZeC7A1PwsomlmT0+l4D0q0Auj3R16GcGRrXgFovT8khb9M2gQRt+s2WMhUQQZL0Xx3Y1rXSnUzlRBnMpLYvVCUfQzDsdVUMhnwSPvN5oaYkapP6Do/hQVkBK8xix4A44f37kiIIg4AAAAASUVORK5CYII=">
                  </div>
                </div>

                <div class="list-item flex-between-center after" @click="$router.push({path:'/report/promotion'})">
                  <div class="item-left flex-center-center">
                    <img src="@/assets/images/marke_ic.png">
                    <p>推广报表</p>
                  </div>
                  <div class="item-right">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHySURBVHgBnZWxUttAEIZ3z4ZMqPwISm17RhRxWvsNSMXZKWK6DKbQG4Q8AUlhTbqYxgiaKE/gpI0LxCB6P4IqGNCgZffGmpEBixP/jOXTnP9v19pbLe5+Gs2AyMEs6wXBzwVUlAICFwAdUmqm9RcHKkrVgHr8neSQnR2vUQWAchkM9t17wHNZE0B0d73RC8PviQ1AyWU69SPMaG9JdDe3UutMVL4IAn9ShLzZSo9sALXiTRzPo2b7PQOwy7duq91xri7nf6wBIjb8K0LazQ8Yx///WgOeQBC6ZZDaOrItZC0gh7RbnXcMcNdBSgEifrBhEdJsdRZX8fwi30ew1O5gJAfNlTURDM9OxseyVraAt5sbcuQjExVhovVBt1IGouHQa9zcpufscvjIJ5RSrxJApLXnEKazHGL9F1a0DItESaUMTHTF0QEc/iTyKrAGSHdKl+KyEmzeli6u2wKKZinj9MQ3FbEC6P5oQksz3JN3duof53svAowZ4bOJnNEhm38U90uroAcHhyvmwP/2+DdYagb6WmZeC7A1PwsomlmT0+l4D0q0Auj3R16GcGRrXgFovT8khb9M2gQRt+s2WMhUQQZL0Xx3Y1rXSnUzlRBnMpLYvVCUfQzDsdVUMhnwSPvN5oaYkapP6Do/hQVkBK8xix4A44f37kiIIg4AAAAASUVORK5CYII=">
                  </div>
                </div>

                <div class="list-item flex-between-center" @click="$router.push({path:'/report/bet'})">
                  <div class="item-left flex-center-center">
                    <img src="https://designer-trip.com/image/betting_ic.png">
                    <p>投注报表</p>
                  </div>
                  <div class="item-right">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHySURBVHgBnZWxUttAEIZ3z4ZMqPwISm17RhRxWvsNSMXZKWK6DKbQG4Q8AUlhTbqYxgiaKE/gpI0LxCB6P4IqGNCgZffGmpEBixP/jOXTnP9v19pbLe5+Gs2AyMEs6wXBzwVUlAICFwAdUmqm9RcHKkrVgHr8neSQnR2vUQWAchkM9t17wHNZE0B0d73RC8PviQ1AyWU69SPMaG9JdDe3UutMVL4IAn9ShLzZSo9sALXiTRzPo2b7PQOwy7duq91xri7nf6wBIjb8K0LazQ8Yx///WgOeQBC6ZZDaOrItZC0gh7RbnXcMcNdBSgEifrBhEdJsdRZX8fwi30ew1O5gJAfNlTURDM9OxseyVraAt5sbcuQjExVhovVBt1IGouHQa9zcpufscvjIJ5RSrxJApLXnEKazHGL9F1a0DItESaUMTHTF0QEc/iTyKrAGSHdKl+KyEmzeli6u2wKKZinj9MQ3FbEC6P5oQksz3JN3duof53svAowZ4bOJnNEhm38U90uroAcHhyvmwP/2+DdYagb6WmZeC7A1PwsomlmT0+l4D0q0Auj3R16GcGRrXgFovT8khb9M2gQRt+s2WMhUQQZL0Xx3Y1rXSnUzlRBnMpLYvVCUfQzDsdVUMhnwSPvN5oaYkapP6Do/hQVkBK8xix4A44f37kiIIg4AAAAASUVORK5CYII=">
                  </div>
                </div>

                <div class="list-item flex-between-center" @click="$router.push({path:'/help'})">
                  <div class="item-left flex-center-center">
                    <img src="https://designer-trip.com/image/hlpe_ic.png">
                    <p>帮助中心</p>
                  </div>
                  <div class="item-right">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHySURBVHgBnZWxUttAEIZ3z4ZMqPwISm17RhRxWvsNSMXZKWK6DKbQG4Q8AUlhTbqYxgiaKE/gpI0LxCB6P4IqGNCgZffGmpEBixP/jOXTnP9v19pbLe5+Gs2AyMEs6wXBzwVUlAICFwAdUmqm9RcHKkrVgHr8neSQnR2vUQWAchkM9t17wHNZE0B0d73RC8PviQ1AyWU69SPMaG9JdDe3UutMVL4IAn9ShLzZSo9sALXiTRzPo2b7PQOwy7duq91xri7nf6wBIjb8K0LazQ8Yx///WgOeQBC6ZZDaOrItZC0gh7RbnXcMcNdBSgEifrBhEdJsdRZX8fwi30ew1O5gJAfNlTURDM9OxseyVraAt5sbcuQjExVhovVBt1IGouHQa9zcpufscvjIJ5RSrxJApLXnEKazHGL9F1a0DItESaUMTHTF0QEc/iTyKrAGSHdKl+KyEmzeli6u2wKKZinj9MQ3FbEC6P5oQksz3JN3duof53svAowZ4bOJnNEhm38U90uroAcHhyvmwP/2+DdYagb6WmZeC7A1PwsomlmT0+l4D0q0Auj3R16GcGRrXgFovT8khb9M2gQRt+s2WMhUQQZL0Xx3Y1rXSnUzlRBnMpLYvVCUfQzDsdVUMhnwSPvN5oaYkapP6Do/hQVkBK8xix4A44f37kiIIg4AAAAASUVORK5CYII=">
                  </div>
                </div>

                <div class="list-item flex-between-center" @click="$router.push({path:'/setting'})">
                  <div class="item-left flex-center-center">
                    <img src="https://designer-trip.com/image/set_ic.png">
                    <p>设置</p>
                  </div>
                  <div class="item-right">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHySURBVHgBnZWxUttAEIZ3z4ZMqPwISm17RhRxWvsNSMXZKWK6DKbQG4Q8AUlhTbqYxgiaKE/gpI0LxCB6P4IqGNCgZffGmpEBixP/jOXTnP9v19pbLe5+Gs2AyMEs6wXBzwVUlAICFwAdUmqm9RcHKkrVgHr8neSQnR2vUQWAchkM9t17wHNZE0B0d73RC8PviQ1AyWU69SPMaG9JdDe3UutMVL4IAn9ShLzZSo9sALXiTRzPo2b7PQOwy7duq91xri7nf6wBIjb8K0LazQ8Yx///WgOeQBC6ZZDaOrItZC0gh7RbnXcMcNdBSgEifrBhEdJsdRZX8fwi30ew1O5gJAfNlTURDM9OxseyVraAt5sbcuQjExVhovVBt1IGouHQa9zcpufscvjIJ5RSrxJApLXnEKazHGL9F1a0DItESaUMTHTF0QEc/iTyKrAGSHdKl+KyEmzeli6u2wKKZinj9MQ3FbEC6P5oQksz3JN3duof53svAowZ4bOJnNEhm38U90uroAcHhyvmwP/2+DdYagb6WmZeC7A1PwsomlmT0+l4D0q0Auj3R16GcGRrXgFovT8khb9M2gQRt+s2WMhUQQZL0Xx3Y1rXSnUzlRBnMpLYvVCUfQzDsdVUMhnwSPvN5oaYkapP6Do/hQVkBK8xix4A44f37kiIIg4AAAAASUVORK5CYII=">
                  </div>
                </div>
              </div>
            </div>
            <!-- 列表 - end -->
          </div>
        </div>
        <!-- 内容区域 - end -->

      </div>
    </div>

    <!-- 导航 - start -->
    <Nav />
    <!-- 导航 - end -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Nav from '@/components/Nav'
import api from '@/api'
export default {
  name: 'Mine',
  components: { Nav },
  data() {
    return {
      isReloadBalance: false,
      balance: {}
    }
  },
  computed: {
    ...mapGetters([
      'info'
    ])
  },
  created() {
    this.$store.dispatch('app/setNavIndex', 3)
    this.init()
  },
  methods: {
    async init() {
      this.loadBalance(0)
    },
    async loadBalance(deep) {
      const res = await api.member.balance({ deep })
      if (res && res.code === 0) {
        this.balance = res.data
      }
    },
    async reloadBalance() {
      this.balance = {}
      this.isReloadBalance = true
      await this.loadBalance(1)
      this.isReloadBalance = false
    }
  }
}
</script>

<style lang="scss" scoped>

.page {
  background-color: #f5f5f5;
  .mine-info-box {
    padding: 6rem 0.625rem 0 0.625rem;
    background-image: url(../../assets/images/game/mine_bg.png);
    .service {
      width: 100%;
      color: #fff;
      text-align: right;
      img {
        width: 1rem;
        height: 1rem;
        vertical-align: sub;
        margin-right: 0.3125rem;
      }
      span {
        margin-right: 1.875rem;
      }
    }

    .login-info {
      margin-top: 0.625rem;
      display: flex;
      color: #fff;
      .port {
        width: 3.75rem;
        height: 3.75rem;
        margin-left: 1.875rem;
        border-radius: 50%;
        color: #3d72fa;
        font-size: 1.875rem;
        font-weight: 700;
        background-color: #fff;
      }
      .login-right {
        margin-left: 1rem;
        font-size: 1.125rem;
        line-height: 2rem;
        p {
          &:last-child {
            color: #ddd;
          }
        }
      }
    }

    .assets-box {
      margin: 2.0625rem auto;
      .bg-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .left {
        .title {
          i {
            display: inline-block;
            width: .9rem;
            height: .9rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAmCAYAAAClI5npAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANpSURBVHgBxVhbTttAFD0zQRWtKjXdQVhBU6lQPsMKmq6AsAIC9L/Jdym4K2hYAdkB/uRRqekKSHeQj6rQQjw9187YExMHJ8T0SInssWfumTt37pxrYEF40zS1t3vmK2bEEh6I9aapmBLEcI0/HzNCYU7Umqb8W2ObIzQ5SFnaDNB7NsSG76lB3nFyEVhtmmoJGJx6qi/34u5SNOtKRpfOcIijb57y8RACKfci0Hh9c4P+kxI8dtzE/eiqIXYs8UnQWQ8YUNtBCd+tcYG5QblH955/Vg1lsEWf990+XIK06+ucwOXarvmIWQisfwg7eM7aDpRC23Xp6YHqnB2oFWm3bSQlM17h+0fueHynlUVCTTJuDFpOk89Bt6a5cbRUh2Q6IKkt20YPHtJA3b4n454fqHYmgbRxXrfZoYWckGC98FQvNWaL4ySzN9ghSe8OgdEsLuc1Pg1pEhLMF58ionEM0F3HTp/OoowLTvdVi3HRtfc64HLZa/lb2zN1uqIatjCyueZtLBh/GUfOLqlJLokJ0Pi2fZHX7WkBNy9k+2qFL/aeiSxcEjW29py9bC0UhCrTN5PYpd3eT4d4qYc6STScvo8CIV5QQZIjrjQamm55Zxskf6NgqFISjMQrbVRyoDwnSRSM69vEBm1XNde9MrofzHKMzgtZBrsbGAsVbQMCdw+SwqASW2WN/wztJIcyHgnG8bqmP/qWgMgsFAzJBc4x35cg/GEf/rLpuEAsLyU2qB9+av7F24LpsY6CwVMxlnL0RFf/CdBxnm8+wjLU4qsAvu5Fe98fNYnUbqIgrO6aBhIl7cuhF52Grq5T2C7CC3LoMenEooQBGJ6MIQEKBh+OF64iKb5QmOj4rYQ3Cj0q625MQBBQvzvv16dJ6VkxUtkNe69u8d5exwRETDIrxSSypLQIT8xoPC10XcEzSZaPq9hUdUP51mGnF/dVPOmqyhpPa02VwTpNQtARrUjx2rJl2SSdH5IUzzlFa5bxTAJTSERV0vi50Q84+AUrpdB4JHCPx97nLjvbT2qBXARCErbiQa4M2aHG27lmqiXxk1HbvVVVrvKc3qhxlo3MilikvKahaDuHxIf0UrpKmpuARfhRYgknPD+qkV2EUnv5Ft68amrmLyQs28W9NeRwbx7M842oz6DasO5+KP4BbpqPIwMTRs8AAAAASUVORK5CYII=) no-repeat;
            background-size: 100% 100%;
            padding-top:.2rem;
            margin-left: 0.6rem;
          }
        }
      }
      .right {
        padding: 0.6rem 0.6rem 0 0;
      }
      .title {
        font-family: Microsoft YaHei UI;
        font-style: normal;
        font-weight: 500;
        font-size: .9375rem;
        line-height: 2rem;
        text-transform: uppercase;
        color: #575a6b;
        span {
          color: #ff782c;
        }
      }
      .money {
        .title {
          >span {
            font-size: 1.5rem;
            color: #575a6b;
            b {
              font-size:.5rem;
              padding-left:.2rem;
              color: #ff782c;
            }
            &:last-child {
              padding-left: .5rem;
              font-size: 1rem;
              b {
                color: #4080ff;
              }
            }
          }
        }
      }

      .finance{
        .title {
          font-size: .5rem;
          span {
            font-size:.3rem;
            background:#666;
            border-radius: 10%;
            color:#ddd;
            padding:0 0.2rem;
          }
        }
      }

      .assetsAdd {
        display: flex;
        background: #e7e7e7;
        box-shadow: 0 0.0625rem 0 #fff, inset 0 0.0625rem 0 rgb(0 0 0 / 12%);
        border-radius: 0.375rem;
        height: 2.5rem;
        padding: 0.3125rem;
        align-items: center;
        .val {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 85%;
          font-family: Microsoft YaHei UI;
          font-style: normal;
          font-weight: 500;
          font-size: .9375rem;
          color: #575a6b;
        }
        button {
          text-align: center;
          width: 3rem;
          height: 1.75rem;
          border: none;
          border-radius: 0.3125rem;
          background: linear-gradient(40.64deg,#fb9d37 23.09%,#fccf3f 76.91%);
          color: #fff;
        }
      }
    }

    .main-item {
      margin: 2rem auto 0;
      background: #fff;
      box-shadow: 0 0.3125rem 1.25rem rgb(0 0 0 / 10%);
      border-radius: 0.625rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 6.1875rem;
      box-sizing: border-box;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        img {
          width: 2.4375rem;
          height: 2.4375rem;
        }
        p {
          color: #60768a;
          font-family: Microsoft YaHei UI;
          font-style: normal;
          font-weight: 400;
          margin-top: 0.625rem;
        }
      }
    }

    .team-data-box {
      margin: 1rem auto;
      .bg-box {
        padding: 0.3125rem 0.9375rem;
      }
      .title_group {
        line-height: 2.125rem;
        font-size: .9375rem;
        color: #575a6b;
        font-family: Microsoft YaHei UI,serif;
        font-weight: 600;
        position: relative;
        >div {
          &:last-child {
            color: #4080ff;
            font-size: .8125rem;
          }
        }
      }

      .items {
        height: 2.75rem;
        justify-content: space-around;
        .item {
          align-items: center;
          font-size: .8125rem;
          width: 49%;
          color: #575a6b;
          font-family: Microsoft YaHei UI,serif;
          p {
            line-height: 2rem;
          }
          .val {
            flex: 1;
            background: #e7e7e7;
            border-radius: 0.3125rem;
            padding: 0.375rem;
            color: #ff782c;
          }
        }
      }
    }

    .data-list {
      margin: 1rem auto;
      .bg-box {
        padding: 0.3125rem 0.9375rem;
      }
      .list-item {
        height: 3.6875rem;
        position: relative;
        .item-left {
          img {
            width: 1.0625rem;
            height: 1.0625rem;
            margin-right: 0.625rem;
          }
          p {
            font-size: .875rem;
            color: #575a6b;
          }
        }
        .item-right {
          img {
            width: 0.4375rem;
            height: 0.8125rem;
          }
        }
      }
    }

  }
}

.wrapper {
  font-family: Avenir,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  background-color: #fff;
  flex-direction: column;
}

.footer {
  min-height: 3.4375rem;
  font-size: .8125rem;
  background: #fff;
  box-shadow: 0 -0.125rem 1.5625rem rgb(0 0 0 / 8%);
  border-radius: 1.25rem 1.25rem 0 0;
  border-width: 0 0;
  .footer-icon {
    width: 1.375rem;
    height: 1.375rem;
    margin-bottom: 0.3125rem;
  }
}

.index-page {
    height: calc(100% - 3.4375rem);
}

</style>
