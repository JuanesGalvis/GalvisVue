<template>
  <nav class="Navegacion">
    <ul class="Menu">
      <li>
        <router-link to="/">Inicio</router-link>
      </li>
      <li>
        <router-link to="Educacion">Educación</router-link>
      </li>
      <li>
        <router-link to="Portafolio">Portafolio</router-link>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.notion.so/Scope-indefinido-a571a1662f4b4c16affe748f24d6f062"
          rel="Sitio Externo"
        >Blog</a>
      </li>
    </ul>
    <ul class="Versiones">
      <li>
        <img src="https://cdn.iconscout.com/icon/free/png-256/vue-282497.png" alt="Vue JS" />
      </li>
      <li>
        <img
          src="https://webmention.io/avatar/pbs.twimg.com/f1ad2f17c5e2525386816de6ca3494842ac2b75dc09d8cc485691835f5e91715.png"
          alt="Svelte"
        />
      </li>
      <!-- <li>
        <a href>
          <img
            src="https://creativo-websolutions.com/my_files/2020/04/angular-logo.png"
            alt="Angular"
          />
        </a>
      </li>
      <li>
        <a href>
          <img src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" alt="React" />
        </a>
      </li>-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navegacion"
};
</script>

<style>
.Navegacion {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5px;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}

.Navegacion ul:nth-of-type(1) {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
}

.Navegacion ul:nth-of-type(2) {
  display: flex;
  justify-content: flex-end;
  align-content: flex-start;
}

.Navegacion ul li {
  display: flex;
  align-content: center;
}

.Navegacion ul:nth-of-type(1) li {
  list-style: none;
  margin: 0px 10px;
  border-left: 5px solid transparent;
  border-image: linear-gradient(to bottom, #d14233 0%, #80271e 100%) 1;
}

.Navegacion ul:nth-of-type(2) li {
  list-style: none;
  margin: 0px 10px;
  border-right: 5px solid transparent;
  border-image: linear-gradient(to bottom, #d14233 0%, #80271e 100%) 1;
}

.Navegacion ul li a {
  text-decoration: none;
  color: #000000;
}

.Navegacion ul li {
  overflow: 1px solid #d14233;
  padding: 5px 10px;
  color: #000000;
}

.Versiones li img {
  width: 40px;
  height: 40px;
}

.Versiones li:nth-of-type(2) img,
li:nth-of-type(4) img {
  border-radius: 100%;
}

@media screen and (max-width: 808px) {
  .Navegacion {
    justify-content: center;
    flex-direction: column;
  }

  .Navegacion ul:nth-of-type(2),
  .Navegacion ul:nth-of-type(1) {
    justify-content: center;
  }
}
</style>