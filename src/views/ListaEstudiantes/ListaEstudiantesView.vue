<template>
    <v-container class="general">

        <v-container class="contenedor">
            
            <v-container class="parte-1">

                <v-container class="logo"></v-container>

                <v-container class="docente">
                    <v-icon class="icono mdi mdi-account-circle"></v-icon>
                    <!-- AQUÍ SE COLOCA EL NOMBRE DEL DOCENTE -->
                    <p class="d-1">Freddy Pachas</p>
                </v-container>

            </v-container>
            
            <v-container class="parte-2">
                <p class="t-1">Lista de Estudiantes</p>
            </v-container>

            <v-container class="parte-3">
                <!-- AQUÍ SE COLOCA LA ASIGNATURA Y LA SECCIÓN -->
                <p class="t-2">Sistemas Inteligentes A20</p>

                <v-container class="cont-btn">
                    <button class="btn-1">
                        <v-icon left>mdi mdi-text-box-multiple-outline</v-icon>
                        Cargar Archivos</button>
                    <button class="btn-2">
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

                        <v-container class="p-2">

                            <v-container class="p-3">

                                <p class="t-2">Estado de Examen</p>

                                <select ref="select" v-model="selectedOption" class="selec-1">
                                    <option :value="null" disabled selected hidden></option>
                                    <option value="calificado">Calificado</option>
                                    <option value="nocalificado">No Calificado</option>
                                </select>

                            </v-container>

                            <v-container class="p-4">

                                <button class="btn-3" @click="selectFirstOption">
                                    <v-icon left >mdi mdi-broom</v-icon>
                                </button>

                            </v-container>

                        </v-container>

                    </v-container>

                    <v-data-table
                        :headers="headers"
                        :items="estudiantes"
                        :search="search"
                        :items-per-page="-1"
                        class="tabla-estudiantes">
                        <template v-slot:item="{ item, index }">
                            <tr>
                                <td class="c1">{{ index + 1 }}</td>
                                <td class="c5">{{ item.idUnidad }}</td>
                                <td class="c4">{{ item.nombresE + " " + item.apellidosE }}</td>
                                <td class="c2">{{ item.condicion-nota }}</td>
                                <td class="c3">
                                <v-icon class="mdi mdi-list-status"></v-icon>
                                </td>
                                <td class="c3">
                                <v-icon class="mdi mdi-text-box-plus-outline"></v-icon>
                                </td>
                                <td class="c3">
                                <v-icon class="mdi mdi-camera-enhance"></v-icon>
                                </td>
                            </tr>
                        </template>
                        <template #bottom></template>
                    </v-data-table>
                    
                </v-container>

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
    name: 'ListaEstudiantes',
    data() {
        return {
            search: '',
            codigoE:'',
            selectedOption: null,
            headers: [], 
            nombreE:'',
            apellidosE :'',
            estudiantes: [],
        };
    },
    created(){
        this.capturarLista();
    },
    methods: {
        selectFirstOption() {
            if (this.$refs.select && this.$refs.select.options.length > 0) {
                this.selectedOption = this.$refs.select.options[0].value;
            }
        },

        capturarLista(){
            this.codigoD = localStorage.getItem("codigoD");
            this.idCurso = localStorage.getItem("idCurso");
            this.aula = localStorage.getItem('aula');
            this.$axios.get("/matricula/condicion-nota/"+this.codigoD+"/"+this.idCurso+"/"+this.aula+"/"+this.idUnidad).then((res)=>{this.estudiantes=res.data;console.log(this.estudiantes)}).catch((error)=>e);;
            
        },
    }
};
</script>

<style src='../../views/ListaEstudiantes/listaEstudiantes.css'></style>