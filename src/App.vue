<template>
  <div id="app">
    <Navegacion />
    <Presentacion />
    <router-view />
  </div>
</template>

<script>
import Navegacion from "./components/NavBar.vue";
import Presentacion from "@/components/Presentacion.vue";

export default {
  name: "App",
  components: {
    Navegacion,
    Presentacion
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

button,
input[type="submit"] {
  font-family: "Oswald", sans-serif;
}
</style>
