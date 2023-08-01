<template>
	<div class="container">
		<div class="row py-3">
            <div class="col-md-6 d-flex justify-content-start">
                <h1>Cajas</h1>
            </div>
            <div class="col-md-6 d-flex justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/" href="JavaScript:void(0)">Inicio</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Cajas</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="card">
            <div class="card-header"><i class="bi bi-clipboard2-data"></i> Registro de caja</div>
            <form>
                <div class="card-body">
                    <div class="row">                        
                        <div class="col-md-12">
                            <input id="id" class="form-control" type="hidden" v-model="caja.id" name="id" disabled="true">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="caja" class="form-label">caja</label>
                            <input id="caja" class="form-control" type="text" v-model="caja.caja" name="caja">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="descripcion" class="form-label">Descripcion</label>
                            <input id="descripcion" class="form-control" type="text" v-model="caja.descripcion" name="descripcion">
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input id="flexCheckDefault" class="form-check-input" type="checkbox" v-model="caja.is_rrss" name="is_rrss">
                                <label for="flexCheckDefault" class="form-check-label">Redes Sociales</label>                                
                            </div>
                        </div>                    
                    </div>
                </div>
                <div class="card-footer">
                    <div v-if="caja.id === '' ">
                        <div class="d-grid">
                            <button class="btn btn-primary" @click="insertCaja" :disabled="validacionCaja" type="button"><i class="bi bi-database-fill-add"></i> Guardar caja</button>
                        </div>                            
                    </div>
                    <div v-else>
                        <div class="d-grid">
                            <button class="btn btn-warning" @click="updateCaja" :disabled="validacionCaja" type="button"><i class="bi bi-database-fill-add"></i> Editar caja</button>
                        </div>                            
                    </div> 
                </div>
            </form>
        </div>
        <div class="card my-3">
            <div class="card-header"><i class="bi bi-list-ol"></i> Lista de cajas</div>
            <div class="card-body">
                <div class="table-responsive-md">
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-between">
                            <div class="col-md-3 mb-3 d-flex justify-content-center align-self-center">
                                <span class="mt-2">Mostrar</span>
                                <select id="cant" class="form-select form-select-sm mx-2 p-2" aria-label="Default select example">
                                    <option selected>10</option>
                                    <option value="1">25</option>
                                    <option value="2">50</option>
                                    <option value="3">100</option>
                                </select>
                                <span class="mt-2" >registros</span> 
                            </div>
                            <div class="col-md-3 mb-3">
                                <input class="form-control" type="text" name="buscar" v-model="buscar" placeholder="Buscar">
                            </div>                            
                        </div>
                    </div>
                    <table class="table table-sm table-bordered table-hover table-striped">
                        <thead class="table-light">
                            <tr>
                                <th>#</th>
                                <th>Caja</th>
                                <th>Descripcion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in buscarCaja" :key="item.id">
                                <th scope="row">{{item.id}}</th>
                                <td>{{item.caja}}</td>
                                <td>{{item.descripcion}}</td>
                                <td>
                                    <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                                        <button @click="getForm(item.id)" type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                                        <button @click="deleteCaja(item.id)" type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
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
		name: 'CajasView',
        data(){
            return{
                caja:{
                    id:'',
                    caja:'',
                    descripcion:'',
                    is_rrss:false
                },
                buscar:''
            }
        },
        methods:{
            ...mapActions('cajas',['setCaja','modificarCaja','deleteCaja']),
            insertCaja(){
                // const uid = new ShortUniqueId({length: 10})
                // this.caja.id = uid()
                console.log(this.caja)
                this.setCaja(this.caja)
                this.caja = {
                    id:'',
                    caja:'',
                    descripcion:'',
                    is_rrss:false
                }
            },
            getForm(id){            
                const res = this.listCajas.find(item => item.id === id)
                this.caja = {
                    id:res.id,
                    caja:res.caja,
                    descripcion:res.descripcion,
                    is_rrss:res.is_rrss
                }
            },
            updateCaja(){
                this.modificarCaja(this.caja)
                this.caja = {
                    id:'',
                    caja:'',
                    descripcion:'',
                    is_rrss:false
                }
            }
        },
        computed:{
            ...mapState('cajas',['listCajas']),
            validacionCaja(){
                return (this.caja.caja === '') ? true : false
            },
            buscarCaja(){
                return this.listCajas.filter(caja => {
                    return caja.caja.toLowerCase().includes(this.buscar.toLowerCase()) || 
                    caja.id.toLowerCase().includes(cliente) ||
                    caja.descripcion.toLowerCase().includes(cliente)
                })
            }
        }
	}
</script>