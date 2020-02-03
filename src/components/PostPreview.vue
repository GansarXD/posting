<template>
    <div class="mini-post">
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
            }
        }
    }
</script>

<style scoped>

</style>