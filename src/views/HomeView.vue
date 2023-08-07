<template>
    <div class="container-fluid">
        <div class="row py-3">
            <div class="col-md-6 d-flex justify-content-start">
                <h1>Inicio</h1>
            </div>
            <div class="col-md-6 d-flex justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active">Inicio</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="card">
            <div class="card-header"><i class="bi bi-file-spreadsheet"></i> Sistema de cierre</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4 d-flex justify-content-start">
                        <span class="fw-bold fs-5">{{getFecha}} - {{getHora}}</span>
                        
                    </div>
                </div>
                <hr>
                <div class="row">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation" >            
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Caja</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Cierre de cuadre</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Resumen de cierre</button>
                        </li>        
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <form @submit.prevent="cuadreCaja" class="needs-validation" novalidate>                               
                                <Cuadre :cuadre="cuadre"/>                       
                            </form>
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"><CierreCaja /></div>
                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0"><Resumen /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Cuadre from '../components/Cuadre'
import CierreCaja from '../components/CierreCaja'
import Resumen from '../components/Resumen'
import {mapActions, mapState} from 'vuex'
export default {
name: 'HomeView',
components: {
    Cuadre,
    CierreCaja,
    Resumen
},
data(){
    return{
        cuadre:{
            id:'',
            fecha:'',
            hora:'',
            supervisor:'',
            cajero:'',
            caja:'',
            is_rrss:false,          
            tasa1: 0,
            efectivo: 0,
            punto: 0,
            transferencia: 0,
            pendiente: 0,
            cash: 0,
            zelle: 0,
            premium: 0,
            totalbs: 0,
            diferenciabs: 0,
            efectivodls: 0,
            puntodls: 0,
            transferenciadls: 0,
            pendientedls: 0,
            cashdls: 0,
            zelledls: 0,
            premiumdls: 0,
            totaldls: 0,
            diferenciadls: 0
        }
    }
},
methods:{
    ...mapState('empleados',['listEmpleados']),
    ...mapActions(['setCuadre']),
        cuadreCaja(){  
            this.cuadre.id = '3'
            this.setCuadre(this.cuadre)
            this.cuadre = {
                id: '',
                fecha:'',
                hora:'',
                supervisor: this.cuadre.supervisor,
                cajero: this.cuadre.cajero,
                caja: this.cuadre.caja,
                tasa1: this.cuadre.tasa1,
                efectivo: '',
                punto: '',
                transferencia: '',
                pendiente: '',
                cash: '',
                zelle: '',
                premium: '',
                totalbs: 0,
                diferenciabs: 0,
                efectivodls: 0,
                puntodls: 0,
                transferenciadls: 0,
                pendientedls: 0,
                cashdls: 0,
                zelledls: 0,
                premiumdls: 0,
                totaldls: 0,
                diferenciadls: 0,
                is_rrss: false    
            }
        }
    },
    computed:{        
        getFecha(){
            const today = new Date()
            const fecha = today.toLocaleDateString('es-ES')
            return this.cuadre.fecha = fecha
        },
        getHora(){
            const today = new Date()
            const hora = today.toLocaleTimeString('es-ES')
            return this.cuadre.hora = hora
        }
    }
}
</script>
