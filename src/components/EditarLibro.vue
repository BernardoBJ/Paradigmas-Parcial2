<template>
<div style="padding-left: 20px;">
    <h1>
        <i class="fa fa-edit"></i>
        Editar Libro
    </h1>
    <form @submit.prevent="updateLibro" class="text-left" style="width:50%;">
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

        <button type="submit" class="btn btn-warning">
            <i class="fa fa-edit"></i>
            Actualizar
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
    name: "TodoCreate",
    data() {
        return {
            titulo: "",
            autor: "",
            editorial: "",
            clasificacion: "",
        }
    },
    created() {
        this.getLibro();
    },
    methods: {
        async getLibro() {
            const id = this.$route.params.id;
            const data = (await db.collection("libros").doc(id).get()).data();

            this.titulo = data.titulo;
            this.autor = data.autor;
            this.editorial = data.editorial;
            this.clasificacion = data.clasificacion;
        },
        async updateLibro() {
            const id = this.$route.params.id;
            await db.collection("libros").doc(id).set({
                titulo: this.titulo,
                autor: this.autor,
                editorial: this.editorial,
                clasificacion: this.clasificacion,
            });
            router.push("/");
        },
    },
}
</script>
