<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 哈希两面
-->
<template>
  <div class="wrapper">
    <div class="flex-1 index-page">
      <div class="page">

        <div class="headerFIVE">
          <div class="head flex-between-center">
            <div class="flex-center-center" @click="$router.go(-1)">
              <i class="iconfont icon-fanhui2" />
              <span>哈希两面 体验房</span>
            </div>
            <div class="icon-drop" @click="isShowDrop = !isShowDrop">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgB7dZBDYUwEATQ2W/gIwUHWMAJSCiKCA7qACTgAFBQdiBY6Fz2JW16a7NtZmullARg8NGgvsn8AAU658+nDJ2dFWDpO2iuYEEIQc04eRa0EOSAmWUG0ezrHhpZ3QvAXpCgk743wPv/o67L38CJEILa9ydURDEzYOMBVl+00Hh6wQHNj/jBXjDhLUdt3HO8AYZ7MoUEz+JsAAAAAElFTkSuQmCC">
            </div>
            <GameHeadDrop :show="isShowDrop" @close="isShowDrop = false" />
          </div>

          <div class="en_name">Block Hash</div>

          <div class="subxt flex-between-center">
            <div>开奖结果</div>
            <div class="flex xt">
              <div class="ac">大小</div>
              <div>单双</div>
              <div class="ac">个人走势</div>
              <div>全部走势</div>
            </div>
          </div>

          <div class="orderList">
            <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
              <div style="overflow: auto; height: 106%; width: 100%; position: absolute;">
                <div class="flex" style="margin-left: 30px;">
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                  <div class="lie">
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                    <div class="blank small">小</div>
                  </div>
                  <div class="lie">
                    <div class="blank big">大</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="view">
          <div class="gameContent">
            <div class="game_name_list">
              <div class="name_list_item active"> 体验房 </div>
              <div class="name_list_item"> 体验房 </div>
              <div class="name_list_item"> 体验房 </div>
              <div class="name_list_item"> 体验房 </div>
            </div>
            <div class="content">
              <div>
                <div class="orderShow Hash_group">
                  <div>
                    <span>等待开奖中...</span>
                  </div>
                </div>
              </div>

              <div class="flex-between-center new_win">
                <div />
                <div>
                  游戏说明
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATgSURBVHgBxVndcdtGEN4FoLxYmjAVhK7AdAWmKohcgVyBCYaUZ/Ik8CkzEmlBbkBSBVYHhisQXYGpCsKZMC8OgfXu4XAASJA8QPT4exAB427xYXdv/4zQEP7wsgsJdMjFVwDYAYIWALXSpzgHpBlfzJDoC/9G4fgsggbAOot9P2gl3lGPN/k5GUsQzvhvhPG3URj+NbPdZkVQiJF3dM5v8aul8MuJNUYw01Lb/Fc+oAPVZG9tie4k+HYw7iFiUNYYztl0d2zGe1j+Nw3DYL5pv3IFwjcE7ApI7QJJNn88Ct+/u4WmBHvDyVVJa5ZCN5L98+INoXteIgoYXo8HfahDMDXp4Ue+7OYLacTaCrdpy5ro8DJgjZ4XWEzxmXscBv012U6VgMQ9jAw50RomL/kUBvsgJxBZIlMfHH4HR4NF/LFq7ZoGS2YVcvG3413OLH6WgPOK/bKthCI9wnJ5u3Of/3eb3F8+5SZfN3eJoPIRx7mxJVflCiVYnNZVkuxKfdZwuEZwbaGY9fLd1FbwRsiHHjkvq/zLyGILsE9+0rdzPHSfZ+uNDybuQVD4itE2cqvrU0j2gHu+iNS1+Wdq07/J1TZZkmXUIUzRokViDpDSoNKGd/AV9BdfTwbPtwn0/YsOec5Ddk8EX5x40c0OkZYnpjeBerdFrlrkJg9GSYfub6JFx2jDfHA8gl3w8KRwN3fi/0+KJ1x8DpfusTwzqwi720SGYX9eevdiqQ6qIogS5VMhM5sgnCQFzQB9rjoE8kL+MRojwhewA/rd6qPYJ3vy66UOanwpAgt8eH92Aj8ISHBHCEKuJdxEg13zEJM72BPED8uyVdllw/C+cNdxiuZqWrOtk+P4KCGoiOXy3mrz0isepK6DDv6ub6awJ9DB0U0xBKmwZVkDKt/FNAVydHghJm7rZ3vJsypVEuU+KgePcy/UAalqXPyiJQTTOi8rNp8ASZVr5RmnS6gJzumP+rLlwB6har38xqrQqEJCYIpjIZiaFo2pG8EfjE9KfieFbQNyaq+Dv+pLziSo8ybtSPq70TVXlgF/CzINzhyKkzQ+Ibb94Kpep1ZC3rNwPLWLeRWQnAw6h/Ppf/TYxhEB/KGeLpbyIIImIIpUHkivP0NTeMLBVIFTj70wj3+kioAIGkCb9BaeiIQ7QMzL6MjR2SNN0Ain8JNRKlyYm65m6Fo/b6Wx7OdAvRvLhUsaB5ee6QEkljU5LNzgn3IW+ac3mHyVa2iAYhyVXsYQTItFSLUoX6CLxTpg0wTqJPN+9qGw7v63w0ne0HOzlcXQPJPEbgB5sXiuRha1GBZGI4S18rp/dtFhNwv03lmmvRJBpcXENC4cKZwbXdPZ8UuSftqI49yqbcjISf+SuKZpX81Aa407p6xQV7RPyqfW5IqtLrtZOBmW3KtyNtMbjqXY7BqSTvx6Vxtam5y0GmyljJx0hh8mw87quspqhjuy15AVsNLXkvOgnHgfxLjaFlmqUS+EFGlbq9ZvHb+VzC34AeO3KrNaE9wk1IxzpcnaMsAUbYH3rMPp64SHoKdrQ1BIRsU5TCOC6Yv4NHNzvzEV8nyPY5OMPuY8WJ+r2pKro00lnIq58cJqnFdziK6Jro5zraA0dl13CFqLYBE6kHcJeWJAUo1ju/zfEBL0aYoxl15cMTVtab8DN1+gbklGWtAAAAAASUVORK5CYII=">
                </div>
              </div>

              <div class="select_content">
                <div class="playBlockNew playActive">
                  <div>大</div>
                  <div>1.95</div>
                </div>
                <div class="playBlockNew">
                  <div>小</div>
                  <div>1.95</div>
                </div>
                <div class="playBlockNew">
                  <div>单</div>
                  <div>1.95</div>
                </div>
                <div class="playBlockNew">
                  <div>双</div>
                  <div>1.95</div>
                </div>
              </div>
            </div>
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
  name: 'Comb',
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

.headerFIVE {
  padding: 0 0.625rem;
  background: url(../../assets/images/hash_zuhe_head.png) no-repeat;
  background-size: 100% 100%;

  .head {
    height: 2.5rem;
    width: 100%;
    font-size: 1.0625rem;
    padding: 0 0.3125rem;
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
  .en_name {
    font-size: 1rem;
    margin-left: 0.5rem;
  }

  .subxt {
    padding-left: 0.5rem;
    height: 30px;
    .xt {
      height: 1.25rem;
      margin-left: 0.875rem;
      >div {
        background: #799aee;
        color: #fff;
        padding: 0 0.1875rem;
        display: flex;
        justify-content: center;
        height: 100%;
        align-items: center;
        border-radius: 1.25rem;
        min-width: 2.5rem;
        margin-left: 0.3125rem;
      }
      .ac {
        background: #66a8ff;
      }
    }
  }

  .orderList {
    width: 100%;
    background: rgba(0,0,0,.4);
    height: 8.125rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0.3125rem 0.625rem;
    border-radius: 0.625rem;
    background: rgba(0,0,0,.5);
    background-size: 100% 100%;
    .list-title {
      padding: 0.4375rem 0;
      >div {
        flex: 1 1;
        text-align: center;
        font-size: .8125rem;
      }
    }

    .lie {
      min-width: 2.5rem;
      .blank {
        width: 2.1875rem;
        height: 1.125rem;
        font-size: .8125rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #568bf8;
        color: #fff;
        margin: 0.1875rem auto;
      }
      .big {
        background: #f12d35;
      }
    }

  }

}

.Hash_group {
    background-image: url(https://designer-trip.com/image/game/group.hash.png);
}

.view {
  padding-bottom: 8.125rem;
  display: flex;
  flex-direction: column;
  background: rgb(235, 236, 241);
  .game_name_list {
    display: flex;
    justify-content: space-around;
    padding: 0.625rem 0.625rem;
    background: #fff;

    .name_list_item{
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
  .gameContent {
    .content {
      padding: 0 0.9375rem;
    }
    .new_win {
      font-size: 1rem;
      padding-top: 0.625rem;
      color: #6f748c;
      img {
        width: 0.8125rem;
        margin-left: 0.3125rem;
      }
    }
    .select_content {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.625rem;
      .playBlockNew{
        width: 10.75rem;
        font-size: 1.0625rem;
        text-align: center;
        border-radius: 0.4375rem;
        background: #fff;
        padding: 0.9375rem 0;
        color: #60768a;
        box-shadow: 0 0.125rem 0.375rem rgb(0 0 0 / 5%);
        margin: 0 auto 0.625rem;
        >div {
          text-align: center;
          &:first-child {
            font-size: 1.625rem;
          }
          &:last-child {
            color: #a3a7b7;
            margin-top: 0.625rem;
          }
        }
      }

      .playActive {
        background: linear-gradient(118.11deg,#7fa7f8 -5.62%,#2568ed 108.48%)!important;
        box-shadow: 0 0.3125rem 0.4375rem rgb(59 119 239 / 38%);
        border-radius: 0.4375rem;
        color: #fff;
      }
    }
  }

  .orderShow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.625rem auto 0.625rem;
    background-size: cover;
    border-radius: 0.5625rem;
    padding: 0.5rem 1.625rem;
    font-size: 1.125rem;
    height: 2.5rem;
    text-align: center;
    box-shadow: 0 0.375rem 0.3125rem -0.3125rem #2e2e2e;
    >div {
      text-align: center;
      width: 100%;
    }
  }
}

.page {
  color: #fff;
}

.footer {
  background: #fff;
  border-top-left-radius: 1.0625rem;
  border-top-right-radius: 1.0625rem;
  color: #60768a;
  padding: 1.125rem 0.625rem;
  font-size: .9375rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  z-index: 999;
  left: 0;
  right: 0;
  max-width: 40rem;
  margin: 0 auto;
  .clear {
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(119,125,149,.47843137254901963);
    img {
      margin-top: -0.125rem;
      width: 1.0625rem;
      height: 1.125rem;
    }
  }

  .radiusBlock {
    height: 2.0625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.125rem 0 0;
    >div {
      flex: 1 1;
      margin: 0 0.3125rem;
      width: 3rem;
      height: 3rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
  .amount {
    width: 95%;
    height: 2rem;
    background: #eef1f8;
    border: none;
    box-sizing: border-box;
    box-shadow: inset 0 0.125rem 0.25rem #fff;
    border-radius: 0.5625rem;
    color: #4080ff;
    padding-left: 0.3125rem;
  }
  .m {
    margin-top: 0.9375rem;
  }
  .lottery {
    background: #eef1f8;
    border-radius: 0.5rem;
    padding: 0.625rem;
    text-align: center;
  }
  .button {
    background: #eef1f8;
    border-radius: 0.625rem;
    text-align: center;
    background: linear-gradient(180deg,#88b8ff,#4080ff);
    box-shadow: 0 0.375rem 0.625rem rgb(0 0 0 / 12%);
    max-width: 16.125rem;
    flex: 1 1;
    height: 3rem;
    border: none;
    color: #fff;
    font-size: .875rem;
    font-weight: 400;
    margin: 0 0.3125rem;
    >div {
      >div {
        &:last-child {
          font-size: .8125rem;
          margin-top: 0.3125rem;
        }
      }
    }
  }
  .hao {
    background: linear-gradient(180deg,#4de0f4,#40baff);
    color: #fff;
    border-radius: 0.5rem;
    font-size: .8125rem;
    text-align: center;
    >p {
      margin-top: 0.125rem;
    }
  }
}

</style>
