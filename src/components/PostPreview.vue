<template>
    <div class="mini-post">
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
                this.$emit('deletedPost')
            },
            editModeOn() {
                this.$emit('editModeOn')
            }
        }
    }
</script>

<style scoped>

</style>