<template>
  <router-view />
</template>

<script>
import common from '@/utils/common'
export default {
  name: 'Layout',
  created() {
    common.resetCanvas()
  }
}
</script>

<style lang="scss" scoped>
</style>
