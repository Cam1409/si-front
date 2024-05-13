<template>
    <v-container class="m-general">
    
        <v-container class="contenedor">
            <v-container class="cont-infoper">
                <v-container class="cont-logo">
                <v-container class="logo"></v-container>
                </v-container>
                <v-icon class="mdi mdi-account-circle icono1"></v-icon>
                <p class="usuario" id="txtNombreP"></p>
                <v-container class="cont-ce">
                    <btn class="btn-cerrar">
                        <v-icon left>mdi mdi-logout</v-icon>
                        Cerrar Sesión
                    </btn>
                </v-container>
            </v-container>

            <v-container class="cont-asignatura">
                <v-container class="cont-titulo">
                    <p class="t-1">Secciones</p>
                </v-container>
                <v-container class="cont-subtitulo">
                    <v-container class="A">
                        <p class="t-2" id="txtCurso"></p>
                    </v-container>
                    <v-container class="B">
                        <btn class="btn-regresar">
                            <v-icon left>mdi mdi-home</v-icon>
                            Regresar
                        </btn>
                    </v-container> 
                </v-container>
                <v-container class="contenido-desplazable all">
                    <v-row>
                        <v-col v-for="(aula, index) in aulas" :key="index" cols="2">
                            <v-card class="cursor-pointer lista" @click="irListaEstudiante(aula.aula)">
                            <v-card-text class="card1">Pabellón {{aula.idPabellon}}</v-card-text>
                            <v-card-title class="card2">{{aula.aula}}</v-card-title>
                            <v-card-text class="card3">Abierto | Modalidad: {{aula.descripcionM}}</v-card-text>
                            <v-divider thick></v-divider> 
                            <v-card-text class="card4">
                                <v-card-text class="card5">
                                    <v-container class="textlista">
                                        Turno {{aula.descripcionTurno}} | {{ profesor.nombresD + " "+ profesor.apellidosD }}
                                    </v-container>
                                    <v-container class="btnlista">
                                        <btn class="btn-entrar">
                                            <v-icon left>mdi-account-arrow-right</v-icon>Ver
                                        </btn>
                                    </v-container>
                                </v-card-text>
                            </v-card-text>
                            </v-card>

                        </v-col>
                    </v-row>
                </v-container>
            </v-container>
        </v-container>
    
    
        </v-container>
        <v-container class="m-raya-blanca"> </v-container>
        <v-container class="m-raya-roja">
        <v-container class="pie">      
        <p> © UCV - Docentes 2024 </p>
        </v-container>
        </v-container>
    </template>
    <script>
    export default {
        name: 'MenuSeccionView',

        data(){
            return{
            codigoD:"",
            idCurso:"",
            aulas:[],
            curso:"",
            profesor:"",
            }
        },
        created(){
            this.cargarDatos();
            this.capturarAulas();
        },
        methods:{
            cargarDatos(){
            this.capturarDatos();
            },
            capturarDatos(){
                this.codigoD = localStorage.getItem("codigoD");
                this.idCurso = localStorage.getItem("idCurso");

                // Capturando datos del docente
                this.$axios.get("/profesor/"+this.codigoD).then((res)=>{this.profesor=res.data;this.llenarDatosD()}).catch((error)=>e);
                // Capturando datos de la asignatura
                this.$axios.get("/curso/by-id/"+this.idCurso).then((res)=>{this.curso=res.data;this.llenarDatosA()}).catch((error)=>e);
            },
            llenarDatosD(){
                //Cargando datos de usuario
                var nombre = document.getElementById('txtNombreP');
                if (nombre) {
                    nombre.innerText = this.profesor.nombresD +" "+this.profesor.apellidosD;
                }
            },
            llenarDatosA(){
                var asig = document.getElementById('txtCurso');
                if(asig){
                    asig.innerText = this.curso.idCurso + " | " + this.curso.NombreCurso + " | Abierto";
                }
            },
            irListaEstudiante(aulaA){
                this.$router.push("/ListaEstudiantes");
                localStorage.setItem('aula',aulaA);
            },
            capturarAulas(){
                this.$axios.get("/detallematricula/secciones/"+this.idCurso+"/"+this.codigoD).then((res)=>{this.aulas=res.data;console.log(this.aulas)}).catch((error)=>e);
            },
        }
    };
    
    
    </script>
    <style src='../../views/MenuSecciones/menuSecciones.css'></style>
