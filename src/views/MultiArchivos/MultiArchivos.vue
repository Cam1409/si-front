<template>
    <v-container class="multi">

        <v-container class="cont-archi">
            <v-container class="cont1">
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

            <div>
                <h2>Archivos Subidos</h2>
                <ul>
                <li v-for="(archivo, index) in archivos" :key="index">
                    <a :href="archivo.url" target="_blank">{{ archivo.nombre }}</a>
                </li>
                </ul>
            </div>

            

        </v-container>
    
    
    
        </v-container>
        <v-container class="multi-raya-blanca"> </v-container>
        <v-container class="multi-raya-roja">
        <v-container class="mu-pie">      
        <p> © UCV - Docentes 2024 </p>
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
        archivos: []
        };
    },
    created() {
        this.capturarLista();
        this.obtenerArchivosSubidos();
    },
    mounted() {
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
            localStorage.setItem('nombreCurso', this.curso.NombreCurso);
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
        obtenerArchivosSubidos() {
        const keys = Object.keys(localStorage);
        const archivosKeys = keys.filter(key => key.startsWith('fileToUpload'));
        const nombreEst = localStorage.getItem('nombreEst');

        archivosKeys.forEach((key, index) => {
            const nombre = `Archivo ${index + 1} para ${nombreEst}`;
            const url = localStorage.getItem(key);
            this.archivos.push({ nombre, url });
        });
        },
    }
    };
</script>


<style src='../../views/MultiArchivos/MultiArchivos.css'></style>