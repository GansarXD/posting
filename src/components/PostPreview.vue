<template>
  <div class="mini-post" id="bgcolor">
    <button class="btn btn-warning" @click="editModeOn">Edit this post</button>
    <button style="float: right" class="btn btn-danger" @click="deletePost">
      Remove this post
    </button>
    <hr />
    <img class="post-image" :src="imgUrl" alt="must be an image" />
    <hr />
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <hr />
    <p>{{ date }}</p>
    <hr />
    <button class="btn btn-success" @click="openPost">OPEN</button>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "id", "imgUrl"],
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