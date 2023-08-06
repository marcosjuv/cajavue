<template>
    <div class="container">
    	<hr>
    	<div class="card mt-3">
    		<div class="card-header"><h3 class="fw-bold">Monto Total: Bs. {{sumaTotal}}</h3></div>	
    		<div class="card-body">
    			<table class="table table-sm table-bordered table-striped table-hover">
    				<thead>
    					<th>Documento</th>
    					<th>Supervisor</th>
    					<th>Cajero</th>
    					<th>Caja</th>
    					<th>Monto</th>
    					<th>Diferencia</th>
    					<th>Opciones</th>
    				</thead>
	    			<tbody>
	    				<tr v-for="item in listcuadre" :key="item.id">
		    				<td>{{item.id}}</td>
		    				<td>{{item.supervisor}}</td>
		    				<td>{{item.cajero}}</td>
		    				<td>{{item.caja}}</td>
		    				<td>{{item.totalbs}}</td>
		    				<td>{{item.diferenciabs}}</td>
		    				<td>
		    					<div class="btn-group btn-group-sm d-flex justify-content-center">
		    						<button class="btn btn-sm btn-primary" @click="getData(item.id)" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-list-ul"></i></button>
		    						<router-link class="btn btn-sm btn-warning" :to="{name:'editarcuadre', params:{id:item.id}}"><i class="bi bi-pencil-square"></i></router-link>
		    						<button class="btn btn-sm btn-danger" @click="deleteCuadre(item.id)"><i class="bi bi-trash3"></i></button>
		    					</div>
		    				</td>	    					
	    				</tr>
	    			</tbody>
    			</table>
    		</div>	
    		<div class="card-footer">
                <div class="d-grid gap-2">
                    <button class="btn btn-sm btn-primary" @click="insertCuadre" :disabled="lockCuadre">Ejecutar cuadre</button>
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
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import ModalDetalle from '../components/ModalDetalle'
export default {
    name:'CierreCaja',
    data(){
        return{
            detalle:{
                id:'',
                fecha:'',
                hora:'',
                supervisor:'',
                cajero:'',
                caja:'',
                tasa1:0,
                efectivo:0,
                transferencia:0,
                punto:0,
                pendiente:0,
                cash:0,
                zelle:0,
                premium:0,
                totalbs:0,
                diferenciabs:0,
                montoTotal:0
            },
            cierreCuadre:{
                id:'',
                fecha:'',
                hora:'',
                monto:'',
                listcuadre:{}
            }
        }
    },
    components:{
        ModalDetalle
    },
    computed:{
    	...mapState(['listcuadre']),
        sumaTotal(){
            let suma = 0
            this.listcuadre.forEach(value => suma += value.totalbs)
            return this.detalle.montoTotal = (parseFloat(suma)).toFixed(2)
        },
        lockCuadre(){
            return this.listcuadre.length === 0 ? true : false
        }
    },
    methods:{
    	...mapActions(['deleteCuadre']),
        ...mapActions('cierrecajas',['setListCierres']),
        insertCuadre(){
            const today = new Date()
            const fecha = today.toLocaleDateString('es-ES')
            const hora = today.toLocaleTimeString('es-ES')
            this.cierreCuadre.id = 'abc'
            this.cierreCuadre.fecha = fecha
            this.cierreCuadre.hora = hora
            // this.cierreCuadre.supervisor = ''
            this.cierreCuadre.listcuadre = this.listcuadre
            this.setListCierres(this.cierreCuadre)
            this.cierreCuadre = {
                id:'',
                fecha:'',
                hora:'',
                supervisor:'',
                listcuadre:{}
            }
        },
        getData(id){
            const query = this.listcuadre.find(item => item.id === id)
            this.detalle.id = query.id
            this.detalle.supervisor = query.supervisor
            this.detalle.cajero = query.cajero
            this.detalle.caja = query.caja
            this.detalle.tasa1 = query.tasa1
            this.detalle.efectivo = query.efectivo
            this.detalle.transferencia = query.transferencia
            this.detalle.punto = query.punto
            this.detalle.pendiente = query.pendiente
            this.detalle.cash = query.cash
            this.detalle.zelle = query.zelle
            this.detalle.premium = query.premium
            this.detalle.totalbs = query.totalbs
            this.detalle.diferenciabs = query.diferenciabs
        }
    }
}
</script>