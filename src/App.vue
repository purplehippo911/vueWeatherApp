<template>
  <div id="app">
    <main>
      <div class="search-box"> 
        <input type="search" />
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      api_key: "e0de73858b1615a63b9ff402184ba1cc"
    }
  }
}
</script>

<style>
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body {
  font-family:'Montserrat', sans-serif;
}

#app {
  background-image:url("./assets/cold-bg.jpg");
}
</style>
