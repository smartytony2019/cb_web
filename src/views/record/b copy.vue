<template>
  <div class="about">
    <h1>This is about page</h1>
    <my-list :books="books">
      <template slot-scope="scope">
        <li>{{ scope.row.name }}</li>
      </template>
    </my-list>
  </div>
</template>
<script>
import myList from './a.vue'
export default {
  components: {
    myList
  },
  data() {
    return {
      books: [
        { name: 'css揭秘' },
        { name: '深入浅出nodejs' },
        { name: 'javascript设计模式与开发实战' }
      ]
    }
  }
}
</script>
