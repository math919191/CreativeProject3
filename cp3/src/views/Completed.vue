<template>
  <div>
    <h1>This is a completed page</h1>
    <p>Hello</p>
    <BookList :completedBooks="completedBooks"/>
  </div>
</template>

<script>
import BookList from "../components/BookList.vue"
export default {
    name: "Completed", 
    components: {
        BookList
    },
    computed: {
      completedBooks() {
        return this.$root.$data.completedBooks 
      }
    },
    props: {
      BookList: Array,
} 
}

</script>


<style scoped>

</style>

