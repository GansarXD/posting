<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ title }}</h2>
    <input type="text" v-model="title">
    <h2>{{ title | lowercase }}</h2>
    <h2>{{ title | uppercase }}</h2>
    <div class="mini-post">
      <input type="text" v-model="searchName">
      <input type="text" v-model="addName">
      <button @click="add">Add</button>
      <ul>
        <li v-for="name in filteredNames">{{ name }}</li>
      </ul>
    </div>
    <modal/>
  </div>
</template>

<script>
  import EditModal from "@/components/EditModal";

  export default {
    data() {
      return {
        title: "",
        searchName: "",
        addName: "",
        names: []
      }
    },
    components: {
      modal: EditModal
    },
    filters: {
      lowercase(value) {
        return value.toLowerCase()
      },
      uppercase(value) {
        return value.toUpperCase()
      }
    },
    computed: {
      filteredNames() {
        return this.names.filter(name => {
          return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
        })
      }
    },
    methods: {
      add() {
        this.names.push(this.addName);
      }
    }
  }
</script>