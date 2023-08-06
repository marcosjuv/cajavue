<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div class="card mt-3">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-4">
                                <select id="supervisor" v-model="cuadre.supervisor"  class="form-select" :class="validaciones" aria-label="Current">
                                    <option v-for="item in is_supervisor" :key="item.id" :value="item.name">{{item.name}} {{item.lastname}}</option>
                                </select>                                
                                <div v-if="listEmpleados.length === 0" class="invalid-feedback">No hay registros</div>                               
                                <div v-else class="invalid-feedback">Seleccione el supervisor</div>
                            </div>
                            <div class="col-md-4">
                                <select id="cajero" v-model="cuadre.cajero" class="form-select" :class="validaciones" aria-label="">
                                    <option v-for="item in is_cajero" :key="item.id" :value="item.name">{{item.name}} {{item.lastname}}</option>                                
                                </select>
                                <div v-if="listEmpleados.length === 0" class="invalid-feedback">No hay registros</div>                               
                                <div v-else class="invalid-feedback">Seleccione el cajero</div>
                            </div>
                            <div class="col-md-4">
                                <select id="caja" v-model="cuadre.caja" class="form-select" :class="validaciones" aria-label="">
                                    <option v-for="item in listCajas" :key="item.id" :value="item.id">{{item.caja}}</option>
                                </select>                                
                                <div v-if="listCajas.length === 0" class="invalid-feedback" >No hay registros</div>
                                <div v-else class="invalid-feedback">Seleccione la caja</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row row-cols-2">
                            <div class="col-md-6">
                                <h1 class="fw-bold">Bs.</h1>
                                <div class="form-group">
                                    <label  class="fw-bold" for="efectivo">Efectivo:</label>
                                    <input id="efectivo" type="number" class="form-control" v-model.number="cuadre.efectivo" @keyup="calcular">
                                </div>
                                <div class="form-group">
                                    <label  class="fw-bold" for="punto">Punto:</label><br>
                                    <input id="punto" type="number" class="form-control" v-model.number="cuadre.punto" @keyup="calcular">                                    
                                </div>
                                <div class="form-group">
                                    <label  class="fw-bold" for="transferencia">Transferencia:</label><br>
                                    <input id="transferencia" type="number" class="form-control" v-model.number="cuadre.transferencia" @keyup="calcular">                                    
                                </div>
                                <div class="form-group">
                                    <label  class="fw-bold" for="pendiente">Pendiente:</label><br>
                                    <input id="pendiente" type="number" class="form-control" v-model.number="cuadre.pendiente" @keyup="calcular">                                    
                                </div>
                                <div class="form-group">
                                    <label  class="fw-bold" for="cash">Efectivo $:</label><br>
                                    <input id="cash" type="number" class="form-control" v-model.number="cuadre.cash" @keyup="calcular">                                    
                                </div>
                                <div class="form-group">
                                    <label  class="fw-bold" for="zelle">Zelle:</label><br>
                                    <input id="zelle" type="number" class="form-control" v-model.number="cuadre.zelle" @keyup="calcular">                                    
                                </div>
                                <div class="form-group">
                                    <label  class="fw-bold" for="premium">Premium:</label><br>
                                    <input id="premium" type="number" class="form-control" v-model.number="cuadre.premium" @keyup="calcular">                                    
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h1 class="fw-bold">$. </h1>
                                <div class="form-group">
                                    <label  class="fw-bold" for="efectivo">Efectivo:</label><br>
                                    <p class="fw-bold fs-4 mb-0">{{ efectivo }}</p>
                                </div>
                                <div class="form-group">
                                    <label  class="fw-bold" for="punto">Punto:</label><br>
                                    <p class="fw-bold fs-4 mb-1">{{ punto }}</p>
                                </div>
                                <div class="form-group">
                                    <label  class="fw-bold" for="transferencia">Transferencia:</label><br>
                                    <p class="fw-bold fs-4 mb-1">{{ transferencia }}</p>
                                </div>
                                <div class="form-group">
                                    <label  class="fw-bold" for="pendiente">Pendiente:</label><br>
                                    <p class="fw-bold fs-4 mb-1">{{ pendiente }}</p>
                                </div>
                                <div class="form-group">
                                    <label  class="fw-bold" for="cash">Efectivo $:</label><br>
                                    <p class="fw-bold fs-4 mb-1">{{ cash }}</p>
                                </div>
                                <div class="form-group">
                                    <label  class="fw-bold" for="zelle">Zelle:</label><br>
                                    <p class="fw-bold fs-4 mb-1">{{ zelle }}</p>
                                </div>
                                <div class="form-group">
                                    <label  class="fw-bold" for="premium">Premium:</label><br>
                                    <p class="fw-bold fs-4 mb-0">{{ premium }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-grid gap-2">
                            <button class="btn btn-sm btn-primary" type="submit" :disabled="lockButton">Cerrar caja</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card my-3">
                    <div class="card-header">
                        <p class="fw-bold fs-6 mb-0">Tasa del dia</p>
                    </div>
                    <div class="card-body">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="fw-bold" for="tasa1">Tasa 1:</label>
                                <input id="tasa1" type="text" class="form-control mb-2" v-model.number="cuadre.tasa1">
                            </div>
                        </div>
                    </div>
                </div>            
                <div class="card">
                    <div class="card-header">
                        <p class="fw-bold fs-6 mb-0">Operaciones</p>
                    </div>
                    <div class="card-body">
                        <div class="row row-cols-2">
                            <div class="col-md-6">
                                <p class="fw-bold fs-6 my-0" for="totalbs">Total Bs.</p>
                                <input id="totalbs" type="hidden" name="totalbs" v-model.number="cuadre.totalbs">
                                <p class="fw-bold fs-4 my-0">{{ totalBs }}</p>
                                <p class="fw-bold fs-6 my-0" for="diferencia">Diferencia Bs.</p>
                                <input id="diferencia" type="hidden" name="diferencia" v-model.number="cuadre.diferenciabs">
                                <p class="fw-bold fs-4 my-0" :class="setColorBs">{{ cuadre.diferenciabs === 0 ? '0.00' : cuadre.diferenciabs }}</p>
                            </div>
                            <div class="col-md-6">
                                <p class="fw-bold fs-6 my-0" for="cash">Total $.</p>
                                <p class="fw-bold fs-4 my-0">{{ cuadre.totaldls === 0 || cuadre.totaldls === 'NaN' ? '0.00' : cuadre.totaldls }}</p>
                                <p class="fw-bold fs-6 my-0" for="diferenciadls">Diferencia $.</p>
                                <p class="fw-bold fs-4 my-0" :class="setColorDls">{{ cuadre.diferenciadls === 0 || cuadre.totaldls === 'NaN' ? '0.00' : cuadre.diferenciadls }}</p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'Cuadre',
    props:{
        cuadre: Object
    },
    methods:{
        calcular(){
            if (this.cuadre.tasa1 === 0) {
                alert('¡¡¡ Ingrese la tasa del dia !!!')
                return
            }
            this.changeToDolar()
            this.diferencia()
            this.cuadre.totalbs = Number(this.cuadre.efectivo) + Number(this.cuadre.punto) + Number(this.cuadre.transferencia) + Number(this.cuadre.pendiente) + Number(this.cuadre.cash) + Number(this.cuadre.zelle)
            this.cuadre.totaldls = (parseFloat(this.cuadre.totalbs) / parseFloat(this.cuadre.tasa1)).toFixed(2)
        },
        diferencia(){
            this.cuadre.diferenciabs = (this.cuadre.totalbs - this.cuadre.premium).toFixed(2)
            this.cuadre.diferenciadls = (this.cuadre.diferenciabs / this.cuadre.tasa1).toFixed(2)
            this.cuadre.premiumdls = (this.cuadre.premium / this.cuadre.tasa1).toFixed(2)
        },
        changeToDolar(){
            this.cuadre.efectivodls = (this.cuadre.efectivo / this.cuadre.tasa1).toFixed(2),
            this.cuadre.puntodls = (this.cuadre.punto / this.cuadre.tasa1).toFixed(2),
            this.cuadre.transferenciadls = (this.cuadre.transferencia / this.cuadre.tasa1).toFixed(2),
            this.cuadre.pendientedls = (this.cuadre.pendiente / this.cuadre.tasa1).toFixed(2),
            this.cuadre.cashdls = (this.cuadre.cash / this.cuadre.tasa1).toFixed(2),
            this.cuadre.zelledls = (this.cuadre.zelle / this.cuadre.tasa1).toFixed(2),
            this.cuadre.premiumdls = (this.cuadre.premium / this.cuadre.tasa1).toFixed(2)
        }
    },
    computed:{
        ...mapState('empleados',['listEmpleados']),
        ...mapState('cajas',['listCajas']),
        setColorBs(){
            return this.cuadre.diferenciabs < 0 ? 'text-danger' : 'text-success'
        },
        setColorDls(){
            return this.cuadre.diferenciadls < 0 ? 'text-danger' : 'text-success'
        },
        validaciones(){
            return (this.cuadre.supervisor === '' || this.cuadre.selected === '' || this.cuadre.caja === '') ? 'is-invalid' : 'is-valid'
        },
        lockButton(){
            return (this.cuadre.supervisor === '' || this.cuadre.selected === '' || this.cuadre.caja === '' || this.cuadre.fecha === '' || this.cuadre.totalbs === 0.00) ? true : false
        },
        totalBs(){
            return parseFloat(this.cuadre.totalbs) === 0 ? '0.00' : (parseFloat(this.cuadre.totalbs)).toFixed(2)
        },
        is_supervisor(){
            return this.listEmpleados.filter(item => item.is_supervisor === 1)
        },
        is_cajero(){
            return this.listEmpleados.filter(item => item.is_supervisor === 0)
        },

        // --------------------------------  Campos ---------------------------------------//

        efectivo(){
            return this.cuadre.efectivodls === 0 || this.cuadre.efectivodls === 'NaN' ? '0.00' : this.cuadre.efectivodls                  
        },
        punto(){
            return this.cuadre.puntodls === 0 || this.cuadre.puntodls === 'NaN' ? '0.00' : this.cuadre.puntodls
        },
        transferencia(){
            return this.cuadre.transferenciadls === 0 || this.cuadre.transferenciadls === 'NaN' ? '0.00' : this.cuadre.transferenciadls
        },
        pendiente(){
            return this.cuadre.pendientedls === 0 || this.cuadre.pendientedls === 'NaN' ? '0.00' : this.cuadre.pendientedls
        },
        cash(){
            return this.cuadre.cashdls === 0 || this.cuadre.cashdls === 'NaN' ? '0.00' : this.cuadre.cashdls
        },
        zelle(){
            return this.cuadre.zelledls === 0 || this.cuadre.zelledls === 'NaN' ? '0.00' : this.cuadre.zelledls
        },
        premium(){
            return this.cuadre.premiumdls === 0 || this.cuadre.premiumdls === 'NaN' ? '0.00' : this.cuadre.premiumdls
        }
    }
}
</script>