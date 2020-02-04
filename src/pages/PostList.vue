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
                    title: '',
                    content: ''
                },
            }
        },
        components: {
            postPreview: PostPreview
        },
        computed: {
            posts() {
                return this.$store.getters.POSTS;
            }
        },
        methods: {
    createPost() {
        if(this.form.title && this.form.content != null) {
            console.log(this.form);
            console.log(this.$store.getters.POSTS);
            this.$store.dispatch('ASYNC_SET_POST', {
                postForm: this.form,
                timeoutDelay: 600
            });
            // this.posts.push({...this.form});
        }
        else {
            this.$toast.error('Fields must be filled', {
                dismissible: false,
                duration: 1700
            });
        }
    },

            deletePost(index) {
                this.$store.dispatch('ASYNC_REMOVE_POST', index)
            }
        }
    }
</script>

<style scoped>

</style>