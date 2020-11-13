<template>
<div>
    <h1>
        <i class="fa fa-book"></i>
        Listado de Libros
    </h1>
    <table class="table table-bordered table-sm table-striped">
        <thead>
            <tr class="bg-primary">
                <th>Titulo</th>
                <th>Autor</th>
                <th>Editorial</th>
                <th>Clasificacion</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="libro in libros" :key="libro.id">
                <td>{{ libro.titulo }}</td>
                <td>{{ libro.autor }}</td>
                <td>{{ libro.editorial }}</td>
                <td>{{ libro.clasificacion }}</td>
                <td>
                    <router-link :to="{ name: 'EditarLibro', params: { id: libro.id }}">
                        <a class="btn btn-warning btn-sm">
                            <i class="fa fa-edit"></i>
                        </a>
                    </router-link>
                </td>
                <td>
                    <router-link :to="{ name: 'EliminarLibro', params: { id: libro.id }}">
                        <a class="btn btn-danger btn-sm">
                            <i class="fa fa-trash"></i>
                        </a>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import {
    db
} from "../firebase.js";
export default {
    name: "ListarLibros",
    data() {
        return {
            libros: [],
        };
    },
    created() {
        this.listLibros();
    },
    methods: {
        async listLibros() {
            const data = await db.collection("libros").get();
            this.libros = data.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
        },
    },
};
</script>
