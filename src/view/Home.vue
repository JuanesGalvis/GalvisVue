<template>
  <main class="Bienvenida">
    <h1>BIENVENIDO!</h1>
    <p>Soy desarrollador web, técnico en programación de software, aficionado a la ciencia y estudiante de ingeniería informática. También he realizado cursos sobre periodismo, transformación digital y liderazgo. Trabajo con:</p>

    <section class="Bienvenida__Skills">
      <div class="Bienvenida__Skills--left">
        <details>
          <summary>Diseño Web</summary>
          <ol>
            <li>Programación en Vue JS</li>
            <li>Ordenador y Móvil</li>
            <li>Preprocesador Sass</li>
            <li>Accesibilidad Web</li>
          </ol>
        </details>

        <details>
          <summary>Trabajo Colaborativo</summary>
          <ol>
            <li>Sistema control de versiones git y github</li>
            <li>Sistemas de Diseño</li>
            <li>Comunicación efectiva y remota</li>
            <li>Trabajo Remoto</li>
            <li>Oratoria</li>
            <li>Metodología Scrum</li>
          </ol>
        </details>

        <details>
          <summary>Extras</summary>
          <ol>
            <li>Escritura Online</li>
            <li>Seguridad Informática Básica</li>
            <li>Redes Sociales</li>
            <li>Ofimática</li>
          </ol>
        </details>
      </div>
      <div class="Bienvenida__Skills--right">
        <img
          src="https://static.platzi.com/media/learningpath/badges/6475ba11-ef6a-401f-9144-d40f615e0cfc.jpg"
          alt="Escuela de Desarrollo Web"
        />
        <img
          src="https://static.platzi.com/media/learningpath/badges/56756e5d-aac3-4f2b-b286-97846e41a318.jpg"
          alt="Periodismo Digital"
        />
        <img
          src="https://static.platzi.com/media/learningpath/badges/tranformacion-digital.png"
          alt="Transformación Digital"
        />
      </div>
    </section>
    <p class="Bienvenida__Platzi">
      Puedes Conocer los cursos que he realizado en
      <a
        href="https://platzi.com/@JuanGalvis"
        target="_blank"
        rel="Perfil Externo"
      >Mi Perfil en Platzi</a>
    </p>
    <p>Soy una persona seria, autodidacta en constante aprendizaje y con ganas de enseñar, escribir y crear tecnología con un sentido social.</p>
    <h2 class="Title">
      ¿Cómo trabajo?
      <button class="Bienvenida__Trabajar">
        <router-link to="Contacto">Trabajamos juntos?</router-link>
      </button>
    </h2>
    <p>Te invito a conocer el sistema de diseño y el repositorio de esta página para que me conozcas 😉</p>
    <ul class="Bienvenida__links">
      <li>
        <a
          target="_blank"
          href="https://www.notion.so/Design-System-1ed6a8bdda5f4d468023f8d6aabda115"
          rel="Documentacion"
        >🎨 Sistema de Diseño</a>
      </li>
      <p>Conoce los estandares, principios y organización del proyecto</p>
      <li>
        <a
          target="_blank"
          href="https://github.com/JuanesGalvis/GalvisVue"
          ref="Codigo fuente"
        >📦 Repositorio</a>
      </li>
      <p>Código fuente de la página (Vue.js 💚)</p>
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
  margin: 10px auto;
  font-size: 25px;
  padding: 10px 15px;
  font-weight: 300;
  text-align: left;
}

.Bienvenida h1 {
  font-size: 40px;
}

.Bienvenida__Skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  border: 10px solid transparent;
  border-image: linear-gradient(to bottom, #000 0%, #4f7d00 100%) 1;
}

.Bienvenida__Platzi {
  text-align: right;
}

.Bienvenida__Skills--right {
  display: flex;
  justify-content: space-around;
  align-content: center;
  text-align: center;
}

.Bienvenida__Skills--right img {
  width: 100px;
  height: 100px;
}

.Bienvenida .Bienvenida__Skills--left details {
  margin: 10px;
}

.Bienvenida__Platzi a {
  color: #4f7d00;
  text-decoration: none;
  font-weight: 500;
}

.Bienvenida__Trabajar {
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #851e13;
  margin: 0;
  box-shadow: 0;
  transition: 0.9s margin;
  transition: 0.5s box-shadow;
}

.Bienvenida__Trabajar:hover {
  margin: -5px 0px 0px 0px;
  box-shadow: 0 5px 6px 0px black;
  transition: 0.5s margin;
  transition: 0.5s box-shadow;
}

.Bienvenida__Trabajar a {
  text-decoration: none;
  color: white;
  font-size: 1.5em;
  font-weight: 300;
}

.Bienvenida__links li {
  list-style: none;
}

.Title {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 10px solid transparent;
  border-image: linear-gradient(to right, #000 0%, #d14233 100%) 1;
}

.Bienvenida__links li a {
  text-decoration: none;
  color: #851e13;
}

/* RESPONSIVE DESIGN */
@media screen and (max-width: 731px) {
  .Bienvenida__Skills {
    display: flex;
    flex-direction: column;
  }

  .Bienvenida__Skills--right {
    margin: 10px 0px;
  }
}

@media screen and (max-width: 482px) {
  .Bienvenida__Skills--right img {
    width: 50px;
    height: 50px;
  }
}
</style>