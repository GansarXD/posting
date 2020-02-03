<template>
    <div>
        <h3>Please enter title of your post below</h3>
        <input type="text" v-model="form.title">
        <br>
        <h4>Please enter text of your post below</h4>
        <textarea v-model="form.content" rows="5" cols="50"></textarea>
        <br>
        <button @click="createPost">create</button>
        <div id="post" v-for="(post, index) in posts">
            <post-preview
                    @deletedPost="deletePost(index)"
                    :title="post.title"
                    :content="post.content"
            />
        </div>

    </div>
</template>

<script>
    import PostPreview from "@/components/PostPreview";

    export default {
        name: "PostList",
        data() {
            return {
                form: {
                    id: -1,
                    title: '',
                    content: ''
                },
                posts: []
            }
        },
        components: {
            postPreview: PostPreview
        },
        methods: {
            createPost() {
                this.form.id += 1;
                this.posts.push({...this.form});
            },
            deletePost(index) {
                this.posts.splice(index, 1);
            }
        }
    }
</script>

<style scoped>

</style>