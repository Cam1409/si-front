<template>
    <v-container class="generalsa">
      <v-container class="contenedor">
        <v-container class="parte-1">
          <v-container class="logosub"></v-container>
  
          <v-container class="docente">
            <v-icon class="icono mdi mdi-account-circle"></v-icon>
            <p class="d-1" id="nomb_Profesor"></p>
          </v-container>
        </v-container>
  
        <v-container class="parte-2">
          <p class="t-1">Subir Archivo</p>
        </v-container>
  
        <v-container class="parte-3">
          <p class="t-2" id="txtEst"></p>
  
          <v-container class="cont-btn">
            <button class="btn-1">
              <v-icon left>mdi mdi-text-box-multiple-outline</v-icon>
              Revisar
            </button>
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
              <div v-if="pdfSrc">
                <VuePdf v-for="page in pages" :src="pdfSrc" :page="page" :key="page" />
              </div>
            </v-container>
          </v-container>
  
          <v-container class="imagen-1">
            <p class="t-3">Archivo digitalizado</p>
            <v-container class="cont-img"></v-container>
          </v-container>
        </v-container>
      </v-container>
    </v-container>
  
    <v-container class="raya-blanca"></v-container>
  
    <v-container class="raya-roja">
      <v-container class="pie">
        <p>© UCV - Docentes 2024</p>
      </v-container>
    </v-container>
  </template>
  
  <script>
  import { createLoadingTask } from 'vue3-pdfjs/esm';
  import { VuePdf } from 'vue3-pdfjs/esm';

    export default {
    components: {
        VuePdf,
    },

    data() {
        return {
            profesor: '',
            pdfSrc: null,
            estudiante: '',
            pages: [],
            aula: '',
            curso: '',
        };
    },
    created() {
      this.loadFileFromRoute();
    },
    mounted(){
      this.capturarDatos();
    },
    methods: {
        capturarDatos() {
          this.profesor = localStorage.getItem("nombreDocente");
          var nombreP = document.getElementById("nomb_Profesor");
          this.idCurso = localStorage.getItem("idCurso");
          this.estudiante = localStorage.getItem("nombreEst");
          var nombreE = document.getElementById("txtEst");
          this.curso = localStorage.getItem("nombreCurso");
          this.aula = localStorage.getItem("aula");
          if (this.profesor !== null && this.profesor !== undefined && this.estudiante !== null) {
            if (nombreP && nombreE) {
              nombreP.innerText = this.profesor;
              nombreE.innerText = this.estudiante + " | " + this.aula + " | " + this.curso;
            } else {
              console.log("Elemento con id 'nomb_Profesor' no encontrado.");
            }
          } else {
            console.log("El nombre del profesor es nulo o no está definido.");
          }
        },

        ListaEstudiantes() {
            this.$router.push('/ListaEstudiantes');
            localStorage.removeItem('fileToUpload');
        },

        async loadPDF(pdfData) {
            const loadingTask = createLoadingTask({ data: atob(pdfData.split(',')[1]) });
            const pdf = await loadingTask.promise;
            this.pdfSrc = pdfData;
            this.pages = Array.from({ length: pdf.numPages }, (_, i) => i + 1);
        },

        // Captura PDF y llama a metodo de lectura
        loadFileFromRoute() {
            const fileData = localStorage.getItem('fileToUpload');
            if (fileData) {
                this.loadPDF(fileData);
            } else {
                console.error('No se encontró el archivo PDF en localStorage');
            }
        },
    },
};

  </script>
  
  <style src="../../views/SubirArchivo/subirArchivo.css"></style>
  