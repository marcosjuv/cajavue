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
                                <label for="name" class="form-label">Nombre</label>
                                <input id="name" class="form-control" :class="validationEmployee" type="text" name="name" v-model="empleado.name">
                                <div class="invalid-feedback">Nombre es requerido</div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="lastname" class="form-label">Apellido</label>
                                <input id="lastname" class="form-control" :class="validationEmployee" type="text" name="lastname" v-model="empleado.lastname">
                                <div class="invalid-feedback">Apellido es requerido</div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="card_id" class="form-label">Cedula</label>
                                <input id="card_id" class="form-control" :class="validationEmployee" type="text" name="card_id" v-model="empleado.card_id">
                                <div class="invalid-feedback">Cedula es requerido</div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="email" class="form-label">Correo</label>
                                <input id="email" class="form-control" :class="validationEmployee" type="text" name="email" v-model="empleado.email">
                                <div class="invalid-feedback">Correo es requerido</div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="password" class="form-label">Clave</label>
                                <input id="password" class="form-control" :class="validationEmployee" type="password" name="password" v-model="empleado.password">
                                <div class="invalid-feedback">Clave es requerido</div>
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
                <TablaEmpleados/>
               
            </div>          
        </div>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import TablaEmpleados from '../components/TablaEmpleados'
export default {
    name:'Empleados',
    components:{TablaEmpleados},
    data(){
        return{
            empleado:{
                id:'',
                name:'',
                lastname:'',
                card_id:'',
                email:'',
                password:'',
                is_supervisor:false,
                is_rrss:false
            },
        }
    },
    methods:{
        ...mapActions('empleados',['setEmpleados','deleteEmpleados','modificarEmpleados']),
        insertEmpleado(){ 
            this.setEmpleados(this.empleado)
            this.empleado = {
                id:'',
                name:'',
                lastname:'',
                card_id:'',
                email:'',
                password:'',
                is_supervisor:false,
                is_rrss:false
            }    
        },
        getForm(id){            
            const res = this.listEmpleados.find(item => item.id === id)
            this.empleado = {
                id:res.id,
                name:res.name,
                lastname:res.lastname,
                card_id:res.card_id,
                email:res.email,
                password:res.password,
                is_supervisor:res.is_supervisor,
                is_rrss:res.is_rrss,
            }
        },
        updateEmpleado(){
            this.modificarEmpleados(this.empleado)
            this.empleado = {
                id:'',
                name:'',
                lastname:'',
                card_id:'',
                email:'',
                password:'',
                is_supervisor:false,
                is_rrss:false
            }    
        }
    },
    computed:{
        ...mapState('empleados',['listEmpleados']),
        ...mapState('cargos',['listCargos']),
        validationEmployee(){
            return this.empleado.name === '' || this.empleado.lastname === '' || this.empleado.card_id === '' || this.empleado.email === '' || this.empleado.password === '' ? 'is-invalid' : 'is-valid'
        },
        lockBtn(){
            return this.empleado.name === '' || this.empleado.lastname === '' || this.empleado.card_id === '' ? true : false
        }
    }
}
</script>