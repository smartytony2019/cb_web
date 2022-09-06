<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 设置
-->
<template>
  <div class="wrapper help">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" @click="$router.go(-1)">
            <div class="back">
              <i class="iconfont  icon-fanhui2" />
            </div>
          </div>
          <div class="flex-center-center title">登录密码</div>
          <div class="flex-right" />
        </div>

        <div class="view">
          <div class="changpass">
            <div v-for="(item,index) in list" :key="index" class="item">
              <div class="title">
                <div>{{ item.title }}</div>
                <div>
                  <van-icon v-if="item.mask" name="closed-eye" @click="item.mask = !item.mask" />
                  <van-icon v-else name="eye-o" @click="item.mask = !item.mask" />
                </div>
              </div>
              <van-password-input
                v-model="item.value"
                :mask="item.mask"
                :focused="item.showKeyboard"
                @focus="handleFocus(item,index)"
              />
              <!-- 数字键盘 -->
              <van-number-keyboard
                v-model="item.value"
                :show="item.showKeyboard"
                :maxlength="6"
                @blur="handleBlur(item,index)"
              />
            </div>

          </div>

          <div class="submit">
            <van-button type="info" size="large" @click="handleSubmit">提交</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import api from '@/api'
export default {
  name: 'WithdrawPassword',
  data() {
    return {
      list: [
        {
          title: '原密码',
          mask: true,
          value: '',
          showKeyboard: false
        },
        {
          title: '新密码',
          mask: true,
          value: '',
          showKeyboard: false
        },
        {
          title: '再次确认',
          mask: true,
          value: '',
          showKeyboard: false
        }
      ]
    }
  },
  created() {
    // this.onRefresh()
  },
  methods: {
    async handleSubmit() {
      let isSuccess = true
      this.list.forEach(e => {
        if (e.value.length !== 6) {
          isSuccess = false
        }
      })
      console.log('list', this.list)
      if (!isSuccess) {
        this.$toast('请填写位数为6的密码')
        return
      }

      const form = {
        type: 2,
        oldPwd: this.list[0].value,
        newPwd: this.list[1].value,
        confirmPwd: this.list[2].value
      }

      const res = await api.member.changePwd(form)
      if (res && res.code === 0) {
        const sleep = (ms) => {
          return new Promise(resolve => setTimeout(resolve, ms))
        }
        this.$toast('更改成功')
        await sleep(2000)
        this.$router.push({ path: '/setting' })
      } else {
        this.$toast(res.msg || '操作失败')
      }
    },
    handleFocus(item, index) {
      this.list.forEach(e => {
        e.showKeyboard = false
      })
      item.showKeyboard = true
    },
    handleBlur(item, index) {
      item.showKeyboard = false
    }
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  height: 100% !important;
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
}

.van-password-input {
  margin-left: 0;
  width: 70%;
}

.van-password-input__item {
  margin: 0 0.3125rem;
  border-bottom: 0.0625rem solid #ebedf0;
}

[class*=van-hairline]:after {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 0 solid #575a6b;
}

input::placeholder{color:#ddd;font-weight:400;font-size:.875rem}
.van-password-input__security {
  height: 2.1875rem;
}

.van-icon {
  color: #bbb;
  font-size: 1.125rem;
}

.submit {
  width: 90%;
  max-width: 25rem;
  margin: 1.25rem auto 0;
  button {
    color: white;
    background: linear-gradient(rgb(162, 193, 255), rgb(64, 128, 255));
    border: 0px;
    height: 2.8125rem;
    border-radius: 0.3125rem;
  }
}

.view {
  .item {
    position: relative;
    padding: 0.625rem 0;
    .title {
      color: #333;
      display: flex;
      padding: 0 0.3125rem;
      justify-content: space-between;
      >div {
        &:last-child {
          width: 1.875rem;
          height: 100%;
        }
      }
    }

    .flex {
      align-items: center;
      input {
        flex: 1 1;
        line-height: 1.875rem;
        border: none;
        font-size: 1.25rem;
        color: #333;
      }
      i {
        font-size: 1.125rem;
      }
    }
  }

  .changpass {
    background-color: #fff;
    margin-top: 0.625rem;
    padding: 0 0.9375rem;
  }

}

</style>
