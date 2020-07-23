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
      >
        Desarrollador Web 💻
        <br />Aficionado a la investigación 📰
        <br />Estudiante de Ingeniería y Platzi 💚
      </p>
      <section class="Contacto">
        <div class="Contacto__Redes">
          <a target="_blank" href="https://twitter.com/JuanEGalvis" rel="Perfil Twitter">
            <figure>
              <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" />
              <figcaption>Twitter</figcaption>
            </figure>
          </a>
          <a target="_blank" href="https://github.com/JuanesGalvis" rel="Perfil GitHub">
            <figure>
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" />
              <figcaption>GitHub</figcaption>
            </figure>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/juanegalvis" rel="Perfil Linkedin">
            <figure>
              <img src="https://img.icons8.com/color/50/000000/linkedin.png" alt="Linkedin" />
              <figcaption>Linkedin</figcaption>
            </figure>
          </a>
          <a target="_blank" href="https://www.instagram.com/juanesgalvisb/" rel="Perfil Instagram">
            <figure>
              <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram" />
              <figcaption>Instagram</figcaption>
            </figure>
          </a>
        </div>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: "Presentacion"
};
</script>

<style>
.Contacto {
  font-size: 1em;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
}

.Contacto__Redes {
  display: flex;
  justify-content: center;
  align-content: center;
}

.Contacto__Redes a {
  text-decoration: none;
  color: #000;
}

@media screen and (max-width: 560px) {
  .Contacto__Redes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

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
  margin: -10px 0px;
}

.Header__Info h1 {
  font-size: 50px;
  border-bottom: 3px solid black;
}

@media screen and (max-width: 808px) {
  .Header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .Header__Foto {
    justify-content: center;
  }
}

@media screen and (max-width: 512px) {
  .Header__Foto .LogoMarca {
    display: none;
  }
}
</style>