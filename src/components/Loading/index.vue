<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 加载中组件
-->
<template>
  <div class="loading-wrap">
    <img src="@/assets/images/loading.png" alt="加载...">
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="scss" scoped>

.loading-wrap {
  position: fixed;
  z-index: 2005;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  max-width: 40rem;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-wrap img {
  width: 100px;
  height: 100px;
}
</style>
