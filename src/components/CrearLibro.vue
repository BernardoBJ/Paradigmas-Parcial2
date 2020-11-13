<template>
<div style="padding-left: 20px;">
    <h1>
        <i class="fa fa-plus"></i>
        Crear Libro
    </h1>
    <form @submit.prevent="addLibro" class="text-left" style="width:50%;">
        <h5>Titulo del libro:</h5>
        <input type="text" class="form-control" v-model="titulo">
        <br>

        <h5>Autor del libro:</h5>
        <input type="text" class="form-control" v-model="autor">
        <br>

        <h5>Editorial del libro:</h5>
        <input type="text" class="form-control" v-model="editorial">
        <br>

        <h5>Clasificacion del libro:</h5>
        <input type="text" class="form-control" v-model="clasificacion">
        <br>

        <button type="submit" class="btn btn-success">
            <i class="fa fa-save"></i>
            Guardar
        </button>
    </form>
</div>
</template>

<script>
import {
    db
} from "../firebase.js";
import router from '../router';

export default {
    name: "CrearLibro",
    data() {
        return {
            titulo: "",
            autor: "",
            editorial: "",
            clasificacion: "",
        }
    },
    methods: {
        async addLibro() {
            await db.collection("libros").add({
                titulo: this.titulo,
                autor: this.autor,
                editorial: this.editorial,
                clasificacion: this.clasificacion,
            });
            this.titulo = "";
            this.autor = "";
            this.editorial = "";
            this.clasificacion = "";
            router.push("/");
        }
    },
}
</script>
