<template>
  <header class="Header">
    <div class="Header__Foto">
      <img src="@/assets/FOTO1.jpg" alt="Mi Foto" />
      <img src="@/assets/Marca.png" alt="Logotipo de mi marca personal" class="LogoMarca" />
    </div>
    <div class="Header__Info">
      <h1>Juan Esteban Galvis</h1>
      <p
        aria-label="Mi presentación como Desarrollador Web, aficionado a la investigación y estudiante"
      >Front-end web development 💻 ~ Aficionado a la investigación 📰 ~ Estudiante de Ingeniería y Platzi 💚</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "Presentacion"
};
</script>

<style>
.Header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.Header__Foto {
  display: flex;
  justify-content: flex-end;
  align-content: center;
}

.Header__Foto .LogoMarca {
  width: 100px;
  height: 100px;
  align-self: center;
  margin: 0px 0px 0px -30px;
  z-index: 2;
}

.Header__Foto img {
  width: 200px;
  height: 250px;
  border-radius: 10px;
}

.Header__Info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 20px;
}

.Header__Info p {
  margin: 5px 0px;
}

.Header__Info h1 {
  font-size: 25px;
  border-bottom: 3px solid black;
}
</style>