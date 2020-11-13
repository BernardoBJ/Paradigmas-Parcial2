<template>
<div style="padding-left: 20px;">
    <h1>
        <i class="fa fa-edit"></i>
        Eliminar Libro
    </h1>
    <form @submit.prevent="deleteLibro" class="text-left" style="width:50%;">
        <h5><b>Titulo del libro:</b> {{ titulo }}</h5>
        <h5><b>Autor del libro:</b> {{ autor }}</h5>
        <h5><b>Editorial del libro:</b> {{ editorial }}</h5>
        <h5><b>Clasificacion del libro:</b> {{ clasificacion }}</h5>

        <button type="submit" class="btn btn-danger">
            <i class="fa fa-trash"></i>
            Eliminar
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
        async deleteLibro() {
            const id = this.$route.params.id;
            await db.collection("libros").doc(id).delete();
            router.push("/");
        },
    },
}
</script>
