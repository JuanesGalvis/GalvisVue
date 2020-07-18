// IMPORTAR VUE + VUE-ROUTER
import Vue from "vue";
import Router from "vue-router";

// IMPORTAR VISTAS (Crear carpeta view)
import Home from "@/view/Home";
import CError from "@/view/Error";
import Educacion from "@/view/Educacion";
import Contacto from "@/view/Contacto";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "*",
      name: "error",
      component: CError,
    },
    {
      path: "/Educacion",
      name: "Educacion",
      component: Educacion,
    },
    {
      path: "/Contacto",
      name: "Contacto",
      component: Contacto,
    },
  ],
});
