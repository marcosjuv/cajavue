<template>
	<div class="container">
		<div class="row py-3">
            <div class="col-md-6 d-flex justify-content-start">
                <h1>Cierres</h1>
            </div>
            <div class="col-md-6 d-flex justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/" href="JavaScript:void(0)">Inicio</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Cierres</li>
                    </ol>
                </nav>
            </div>
        </div>        
        <div class="card">
            <div class="card-header"><i class="bi bi-list-ol"></i> Lista de cierres</div>
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
                                <DatePicker />
                                <!-- <input class="form-control" type="date" v-model="fecha" name="fecha" placeholder="Buscar"> -->
                            </div>                            
                            <div class="col-md-3 mb-3">
                                <input class="form-control" type="text" v-model="buscar" name="buscar" placeholder="Buscar">
                            </div>
                        </div>
                    </div>
                    <table class="table table-sm table-bordered table-hover table-striped">
                        <thead class="table-light">
                            <tr>
                                <th>#</th>
                                <th>Supervisor</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Monto</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in listCierres" :key="item.id">
                                <th scope="row">{{item.id}}</th>
                                <td>{{item.supervisor}}</td>
                                <td>{{item.fecha}}</td>
                                <td>{{item.hora}}</td>
                                <td>{{item.monto}}</td>
                                <td>
                                    <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                                        <router-link :to="{name:'detallecierre', params:{id:item.id}}" type="button" class="btn btn-primary"><i class="bi bi-eye"></i></router-link>
                                        <button type="button" class="btn btn-secondary"><i class="bi bi-printer"></i></button>
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
import {mapState, mapActions} from 'vuex'
import DatePicker from '../components/DatePicker'
export default {
	name:'ConsultasView',
    components:{
        DatePicker
    },
    data(){
        return {
            buscar:'',
            fecha:''
        }
    },
    computed:{
        ...mapState('cierrecajas',['listCierres']),
        ...mapState(['listcuadre']),
        buscarDocumento(){            
            return this.listCierres.filter(item => {
                return item.fecha.includes(this.date)
            })
        }
    }
}
</script>