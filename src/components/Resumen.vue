<template>
    <div class="container-fluid">
        <hr>
        <div class="row">
	        <div class="col-sm-4">	        	
		        <PisoVenta />
		    </div>
	        <div class="col-sm-4">
		        <WhatsApp />
		    </div>
		    <div class="col-sm-4">
		        <TotalResumen />       	
	        </div>
        </div>
    </div>
</template>
<script>
import PisoVenta from '../components/PisoVenta'
import WhatsApp from '../components/WhatsApp'
import TotalResumen from '../components/TotalResumen'
export default {
    name:'Resumen',
    components: {
	    PisoVenta,
	    WhatsApp,
	    TotalResumen
	}
}
</script>