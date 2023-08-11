<template>
    <NavBar />
    <router-view/>
    <div class="container">
    </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    NavBar
  },
  methods:{
    ...mapActions(['cargarLocalStorage']),
    ...mapActions('empleados',['cargarLocalStorageEmpleados']),
    ...mapActions('cajas',['cargarLocalStorageCajas']),
    ...mapActions('cierrecajas',['cargarLocalStorageCierreCajas']),
    ...mapActions('detalle',['cargarDetalles'])
  },
  created(){
    this.cargarLocalStorage()
    this.cargarLocalStorageEmpleados()
    this.cargarLocalStorageCajas()
    this.cargarLocalStorageCierreCajas()
    this.cargarDetalles()
  }
}
</script>
<style>
  body{
    background-color: #e0e7f1;
    font-family: sans-serif;
  }
  h1{
    font-size: 1.8rem;
  }
</style>