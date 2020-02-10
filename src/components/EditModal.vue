<template>
    <div class="modal-background">
        <div class="modal-content">
            <button class="btn btn-danger" @click="editModeOff">CANCEL</button>
            <hr>
            <h1>modal window</h1>
            <h4>Title</h4>
            <input v-model="newTitle" type="text">
            <h4>Content</h4>
            <input v-model="newContent" type="text">
            <button class="btn btn-success" @click="updatePost(), editModeOff()">CONFIRM</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["id"],
        name: "EditModal",
        data() {
            return {
                newTitle: "",
                newContent: ""
            }
        },
        methods: {
            updatePost() {
                // console.log(this.id);
                this.$emit('updatePost',{
                    id: this.id,
                    title: this.newTitle,
                    content: this.newContent
                });
            },
            editModeOff() {
                this.$emit('editModeOff')
            }
        }
    }
</script>

<style scoped>
    .modal-background {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.7);
        height: 100vh;
        z-index: 2;
    }
    .modal-content {
        z-index: 3;
        background-color: #42b983;
        color: #2c3e50;
    }
</style>