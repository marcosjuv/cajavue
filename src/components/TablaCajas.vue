<template>
    <div class="table-responsive-md">        
        <table id="table_cajas" ref="tablecajas" class="table table-sm table-bordered table-hover table-striped">
            <thead class="table-light">
                <tr>
                    <th>#</th>
                    <th>Caja</th>
                    <th>Descripcion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"> 1 </th>
                    <td> Caja 1 </td>
                    <td> caja_1 </td>
                    <td>
                        <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                        </div>
                    </td>
                </tr>                            
                <tr>
                    <th scope="row"> 2 </th>
                    <td> Caja 2 </td>
                    <td> caja_2 </td>
                    <td>
                        <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                        </div>
                    </td>
                </tr>                            
                <tr>
                    <th scope="row"> 3 </th>
                    <td> Caja 3 </td>
                    <td> caja_3 </td>
                    <td>
                        <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                        </div>
                    </td>
                </tr>                            
                <tr>
                    <th scope="row"> 4 </th>
                    <td> Caja 4 </td>
                    <td> caja_4 </td>
                    <td>
                        <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                        </div>
                    </td>
                </tr>                            
                <tr>
                    <th scope="row"> 5 </th>
                    <td> Caja 5 </td>
                    <td> caja_5 </td>
                    <td>
                        <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                        </div>
                    </td>
                </tr>                            
                <tr>
                    <th scope="row"> 6 </th>
                    <td> Caja 6 </td>
                    <td> caja_6 </td>
                    <td>
                        <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                        </div>
                    </td>
                </tr>                            
                <tr>
                    <th scope="row"> 7 </th>
                    <td> Caja 7 </td>
                    <td> caja_7 </td>
                    <td>
                        <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                        </div>
                    </td>
                </tr>                            
                <tr>
                    <th scope="row"> 8 </th>
                    <td> Caja 8 </td>
                    <td> caja_8 </td>
                    <td>
                        <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                        </div>
                    </td>
                </tr>                            
                <tr>
                    <th scope="row"> 9 </th>
                    <td> Caja 9 </td>
                    <td> caja_9 </td>
                    <td>
                        <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                        </div>
                    </td>
                </tr>                            
                <tr>
                    <th scope="row"> 10 </th>
                    <td> Caja 10 </td>
                    <td> caja_10 </td>
                    <td>
                        <div class="btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                        </div>
                    </td>
                </tr>                            
            </tbody>
        </table>
    </div>
</template>
<script>
import DataTable from 'datatables.net-bs5'
// DataTable.use(DataTable);
export default {
    component:{DataTable},
    methods: {
        
    },
    mounted() {
        
    },
}
</script>