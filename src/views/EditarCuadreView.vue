<template>
    <div class="container">
        <div class="row py-3">
            <div class="col-md-6 d-flex justify-content-start">
                <h1>Modificar cuadre</h1>
            </div>
            <div class="col-md-6 d-flex justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/" href="JavaScript:void(0)">Inicio</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Modificar cuadre</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-header bg-warning-subtle">
                <h6>Editar cuadre #: {{$route.params.id}}</h6>
            </div>
            <div class="card-body">
                <form @submit.prevent="modificarCuadre(cuadre)">
                    <Cuadre :cuadre="cuadre" />
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import Cuadre from '../components/Cuadre'
import {mapState, mapActions} from 'vuex'
export default {
    name:'EditarCuadre',
    components:{
        Cuadre
    },
    data(){
    return{
        datos:{            
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
    computed:{
        ...mapState(['cuadre'])
    },
    methods:{
        ...mapActions(['getId', 'modificarCuadre']),        
    },
    created(){
        this.getId(this.$route.params.id)
    }
}
</script>