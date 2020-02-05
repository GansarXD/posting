<template>
    <div class="modal-background">
        <div class="modal-content">
            <button @click="editModeOff">Cancel</button>
            <hr>
            <h1>modal window</h1>
            <h4>Title</h4>
            <input v-model="newTitle" type="text">
            <h4>Content</h4>
            <input v-model="newContent" type="text">
            <button @click="updatePost">Confirm</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditModal",
        data() {
            return {
                newTitle: "",
                newContent: ""
            }
        },
        methods: {
            updatePost() {
                this.$emit('updatePost',{
                    title: this.newTitle,
                    content: this.newContent
                });
                // this.emit('editModeOff')
            },
            editModeOff() {
                this.$emit('editModeOff')
            }
        }
    }
</script>

<style scoped>
    .modal-background {
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