<template>
    <v-container class="generalle">
      <v-container class="contenedorle">
        <v-container class="parte-1">
          <v-container class="logole"></v-container>
  
          <v-container class="docente">
            <v-icon class="icono mdi mdi-account-circle"></v-icon>
            <!-- AQUÍ SE COLOCA EL NOMBRE DEL DOCENTE -->
            <p class="d-1" id="nomb_Profesor"></p>
          </v-container>
        </v-container>
  
        <v-container class="parte-2">
          <p class="t-1">Lista de Estudiantes</p>
        </v-container>
  
        <v-container class="parte-3">
          <!-- AQUÍ SE COLOCA LA ASIGNATURA Y LA SECCIÓN -->
          <p class="t-2" id="txtCurso"></p>
  
          <v-container class="cont-btn">
            <button class="btn-1" @click="BoletaNotas()">
              <v-icon left>mdi mdi-text-box-multiple-outline</v-icon>
              Boleta de Notas
            </button>
            <button class="btn-1" @click="openMultipleFileInput">
            <v-icon left>mdi mdi-text-box-multiple-outline</v-icon>
            Cargar Archivos
          </button>
          <input
            type="file"
            ref="multipleFileInput"
            @change="handleMultipleFileChange"
            accept=".pdf"
            multiple
            style="display: none;" />
            <button class="btn-2" @click="Regresar()">
              <v-icon left>mdi mdi-home</v-icon>
              Regresar
            </button>
          </v-container>
        </v-container>
  
        <v-container class="parte-4 contenido-desplazable">
          <v-container class="tabla">
            <v-container class="parte-5">
              <v-container class="p-1">
                <p class="t-2">Buscar Estudiante</p>
  
                <v-container class="busc">
                  <v-card flat>
                    <template v-slot:text>
                      <v-text-field
                        v-model="search"
                        label="Buscar"
                        prepend-inner-icon="mdi-magnify"
                        variant="outlined"
                        hide-details
                        single-line></v-text-field>
                    </template>
                  </v-card>
                </v-container>
              </v-container>
  
              <v-container class="p-2">
                <v-container class="p-3">
                  <p class="t-2">Estado de Examen</p>
                  <select
                    ref="selectCalif"
                    v-model="selectedOptionCalif"
                    class="selec-1 seleccalif">
                    <option :value="null" disabled selected hidden></option>
                    <option value="calificado">Calificado</option>
                    <option value="nocalificado">No Calificado</option>
                  </select>
                </v-container>
  
                <v-container class="p-4">
                  <button class="btn-3" @click="selectFirstOption">
                    <v-icon left>mdi mdi-broom</v-icon>
                  </button>
                </v-container>
              </v-container>
  
              <v-container class="p-5">
                <p class="t-2">Unidad</p>
                <select
                  v-model="selectedOptionUnidad"
                  class="selec-1"
                  @change="handleSelectChange">
                  <option value="U1">1</option>
                  <option value="U2">2</option>
                  <option value="U3">3</option>
                </select>
              </v-container>
            </v-container>
  
            <v-table class="tabla-estudiantes">
              <thead>
                <tr>
                  <th>N°</th>
                  <th>Código E</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Condición Nota</th>
                  <th>Nota</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <template
                  v-for="(item, index) in filteredStudents"
                  :key="item.codigoE">
                  <tr>
                    <td class="c1">{{ index + 1 }}</td>
                    <td class="c2">{{ item.codigoE }}</td>
                    <td class="c3">{{ item.nombresE }}</td>
                    <td class="c3">{{ item.apellidosE }}</td>
                    <td class="c4">{{ item.condicionNota }}</td>
                    <td class="c5">{{ item.nota }}</td>
                    <td class="c6">
                      <v-icon class="mdi mdi-list-status"></v-icon>
                    </td>
                    <td class="c6">
                      <v-icon class="mdi mdi-text-box-plus-outline" @click="openFileInput(index)"></v-icon>
                      <input type="file" :ref="'fileInput' + index" @change="handleFileChange($event, index, (item.nombresE + ' ' + item.apellidosE))" accept=".pdf" style="display: none;" />
                    </td>
                    <td class="c6">
                      <v-icon class="mdi mdi-camera-enhance"></v-icon>
                    </td>
                  </tr>
                </template>
              </tbody>
            </v-table>
          </v-container>
        </v-container>
      </v-container>
    </v-container>
  
    <v-container class="raya-blanca"> </v-container>
  
    <v-container class="raya-roja">
      <v-container class="pie">
        <p>© UCV - Docentes 2024</p>
      </v-container>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search: "",
        codigoE: "",
        selectedOptionCalif: null,
        selectedOptionUnidad: null,
        nombreE: "",
        apellidosE: "",
        profesor: "",
        idUnidad: "U1",
        idCurso: "",
        estudiantes: [],
      };
    },
    created() {
      this.capturarLista();
    },
    mounted() {
      this.capturarDatos();
      this.selectedOptionUnidad = "U1";
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
          .catch((error) => e);
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
            console.log(this.estudiantes);
          })
          .catch((error) => {
            console.error(error);
          });
      },
      llenarDatosCurso() {
        var asig = document.getElementById("txtCurso");
        if (asig) {
          asig.innerText = this.curso.NombreCurso + " " + this.aula;
          localStorage.setItem('nombreCurso',this.curso.NombreCurso);
        }
      },
      capturarDatos() {
        this.profesor = localStorage.getItem("nombreDocente");
        var nombreP = document.getElementById("nomb_Profesor");
        this.idCurso = localStorage.getItem("idCurso");
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
      
      handleSelectChange(event) {
        const selectedValue = event.target.value;
        console.log("Selected value:", selectedValue);
        this.idUnidad = selectedValue;
        console.log(this.idUnidad);
        this.capturarLista();
      },

      BoletaNotas() {
        this.$router.push("/boletaNotas");
      },

      Regresar() {
        this.$router.push("/menuSecciones");
      },

      openFileInput(index) {
        this.$refs['fileInput' + index][0].click();
      },

      handleFileChange(event, index, nombreEstudiante) {
        localStorage.setItem('nombreEst',nombreEstudiante);
        console.log(nombreEstudiante);
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
          // Guardar el archivo en localStorage
          const reader = new FileReader();
          reader.onload = () => {
            localStorage.setItem('fileToUpload', reader.result);
            // Redirigir a la página "Subir Archivo"
            this.$router.push({ path: '/SubirArchivo' });
          };
          reader.readAsDataURL(file);
        } else {
          alert('Por favor, seleccione un archivo PDF válido.');
        }
      },
      openMultipleFileInput() {
      this.$refs.multipleFileInput.click();
    },

    handleMultipleFileChange(event) {
      const files = event.target.files;
      const validFiles = Array.from(files).filter(file => file.type === 'application/pdf');

      if (validFiles.length !== files.length) {
        alert('Algunos archivos no son PDF y serán ignorados.');
      }

      if (validFiles.length > 0) {
        const fileReaders = [];
        validFiles.forEach((file, index) => {
          const reader = new FileReader();
          reader.onload = () => {
            localStorage.setItem(`fileToUpload${index}`, reader.result);
            if (index === validFiles.length - 1) {
              this.$router.push({ path: '/multiArchivos' });
            }
          };
          reader.readAsDataURL(file);
          fileReaders.push(reader);
        });
      }
    },
  },

    computed: {
      filteredStudents() {
        let filteredList = this.estudiantes;
        // Filtrar por término de búsqueda
        if (this.search) {
          const searchTerm = this.search.trim().toLowerCase();
          filteredList = filteredList.filter(
            (estudiante) =>
              estudiante.nombresE.toLowerCase().includes(searchTerm) ||
              estudiante.apellidosE.toLowerCase().includes(searchTerm)
          );
        }
        // Filtrar por condición de calificación
        if (this.selectedOptionCalif === "calificado") {
          console.log("Filtrando por calificado");
          filteredList = filteredList.filter(
            (estudiante) => estudiante.condicionNota === "Calificado"
          );
        } else if (this.selectedOptionCalif === "nocalificado") {
          console.log("Filtrando por no calificado");
          filteredList = filteredList.filter(
            (estudiante) => estudiante.condicionNota !== "Calificado"
          );
        } else {
          console.log("Mostrando todos los estudiantes");
        }
        return filteredList;
      },
    },
  };
  </script>
  
  <style src="../../views/ListaEstudiantes/listaEstudiantes.css"></style>