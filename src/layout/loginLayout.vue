<template>
  <router-view />
</template>

<script>
import common from '@/utils/common'
export default {
  name: 'Layout',
  mounted() {
    console.log('mounted')
  },
  created() {
    console.log('created')
    common.resetCanvas()
  }
}
</script>

<style lang="scss" scoped>
</style>
