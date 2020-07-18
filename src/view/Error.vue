<template>
  <div class="Error">
    <div class="Mensaje">
      <h1>Tenemos un problema</h1>
      <p
        aria-label="Hay un problema con la ruta que pusiste, dale al botón que esta adelante para volver a intentar"
      >No encuentro lo que estás buscando 🕵</p>
      <router-link to="/">
        <button>Volver</button>
      </router-link>
    </div>
    <img
      src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-dibujos-animados-de-astronauta-espacial-by-vexels.png"
      alt="Astronauta indicando que hay algo extraño"
    />
  </div>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style>
.Error {
  color: #194885;
  font-size: 25px;
  display: flex;
  justify-content: center;
}

.Error img {
  width: 200px;
  height: 200px;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
}

.Mensaje {
  text-align: left;
}

.Error button {
  padding: 10px 25px;
  background-image: linear-gradient(to top, #194885, #11315a);
  border: 0;
  border-radius: 10px;
}

.Error a button {
  text-decoration: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

@media screen and (max-width: 461px) {
  .Error {
    flex-direction: column;
  }

  .Error img {
    display: flex;
    align-self: flex-end;
  }
}
</style>