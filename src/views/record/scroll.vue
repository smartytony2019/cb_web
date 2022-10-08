<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-list
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <slot />
    </van-list>
  </van-pull-refresh>
</template>
<script>
export default {
  props: {
    // finished: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      finished: false,
      isLoading: false
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.$EventBus.$on('finished', (finished) => {
        this.finished = finished
        this.isLoading = false
      })
    },
    async onRefresh() {
      this.$emit('onRefresh')
    },
    async onLoad() {
      this.$emit('onLoad')
    }
  }
}
</script>

