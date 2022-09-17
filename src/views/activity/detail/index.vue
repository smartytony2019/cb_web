<template>

  <div class="wrapper activity">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" @click="$router.go(-1)">
            <div class="back"><i class="iconfont  icon-fanhui2" /></div>
          </div>
          <div class="flex-center-center title">优惠活动</div>
          <div class="flex-right" />
        </div>

        <div class="view">
          <div class="content">
            <div class="title before after flex-between-center">
              <div>{{ item.title }}</div>
            </div>

            <div class="img">
              <div class="van-image" style="width: 100%; height: 100%;">
                <img :src="item.img" class="van-image__img">
              </div>
            </div>

            <div class="atime">活动时间:长期活动</div>

            <div class="acontent" v-html="item.content" />
          </div>
        </div>

        <div class="lq">
          <van-button type="info" size="large" style="color: white; background: linear-gradient(rgb(162, 193, 255), rgb(64, 128, 255)); border: 0px;" @click="handleSubmit">申请领取</van-button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

import api from '@/api'
export default {
  name: 'ActivityDetail',
  data() {
    return {
      item: {},
      form: {
        id: '',
        sn: ''
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const id = this.$route.query.id
      if (id === null || id === '' || id === undefined) {
        this.$router.go(-1)
      }

      const res = await api.activity.find({ id })
      if (!res || res.code !== 0) {
        this.$router.go(-1)
      }

      this.item = res.data
      this.form.id = id
      this.form.sn = this.item.sn
    },
    async handleSubmit() {
      const res = await api.activity.submit(this.form)
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>

.index-page {
  height: 100% !important;
}

.content {
  background-color: #fff;
  .title {
    padding: 0.625rem 1.25rem;
    background-color: #fff;
    font-size: 1.125rem;
    color: #333;
    position: relative;
    font-weight: 400;
    margin-top: 0.625rem;
    font-weight: 600;
  }

  .img {
    margin: 0.625rem;
    border-radius: 0.3125rem;
    overflow: hidden;
  }

  .atime {
    height: 1.875rem;
    line-height: 1.875rem;
    padding-left: 1.25rem;
    font-size: .8125rem;
    font-weight: 400;
  }

  .acontent {
    padding: 0.625rem 1.25rem;
    background-color: #fff;
    line-height: 1.4375rem;
  }
}

.lq {
  padding: 0.9375rem 1.25rem;
  background-color: #fff;
  border-radius: 1.25rem 1.25rem 0 0;
  filter: drop-shadow(0 -0.0625rem 0.1875rem rgba(187,193,207,.4));
  button {
    &.van-button {
      border-radius: 0.3125rem;
      height: 2.8125rem;
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
}

</style>
