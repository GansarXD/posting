<template>
  <div>
    <div>
      <h1>datepicker</h1>
      <date-picker
        v-model="time2"
        value-type="format"
        :range="true"
        :confirm="true"
        format="DD-MM-YYYY"
      ></date-picker>
    </div>
    <h2>Please enter web url of your image</h2>
    <input type="text" v-model="form.imgUrl" />
    <br />
    <h3>Please enter title of your post below</h3>
    <input type="text" v-model="form.title" />
    <br />
    <h4>Please enter text of your post below</h4>
    <textarea v-model="form.content" rows="5" cols="50"></textarea>
    <br />
    <button class="btn btn-primary" @click="createPost">CREATE</button>
    <br />
    <br />
    <button class="btn btn-warning" @click="getPosts">
      GET POSTS BY AXIOS
    </button>
    <div id="post" v-for="post in posts">
      <post-preview
        @deletedPost="deletePost"
        @editModeOn="editModeOn"
        @openPost="openPost"
        :title="post.title"
        :content="post.content"
        :id="post.id"
        :date="post.date"
        :imgUrl="post.imgUrl"
      />
    </div>
    <!--    <edit-modal-->
    <!--      v-if="editMode"-->
    <!--      @editModeOff="editModeOff"-->
    <!--      @updatePost="editPost"-->
    <!--      :id="this.editPostId"-->
    <!--    />-->
    <modal
      class="post-modal text-center"
      name="hello-world"
      :scrollable="true"
      :draggable="true"
    >
      <button class="btn btn-danger" @click="hide">CLOSE</button>
      <hr />
      <img style="width: 15%;" :src="postPageForm.imgUrl" alt="" />
      <hr />
      <h4>{{ postPageForm.title }}</h4>
      <hr />
      <h6>{{ postPageForm.content }}</h6>
      <hr />
      <h6>{{ postPageForm.date }}</h6>
    </modal>
    <modal
      name="edit-modal"
      class="post-modal"
      :adaptive="true"
      :scrollable="true"
    >
      <button class="btn btn-danger" @click="editModeOff">CANCEL</button>
      <br />
      <h4>New Image</h4>
      <input v-model="newImgUrl" type="text" />
      <hr />
      <h4>New Title</h4>
      <input v-model="newTitle" type="text" />
      <h4>New Content</h4>
      <textarea v-model="newContent" type="text" />
      <br />
      <button class="btn btn-success" @click="editPost">
        CONFIRM
      </button>
    </modal>
  </div>
</template>

<script>
import PostPreview from "@/components/PostPreview";
import EditModal from "@/components/EditModal";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import PostAbout from "@/components/PostAbout";
import { MyAxios } from "@/services/index";

export default {
  name: "PostList",
  data() {
    return {
      time2: null,
      editPostId: Number,
      newContent: "",
      newTitle: "",
      newImgUrl: "",
      form: {
        imgUrl: "",
        id: Number,
        title: "",
        content: ""
      },
      postPageForm: {
        imgUrl: "",
        title: "",
        content: "",
        date: null
      }
    };
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
    hide() {
      this.$modal.hide("hello-world");
    },
    editModeOn(id) {
      this.$modal.show("edit-modal");
      this.editPostId = id;
    },
    editModeOff() {
      this.$modal.hide("edit-modal");
    },
    getPosts() {
      let promise = new Promise((resolve, reject) => {
        MyAxios.get("photos").then(response => {
          let dataArray = response.data;
          dataArray.forEach((element, index) => {
            if (element.albumId === 1) {
              this.form.id = this.id;
              console.log(element.url);
              this.$store.dispatch("ASYNC_SET_POST", {
                id: this.form.id,
                title: element.title,
                // content: element.body
                imgUrl: element.url
              });
              console.log(111);
              this.$toast.success("post added");
              resolve("+ 1 post");
            } else {
              reject("nothing added");
              // this.$toast.error('no data')
            }
          });
        });
      });
    },
    createPost() {
      if (this.form.title && this.form.content != null) {
        this.form.id = this.id;
        this.$store.dispatch("ASYNC_SET_POST", this.form);
      } else {
        this.$toast.error("Fields must be filled", {
          dismissible: false,
          duration: 1700
        });
      }
    },
    editPost() {
      this.posts.forEach(element => {
        if (element.id === this.editPostId) {
          this.$store.dispatch("ASYNC_UPDATE_POST", {
            imgUrl: this.newImgUrl,
            id: this.editPostId,
            title: this.newTitle,
            content: this.newContent
          });
        }
      });
      this.$modal.hide("edit-modal");
    },
    deletePost(post) {
      this.posts.forEach(element => {
        if (element.id === post.id) {
          console.log(element);
          this.$store.dispatch("ASYNC_REMOVE_POST", element);
        }
      });
    },
    openPost(post) {
      this.$modal.show("hello-world");
      this.postPageForm = {
        imgUrl: post.imgUrl,
        title: post.title,
        content: post.content,
        date: post.date
      };
    }
  }
};
</script>

<style scoped></style>
