<template>
    <div class="mini-post" id="bgcolor">
        <button @click="editModeOn">Edit this post</button>
        <hr>
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <hr>
        <p>{{ date }}</p>
        <hr>
        <button @click="deletePost">Remove this post</button>
    </div>
</template>

<script>
    export default {
        props: ["title","content"],
        name: "PostPreview",
        data() {
            return {
                date: new Date()
            }
        },
        methods: {
            deletePost() {
                let deadColor = document.getElementById('bgcolor');
                deadColor.style.backgroundColor = "#00A4CA";
                this.$emit('deletedPost')
            },
            editModeOn() {
                this.$emit('editModeOn')
            }
        }
    }
</script>

<style scoped>
    #bgcolor {
        background-color: #B2004B;
    }
</style>