<template>
  <div class="mini-post" id="bgcolor">
    <div class="d-flex justify-content-between">
      <button class="btn btn-warning" @click="editModeOn">
        Edit this post
      </button>
      <button class="btn btn-danger" @click="deletePost">
        Remove this post
      </button>
    </div>
    <hr />
    <img class="post-image" :src="imgUrl" alt="must be an image" />
    <hr />
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <hr />
    <p>{{ date }}</p>
    <hr />
    <div class="d-flex justify-content-between">
      <button class="btn btn-success" @click="openPost">OPEN</button>
      <button class="btn btn-primary" @click="openComments">COMMENTS()</button>
      <button class="btn btn-info" @click="createComment">COMMENT</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "id", "imgUrl", "comments"],
  name: "PostPreview",
  data() {
    return {
      date: new Date()
    };
  },
  methods: {
    deletePost() {
      this.$emit("deletedPost", {
        id: this.id,
        title: this.title,
        content: this.content,
        date: this.date
      });
    },
    editModeOn() {
      this.$emit("editModeOn", this.id);
    },
    openPost() {
      this.$emit("openPost", {
        imgUrl: this.imgUrl,
        id: this.id,
        title: this.title,
        content: this.content,
        date: this.date
      });
    },
    createComment() {
      this.$emit("createComment", this.id);
    },
    openComments() {
      this.$emit("openComments", this.id);
    }
  }
};
</script>

<style scoped>
#bgcolor {
  background-color: #ffffff;
}
.mini-post {
  text-align: left;
}
.post-image {
  width: 10%;
  border-radius: 15px;
}
</style>
