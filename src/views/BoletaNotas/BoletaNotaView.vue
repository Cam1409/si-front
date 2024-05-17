
import ListaEstudiantesViewVue from '../ListaEstudiantes/ListaEstudiantesView.vue';

import { Axios } from 'axios';
<template>

    <v-container class="boleta">
        <v-container class="cont-all">

            <v-container class="cont1">
                <v-container class="logoUCV"></v-container>
                <v-container class="docente">
                    <v-icon class="icono mdi mdi-account-circle"></v-icon>
                    <p class="d-1" id="txtNombreP"></p>
                </v-container>
            </v-container>
            
            <v-container class="cont2">
                <p class="t-1">Boleta de Notas</p>
            </v-container>

            <v-container class="cont3">
                <p class="t-2">Sistemas Inteligentes A20</p>

                <v-container class="cont-btn">
                    <button class="btn-2" @click="ListaEstudiante()">
                        <v-icon left>mdi mdi-home</v-icon>
                        Regresar
                    </button>
                </v-container>
            </v-container>

            <v-container class=" par4 contenido-desplazable">
                <v-container>
                <v-row>
                    <v-col>
                        <v-card class="cont-card">
                            <v-card-text class="card1">Estudiante: </v-card-text>
                            <v-card-title class="card2"></v-card-title>
                            <v-divider thick></v-divider> 
                            <v-card-text class="card3">NOTAS  |  SISTEMAS INTELIGENTES A20  |  HEDE101</v-card-text>
                                <div>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th rowspan="2">Evaluación</th>
                                            <th colspan="4">Notas</th>
                                            </tr>
                                            <tr>
                                            <th>UNIDAD 1</th>
                                            <th>UNIDAD 2</th>
                                            <th>UNIDAD 3</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in notas" :key="index">
                                            <td>{{ item.evaluacion }}</td>
                                            <td v-for="(nota, index) in item.notas" :key="index" :class="getColorClass(nota)">{{ nota }}</td>
                                            </tr>
                                        </tbody>
                                        </table>
                                </div>

                        </v-card>
                    </v-col>
                </v-row>




            </v-container>

            </v-container>
            

        </v-container>
    
    
    
    </v-container>

        <v-container class="b-raya-blanca"> </v-container>
        <v-container class="b-raya-roja">
        <v-container class="b-pie">      
        <p> © UCV - Docentes 2024 </p>
        </v-container>
        </v-container>

</template>

<script>
    export default {
        name: 'BoletaNotasView',

        data() {
            return {
                username: "",
                mensaje: "",
                typemsg: "error",
                columnSize: 3,
                dialogError: false,
                profesor: {},
                notas: [],
                idCurso: '',
                aula: '',
            };
        },

        created() {
            this.cargarDatos();
            this.capturarAlumnos();
        },

        methods: {
            cargarDatos() {
                this.capturarCodigoD();
            },

            capturarCodigoD() {
                this.codigoD = localStorage.getItem("codigoD");
                if (this.codigoD) {
                    this.$axios.get("/profesor/" + this.codigoD)
                        .then((res) => {
                            this.profesor = res.data;
                            this.llenarDatosD();
                        })
                        .catch((error) => {
                            console.error("Error al cargar los datos del profesor:", error);
                            this.mensaje = "Error al cargar los datos del profesor";
                            this.dialogError = true;
                        });
                } else {
                    console.error("No se encontró el código del profesor en el localStorage");
                    this.mensaje = "No se encontró el código del profesor";
                    this.dialogError = true;
                }
            },

            llenarDatosD() {
                var nombre = document.getElementById('txtNombreP');
                if (nombre && this.profesor.nombresD && this.profesor.apellidosD) {
                    nombre.innerText = this.profesor.nombresD + " " + this.profesor.apellidosD;
                } else {
                    console.error("El elemento con ID 'txtNombreP' no existe o el profesor no tiene nombres/apellidos definidos");
                }
            },

            getColorClass(nota) {
                if (nota >= 14) {
                    return 'green';
                } else if (nota >= 12) {
                    return 'orange';
                } else {
                    return 'red';
                }
            },

            capturarAlumnos(){
                this.idCurso= localStorage.getItem('idCurso');
                this.aula= localStorage.getItem('aula');
                this.$axios.get("/matricula/boleta-nota/"+this.codigoD+"/"+this.idCurso+"/"+this.aula).then((res)=>{this.notas=res.data;console.log(this.notas)}).catch((error)=>e);
            },

            ListaEstudiante(){
                this.$router.push("ListaEstudiantes");
            }
        }
    };
</script>


<style src='../../views/BoletaNotas/boletaNotas.css'></style>