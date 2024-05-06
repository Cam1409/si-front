<template>
    <v-container class="m-general">
    
        <v-container class="contenedor">
            <v-container class="cont-infoper">
                <v-container class="cont-logo">
                <v-container class="logo"></v-container>
                </v-container>
                <v-icon class="mdi mdi-account-circle icono1"></v-icon>
                <p class="usuario">Freddy Pachas</p>
                <v-btn variant="tonal" class="btn-cerrar">
                    Cerrar Sesión
                </v-btn>  
            </v-container>

            <v-container class="cont-asignatura">
                <v-container class="cont-titulo">
                <h1>Secciones</h1>
                </v-container>
                <v-container class="cont-subtitulo">
                <h1>Sistemas Inteligentes</h1>
                <v-btn variant="tonal" class="btn-regresar">
                    Regresar
                </v-btn>  
                </v-container>
                <v-container class="contenido-desplazable all">
                    <v-container class="fila1">
                        <v-container class="asig1">
                            <v-container class="cont-icon">
                                <v-btn class="icon" icon="mdi mdi-book-open" variant="text">
                                </v-btn>
                            </v-container>
                            <v-container class="name">                
                            <p>A1T1</p>
                            </v-container>
                        </v-container>
                        <v-container class="asig2">
                            <v-container class="cont-icon">
                                <v-btn class="icon" icon="mdi mdi-book-open" variant="text">
                                </v-btn>
                            </v-container>
                            <v-container class="name">                
                            <p>A1P1</p>
                            </v-container>
                        </v-container>        
                    </v-container>
                    <v-container class="fila2">
                        <v-container class="asig3">
                            <v-container class="cont-icon">
                                <v-btn class="icon" icon="mdi mdi-book-open" variant="text">
                                </v-btn>
                            </v-container>
                            <v-container class="name">                
                            <p>A2T2</p>
                            </v-container>
                        </v-container>
                        <v-container class="asig4">
                            <v-container class="cont-icon">
                                <v-btn class="icon" icon="mdi mdi-book-open" variant="text">
                                </v-btn>
                            </v-container>
                            <v-container class="name">                
                            <p>A2T2</p>
                            </v-container>
                        </v-container>
                    </v-container>
                    <v-container class="fila3">
                        <v-container class="asig5">
                            <v-container class="cont-icon">
                                <v-btn class="icon" icon="mdi mdi-book-open" variant="text">
                                </v-btn>
                            </v-container>
                            <v-container class="name">                
                            <p>A3T3</p>
                            </v-container>
                        </v-container>
                        <v-container class="asig6">
                            <v-container class="cont-icon">
                                <v-btn class="icon" icon="mdi mdi-book-open" variant="text">
                                </v-btn>
                            </v-container>
                            <v-container class="name">                
                            <p>A3P3</p>
                            </v-container>
                        </v-container>
                    </v-container>
                    <v-container class="fila4">
                        <v-container class="asig7">
                            <v-container class="cont-icon">
                                <v-btn class="icon" icon="mdi mdi-book-open" variant="text">
                                </v-btn>
                            </v-container>
                            <v-container class="name">                
                            <p>A4T4</p>
                            </v-container>
                        </v-container>
                        <v-container class="asig8">
                            <v-container class="cont-icon">
                                <v-btn class="icon" icon="mdi mdi-book-open" variant="text">
                                </v-btn>
                            </v-container>
                            <v-container class="name">                
                            <p>A4P4</p>
                            </v-container>
                        </v-container>
                    </v-container>

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
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: 'MenuSeccionView',
    });
    
    
    </script>
    <style src='../../views/MenuSecciones/menuSecciones.css'></style>
