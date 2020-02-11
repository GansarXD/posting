<template>
    <div>
        <h1>hello</h1>
        <h1>{{ title }}</h1>
        <h4>{{ content }}</h4>
        <h4>{{ date }}</h4>
    </div>
</template>

<script>

    export default {
        name: "PostAbout",
        props: ['title','content','date'],
        mounted(){
            console.log(this.title)
        }
    }
</script>

<style scoped>

</style>