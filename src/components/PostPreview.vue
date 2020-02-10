<template>
    <div class="mini-post" id="bgcolor">
        <button class="btn btn-warning" @click="editModeOn">Edit this post</button>
        <hr>
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <hr>
        <p>{{ date }}</p>
        <hr>
        <button class="btn btn-danger" @click="deletePost">Remove this post</button>
    </div>
</template>

<script>
    export default {
        props: ["title","content","id"],
        name: "PostPreview",
        data() {
            return {
                date: new Date()
            }
        },
        methods: {
            deletePost() {
                this.$emit('deletedPost', {
                    id: this.id,
                    title: this.title,
                    content: this.content
                });
            },
            editModeOn() {
                this.$emit('editModeOn', this.id)
            }
        }
    }
</script>

<style scoped>
    #bgcolor {
        background-color: #ffffff;
    }
</style>