<template>
  <section class="Contacto">
    <div class="Contacto__Redes">
      <a target="_blank" href="https://twitter.com/JuanEGalvis">
        <figure>
          <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" />
          <figcaption>Twitter</figcaption>
        </figure>
      </a>
      <a target="_blank" href="https://github.com/JuanesGalvis">
        <figure>
          <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" />
          <figcaption>GitHub</figcaption>
        </figure>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/juanegalvis">
        <figure>
          <img src="https://img.icons8.com/color/50/000000/linkedin.png" alt="Linkedin" />
          <figcaption>Linkedin</figcaption>
        </figure>
      </a>
      <a target="_blank" href="https://www.instagram.com/juanesgalvisb/">
        <figure>
          <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram" />
          <figcaption>Instagram</figcaption>
        </figure>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacto"
};
</script>

<style>
.Contacto {
  font-size: 1em;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}

.Contacto h1 {
  font-size: 40px;
  font-weight: 500;
}

.Contacto__Redes {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px 0px 0px 0px;
}

.Contacto__Redes a {
  text-decoration: none;
  color: #000;
}

.Enviar {
  text-align: center;
  background-color: #d14233;
  color: white;
  font-size: 1em;
  margin: -20px auto auto 20px;
}

@media screen and (max-width: 560px) {
  .Contacto__Redes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>