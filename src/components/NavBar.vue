<template>
  <nav class="Navegacion">
    <ul>
      <li>
        <router-link to="Educacion">Educación</router-link>
      </li>
      <li>
        <router-link to="Cursos">Cursos</router-link>
      </li>
      <li>
        <router-link to="Contacto">Contacto</router-link>
      </li>
      <li>
        <a href="https://www.notion.so/Scope-indefinido-a571a1662f4b4c16affe748f24d6f062">Blog</a>
      </li>
    </ul>
    <ul class="Menu">
      <li>
        <a href>
          <img src="https://cdn.iconscout.com/icon/free/png-256/vue-282497.png" alt="Vue JS" />
        </a>
      </li>
      <li>
        <a href>
          <img
            src="https://webmention.io/avatar/pbs.twimg.com/f1ad2f17c5e2525386816de6ca3494842ac2b75dc09d8cc485691835f5e91715.png"
            alt="Svelte"
          />
        </a>
      </li>
      <li>
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
      </li>
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
  border-left: 5px solid #d14233;
  transition: 0.5s border;
}

.Navegacion ul:nth-of-type(2) li {
  list-style: none;
  margin: 0px 10px;
  border-right: 5px solid #d14233;
  transition: 0.5s border;
}

/* .Navegacion ul li:hover {
  border-bottom: 5px solid #d14233;
  transition: 0.5s border;
} */

.Navegacion ul li a {
  text-decoration: none;
  overflow: 1px solid #d14233;
  padding: 5px 10px;
  cursor: pointer;
  color: #000000;
}

.Menu li img {
  width: 40px;
  height: 40px;
}
</style>