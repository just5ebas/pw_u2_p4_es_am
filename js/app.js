console.log("componente Vue")
console.log(Vue)

const app=Vue.createApp({
    template:`
    <h1>Hola mundo</h1>
    <p>Desde Vue.JS</p>
    `
})

app.mount('#myAplicacion')