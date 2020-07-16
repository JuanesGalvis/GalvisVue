<template>
  <main class="Bienvenida">
    <h1>BIENVENIDO!</h1>
    <p>
      Soy desarrollador web, aficionado a la investigación y estudiante eterno ✌
      Si quieres conocer cómo se realizó este proyecto te invito a los siguientes links:
    </p>
    <ul class="links">
      <li>
        <a
          target="_blank"
          href="https://www.notion.so/Design-System-1ed6a8bdda5f4d468023f8d6aabda115"
        >Sistema de Diseño</a>
      </li>
      <p>Conoce los estandares, principios y organización del proyecto</p>
      <li>
        <a target="_blank" href="https://github.com/JuanesGalvis/GalvisVue">Repositorio</a>
      </li>
      <p>Mira el código fuente de la página (Vue.js 💚)</p>
    </ul>
  </main>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
.Bienvenida {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
  padding: 10px 15px;
}

.links li a {
  text-decoration: none;
  color: #851e13;
}
</style>