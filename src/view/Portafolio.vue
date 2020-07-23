<template>
  <section class="Proyectos">
    <div class="Proyectos__Item">
      <h2>iMatch</h2>
      <img src="https://i.ibb.co/0XYG46g/Preview.png" alt="Vista previa de iMatch" />
      <p>Interfaz de un Tinder para desarrolladores con información de una API pública</p>
      <a href="imatch.netlify.app" rel="Proyecto en Producción">
        <button>Ver!</button>
      </a>
    </div>
    <div class="Proyectos__Item">
      <h2>Peso Espacial</h2>
      <img src="https://i.ibb.co/VMsBTtF/Peso-Planetas.png" alt="Vista previa del proyecto" />
      <p>Web para calcular tu peso en otros planetas</p>
      <a href="https://github.com/JuanesGalvis/PesoEnOtroPlaneta" rel="Repositorio del Proyecto">
        <button>Ver!</button>
      </a>
    </div>
    <div class="Proyectos__Item">
      <h2>Clon Pinterest</h2>
      <img src="https://i.ibb.co/4gRTXYD/Clon-Pinterest.png" alt="Vista previa del proyecto" />
      <p>Clon de la interfaz del home de Pinterest</p>
      <a href="https://github.com/JuanesGalvis/ClonPinterest" rel="Repositorio del Proyecto">
        <button>Ver!</button>
      </a>
    </div>
    <div class="Proyectos__Item">
      <h2>Trabajo y estudio remoto</h2>
      <img src="https://i.ibb.co/j4S0X1k/Artiuclo-Herramientas.png" alt="Titulo del proyecto" />
      <p>Articulo sobre herramientas para estudiar o trabajar de manera remota</p>
      <a
        href="https://www.linkedin.com/pulse/herramientas-para-trabajo-y-estudio-remoto-juan-esteban-galvis-bedoya/?trackingId=cOLxotB8TM%2BTC6USccFX4g%3D%3D"
        rel="Articulo en Linkedin"
      >
        <button>Ver!</button>
      </a>
    </div>
    <div class="Proyectos__Item">
      <h2>Blog</h2>
      <img src="https://i.ibb.co/6b8VC24/Notion-Bloc.png" alt="Vista Previa del Blog" />
      <p>Blog personal y almacenamiento de mis tutoriales y escritos</p>
      <a
        href="https://www.notion.so/Scope-indefinido-a571a1662f4b4c16affe748f24d6f062"
        rel="Blog en Notion"
      >
        <button>Ver!</button>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portafolio"
};
</script>

<style>
.Proyectos {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-content: center;
  margin-top: 30px;
}

.Proyectos__Item {
  box-shadow: -3px 2px 5px black;
  padding: 10px;
  text-align: center;
  font-size: 1em;
}

.Proyectos__Item h2 {
  font-weight: bold;
  font-size: 1.8em;
  color: #d14233;
}

.Proyectos__Item img {
  width: 380px;
  height: 210px;
}

.Proyectos__Item button {
  background-image: linear-gradient(to right, #222, #d14233);
  padding: 5px 15px;
  color: white;
  width: 100px;
  font-size: 1em;
  border: 0;
  box-shadow: -6px 3px 5px black;
  cursor: pointer;
}

@media screen and (max-width: 813px) {
  .Proyectos {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 500px) {
  .Proyectos__Item img {
    width: 100%;
    height: 50%;
  }
}

@media screen and (max-width: 450px) {
  .Proyectos {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .Proyectos__Item {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>