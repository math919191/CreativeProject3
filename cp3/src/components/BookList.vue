<template>

<div class="books">
    <div v-for="book in completedList" :key="book.id">
        <p>title</p>


        <div class="book">
            <div class="rec-book"></div>
            <div class="description">
            <h6>Tuesdays With Morrie</h6>
            <p>This book was an absolute delight to read! I enjoyed the characters, the setting, the descirptions. The author is really amazing.</p>

            <p>12/12/12</p>
            </div>
        </div>    
    </div>

</div>

</template>

<script>
export default {
    name: 'BookList',
    props: {
        completedList: Array,
    }
}