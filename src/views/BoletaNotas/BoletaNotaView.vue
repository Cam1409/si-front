
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

            <v-container class="par4 contenido-desplazable">
  <v-container v-for="(estudiante, index) in estudiantes" :key="index">
    <v-row>
      <v-col>
        <v-card class="cont-card">
          <v-card-text class="card1">Estudiante:</v-card-text>
          <v-card-title class="card2">{{ estudiante.nombresE }} {{ estudiante.apellidosE }}</v-card-title>
          <v-divider thick></v-divider> 
          <v-card-text class="card3">NOTAS | SISTEMAS INTELIGENTES A20 | HEDE101</v-card-text>
          <div>
            <table class="table">
              <thead>
                <tr>
                 
                  <th colspan="3">UNIDAD 1</th>
                  <th colspan="3">UNIDAD 2</th>
                  <th colspan="3">UNIDAD 3</th>
                </tr>
                <tr>
                  
                  <th>EP</th>
                  <th>IF</th>
                  <th>PC</th>
                  <th>EP</th>
                  <th>IF</th>
                  <th>PC</th>
                  <th>EP</th>
                  <th>IF</th>
                  <th>PC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  
                  <td :class="getColorClass(getNota(estudiante.evaluaciones.unidad1, 'EP'))">{{ getNota(estudiante.evaluaciones.unidad1, 'EP') }}</td>
                  <td :class="getColorClass(getNota(estudiante.evaluaciones.unidad1, 'IF'))">{{ getNota(estudiante.evaluaciones.unidad1, 'IF') }}</td>
                  <td :class="getColorClass(getNota(estudiante.evaluaciones.unidad1, 'PC'))">{{ getNota(estudiante.evaluaciones.unidad1, 'PC') }}</td>
                  <td :class="getColorClass(getNota(estudiante.evaluaciones.unidad2, 'EP'))">{{ getNota(estudiante.evaluaciones.unidad2, 'EP') }}</td>
                  <td :class="getColorClass(getNota(estudiante.evaluaciones.unidad2, 'IF'))">{{ getNota(estudiante.evaluaciones.unidad2, 'IF') }}</td>
                  <td :class="getColorClass(getNota(estudiante.evaluaciones.unidad2, 'PC'))">{{ getNota(estudiante.evaluaciones.unidad2, 'PC') }}</td>
                  <td :class="getColorClass(getNota(estudiante.evaluaciones.unidad3, 'EF'))">{{ getNota(estudiante.evaluaciones.unidad3, 'EF') }}</td>
                  <td :class="getColorClass(getNota(estudiante.evaluaciones.unidad3, 'IF'))">{{ getNota(estudiante.evaluaciones.unidad3, 'IF') }}</td>
                  <td :class="getColorClass(getNota(estudiante.evaluaciones.unidad3, 'PC'))">{{ getNota(estudiante.evaluaciones.unidad3, 'PC') }}</td>
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
            estudiantes: [],  
            idCurso: '',
            aula: '',
            codigoD: ''  
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

        getColorClass(nota) {
            if (nota >= 14) {
                return 'green';
            } else if (nota >= 12) {
                return 'orange';
            } else {
                return 'red';
            }
        },

        capturarAlumnos() {
            this.idCurso = localStorage.getItem('idCurso');
            this.aula = localStorage.getItem('aula');
            if (this.codigoD && this.idCurso && this.aula) {
                this.$axios.get(`/matricula/boleta-nota/${this.codigoD}/${this.idCurso}/${this.aula}`)
                    .then((res) => {
                        this.estudiantes = res.data.map(item => {
                            return {
                                nombresE: item.e_nombresE,
                                apellidosE: item.e_apellidosE,
                                evaluaciones: {
                                    unidad1: [
                                        { tipo: 'EP', nota: item.U1EP },
                                        { tipo: 'IF', nota: item.U1IF },
                                        { tipo: 'PC', nota: item.U1PC }
                                    ],
                                    unidad2: [
                                        { tipo: 'EP', nota: item.U2EP },
                                        { tipo: 'IF', nota: item.U2IF },
                                        { tipo: 'PC', nota: item.U2PC }
                                    ],
                                    unidad3: [
                                        { tipo: 'EF', nota: item.U3EF },
                                        { tipo: 'IF', nota: item.U3IF },
                                        { tipo: 'PC', nota: item.U3PC }
                                    ]
                                }
                            };
                        });
                        console.log(this.estudiantes);
                    })
                    .catch((error) => {
                        console.error("Error al cargar los datos de los alumnos:", error);
                        this.mensaje = "Error al cargar los datos de los alumnos";
                        this.dialogError = true;
                    });
            } else {
                console.error("Faltan datos necesarios para capturar alumnos: códigoD, idCurso o aula no están definidos");
            }
        },

        getNota(evaluaciones, tipo) {
            const evaluacion = evaluaciones.find(e => e.tipo === tipo);
            return evaluacion ? evaluacion.nota : '';
        },

        ListaEstudiante() {
            this.$router.push("ListaEstudiantes");
        }
    }
};
</script>




<style src='../../views/BoletaNotas/boletaNotas.css'></style>