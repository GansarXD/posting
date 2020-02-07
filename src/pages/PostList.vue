<template>
    <div>
        <div>
            <h1>datepicker</h1>
            <date-picker
                    v-model="time2"
                    value-type="format"
                    :range="true"
                    :confirm="true"
                    format="DD-MM-YYYY"></date-picker>
        </div>
        <h3>Please enter title of your post below</h3>
        <input type="text" v-model="form.title">
        <br>
        <h4>Please enter text of your post below</h4>
        <textarea v-model="form.content" rows="5" cols="50"></textarea>
        <br>
        <button @click="createPost">create</button>
        <div id="post" v-for="post in posts">
            <post-preview
                    @deletedPost="deletePost"
                    @editModeOn="editModeOn"
                    :title="post.title"
                    :content="post.content"
            />
        </div>
        <edit-modal
                v-if="editMode"
                @editModeOff="editModeOff"
                @updatePost="editPost"
        />
    </div>
</template>

<script>
    import PostPreview from "@/components/PostPreview";
    import EditModal from "@/components/EditModal";
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';

    export default {
        name: "PostList",
        data() {
            return {
                time2: null,
                form: {
                    id: Number,
                    title: '',
                    content: ''
                },
            }
        },
        components: {
            datePicker: DatePicker,
            postPreview: PostPreview,
            editModal: EditModal
        },
        computed: {
            posts() {
                return this.$store.getters.POSTS;
            },
            id() {
                return this.$store.getters.ID;

            },
            editMode() {
                return this.$store.getters.EDIT_MODE;
            }
        },
        methods: {
            editModeOn() {
                this.$store.dispatch("ASYNC_EDIT_MODE_ON")
            },
            editModeOff() {
                this.$store.dispatch("ASYNC_EDIT_MODE_OFF")
            },
    createPost() {
        if(this.form.title && this.form.content != null) {
            // console.log(this.form);
            // console.log(this.$store.getters.POSTS);
            this.form.id = this.id;
            this.$store.dispatch('ASYNC_SET_POST', {
                creatingPostForm: this.form,
                createTimeoutDelay: 600
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
            editPost(title, content) {
                this.form.title = title;
                this.form.content = content;
                this.$store.dispatch('ASYNC_UPDATE_POST', {
                    editingPostForm: this.form
                })
            },
            deletePost() {

                this.$store.dispatch('ASYNC_REMOVE_POST', {
                    deletingPostForm: this.form
                })
            }
        }
    }
</script>

<style scoped>

</style>