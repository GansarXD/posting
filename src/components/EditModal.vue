<template>
    <div class="modal-background">
        <h1>modal window</h1>
    </div>
</template>

<script>
    export default {
        name: "EditModal"
    }
</script>

<style scoped>
    .modal-background {
        background-color: rgba(0, 0, 0, 0.7);
        height: 100vh;
        z-index: 2;
    }
</style>