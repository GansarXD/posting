<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/posts">Feed</router-link> |
            <routerLink to="/javascript">JS</routerLink>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #DEC600;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #DEC600;
}

#nav a.router-link-exact-active {
  color: #00db97;
  font-weight: bold;
}
</style>
