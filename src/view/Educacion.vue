<template>
  <main class="Educacion">
    <h2>Formación Profesional</h2>
    <ul>
      <li>
        <h3>Ingeniería Informática</h3>
        <em>2019 ~ Actualidad</em>
        <p>Actualmente me encuentro realizando mis estudios en ingeniería informática 💚💛</p>
      </li>
      <li>
        <h3>Técnico en Programación de Software</h3>
        <em>2017 - 2018</em>
        <p>Realicé una media técnica en el Servicio Nacional de Aprendizaje donde aprendí las bases del diseño web y toma de requerimientos</p>
      </li>
    </ul>
    <h2>Experiencias</h2>
    <ul>
      <li>
        <h3>Alianza Futuro Digital Medellín</h3>
        <em>2018</em>
        <p>Participé en está convocatoria internacional gracias a mi rendimiento en la media técnica</p>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "Educacion"
};
</script>

<style>
.Educacion {
  width: 60%;
  margin: 10px auto;
  font-size: 15px;
}

.Educacion h2 {
  font-size: 2em;
}

.Educacion ul:nth-of-type(1) {
  border-left: 10px solid #194885;
}

.Educacion ul:nth-of-type(2) {
  border-left: 10px solid #851e13;
}

.Educacion ul li {
  text-align: left;
}

.Educacion ul li h3 {
  font-size: 1.6em;
}

.Educacion ul:nth-of-type(1) li h3 {
  color: #194885;
}

.Educacion ul:nth-of-type(2) li h3 {
  color: #851e13;
}

.Educacion ul li em {
  color: #6e6c6c;
  font-size: 1em;
}

.Educacion ul li p {
  font-size: 1.2em;
}

@media screen and (max-width: 321px) {
  .Educacion {
    width: 90%;
  }
}
</style>