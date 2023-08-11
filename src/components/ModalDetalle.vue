<template>
	<div>		
        <ol class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Tasa:</div>
                </div>
                <h6>{{details.tasa}}</h6>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Efectivo:</div>
                </div>
                <h6>{{details.efectivo}}</h6>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Transferencia:</div>
                </div>
                <h6>{{details.transferencia}}</h6>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Punto:</div>
                </div>
                <h6>{{details.punto}}</h6>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Pendiente</div>
                </div>
                <h6>{{details.pendiente}}</h6>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Efectivo $:</div>
                </div>
                <h6>{{details.cash}}</h6>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Zelle:</div>
                </div>
                <h6>{{details.zelle}}</h6>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Premium:</div>
                </div>
                <h6>{{details.premium}}</h6>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Total:</div>
                </div>
                <h6>{{details.monto_total}}</h6>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Diferencia:</div>
                </div>
                <h6>{{details.diferencia}}</h6>
            </li>
        </ol>
	</div>
</template>
<script>
	export default{
		name: 'ModalDetalle',
        props:{
            details: Object
        }
	}
</script>