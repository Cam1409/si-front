<template>
    <v-container class="general">

        <v-container class="contenedor">

            <v-container class="parte-1">

                <v-container class="logo"></v-container>

                <v-container class="docente">
                    <v-icon class="icono mdi mdi-account-circle"></v-icon>
                    <!-- AQUÍ SE COLOCA EL NOMBRE DEL DOCENTE -->
                    <p class="d-1">Freddy Pachas</p>
                </v-container>

            </v-container>

            <v-container class="parte-2">
                <p class="t-1">Subir Archivo</p>
            </v-container>

            <v-container class="parte-3">
                <p class="t-2">Visualización Individual</p>

                <v-container class="cont-btn">
                    <button class="btn-1">
                        <v-icon left>mdi mdi-text-box-multiple-outline</v-icon>
                        Revisar</button>
                    <button class="btn-2">
                        <v-icon left>mdi mdi-home</v-icon>
                        Regresar
                    </button>
                </v-container>

            </v-container>

            <v-container class="parte-4 contenido-desplazable">
                
                <v-container class="imagen-1">
                    <p class="t-3">Archivo Original</p>
                    <v-container class="cont-img">
                        <!-- AQUÍ SE COLOCA LA IMAGEN -->
                    </v-container>
                </v-container>
                        <!-- AQUÍ SE COLOCA LA IMAGEN -->
                <v-container class="imagen-1">
                    <p class="t-3">Archivo digitalizado</p>
                    <v-container class="cont-img">

                    </v-container>
                </v-container>

            </v-container>

        </v-container>

    </v-container>

    <v-container class="raya-blanca"> </v-container>

    <v-container class="raya-roja">

    <v-container class="pie">      
        <p> © UCV - Docentes 2024 </p>
    </v-container>

    </v-container>

</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'SubirArchivoView',
    });
</script>

<style src='../../views/SubirArchivo/subirArchivo.css'></style>