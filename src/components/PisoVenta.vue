<template>
	<div class="card">
    	<div class="card-header bg-primary-subtle"><i class="bi bi-people"></i> Piso de venta</div>
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
    	<div class="card-footer bg-primary-subtle">
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
    name: 'PisoVenta',    
	data(){
	    return{
	        pisoventa:{                
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
	        }            
	    }
	},
    methods:{
    	
    },
    computed:{
    	...mapState(['listcuadre']),
    	...mapState('empleados',['listEmpleados']), // pendiente por borrarlo, no veo que funcion hace aqui???
    	sumaEfectivo(){
            let suma_efectivo = 0
            this.listcuadre.forEach(value => value.is_rrss === false ? suma_efectivo += value.efectivo : '0.00')
            return this.pisoventa.efectivo = suma_efectivo
        },        
        sumaPunto(){
            let suma_punto = 0
            this.listcuadre.forEach(value => value.is_rrss === false ? suma_punto += value.punto : '0.00')
            return this.pisoventa.punto = suma_punto
        },
		sumaTransferencia(){
            let suma_transferencia = 0
            this.listcuadre.forEach(value => value.is_rrss === false ? suma_transferencia += value.transferencia : '0.00')
            return this.pisoventa.transferencia = suma_transferencia
		},
		sumaPendiente(){
            let suma_pendiente = 0
            this.listcuadre.forEach(value => value.is_rrss === false ? suma_pendiente += value.pendiente : '0.00')
            return this.pisoventa.pendiente = suma_pendiente
        },
        setColorPendiente(){
            return this.pisoventa.pendiente > 0 ? 'badge bg-secondary' : 'badge bg-primary'
        },
        sumaCash(){
            let suma_cash = 0
            this.listcuadre.forEach(value => value.is_rrss === false ? suma_cash += value.cash : '0.00')
            return this.pisoventa.cash = suma_cash
        },
        sumaZelle(){
            let suma_zelle = 0
            this.listcuadre.forEach(value => value.is_rrss === false ? suma_zelle += value.zelle : '0.00')
            return this.pisoventa.zelle = suma_zelle
        },
        sumaPremium(){
            let suma_premium = 0
            this.listcuadre.forEach(value => value.is_rrss === false ? suma_premium += value.premium : '0.00')
            return this.pisoventa.premium = suma_premium
        },
        sumaDiferencia(){
        	let suma_diferencia = 0
    		this.listcuadre.forEach(value => value.is_rrss === false ? suma_diferencia += parseFloat(value.diferenciabs) : '0.00')
            return this.pisoventa.diferenciabs = (suma_diferencia).toFixed(2)
        },
        setColorDiferencia(){
            return this.pisoventa.diferenciabs < 0 ? 'badge bg-danger' : 'badge bg-primary'
        },        
        sumaTotal(){
            let suma_total = 0
            this.listcuadre.forEach(value => value.is_rrss === false ? suma_total += value.totalbs : '0.00')
            return this.pisoventa.totalbs = suma_total
        }
    }
}
</script>