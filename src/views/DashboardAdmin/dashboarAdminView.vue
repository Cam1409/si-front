<template>
    <v-container class="dash">

        <v-container class="cont-blancoizq">
            <v-container class="cont-info"> 
                <v-container class="cont-logo">
                    <v-container class="logo"></v-container>
                </v-container>

                <v-icon class="mdi mdi-account-circle iconouser"></v-icon>

                <v-container>
                    <p class="usuario" id="">Carlos Alcedo Javier</p>
                </v-container>

                <v-container class="cont-cod">
                    Código:<p id="">32423456</p>
                </v-container>

                <v-container class="cont-pag">
                    <v-col class="sepic">
                        <v-btn href="https://calendar.google.com/calendar/u/0/r?pli=1"
                        height="30"
                        target="-blank">            
                        <v-icon class="calendario"></v-icon>
                        </v-btn>
                    </v-col>

                    <v-col class="sepic">
                        <v-btn href="https://www.google.com/intl/es-419/gmail/about/"
                        height="30"
                        target="-blank">            
                        <v-icon class="gmail"></v-icon>
                        </v-btn>
                    </v-col>

                    <v-col class="sepic">
                        <v-btn href="https://docs.google.com/document/u/0/?tgif=d"
                        height="30"
                        target="-blank">            
                        <v-icon class="doc"></v-icon>
                        </v-btn>

                    </v-col>

                    <v-col class="sepic">
                        <v-btn href="https://drive.google.com/drive/my-drive?hl=es"
                        height="30"
                        target="-blank">            
                        <v-icon class="drive"></v-icon>
                        </v-btn>
                    </v-col>

                    <v-col class="sepic">
                        <v-btn href="https://keep.google.com/u/0/"
                        height="30"
                        target="-blank">            
                        <v-icon class="keep"></v-icon>
                        </v-btn>
                    </v-col>
                </v-container>

                <v-container class="menubtn">
                    <v-btn class="btnmenu1 text-none">
                        Gestión de Usuarios
                    </v-btn>
                    <v-btn class="btnmenu1 text-none">
                        Reporte
                    </v-btn>
                    <v-btn class="btnmenu1 text-none">
                        Cerrar Sesión
                    </v-btn>
                </v-container>

            </v-container>

        </v-container>

        <v-container class="cont-blancoder">
            <v-container class="cont-arriba">
                <v-container class="c-arr-izq">
                    <v-container class="arr-izq">
                        <v-container class="izq-izq">
                            <v-container class="a"></v-container>
                            <v-container class="b">
                                <p class="p8">Dashboard - Análisis</p>
                                <p class="p9">Indicadores</p>
                            </v-container>
                        </v-container>
                        <v-container class="izq-der">
                                    
                        </v-container>
                    </v-container>
                    <v-container class="aba-izq">
                        <v-container class="infoizq4">
                            <v-container class="izq-4"></v-container>
                            <v-container class="der-4">
                                <p class="p10">9790</p>
                                <p class="p11">Estudiantes Totales</p>
                            </v-container>
                        </v-container>
                        <v-container class="infoizq4">
                            <v-container class="izquierda-4">
                                <v-progress-circular
                                :model-value="porcentaje1"
                                :rotate="360"
                                :size="110"
                                :width="14"
                                color="#DD0919">
                                <p class="porc">{{ porcentaje1 }}%</p>
                                </v-progress-circular>
                            </v-container>
                            <v-container class="derecha-4">
                                <p class="p12">Tasa de Deserción</p>
                                <p class="p13">Empleados Retirados</p>
                                <p class="p14">3484</p>
                            </v-container>
                        </v-container>
                        <v-container class="infoizq4">
                            <v-container class="izquierda-4">
                                <v-progress-circular
                                :model-value="porcentaje2"
                                :rotate="360"
                                :size="110"
                                :width="14"
                                color="#002854">
                                <p class="porc">{{ porcentaje2 }}%</p>
                            </v-progress-circular>
                            </v-container>
                            <v-container class="derecha-4">
                                <p class="p12">Fuerza Activa</p>
                                <p class="p13">Número de Empleados</p>
                                <p class="p14">6306</p>
                            </v-container>
                        </v-container>
                    </v-container>
                </v-container>
                <v-container class="c-arr-der">
                    <p class="p15">Exportar en:</p>
                    <v-btn class="btn-desc" @click="descargarPDF">
                        <v-icon left class="iconform">mdi-file-pdf-box</v-icon>
                        PDF
                    </v-btn>
                </v-container>
            </v-container>

            <v-container class="cont-abajo">
                <v-container class="columna1">
                    <v-container class="caja1_1">
                        <v-container class="izqarriba">
                            <v-container class="caja1izq">
                                <p class="l1">Nivel de Deserción</p>
                                <p class="l2">Por Distancia al Trabajo</p>
                            </v-container>
                            <v-container class="caja1der">
                                <v-icon right>mdi-check</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="cont_1">
                            <v-container class="cont_2">
                                <v-container class="c2_1">
                                    <p class="l8">510</p>
                                    <p class="l9">828</p>
                                    <p class="l10">2146</p>
                                </v-container>
                                <v-container class="c2_2">
                                    <p class="l11">Lejos</p>
                                    <p class="l11">Muy Lejos</p>
                                    <p class="l11">Cerca</p>
                                </v-container>
                            </v-container>
                            <v-container class="grafica3">
                                <v-progress-circular
                                :model-value="porcentaje5"
                                :rotate="180"
                                :size="127"
                                :width="16"
                                color="#DD0919"
                                class="gc1"
                                >
                                    <v-progress-circular
                                    :model-value="porcentaje6"
                                    :rotate="180"
                                    :size="89"
                                    :width="16"
                                    color="#7e7e7e"
                                    class="gc2"
                                    >
                                        <v-progress-circular
                                        :model-value="porcentaje7"
                                        :rotate="180"
                                        :size="51"
                                        :width="16"
                                        color="#002854"
                                        class="gc3"
                                        >
                                        </v-progress-circular>
                                    </v-progress-circular>
                                </v-progress-circular>
                            </v-container>
                        </v-container>
                    </v-container>
                    <v-container class="caja1_2">
                        <v-container class="izqarriba">
                            <v-container class="caja1izq">
                                <p class="l1">Deserciones Totales</p>
                                <p class="l2">Por Nivel Educativo</p>
                            </v-container>
                            <v-container class="caja1der">
                                <v-icon right>mdi-check</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="cont_2">
                            <v-container class="espacio">
                                <p class="m1">Doctorado</p>
                                <p class="m1">Bachiller</p>
                                <p class="m1">Maestría</p>
                                <p class="m1">Especialización</p>
                                <p class="m1">Profesional</p>
                                <p class="m1">Técnico</p>
                                <p class="m1">Tecnólogo</p>
                            </v-container>
                            <v-container class="p0">
                                <v-container class="barra3">
                                    <v-progress-linear
                                        v-model="porcentaje11"
                                        color="#DD0919"
                                        height="10">
                                    </v-progress-linear>
                                    <p class="c2">108</p>
                                </v-container>
                                            <v-container class="barra2">
                                                <v-progress-linear
                                                    v-model="porcentaje12"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">352</p>
                                            </v-container>
                                            <v-container class="barra2">
                                                <v-progress-linear
                                                    v-model="porcentaje13"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">405</p>
                                            </v-container>
                                            <v-container class="barra2">
                                                <v-progress-linear
                                                    v-model="porcentaje14"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">471</p>
                                            </v-container>
                                            <v-container class="barra2">
                                                <v-progress-linear
                                                    v-model="porcentaje15"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">662</p>
                                            </v-container>
                                            <v-container class="barra2">
                                                <v-progress-linear
                                                    v-model="porcentaje16"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">742</p>
                                            </v-container>
                                            <v-container class="barra2">
                                                <v-progress-linear
                                                    v-model="porcentaje17"
                                                    color="#DD0919"
                                                    height="10">
                                                </v-progress-linear>
                                                <p class="c2">744</p>
                                            </v-container>
                                        </v-container>
                                    </v-container>
                    </v-container>
                </v-container>
                <v-container class="columna2">
                    <v-container class="caja2">
                        <v-container class="izqarriba">
                            <v-container class="caja1izq">
                                <p class="l1">Deserciones Totales</p>
                                <p class="l2">Por Tipo de Cargo del Empleado</p>
                            </v-container>
                            <v-container class="caja1der">
                                <v-icon right>mdi-check</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="caja1abajo">
                            <v-container class="casa1abiz">
                                <p class="l3">Bajo rendimiento</p>
                                <p class="l3">Cambio de ciudad</p>
                                <p class="l3">Enfermedad</p>
                                <p class="l3">Nuevo trabajo</p>
                                <p class="l3">Bajo rendimiento</p>
                                <p class="l3">Cambio de ciudad</p>
                                <p class="l3">Enfermedad</p>
                                <p class="l3">Nuevo trabajo</p>
                                <p class="l3">Enfermedad</p>
                            </v-container>
                            <v-container class="casa1abder">
                                <p class="l4">328</p>
                                <p class="l4">970</p>
                                <p class="l4">33</p>
                                <p class="l4">2153</p>
                                <p class="l4">328</p>
                                <p class="l4">970</p>
                                <p class="l4">33</p>
                                <p class="l4">2153</p>
                                <p class="l4">33</p>
                            </v-container>
                        </v-container>
                        <v-container class="caja1abajo1">
                            <v-container class="abajo1izq">
                                <p class="l5">Prom Deserciones</p>
                                <p class="l6">Por Cargo del Empleado</p>
                            </v-container>
                            <v-container class="abajo1der">
                                <p class="l7">155</p>
                            </v-container>
                        </v-container>
                    </v-container>
                </v-container>
                <v-container class="columna3">
                    <v-container class="caja3">
                        <v-container class="izqarriba">
                            <v-container class="caja1izq">
                                <p class="l1">Número de Deserciones</p>
                                <p class="l2">Por Género</p>
                            </v-container>
                            <v-container class="caja1der">
                                <v-icon right>mdi-star-outline</v-icon>
                            </v-container>
                        </v-container>
                        <v-container class="izqarriba">
                                        <v-container class="caja1izq">
                                            <p class="l1">Deserciones Totales</p>
                                            <p class="l2">Por Nivel Educativo</p>
                                        </v-container>
                                    </v-container>
                                        <v-container class="cont_a">
                                            <v-container class="cont_2 y">
                                                <p>158</p>
                                            </v-container>
                                            <v-container class="cont_2 j">
                                                <p>254</p>
                                            </v-container>
                                            <v-container class="cont_2 w">
                                                <p>341</p>
                                            </v-container>
                                        </v-container>
                                        <v-container class="cont_z">
                                            <v-progress-linear
                                            v-model="porcentaje20"
                                            color="#002854"
                                            height="42"
                                            class="vertical-progress5"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                            v-model="porcentaje21"
                                            color="#7e7e7e"
                                            height="42"
                                            class="vertical-progress6"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                            v-model="porcentaje22"
                                            color="#DD0919"
                                            height="42"
                                            class="vertical-progress6"
                                            ></v-progress-linear>
                                        </v-container>
                                    <v-container class="caja1_abc">
                                        <p class="genA x">Billetera</p>
                                        <p class="genB x">Efectivo</p>
                                        <p class="genC x">Cartera</p>
                                    </v-container>
                    </v-container>
                </v-container>
            </v-container>

        </v-container>

    </v-container>

    <v-container class="d-raya-blanca"></v-container>
    <v-container class="d-raya-roja">
        <v-container class="d-pie">
        <p>© UCV - Docentes 2024</p>
        </v-container>
    </v-container>

</template>

<script>
    export default {
        name: 'DashAdmin',
        data(){
            return{
                porcentaje1: 45,
                porcentaje2: 84,
                porcentaje5: 39,
                porcentaje6: 64,
                porcentaje7: 24,
                porcentaje11: 65,
                porcentaje12: 45,
                porcentaje13: 84,
                porcentaje14: 39,
                porcentaje15: 64,
                porcentaje16: 24,
                porcentaje17: 74,
            }
        }
    }
</script>

<style src="../../views/DashboardAdmin/dashboard.css"></style>