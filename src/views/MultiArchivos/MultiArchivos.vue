<template>
  <v-container class="multi">
    <v-container class="cont-archi">
      <v-container v-container class="cont1">
        <v-container class="logoUCV"></v-container>
        <v-container class="docente">
          <v-icon class="icono mdi mdi-account-circle"></v-icon>
          <p class="d-1" id="txtNombreP"></p>
        </v-container>
      </v-container>

      <v-container class="cont2">
        <p class="t-1">Revisión de Archivos Multiples</p>
      </v-container>

      <v-container class="cont3">
        <p class="t-2" id="txtCurso"></p>

        <v-container class="cont-btn">
          <button class="btn-2" @click="Regresar()">
            <v-icon left>mdi mdi-home</v-icon>
            Regresar
          </button>
        </v-container>
      </v-container>

      <v-container class="cont-pdf">
        <v-container class="cajapdf">
          <div id="pdfContainer">
            <div class="pdf-item" v-for="(pdf, index) in pdfs" :key="index">
              <!-- Aquí va tu lógica para renderizar cada PDF -->
              <embed :src="pdf.src" type="application/pdf" width="100%" height="200px" />
            </div>
          </div>
        </v-container>
      </v-container>
      
    </v-container>
  </v-container>
  <v-container class="multi-raya-blanca"> </v-container>
  <v-container class="multi-raya-roja">
    <v-container class="mu-pie">
      <p>© UCV - Docentes 2024</p>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      profesor: "",
      idUnidad: "U1",
      curso: {},
      estudiantes: [],
      codigoD: "",
      idCurso: "",
      aula: "",
      archivos: [],
      pdfSrc: null,
      pages: [],
      pdfs: [],
    };
  },
  created() {
    this.capturarLista();
    
  },
  mounted() {
    this.obtenerbase64();
    this.capturarDatos();
    this.selectFirstOption();
  },
  methods: {
    selectFirstOption() {
      if (this.$refs.selectCalif && this.$refs.selectCalif.options.length > 0) {
        this.selectedOptionCalif = this.$refs.selectCalif.options[0].value;
      }
    },
    capturarLista() {
      this.codigoD = localStorage.getItem("codigoD");
      this.idCurso = localStorage.getItem("idCurso");
      this.aula = localStorage.getItem("aula");

      this.$axios
        .get("/curso/by-id/" + this.idCurso)
        .then((res) => {
          this.curso = res.data;
          this.llenarDatosCurso();
        })
        .catch((error) => {
          console.error(error);
        });

      this.$axios
        .get(
          "/matricula/condicion-nota/" +
            this.codigoD +
            "/" +
            this.idCurso +
            "/" +
            this.aula +
            "/" +
            this.idUnidad
        )
        .then((res) => {
          this.estudiantes = res.data;
          console.log("Estudiantes:", this.estudiantes); // Impresión para verificar que se han obtenido los estudiantes
        })
        .catch((error) => {
          console.error(error);
        });
    },
    llenarDatosCurso() {
      var asig = document.getElementById("txtCurso");
      if (asig) {
        asig.innerText = this.curso.NombreCurso + " " + this.aula;
        localStorage.setItem("nombreCurso", this.curso.NombreCurso);
      } else {
        console.log("Elemento con id 'txtCurso' no encontrado.");
      }
    },
    capturarDatos() {
      this.profesor = localStorage.getItem("nombreDocente");
      var nombreP = document.getElementById("txtNombreP");
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
    Regresar() {
      this.$router.push("/ListaEstudiantes");
    },
    obtenerbase64() {
      const pdfContainer = document.getElementById("pdfContainer");
      // Recuperar la cadena JSON del localStorage
      const serializedFiles = JSON.parse(localStorage.getItem("pdfFiles"));

      // Verificar si se han almacenado archivos
      if (serializedFiles) {
        // Iterar sobre los archivos y acceder a su contenido base64
        serializedFiles.forEach((file, index) => {
          const embedElement = document.createElement("embed");

          // Establecer los atributos del elemento <embed>
          embedElement.setAttribute(
            "src",
            `data:${file.type};base64,${file.fileToUpload}`
          );
          embedElement.setAttribute("width", "100%");
          embedElement.setAttribute("height", "500px"); // Puedes ajustar la altura según sea necesario

          // Agregar el elemento <embed> al contenedor
          pdfContainer.appendChild(embedElement);
          console.log(`Archivo ${index + 1}:`);
          console.log("Nombre:", file.name);
          console.log("Tipo:", file.type);
          console.log("Tamaño:", file.size);
          console.log("Contenido base64:", file.fileToUpload);
          console.log("--------------------------");
        });
      } else {
        console.log("No se encontraron archivos en el localStorage.");
      }
    },
  },
};
</script>

<style src="../../views/MultiArchivos/MultiArchivos.css"></style>
