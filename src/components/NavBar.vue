
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Caja 2.0</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link active">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/empleados" class="nav-link">Empleados</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/consultas" class="nav-link">Cierres</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/cajas" class="nav-link">Cajas</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/reportes" class="nav-link">Reportes</router-link>
                </li>
            </ul>
            <!-- <form id="search" class="d-flex" role="search">
                <input id="buscar" name="buscarf" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form> -->
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name:'NavBar'
}
</script>
<style>
    .navbar{background-color: #8ac6f1;}
</style>