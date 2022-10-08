<template>
  <div class="myList">
    <h1>This is myList page</h1>
    <ul>
      <slot v-for="row in books" :row="row" />
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    books: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  mounted() {
    console.log(this.books)
  }
}
</script>

