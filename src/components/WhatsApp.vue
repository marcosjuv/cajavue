<template>
	<div class="card">
    	<div class="card-header bg-success-subtle"><i class="bi bi-whatsapp"></i> Whatsapp</div>
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
    	<div class="card-footer bg-success-subtle">
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
  name: 'WhatsApp',
    data () {
        return {
            whatsapp:{                
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
            this.listcuadre.forEach(value => value.is_rrss === true ? suma_efectivo += value.efectivo : '0.00')
            return this.whatsapp.efectivo = suma_efectivo
        },
        sumaPunto(){
            let suma_punto = 0
            this.listcuadre.forEach(value => value.is_rrss === true ? suma_punto += value.punto : '0.00')
            return this.whatsapp.punto = suma_punto
        },
        sumaTransferencia(){
            let suma_transferencia = 0
            this.listcuadre.forEach(value => value.is_rrss === true ? suma_transferencia += value.transferencia : '0.00')
            return this.whatsapp.transferencia = suma_transferencia
        },
        sumaPendiente(){
            let suma_pendiente = 0
            this.listcuadre.forEach(value => value.is_rrss === true ? suma_pendiente += value.pendiente : '0.00')
            return this.whatsapp.pendiente = suma_pendiente
        },
        setColorPendiente(){
            return this.whatsapp.pendiente > 0 ? 'badge bg-secondary' : 'badge bg-primary'
        },
        sumaCash(){
            let suma_cash = 0
            this.listcuadre.forEach(value => value.is_rrss === true ? suma_cash += value.cash : '0.00')
            return this.whatsapp.cash = suma_cash
        },
        sumaZelle(){
            let suma_zelle = 0
            this.listcuadre.forEach(value => value.is_rrss === true ? suma_zelle += value.zelle : '0.00')
            return this.whatsapp.zelle = suma_zelle
        },
        sumaPremium(){
            let suma_premium = 0
            this.listcuadre.forEach(value => value.is_rrss === true ? suma_premium += value.premium : '0.00')
            return this.whatsapp.premium = suma_premium
        },
        sumaDiferencia(){
            let suma_diferencia = 0
            this.listcuadre.forEach(value => value.is_rrss === true ? suma_diferencia += value.diferencia : '0.00')
            return this.whatsapp.diferencia = suma_diferencia
        },
        setColorDiferencia(){
            return this.whatsapp.diferencia < 0 ? 'badge bg-danger' : 'badge bg-primary'
        },       
        sumaTotal(){
            let suma_total = 0
            console.log(this.listcuadre)
            this.listcuadre.forEach(value => value.is_rrss === true ? suma_total += value.monto_total : '0.00')
            return this.whatsapp.monto_total = suma_total
        }
    }
}
</script>