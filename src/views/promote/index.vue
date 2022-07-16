<template>

  <div class="wrapper promote">
    <div class="flex-1 index-page">
      <div class="page">
        <div class="header flex">
          <div class="flex-left" />
          <div class="flex-center-center title">推广</div>
          <div class="flex-right" />
        </div>

        <div class="view">
          <div class="banner">
            <img src="https://designer-trip.com/image/daili_banner_0.png" class="img-icon">
          </div>

          <van-tabs swipeable>
            <van-tab v-for="(item,index) in tabs" :key="index+''">
              <!--自定义标题（#title必不可少）-->
              <template #title>
                <span class="van-tab__text">{{ item.name }}</span>
              </template>

              <div class="partner-content">
                <!-- 推广码 - start -->
                <div class="part1 flex-between-center">
                  <div class="code">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAGh1JREFUeF7tXXvQVdP7X6V79CIJyS0ZmZBuLtU0zCAVySVGNMpUlDQURTF0oRpRdG+EommKkUuiwmRqKjGSkktSYlJNlFSi8p3P+3v7nbPXetbZa5299znved/P8+d5n7322p+9Pu+z1rOfS4X//vvvP0UhAkRARKACCcKVQQTsCJAgXB1EIAMCJAiXBxEgQbgGiEB2CNCCZIcbryonCJAg5eRF8zGzQ4AEyQ43XlVOECBBysmL5mNmhwAJkh1uvKqcIECClJMXzcfMDgESJDvceFU5QYAEKScvmo+ZHQIkSHa48apyggAJUk5eNB8zOwRIkOxw41XlBAESpJy8aD5mdgiQINnhxqvKCQKxEWT79u1q9erVpRK2ihUrqvbt2zvP7ZNPPlH79u0L6B9//PGqdevWzmNIilu2bFFff/218ae2bduq4447zmlsXI9x4paaNWuqK6+80nnY999/Xx05csRZP5eKLVq0UHXr1o3llrER5L333lPXX399LJOKe5AqVaqogwcPOg977rnnqh9//DGgf+mll6qVK1c6jyEpTpkyRd13333Gn9auXasuvPBCp7FxPcaJWxo0aKA2btzoPGzVqlXVP//846yfS8V3331XdezYMZZbkiACjCRI+NoiQcIxCmjQgoQDRgsSjlEcGrQgnihyixUOGLdYMkbcYnGLVYwACZInggwbNkw1b948/F9YTBojR45Uy5cvD4xmsyBvvfWWmj59unHnpUuXqv379zsd0p999ln18ccfO82+cePGoqdo9uzZateuXU5jrF+/Xv38889OuldddZUaOHCgk+6ePXvUzJkzDd2ePXuqzp07G79LZ5BWrVqpIUOGON0vDqXPP/9cPfHEE8ZQBbXFgjvwuuuuiwMPpzFuueUW9eabbzoR5LnnnlMDBgxwGtfmxerWrZuaNWuW0xj33nuvmjx5sqF70UUXie5fp0EzKN11113iopcugdcOzgldxo4dqx566CEngtx8883qjTfeiDpt5+sXLlwouu9JkAwQkiApcEgQZ65ZFRM/g9CCpLCnBYm+YNNHoAXJAk9aEFqQgt9ioV727t27s1j+qUsqVaokhmf4EGTSpElq6NChxjxwYNXDKJo1a6YWL15s6MIq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" style="display: inline-block;">
                  </div>
                  <div class="part-right">
                    <div class="mb">邀请码：</div>
                    <div class="flex">
                      <div class="input">smartytony</div>
                      <button>复制</button>
                    </div>
                    <div class="mb mb2">邀请链接：</div>
                    <div class="flex">
                      <div class="input">https://www.habo66.com/#/entry?key=smartytony&l=1</div>
                      <button>复制</button>
                    </div>
                  </div>
                </div>
                <!-- 推广码 - end -->

                <!-- 我的团队 - start -->
                <div class="part1">
                  <div class="text1">我的团队</div>
                  <div class="flex wrap">
                    <div class="listContent flex-column-center">
                      <div><img src="@/assets/images/promote/m1.png"></div>
                      <div class="mar">直属人数</div>
                      <div>1</div>
                    </div>
                    <div class="listContent flex-column-center">
                      <div><img src="@/assets/images/promote/m2.png"></div>
                      <div class="mar">直属人数</div>
                      <div>1</div>
                    </div>
                    <div class="listContent flex-column-center">
                      <div><img src="@/assets/images/promote/m3.png"></div>
                      <div class="mar">直属人数</div>
                      <div>1</div>
                    </div>
                    <div class="listContent flex-column-center">
                      <div><img src="@/assets/images/promote/m4.png"></div>
                      <div class="mar">直属人数</div>
                      <div>1</div>
                    </div>
                    <div class="listContent flex-column-center">
                      <div><img src="@/assets/images/promote/m5.png"></div>
                      <div class="mar">直属人数</div>
                      <div>1</div>
                    </div>
                    <div class="listContent flex-column-center">
                      <div><img src="@/assets/images/promote/m6.png"></div>
                      <div class="mar">直属人数</div>
                      <div>1</div>
                    </div>
                  </div>
                </div>
                <!-- 我的团队 - end -->

                <div class="part1">
                  <div class="text1 flex-between-center">
                    <div>我的佣金</div>
                    <div>领取记录</div>
                  </div>
                  <div class="flex-between-center mar">
                    <div class="flex-between-center m1">
                      <div><img src="@/assets/images/promote/t1.png"></div>
                      <div>
                        <div>可用佣金</div>
                        <div class="text3">0</div>
                      </div>
                    </div>
                    <div class="flex-between-center m1">
                      <div><img src="@/assets/images/promote/t2.png"></div>
                      <div>
                        <div>佣金合计</div>
                        <div class="text3">0</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button class="van-button van-button--primary van-button--large van-button--round" style="color: white; background: linear-gradient(187.43deg, rgb(255, 174, 80) 5.93%, rgb(234, 105, 32) 94.39%); border: 0px;">
                      <div class="van-button__content">
                        <span class="van-button__text">申请佣金</span>
                      </div>
                    </button>
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
      tabs: [
        {
          name: '我的推广1'
        },
        {
          name: '我的推广2'
        },
        {
          name: '我的推广3'
        },
        {
          name: '我的推广4'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background: #e5e5e5;
}

.view {
  .banner {
    height: 9.625rem;
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

.partner-content {
  padding-bottom: 0.625rem;
  background: #e9ecf1;
  .part1 {
    padding: 0.625rem;
    background: #fff;
    box-shadow: 0.1875rem 0.1875rem 0.1875rem hsl(0deg 0% 61% / 25%);
    margin-bottom: 0.625rem;
    .code {
      width: 7rem;
      height: 7rem;
      border: 0.0625rem solid #333;
      img {
        width: 100%;
      }
    }

    .part-right {
      text-align: left;
      .mb {
        margin-bottom: 0.3125rem;
      }

      .mb2 {
        margin-top: 0.625rem;
      }

      .input {
        width: 12.25rem;
        height: 1.75rem;
        border-radius: 0.3125rem;
        background: #e7e7e7;
        margin-right: 0.625rem;
        line-height: 1.75rem;
        padding-left: 0.625rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
        font-size: .875rem;
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

    .text1 {
      color: #60768a;
      font-size: 1rem;
      width: 100%;
      padding-bottom: 0.625rem;
      border-bottom: 0.125rem solid #f0f6ff;
    }

    .wrap {
      flex-wrap: wrap;
      .listContent {
        width: 33.3%;
        margin: 0.625rem 0;
        font-size: .875rem;
        >div {
          &:first-child {
            width: 3.125rem;
            height: 3.125rem;
          }
        }
      }
    }

    .mar {
      margin: 0.625rem 0;
      text-align: center;
    }

    .m1 {
      width: 45%;
      border: 0.0625rem solid #98c1fe;
      border-radius: 0.3125rem;
      padding: 0.625rem;
      font-size: .875rem;
      >div{
        &:first-child {
          width: 3.125rem;
          height: 3.125rem;
        }
      }
    }
  }
}

</style>
