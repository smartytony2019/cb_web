<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 代理返佣表
-->
<template>
  <div class="promoteForm">
    <div class="table-box">
      <div class="title">代理返佣表</div>
    </div>

    <div class="table-content">
      <div class="content-item">
        <div class="line">代理级别</div>
        <div class="line">团队业绩/日</div>
        <div class="line">返佣额度</div>
      </div>

      <div v-for="(item,index) in list" :key="index" class="content-item">
        <div class="line">{{ item.id }}</div>
        <div class="line">{{ item.min }}-{{ item.max }}</div>
        <div class="line">{{ item.rebate }}/万</div>
      </div>

    </div>

  </div>
</template>
<script>
import api from '@/api'
export default {
  name: 'Rebate',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const res = await api.promote.rebate({})
      if (res && res.code === 0) {
        this.list = res.data
      }
    },
    handleDateSelect() {
      this.isShowCalendar = !this.isShowCalendar
    }
  }
}
</script>

<style lang="scss" scoped>

.promoteForm {
  .table-box {
    box-sizing: border-box;
    background: #fdfdfd;
    .title {
      padding-left: 1rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 3.5rem;
      border-bottom: 0.0625rem solid #eff0f1;
      color: #60768a;
      font-size: 1rem;
    }
  }

  .table-content {
    background: #fdfdfd;
    .content-item {
      display: flex;
      height: 2.8125rem;
      justify-content: center;
      align-items: center;
      border-bottom: 0.0625rem solid #eff0f1;
      .line {
        width: 30%;
        text-align: center;
      }
    }
  }
}
</style>
