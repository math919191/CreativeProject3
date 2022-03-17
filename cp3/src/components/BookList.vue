<template>

<div class="books">
    <div class="a" v-for="book in completedBooks" :key="book.id">
        {{title}}
        <!-- <div class="book">
            <div class="rec-book"></div>
            <div class="description">
            <h6>{{book.title}}</h6>
            <p>This book was an absolute delight to read! I enjoyed the characters, the setting, the descirptions. The author is really amazing.</p>

            <p>12/12/12</p>
            </div>
        </div>     -->
    </div>

</div>

</template>

<script>
export default {
    name: 'BookList',
    props: {
        completedBooks: Array,
    }
}
</script>

<style scoped>
  .rec-book {
    /* height: 200px; */
    margin: 20px;
    height: 400px;
    border: 8px solid #7796cbff;
    justify-content: center;
  }

  .book {
    width: 300px;
    border: 8px solid #2d3047ff;;
    background-color: #2d3047ff;;
    justify-content: center;
    /* margin: 20px auto; 
    fix later for small screen 
    */
    margin: 20px;
    }

    .description {
        border: 5px solid #E8DDB5;
        background-color: #E8DDB5;
        text-align: center;
        margin: 8px;

    }

  h6, p{
    color: #2d3047ff;
  }
</style>