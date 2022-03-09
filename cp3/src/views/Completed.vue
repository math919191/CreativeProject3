<template>
  <div>
    <h1>This is a completed page</h1>
    <p>Hello</p>
    <BookList/>
  </div>
</template>

<script>
import BookList from "../components/BookList.vue"
export default {
    name: "Completed", 
    components: {
        BookList
    }
} 
</script>


<style scoped>

</style>

