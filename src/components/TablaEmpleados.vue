<template>
    <div class="table-responsive">
        <DataTable :data="datos" 
                    ref = "table"
                    :columns="columns" 
                    :options="{
                        select:true,
                        responsive:true, 
                        autoWidth:false, 
                        dom:'Bfrtip', 
                        language:{
                            search:'Buscar', 
                            zeroRecords:'No hay registros para mostrar', 
                            info:'Mostrando del _START_ a _END_ de _TOTAL_ regisros', 
                            infoFiltered: '(Filtrados de _MAX_ registros)',
                            paginate:{first: 'Primero', previous: 'Anterior', next: 'Proximo', last: 'Ultimo'}
                        }
                    }" class="table table-striped table-hover table-bordered table-sm display">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cedula</th>
                            </tr>
                        </thead>
                    </DataTable>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net-bs5'
import Buttons from 'datatables.net-buttons-bs5'
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5'
import Select from 'datatables.net-select'
import print from 'datatables.net-buttons/js/buttons.print'
import pdfmake from 'pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfmake.vfs = pdfFonts.pdfMake.vfs;
import 'datatables.net-responsive-bs5'
import 'datatables.net-select-dt';
import 'datatables.net-select';
import JsZip from 'jszip'
window.JSZip = JsZip;
DataTable.use(DataTablesLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);
DataTable.use(Select);
export default {
    name:'tablaempleados',
    components:{DataTable},
    data(){
        return{
            columns:[
                {data: 'id'},
                {data: 'name'},
                {data: 'lastname'},
                {data: 'card_id'}
            ],
            datos:[]
        }
    },
    methods: {
        getData(){ this.datos = this.listEmpleados },
        getRowTable(){ 
            this.$refs.table.dt.on('select', function(e, dt, type, indexes) {
                // this.empleado = dt.row({selected:true}).data();
                let id = dt.row({selected:true}).data();
                console.log(id.id)
            })
        }
    },
    mounted() {
        this.getData();
        this.getRowTable()
    },
    computed:{
        ...mapState('empleados',['listEmpleados']),
    }
}
</script>
<style>
@import 'datatables.net-bs5';
</style>