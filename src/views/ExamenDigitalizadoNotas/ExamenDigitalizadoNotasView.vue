<template>

    <v-container class="generaldig">

        <v-container class="contenedor">

            <v-container class="parte-1">

                <v-container class="logodig"></v-container>

                <v-container class="docente">
                    <v-icon class="icono mdi mdi-account-circle"></v-icon>
                    <!-- AQUÍ SE COLOCA EL NOMBRE DEL DOCENTE -->
                    <p class="d-1" id="nomb_Profe"></p>
                </v-container>

            </v-container>

            <v-container class="parte-2">
                <!-- AQUÍ SE COLOCA EL NOMBRE DE LA ASIGNATURA -->
                <p class="t-1" id="txtCurso"></p>
            </v-container>

            <v-container class="parte-3">
                <!-- AQUÍ SE COLOCA LA SECCIÓN Y EL NOMBRE DEL ESTUDIANTE -->
                <p class="t-2" id="txtAlumno"></p>

                <v-container class="cont-btn">
                    <v-container class="notafin" :class="notafinClass">
                        <p>{{ totalNota }}/{{ totalNotaMax }}</p>
                    </v-container>
                    <button class="btn-1">
                        <v-icon left>mdi mdi-text-box-multiple-outline</v-icon>
                        Cargar Nota</button>
                    <button class="btn-2" @click="SubirArchivo()">
                        <v-icon left>mdi mdi-home</v-icon>
                        Regresar
                    </button>
                </v-container>

            </v-container>

            <v-container class="parte-4 contenido-desplazable">
                <v-row>
                    <v-col cols="2" v-for="(pregunta, index) in preguntas" :key="index">
                        <v-card class="lista">
                        <v-container class="cont_a">
                            <v-container class="cont_b">
                            <v-card-text class="card1">Pregunta {{ index + 1 }}</v-card-text>
                            </v-container>
                            <v-container class="cont_c" :class="preguntaClass(pregunta)">
                            <p class="text_nota">{{ pregunta.nota }}/{{ pregunta.notaMax }}</p>
                            </v-container>
                        </v-container>
                        <v-card-text class="card2">{{ pregunta.textoPregunta }}</v-card-text>
                        <v-card-text class="card3">{{ pregunta.textoRespuesta }}</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
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

export default {
    name: 'ExamenDigitalizadoNotasView',

    data() {
        return {
            profesor: "",
            idCurso: "",
            curso: '',
            aula: '',
            estudiante: '',
            preguntas: [
                {
                nota: 2,
                notaMax: 4,
                textoPregunta: "Describa el proceso de fotosíntesis.",
                textoRespuesta: "La fotosíntesis es un proceso utilizado por las plantas y otros organismos para convertir la energía de la luz en energía química."
                },
                {
                nota: 1,
                notaMax: 3,
                textoPregunta: "Explique la teoría de la evolución de Darwin.",
                textoRespuesta: "La teoría de la evolución de Darwin postula que las especies cambian con el tiempo a través de la selección natural."
                },
                {
                nota: 3,
                notaMax: 5,
                textoPregunta: "¿Qué es el teorema de Pitágoras?",
                textoRespuesta: "El teorema de Pitágoras establece que en un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos."
                },
                {
                nota: 3,
                notaMax: 4,
                textoPregunta: "Defina el término 'ecosistema'.",
                textoRespuesta: "Un ecosistema es una comunidad de seres vivos que interactúan entre sí y con su entorno físico."
                },
                {
                nota: 3,
                notaMax: 4,
                textoPregunta: "¿Cuál es la capital de Francia?",
                textoRespuesta: "La capital de Francia es París."
                }
            ],
        };
    },
    components:{

    },
    created(){

    },
    computed: {
        totalNota() {
        return this.preguntas.reduce((total, pregunta) => total + pregunta.nota, 0);
        },
        totalNotaMax() {
        return this.preguntas.reduce((total, pregunta) => total + pregunta.notaMax, 0);
        },
        notafinClass() {
        const aprobatoria = this.totalNota / this.totalNotaMax >= 0.6;
        return aprobatoria ? 'notafin-aprobatoria' : 'notafin-desaprobatoria';
        }
    },
    mounted(){
        this.capturarDatos();
    },
    methods:{
        capturarDatos() {
            this.profesor = localStorage.getItem("nombreDocente");
            var nombreP = document.getElementById("nomb_Profe");
            this.idCurso = localStorage.getItem("idCurso");
            var cursoE = document.getElementById("txtCurso");
            this.curso = localStorage.getItem("nombreCurso");
            this.aula = localStorage.getItem("aula");
            this.estudiante = localStorage.getItem("nombreEst");
            var estcod = document.getElementById("txtAlumno");
            if (this.profesor !== null && this.profesor !== undefined) {
                if (nombreP) {
                    nombreP.innerText = this.profesor;
                    cursoE.innerText = "EXAMEN DE " + this.curso;
                    estcod.innerText = this.estudiante + " | " + this.aula;
                } else {
                console.log("Elemento con id 'nomb_Profesor' no encontrado.");
                }
            } else {
                console.log("El nombre del profesor es nulo o no está definido.");
            }
        },
        SubirArchivo() {
            this.$router.push("/SubirArchivo");
        },
        llenarDatosCurso() {
            var asig = document.getElementById("txtCurso");
            if (asig) {
            asig.innerText = "EXAMEN DE " + this.curso.NombreCurso;
            }
        },
        preguntaClass(pregunta) {
            const aprobatoria = pregunta.nota / pregunta.notaMax >= 0.6;
            return aprobatoria ? 'pregunta-aprobatoria' : 'pregunta-desaprobatoria';
        },
        
    },
};

</script>

<style src='../../views/ExamenDigitalizadoNotas/examenDigitalizadoNotas.css'></style>