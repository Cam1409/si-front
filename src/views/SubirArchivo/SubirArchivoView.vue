<template>
    <v-container class="generalsa">

        <v-container class="contenedor">

            <v-container class="parte-1">

                <v-container class="logosub"></v-container>

                <v-container class="docente">
                    <v-icon class="icono mdi mdi-account-circle"></v-icon>
                    <!-- AQUÍ SE COLOCA EL NOMBRE DEL DOCENTE -->
                    <p class="d-1" id="nomb_Profe"></p>
                </v-container>

            </v-container>

            <v-container class="parte-2">
                <p class="t-1">Subir Archivo</p>
            </v-container>

            <v-container class="parte-3">
                <p class="t-2">Estusiante: </p>

                <v-container class="cont-btn">
                    <button class="btn-1" @click="ExamenNotas()">
                        <v-icon left>mdi mdi-text-box-multiple-outline</v-icon>
                        Revisar</button>
                    <button class="btn-2" @click="ListaEstudiantes()">
                        <v-icon left>mdi mdi-home</v-icon>
                        Regresar
                    </button>
                </v-container>

            </v-container>

            <v-container class="parte-4 contenido-desplazable">
                
                <v-container class="imagen-1">
                    <p class="t-3">Archivo Original</p>
                    <v-container class="cont-img contenido-desplazable">

                        <input type="file" @change="handleFileChange" accept=".pdf" />
                        <VuePdf v-if="pdfSrc" :src="pdfSrc" />

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
import { ref } from 'vue';
import { createLoadingTask } from 'vue3-pdfjs/esm';
import { VuePdf } from 'vue3-pdfjs/esm';
export default {
    name: 'SubirArchivoView',

    data() {
        return {
            profesor: "",
            pdfSrc: null,
            estudiante: "",
        };
    },
    components:{
        VuePdf
    },
    created(){

    },
    mounted(){
        this.capturarDatos();
    },
    methods:{
        capturarDatos() {
            this.profesor = localStorage.getItem("nombreDocente");
            var nombreP = document.getElementById("nomb_Profe");
            if (this.profesor !== null && this.profesor !== undefined) {
                if (nombreP) {
                nombreP.innerText = this.profesor;
                } else {
                console.log("Elemento con id 'nomb_Profesor' no encontrado.");
                }
            } else {
                console.log("El nombre del profesor es nulo o no está definido.");
            }
        },
        ListaEstudiantes() {
            this.$router.push("/ListaEstudiantes");
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file && file.type === 'application/pdf') {
                this.loadPDF(file);
            } else {
                alert('Por favor, seleccione un archivo PDF válido.');
            }
        },
        loadPDF(file) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                this.pdfSrc = fileReader.result;
            };
            fileReader.readAsDataURL(file);
        },
        ExamenNotas(){
            this.$router.push("/ExamenDigitalizadoNotas");
        },
        computed:{

        },
    },
};
</script>

<style src='../../views/SubirArchivo/subirArchivo.css'></style>