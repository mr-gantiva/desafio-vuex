<script setup>
import { useJuegosStore } from '../stores/juegosStore'
import { storeToRefs } from 'pinia'


const juegosStore = useJuegosStore()
const { juegos } = storeToRefs(juegosStore)
const { incrementarStock, decrementarStock } = juegosStore
</script>

<template>
    <div class="container">
        <h1 class="text-center py-5">Lista de Juegos</h1>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody v-for="(juego, i) in juegos" :key="juego.id" class="table">
                <tr>
                    <th scope="row">{{ juego.codigo }}</th>
                    <td>{{ juego.nombre }}</td>
                    <td>{{ juego.stock }}</td>
                    <td>${{ juego.precio }}</td>
                    <td><button class="btn btn-success btn-incrementar mx-2" @click="incrementarStock(i)">+</button>
                        <button class="btn btn-warning btn-decrementar mx-2" @click="decrementarStock(i)">-</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>


<style scoped>
.btn-incrementar,
.btn-decrementar {
    color: #188050;
    width: 50px;
    font-weight: 900;
}

.btn-incrementar:hover {
    background-color: #28a745;
    color: white;
}

.btn-decrementar:hover {
    background-color: #ffc107;
    color: white;
}
</style>