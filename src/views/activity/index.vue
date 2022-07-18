<template>

  <div class="wrapper activity">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" />
          <div class="flex-center-center title">优惠活动</div>
          <div class="flex-right" />
        </div>

        <div class="view">
          <van-tabs swipeable @click="handleTabChange">
            <van-tab v-for="(item,index) in tabs.nav" :key="index+''">
              <!--自定义标题（#title必不可少）-->
              <template #title>
                <span class="van-tab__text">{{ item.name }}</span>
              </template>

              <div class="content">
                <div v-for="(cItem, cIndex) in imageList" :key="cIndex+''" class="listItem">
                  <div class="list_icon">
                    <div class="van-image" style="width: 100%; height: 100%;">
                      <img src="data:image/png;base64,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" class="van-image__img">
                    </div>
                  </div>

                  <div class="list_img_wrap">
                    <div class="van-image" style="width: 100%; height: 100%;" @click="handleItemClick(cItem)">
                      <img :src="cItem.image" class="van-image__img">
                      <p class="list_timer">{{ cItem.time }}</p>
                    </div>
                  </div>
                </div>

              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <Nav />
  </div>
</template>
<script>

import Nav from '@/components/Nav'
export default {
  name: 'Promote',
  components: { Nav },
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
    this.$store.dispatch('app/setNavIndex', 1)
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
  background: #e5e5e5;
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

.content {
  padding: 0.625rem 0.9375rem;
  .listItem {
    height: 9.625rem;
    width: 100%;
    position: relative;
    border-radius: 0.625rem;
    margin-top: 0.625rem;
    overflow: hidden;
    box-shadow: 0 0.125rem 0.25rem rgb(108 123 168 / 20%);
    .list_icon {
      width: 3.4375rem;
      height: 3.4375rem;
      position: absolute;
      z-index: 2;
      top: 0.3125rem;
      left: -0.3125rem;
    }

    .list_img_wrap {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
