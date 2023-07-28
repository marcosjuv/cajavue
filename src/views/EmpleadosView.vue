<template>
    <div class="container">
        <div class="row py-3">
            <div class="col-md-6 d-flex justify-content-start">
                <h1>Empleados</h1>
            </div>
            <div class="col-md-6 d-flex justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/" href="JavaScript:void(0)">Inicio</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Empleados</li>
                    </ol>
                </nav>
            </div>
        </div>
        <form>
            <div class="card">
                <div class="card-header"><i class="bi bi-person-add"></i> Registro de empleados</div>
                <div class="card-body">
                        <div class="row">                        
                            <div class="col-md-12 mb-3">
                                <input id="id" class="form-control" type="hidden" name="id" v-model="empleado.id">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input id="nombre" class="form-control" :class="validationEmployee" type="text" name="nombre" v-model="empleado.nombre">
                                <div class="invalid-feedback">Nombre es requerido</div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="apellido" class="form-label">Apellido</label>
                                <input id="apellido" class="form-control" :class="validationEmployee" type="text" name="apellido" v-model="empleado.apellido">
                                <div class="invalid-feedback">Apellido es requerido</div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="cedula" class="form-label">Cedula</label>
                                <input id="cedula" class="form-control" :class="validationEmployee" type="text" name="cedula" v-model="empleado.cedula">
                                <div class="invalid-feedback">Cedula es requerido</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input id="flexCheckDefault" class="form-check-input" type="checkbox" v-model="empleado.is_supervisor" name="is_supervisor">
                                    <label for="flexCheckDefault" class="form-check-label">Supervisor</label>                                
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input id="flexCheckDefault2" class="form-check-input" type="checkbox" v-model="empleado.is_rrss" name="is_rrss">
                                    <label for="flexCheckDefault2" class="form-check-label">Redes sociales</label>                                
                                </div>
                            </div>
                        </div>
                </div>
                <div class="card-footer">
                    <div v-if="empleado.id === '' ">
                        <div class="d-grid">
                            <button @click="insertEmpleado" class="btn btn-primary" type="button" :disabled="lockBtn"><i class="bi bi-person-fill-check"></i> Registrar empleado</button>
                        </div>
                    </div>
                    <div v-else>
                        <div class="d-grid">
                            <button @click="updateEmpleado" class="btn btn-warning" type="button"><i class="bi bi-person-fill-check"></i> Editar empleado</button>
                        </div>
                    </div>
                </div>           
            </div>
        </form>
        <div class="card my-3">
            <div class="card-header"><i class="bi bi-list-ol"></i> Lista de empleados</div>
            <div class="card-body">
                <div class="table-responsive-md">
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-between">
                            <div class="col-md-3 mb-3 d-flex justify-content-center align-self-center">
                                <span class="mt-2">Mostrar</span>
                                <select id="mostrar" class="form-select form-select-sm mx-2 p-2" aria-label="Default select example">
                                    <option selected>10</option>
                                    <option value="1">25</option>
                                    <option value="2">50</option>
                                    <option value="3">100</option>
                                </select>
                                <span class="mt-2" >registros</span> 
                            </div>
                            <div class="col-md-3 mb-3">
                                <input v-model="buscar" class="form-control" type="text" name="buscar" placeholder="Buscar">
                            </div>                            
                        </div>
                    </div>
                    <table class="table table-sm table-bordered table-hover table-striped">
                        <thead class="table-light">
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cedula</th>
                                <th>Cargo</th>
                                <th>Area de cargo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <div class="col-md-12 d-flex justify-content-center align-self-center" v-if="buscarCedula.length === 0"><p class="text-center">No hay registros</p></div>
                            <tr v-for="item in buscarCedula" :key="item.id">
                            <th scope="row">{{item.id}}</th>
                                <td>{{item.nombre}}</td>
                                <td>{{item.apellido}}</td>
                                <td>{{item.cedula}}</td>
                                <td v-if="item.is_supervisor">
                                    <td>Supervisor</td>
                                </td>
                                <td v-else>
                                    <td>Cajero</td>
                                </td>
                                <td v-if="item.is_rrss">
                                    <td>Whatsapp</td>                                    
                                </td>
                                <td v-else>
                                    <td>Piso de venta</td>                                    
                                </td>
                                <td>
                                    <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                                        <button @click="getForm(item.id)" type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                                        <button @click="deleteEmpleados(item.id)" type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-md-6">
                            <span>Mostrando 1 a 10 de 3 registros</span>                       
                        </div>
                        <div class="col-md-6">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end">
                                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>                        
                        </div>                        
                    </div>
                </div>
            </div>          
        </div>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:'Empleados',
    data(){
        return{
            empleado:{
                id:'',
                nombre:'',
                apellido:'',
                cedula:'',
                is_supervisor:false,
                is_rrss:false
            },
            buscar:''
        }
    },
    methods:{
        ...mapActions('empleados',['setEmpleados','deleteEmpleados','modificarEmpleados']),
        insertEmpleado(){ 
            const uid = new ShortUniqueId({length: 10})
            this.empleado.id = uid()
            this.setEmpleados(this.empleado)
            this.empleado = {
                id:'',
                nombre:'',
                apellido:'',
                cedula:'',
                is_supervisor:false,
                is_rrss:false
            }    
        },
        getForm(id){            
            const res = this.listEmpleados.find(item => item.id === id)
            this.empleado = {
                id:res.id,
                nombre:res.nombre,
                apellido:res.apellido,
                cedula:res.cedula,
                is_supervisor:res.is_supervisor,
                is_rrss:res.is_rrss,
            }
        },
        updateEmpleado(){
            this.modificarEmpleados(this.empleado)
            this.empleado = {
                id:'',
                nombre:'',
                apellido:'',
                cedula:'',
                is_supervisor:false,
                is_rrss:false
            }    
        }
    },
    computed:{
        ...mapState('empleados',['listEmpleados']),
        ...mapState('cargos',['listCargos']),
        validationEmployee(){
            return this.empleado.nombre === '' || this.empleado.apellido === '' || this.empleado.cedula === '' ? 'is-invalid' : 'is-valid'
        },
        lockBtn(){
            return this.empleado.nombre === '' || this.empleado.apellido === '' || this.empleado.cedula === '' ? true : false
        },
        buscarCedula(){
            return this.listEmpleados.filter(item => {
                return item.id.toLowerCase().includes(this.buscar) ||
                item.nombre.toLowerCase().includes(this.buscar) ||
                item.apellido.toLowerCase().includes(this.buscar) ||
                item.cedula.includes(this.buscar)
            })
        },
    }
}
</script>