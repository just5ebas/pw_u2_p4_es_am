const list = [
  { nombre: "erick", apellido: "solano" },
  { nombre: "erick2", apellido: "solano2" },
  { nombre: "erick3", apellido: "solano3" },
  { nombre: "nombre4", apellido: "apellido4" },
  { nombre: "nombre5", apellido: "apellido5" },
  { nombre: "nombre6", apellido: "apellido6" },
  { nombre: "nombre7", apellido: "apellido7" },
  { nombre: "nombre8", apellido: "apellido8" },
  { nombre: "nombre9", apellido: "apellido8" },
  { nombre: "nombre10", apellido: "apellido10" },
];
console.log(list);

const app = Vue.createApp({
  data() {
    return {
      miarreglo: list,
      nombre: "Erick",
    };
  },
  methods: {
    agregarEstudiante(event) {
      console.log("Vamos agregar");
      console.log(this.nombre);
      console.log(event);
      console.log(event.charCode);

      if (event.charCode == 13) {
        console.log("presiono enter");
        const nuevoEstudiante = {
          nombre: this.nombre,
          apellido: "Nuevo Apellido",
        };
        this.miarreglo.unshift(nuevoEstudiante);
      } else {
        console.log("no presiono enter");
      }
    },
    agregarEstudiante2() {
      console.log("Vamos agregar2");
      const nuevoEstudiante = {
        nombre: this.nombre,
       
      };
      this.miarreglo.unshift(nuevoEstudiante);
    }
  },
});

app.mount("#myAplicacion2");

function insertarEstudiante(estudiante) {}

function insertarEstudiante({ nombre, apellido }) {}
