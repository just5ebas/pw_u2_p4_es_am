console.log("componente Vue");
console.log(Vue);

const app = Vue.createApp({
  // template:`
  // <h1>Hola mundo</h1>
  // <p>Desde Vue.JS</p>
  //<p>{{1+1}}</p>
  // `
  data() {
    return {
        nombre:'Erick',
        apellido:'Solano',
        mensaje:'Hola mundo 2 desde Vue.JS'
    };
  },
  methods:{
    cambiarNombre(){
        console.log("cambiar nombre")
        this.nombre="Ariel"
    },

    cambiarApellido(){
        console.log("cambiar apellido")
        this.apellido='Maldonado'
    }

  }
});

app.mount("#myAplicacion");
