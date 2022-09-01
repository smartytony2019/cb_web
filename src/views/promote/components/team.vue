<!--
@Author:      tony
@Date:        2019-01-04T10:00:00+08:00
@Description: 团队业绩
-->
<template>
  <div class="tableContent">
    <div class="date">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAP7/fH2DvIH+fj3DPr1AQT8qIjSUAAACYSURBVCjP7c9JDoMwDEBRg2uHJEz//petwlC1IilS130LkPKtDHIIqkFOE1k+DTC8RkHf0jKbTTDZIYObzctes1NzbJfAVb18T8C2EkUM0lI9ewCTvsxc8lj+kV6c9fKwtI/OuEAnDR3c57FvGEv+6j6vjwa7udo//5iV3MqGS0JDvQYlSnDUuoqseBDpnAa3bZOo1ZiCyBMZsBLcmjYoNAAAAABJRU5ErkJggg==">
      <span>查询时间：</span>
      <span style="font-weight:600" @click="handleDateSelect">2022/07/18</span>
    </div>

    <div class="dataList">
      <div class="listContent flex-column-center">
        <div class="mar">团队业绩</div>
        <div>
          <img src="@/assets/images/promote/m6.png">
        </div>
        <div>0</div>
      </div>

      <div class="listContent flex-column-center">
        <div class="mar">自营业绩</div>
        <div>
          <img src="@/assets/images/promote/m7.png">
        </div>
        <div>0</div>
      </div>

      <div class="listContent flex-column-center">
        <div class="mar">直属业绩</div>
        <div>
          <img src="@/assets/images/promote/m4.png">
        </div>
        <div>0</div>
      </div>

      <div class="listContent flex-column-center">
        <div class="mar">下属业绩</div>
        <div>
          <img src="@/assets/images/promote/m3.png">
        </div>
        <div>0</div>
      </div>

      <div class="listContent flex-column-center">
        <div class="mar">所得佣金</div>
        <div>
          <img src="@/assets/images/promote/m5.png">
        </div>
        <div>0</div>
      </div>
    </div>
    <van-calendar v-model="isShowCalendar" color="#1989fa" :min-date="minDate" :max-date="maxDate" />
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  name: 'Team',
  data() {
    return {
      minDate: new Date(dayjs().year(), dayjs().month(), 1),
      maxDate: new Date(dayjs().year(), dayjs().month(), 1),
      isShowCalendar: false
    }
  },
  created() {
  },
  methods: {
    handleDateSelect() {
      this.isShowCalendar = !this.isShowCalendar
    }
  }
}
</script>

<style lang="scss" scoped>

.tableContent {
  padding: 0.3125rem;
  margin: 0.3125rem;
  .date {
    width: 12.5rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 1.875rem;
    margin-left: 0.3125rem;
    border-radius: 0.9375rem;
    padding: 0 0.625rem;
    margin-bottom: 0.3125rem;
    img {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.3125rem;
    }
  }

  .dataList {
    display: flex;
    flex-wrap: wrap;
    .listContent {
      width: calc(50% - 0.625rem);
      padding: 0.625rem;
      background-color: #fff;
      margin: 0.3125rem;
      border-radius: 0.625rem;
      height: 10.6875rem;
      .mar {
        margin-bottom: 1.25rem;
        text-align: center;
      }
      img {
        width: 4.375rem;
        height: 4.375rem;
      }
      >div {
        &:last-child {
          margin-top: 0.625rem;
        }
      }
    }
  }
}

</style>
