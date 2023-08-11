<template>
	<div class="container">
		<div class="row py-3">
            <div class="col-md-6 d-flex justify-content-start">
                <h1>Detalles del cierre: {{$route.params.id}}</h1>
            </div>
            <div class="col-md-6 d-flex justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/" href="JavaScript:void(0)">Inicio</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Detalle cierre</li>
                    </ol>
                </nav>
            </div>
        </div>        
        <div class="card">
            <div class="card-header"><i class="bi bi-list-ol"></i> Cuadres de caja</div>
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
                                <input class="form-control" type="text" name="buscar" placeholder="Buscar">
                            </div>                            
                        </div>
                    </div>
                    <table class="table table-sm table-bordered table-hover table-striped">
                        <thead class="table-light">
                            <tr>
                                <th>#</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Supervisor</th>
                                <th>Cajero</th>
                                <th>Premium</th>
                                <th>Diferencia</th>
                                <th>Total</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in detalles" :key="item.id">
                                <th scope="row">{{item.id}}</th>
                                <td>{{item.fecha}}</td>
                                <td>{{item.hora}}</td>
                                <td>{{item.supervisor}}</td>
                                <td>{{item.cajero}}</td>
                                <td>{{item.premium}}</td>
                                <td>{{item.diferencia}}</td>
                                <td>{{item.monto_total}}</td>
                                <td>
                                    <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">  <!-- d-flex justify-content-center -->
                                        <button  @click="getData(item.id)" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-list-ul"></i></button>
                                        <button  @click="test($route.params.id)" type="button" class="btn btn-secondary"></button>
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
        <div class="card-footer">
        	<div class="d-grid gap-2">
                <button @click="$router.go(-1)" class="btn btn-sm btn-primary" type="button">Volver</button>
            </div>
        </div>
        </div>
	</div>
	<!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Cierre #: {{detalle.id}}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ModalDetalle :details="detalle" />
                    </div>
                    <div class="modal-footer">
                        <div class="d-grid gap-2">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- ./Modal -->
</template>
<script>
	import ModalDetalle from '../components/ModalDetalle'
	import {mapState} from 'vuex'
	export default {
    	name:'DetalleCierre',
    	data(){
    		return{
    			detalle:{
	                supervisor:'',
                    cajero:'',
                    caja:'',
                    is_rrss:false,      
                    fecha:'',
                    hora:'',
                    tasa: 0,
                    efectivo: 0,
                    punto: 0,
                    transferencia: 0,
                    pendiente: 0,
                    cash: 0,
                    zelle: 0,
                    premium: 0,
                    monto_total: 0,
                    diferencia: 0
	            },
    		}
    	},
    	components:{
	        ModalDetalle
	    },
    	methods:{
            test(id){
                // return const res = this.detalles.find(item => item.cierre_id === id ? console.log(item.cierre_id) : console.log('no'))                
            },
    		getData(id){
	            const query = this.detalles.find(item => item.id === id)
	            this.detalle.id = query.id
	            this.detalle.supervisor = query.supervisor
	            this.detalle.cajero = query.cajero
	            this.detalle.caja = query.caja
	            this.detalle.tasa = query.tasa
	            this.detalle.efectivo = query.efectivo
	            this.detalle.transferencia = query.transferencia
	            this.detalle.punto = query.punto
	            this.detalle.pendiente = query.pendiente
	            this.detalle.cash = query.cash
	            this.detalle.zelle = query.zelle
	            this.detalle.premium = query.premium
	            this.detalle.totalbs = query.totalbs
	            this.detalle.diferencia = query.diferencia
	        }
    	},
    	computed:{
	        ...mapState('detalle',['detalles']),
	        ...mapState('cierrecajas',['listCierres']),
            filter(){
                const res = this.detalles.find(item => item.cierre_id === id ? console.log(item.cierre_id) : console.log('no'))
                return res
            }
	    }
	}
</script>