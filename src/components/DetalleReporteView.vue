<template>
    <div class="container">
    	<div class="row py-3">
            <div class="col-md-6 d-flex justify-content-start">
                <h1>Detalles</h1>
            </div>
            <div class="col-md-6 d-flex justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/" href="JavaScript:void(0)">Inicio</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Detalles</li>
                    </ol>
                </nav>
            </div>
        </div><!-- ./row   -->              
    </div><!-- ./container   -->
    <div class="card mx-3">
    	<div class="card-header">
    		<div class="row">
    			<div class="col-md-6"><h2>Supervisor: supervisor1</h2></div>
    			<div class="col-md-6"><h2>Monto total: 10.000.00</h2></div>
    		</div>    		
    	</div>
    	<div class="card-body">
    		<div class="table-responsive">
    			<table class="table table-sm table-bordered table-hover table-striped">
    				<thead>
    					<tr>
    						<th>#</th>
    						<th>Cajero</th>
    						<th>Efectivo</th>
    						<th>Punto</th>
    						<th>Transferencia</th>
    						<th>Pendiente</th>
    						<th>Efectivo $</th>
    						<th>Zelle</th>
    						<th>Premium</th>
    						<th>Total</th>
    					</tr>
    				</thead>
    				<tbody>
    					<tr>
    						<td>1</td>
    						<td>Cajero1</td>
    						<td>124.00</td>
    						<td>123.00</td>
    						<td>456.00</td>
    						<td>789.00</td>
    						<td>321.00</td>
    						<td>654.00</td>
    						<td>1000.00</td>
    						<td>3000.00</td>
    					</tr>
    					<tr>
    						<td>2</td>
    						<td>Cajero2</td>
    						<td>222.00</td>
    						<td>123.00</td>
    						<td>456.00</td>
    						<td>789.00</td>
    						<td>321.00</td>
    						<td>654.00</td>
    						<td>1000.00</td>
    						<td>3000.00</td>
    					</tr>
    					<tr>
    						<td>3</td>
    						<td>Cajero3</td>
    						<td>333.00</td>
    						<td>123.00</td>
    						<td>456.00</td>
    						<td>789.00</td>
    						<td>321.00</td>
    						<td>654.00</td>
    						<td>1000.00</td>
    						<td>3000.00</td>
    					</tr>
    					<tr class="bg-primary-subtle">
    						<td colspan="2"><strong>Total:</strong></td>
    						<td class="fw-bold">679.00</td>
    						<td class="fw-bold">369.00</td>
    						<td class="fw-bold">1368.00</td>
    						<td class="fw-bold">2367.00</td>
    						<td class="fw-bold">963.00</td>
    						<td class="fw-bold">1962.00</td>
    						<td class="fw-bold">3000.00</td>
    						<td class="fw-bold">9000.00</td>    						
    					</tr>    					
    				</tbody>
    			</table>
    		</div>
    	</div>
    	<div class="card-footer">
    		<div class="row">
    			<div class="col-md-12 text-center">
    				<div class="btn-group">
    					<button class="btn btn-primary">Volver</button>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</template>
<script>
	import {mapState} from 'vuex'
export default {
    name:'DetalleCaja',
    computed:{
    	...mapState(['cajas'])
    }
}
</script>