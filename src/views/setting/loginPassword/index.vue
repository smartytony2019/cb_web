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
            <div class="item after">
              <div class="label">原密码</div>
              <div class="flex">
                <input v-model="form.oldPwd" placeholder="请输入原始密码" type="password">
                <van-icon name="closed-eye" />
              </div>
            </div>

            <div class="item after">
              <div class="label">新密码</div>
              <div class="flex">
                <input v-model="form.newPwd" placeholder="请输入新密码" type="password">
                <van-icon name="closed-eye" />
              </div>
            </div>

            <div class="item after">
              <div class="label">再次确认</div>
              <div class="flex">
                <input v-model="form.confirmPwd" placeholder="请再次输入密码" type="password">
                <van-icon name="closed-eye" />
              </div>
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
  name: 'LoginPassword',
  data() {
    return {
      form: {
        type: 1,
        oldPwd: '',
        newPwd: '',
        confirmPwd: ''
      }
    }
  },
  created() {
  },
  methods: {
    async handleSubmit() {
      const res = await api.member.changePwd(this.form)
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

input::placeholder{color:#ddd;font-weight:400;font-size:.875rem}

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
    .label {
      margin-bottom: 0.5rem;
      color: #333;
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
