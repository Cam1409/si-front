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
                <!-- AQUÍ SE COLOCA EL NOMBRE DE LA ASIGNATURA -->
                <p class="t-1">Examen de Sistemas Inteligentes</p>
            </v-container>

            <v-container class="parte-3">
                <!-- AQUÍ SE COLOCA LA SECCIÓN Y EL NOMBRE DEL ESTUDIANTE -->
                <p class="t-2">A1T1 - Alcedo Javier, Carlos Jose</p>

                <v-container class="cont-btn">
                    <button class="btn-1">
                        <v-icon left>mdi mdi-text-box-multiple-outline</v-icon>
                        Cargar Nota</button>
                    <button class="btn-2">
                        <v-icon left>mdi mdi-home</v-icon>
                        Regresar
                    </button>
                </v-container>

            </v-container>

            <v-container class="parte-4 contenido-desplazable">
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
                <p class="t-1">Subir Archivo</p>
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
        name: 'ExamenDigitalizadoNotasView',
    });
</script>

<style src='../../views/ExamenDigitalizadoNotas/examenDigitalizadoNotas.css'></style>