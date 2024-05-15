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
                <p class="t-2">Sistemas Inteligentes A20</p>

                <v-container class="cont-btn">
                    <button class="btn-1">
                        <v-icon left>mdi mdi-text-box-multiple-outline</v-icon>
                        Boleta de Notas
                    </button>
                    <button class="btn-1">
                        <v-icon left>mdi mdi-text-box-multiple-outline</v-icon>
                        Cargar Archivos
                    </button>
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
                                <select ref="selectCalif" v-model="selectedOptionCalif" class="selec-1 seleccalif">
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

                        <v-container class="p-5">
                            <p class="t-2">Unidad</p>
                            <select v-model="selectedOptionUnidad" class="selec-1">
                                <option value="u1">1</option>
                                <option value="u2">2</option>
                                <option value="u3">3</option>
                            </select>
                        </v-container>

                    </v-container>

                    <v-data-table
                        :headers="headers"
                        :search="search"
                        :items="filteredStudents"
                        :items-per-page="-1"
                        class="tabla-estudiantes"
                        >
                        <template #header>
                            <thead>
                            <tr>
                                <th v-for="(header, index) in headers" :key="index">
                                {{ header.text }}
                                </th>
                            </tr>
                            </thead>
                        </template>
                        <template v-slot:item="{ item, index }">
                            <tr>
                            <td class="c1">{{ index + 1 }}</td>
                            <td class="c2">{{ item.codigoE }}</td>
                            <td class="c4">{{ item.nombresE}}</td>
                            <td class="c4">{{ item.apellidosE }}</td>
                            <td class="c4">{{ item.condicionNota }}</td>
                            <td class="c4">{{ item.nota }}</td>
                            <td class="c5">
                                <v-icon class="mdi mdi-list-status"></v-icon>
                            </td>
                            <td class="c5">
                                <v-icon class="mdi mdi-text-box-plus-outline"></v-icon>
                            </td>
                            <td class="c5">
                                <v-icon class="mdi mdi-camera-enhance"></v-icon>
                            </td>
                            </tr>
                        </template>
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
    data() {
    return {
        search: '',
        codigoE:'',
        selectedOptionCalif: null,
        selectedOptionUnidad: null,
        headers: [
            { text: '#', value: 'index' },
            { text: 'Código', value: 'codigoE' },
            { text: 'Nombres', value: 'nombresE' },
            { text: 'Apellidos', value: 'apellidosE' },
            { text: 'Condición Nota', value: 'condicionNota' },
            { text: 'Nota', value: 'nota' },
            { text: '', value: 'lista' },
            { text: '', value: 'agregar' },
            { text: '', value: 'camara' }
        ],
        nombreE:'',
        apellidosE :'',
        profesor: '',
        idUnidad: 'U1',
        estudiantes: [],
    };
    },
    created(){
        this.capturarLista();
    },
    mounted() {
        this.capturarDatos();
        this.selectedOptionUnidad = 'u1';
    },
    methods: {
    selectFirstOption() {
        if (this.$refs.selectCalif && this.$refs.selectCalif.options.length > 0) {
            this.selectedOptionCalif = this.$refs.selectCalif.options[0].value;
        }
    },
    capturarLista(){
        this.codigoD = localStorage.getItem("codigoD");
        this.idCurso = localStorage.getItem("idCurso");
        this.aula = localStorage.getItem('aula');
        this.$axios.get("/matricula/condicion-nota/"+this.codigoD+"/"+this.idCurso+"/"+this.aula+"/"+this.idUnidad)
        .then((res) => { this.estudiantes = res.data; console.log(this.estudiantes); })
        .catch((error) => { console.error(error); });
    },
    capturarDatos(){
        this.profesor = localStorage.getItem("nombreDocente");
        console.log(this.profesor);
        var nombreP = document.getElementById('nomb_Profesor');
        console.log(nombreP);
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
    },
    computed: {
        filteredStudents() {
            if (!this.search) return this.estudiantes;
            const searchTerm = this.search.trim().toLowerCase();
            return this.estudiantes.filter(estudiante =>
            estudiante.nombresE.toLowerCase().includes(searchTerm) ||
            estudiante.apellidosE.toLowerCase().includes(searchTerm)
            ).filter(estudiante => {
                if (this.selectedOptionCalif === 'calificado') {
                    console.log("Filtrando por calificado:", estudiante.condicionNota === 'Calificado');
                    return estudiante.condicionNota === 'Calificado';
                } else if (this.selectedOptionCalif === 'nocalificado') {
                    console.log("Filtrando por no calificado:", estudiante.condicionNota !== 'Calificado');
                    return estudiante.condicionNota !== 'Calificado';
                } else {
                    console.log("Mostrando todos los estudiantes");
                    return true;
                }
            });
        }
    }
};
</script>

<style src='../../views/ListaEstudiantes/listaEstudiantes.css'></style>