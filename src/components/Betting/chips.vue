<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 筹码组件
-->
<template>
  <div class="radiusBlock flex">
    <div v-for="(item,index) in list[type]" :key="index" @click="handleItemClick(item,index)">
      <img :src="item.img">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Chips',
  props: {
    type: {
      required: true,
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      list: {
        1: [
          {
            value: 5,
            img: require('@/assets/images/game/5.png')
          },
          {
            value: 20,
            img: require('@/assets/images/game/20.png')
          },
          {
            value: 50,
            img: require('@/assets/images/game/50.png')
          },
          {
            value: 100,
            img: require('@/assets/images/game/100.png')
          }
        ],
        2: [
          {
            value: 10,
            img: require('@/assets/images/game/10.png')
          },
          {
            value: 50,
            img: require('@/assets/images/game/50.png')
          },
          {
            value: 100,
            img: require('@/assets/images/game/100.png')
          },
          {
            value: 500,
            img: require('@/assets/images/game/500.png')
          }
        ],
        3: [
          {
            value: 100,
            img: require('@/assets/images/game/100.png')
          },
          {
            value: 500,
            img: require('@/assets/images/game/500.png')
          },
          {
            value: 1000,
            img: require('@/assets/images/game/1000.png')
          },
          {
            value: 2000,
            img: require('@/assets/images/game/2000.png')
          }
        ],
        4: [
          {
            value: 1000,
            img: require('@/assets/images/game/1000.png')
          },
          {
            value: 2000,
            img: require('@/assets/images/game/2000.png')
          },
          {
            value: 10000,
            img: require('@/assets/images/game/10000.png')
          },
          {
            value: 20000,
            img: require('@/assets/images/game/20000.png')
          }
        ]
      },
      img: ''
    }
  },
  created() {
  },
  methods: {
    handleItemClick(item, index) {
      this.$emit('itemClick', item.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .radiusBlock {
    height: 2.0625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem 0 2rem;
    >div {
      flex: 1 1;
      margin: 0 0 0 0.8rem;
      width: 3rem;
      height: 3rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
</style>
