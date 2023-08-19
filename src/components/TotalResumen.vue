<template>
	<div class="card">
    	<div class="card-header bg-info-subtle"><i class="bi bi-cash"></i> Total resumen</div>
    	<div class="card-body">
    		<ul class="list-group">
    			<li class="list-group-item d-flex justify-content-between align-items-center">
    				Efectivo
        			<span class="badge bg-primary ">Bs. {{sumaEfectivo}}</span>
    			</li>
    			<li class="list-group-item d-flex justify-content-between align-items-center">
    				Punto
        			<span class="badge bg-primary ">Bs. {{sumaPunto}}</span>
    			</li>
    			<li class="list-group-item d-flex justify-content-between align-items-center">
    				Transferencias
        			<span class="badge bg-primary ">Bs. {{sumaTransferencia}}</span>
    			</li>
    			<li class="list-group-item d-flex justify-content-between align-items-center">
    				Pendiente
        			<span :class="setColorPendiente">Bs. {{sumaPendiente}}</span>
    			</li>
    			<li class="list-group-item d-flex justify-content-between align-items-center">
    				Efectivo $
        			<span class="badge bg-primary ">Bs. {{sumaCash}}</span>
    			</li>
    			<li class="list-group-item d-flex justify-content-between align-items-center">
    				Zelle
        		    <span class="badge bg-primary ">Bs. {{sumaZelle}}</span>
    			</li>
    			<li class="list-group-item d-flex justify-content-between align-items-center">
    				Premium
        			<span class="badge bg-info ">Bs. {{sumaPremium}}</span>
    			</li>
    			<li class="list-group-item d-flex justify-content-between align-items-center">
    				Diferencia
        			<span :class="setColorDiferencia">Bs. {{sumaDiferencia}}</span>
    			</li>
    		</ul>
    	</div>
    	<div class="card-footer bg-info-subtle">
    		<ul class="list-group">
    			<li class="list-group-item d-flex justify-content-between align-items-center">
    				Total ventas:<span class="badge bg-success ">Bs. {{sumaTotal}}</span>		        				
    			</li>
    		</ul>
    	</div>
    </div> 
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'TotalResumen',
    data () {
        return {
            totalresumen:{                
                tasa1:0,
                efectivo:0,
                transferencia:0,
                punto:0,
                pendiente:0,
                cash:0,
                zelle:0,
                premium:0,
                monto_total:0,
                diferencia:0,
                montoTotal:0
            } 
        }
    },
    computed:{
        ...mapState(['listcuadre']),
        sumaEfectivo(){
            let suma_efectivo = 0
            this.listcuadre.forEach(value => suma_efectivo += value.efectivo)
            return this.totalresumen.efectivo = suma_efectivo
        },
        sumaPunto(){
            let suma_punto = 0
            this.listcuadre.forEach(value => suma_punto += value.punto)
            return this.totalresumen.punto = suma_punto
        },
        sumaTransferencia(){
            let suma_transferencia = 0
            this.listcuadre.forEach(value => suma_transferencia += value.transferencia)
            return this.totalresumen.transferencia = suma_transferencia
        },
        sumaPendiente(){
            let suma_pendiente = 0
            this.listcuadre.forEach(value => suma_pendiente += value.pendiente)
            return this.totalresumen.pendiente = suma_pendiente
        },
        setColorPendiente(){
            return this.totalresumen.pendiente > 0 ? 'badge bg-secondary' : 'badge bg-primary'
        },
        sumaCash(){
            let suma_cash = 0
            this.listcuadre.forEach(value => suma_cash += value.cash)
            return this.totalresumen.cash = suma_cash
        },
        sumaZelle(){
            let suma_zelle = 0
            this.listcuadre.forEach(value => suma_zelle += value.zelle)
            return this.totalresumen.zelle = suma_zelle
        },
        sumaPremium(){
            let suma_premium = 0
            this.listcuadre.forEach(value => suma_premium += value.premium)
            return this.totalresumen.premium = suma_premium
        },
        sumaDiferencia(){
            let suma_diferencia = 0
            this.listcuadre.forEach(value => suma_diferencia += parseFloat(value.diferencia))
            return this.totalresumen.diferencia = (suma_diferencia).toFixed(2)
        },
        setColorDiferencia(){
            return this.totalresumen.diferencia < 0 ? 'badge bg-danger' : 'badge bg-primary'
        },        
        sumaTotal(){
            let suma_total = 0
            this.listcuadre.forEach(value => suma_total += value.monto_total)
            return this.totalresumen.monto_total = suma_total
        }
    }
}
</script>