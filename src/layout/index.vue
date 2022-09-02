<template>
  <router-view />
  <!-- <div class="app-wrapper"></div> -->
</template>

<script>
export default {
  name: 'Layout',
  created() {
    const scale = document.documentElement.clientWidth / 420
    const b = 16 * Math.min(scale, 2)
    document.getElementsByTagName('html')[0].style.fontSize = b + 'px'
  }
}
</script>

<style lang="scss" scoped>
</style>
