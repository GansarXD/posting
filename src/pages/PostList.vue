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
        <button class="btn btn-primary" @click="createPost">CREATE</button>
        <div id="post" v-for="post in posts">
            <post-preview
                    @deletedPost="deletePost"
                    @editModeOn="editModeOn"
                    @openPost="openPost"
                    :title="post.title"
                    :content="post.content"
                    :id="post.id"
                    :date="post.date"
            />
        </div>
        <edit-modal
                v-if="editMode"
                @editModeOff="editModeOff"
                @updatePost="editPost"
                :id="this.editPostId"
        />
        <post-about
                v-if="false"
                :title="this.postPageForm.title"
                :content="this.postPageForm.content"
                :date="this.postPageForm.date"
        />
    </div>
</template>

<script>
    import PostPreview from "@/components/PostPreview";
    import EditModal from "@/components/EditModal";
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import PostAbout from "@/pages/PostAbout";

    export default {
        name: "PostList",
        data() {
            return {
                time2: null,
                editPostId: Number,
                form: {
                    id: Number,
                    title: '',
                    content: ''
                },
                postPageForm: {
                    title: '',
                    content: '',
                    date: null
                }
            }
        },
        components: {
            datePicker: DatePicker,
            postPreview: PostPreview,
            editModal: EditModal,
            postAbout: PostAbout
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
            editModeOn(id) {
                // console.log(id);
                this.editPostId = id;
                this.$store.dispatch("ASYNC_EDIT_MODE_ON")
            },
            editModeOff() {
                this.$store.dispatch("ASYNC_EDIT_MODE_OFF")
            },
    createPost() {
        if(this.form.title && this.form.content != null) {
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
            editPost(post) {
                // console.log(post);
                this.posts.forEach((element) => {
                    if(element.id === post.id) {
                        // console.log(element);
                        // console.log(post);
                        this.$store.dispatch('ASYNC_UPDATE_POST', {
                            id: post.id,
                            title: post.title,
                            content: post.content
                        })
                    }
                })
            },
            deletePost(post) {
                // console.log(post);
                this.posts.forEach((element) => {
                    if(element.id === post.id) {
                        console.log(element);
                        this.$store.dispatch('ASYNC_REMOVE_POST', element)
                    }
                })
            },
            openPost(post) {
                this.$router.push('/post-about');
                this.postPageForm = {
                    title: post.title,
                    content: post.content,
                    date: post.date
                };
            }
        }
    }
</script>

<style scoped>

</style>