<template>
    <v-container class="MenuAdmin">   
        <v-container class="cont2">
            <v-container class="logo"></v-container>
            <v-container class="contenedorP">
                <p class="titu">Datos del docente</p>
                <v-divider class="divi"></v-divider> 
                <v-row class="conten">
                    <!-- Primera fila -->
                    <v-col cols="12" md="3">
                    <v-text-field
                        label="Codigo Docente"
                        prepend-icon="mdi mdi-code-not-equal-variant mdi-48px"
                        variant="outlined"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                    <v-text-field
                        label="Dni"
                        prepend-icon="mdi mdi-card-account-details mdi-48px"
                        variant="outlined"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                    <v-text-field
                        label="Correo"
                        prepend-icon="mdi mdi-email mdi-48px"
                        variant="outlined"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                    <v-combobox
                        label="Genero"
                        prepend-icon="mdi-gender-male-female mdi-48px"
                        :items="['Masculino', 'Femenino']"
                        variant="outlined"
                    ></v-combobox>
                    </v-col>
                    <v-col cols="12" md="3" class="mt-n6">
                    <v-combobox
                        label="Estado"
                        prepend-icon="mdi-account-heart mdi-48px"
                        :items="['Soltero', 'Casado', 'Divorsiado', 'Viudo']"
                        variant="outlined"
                    ></v-combobox>
                    </v-col>

                    <!-- Segunda fila -->
                    <v-col cols="12" md="3" class="mt-n6">
                    <v-text-field
                        label="Nombres"
                        prepend-icon="mdi mdi-account-tie mdi-48px"
                        variant="outlined"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" class="mt-n6">
                    <v-text-field
                        label="Apellidos"
                        prepend-icon="mdi mdi-account-tie mdi-48px"
                        variant="outlined"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" class="mt-n6">
                    <v-text-field
                        label="Célular"
                        prepend-icon="mdi mdi-phone mdi-48px"
                        variant="outlined"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" class="mt-n6">
                    <v-text-field
                        label="Dirección"
                        prepend-icon="mdi mdi-map-marker-radius mdi-48px"
                        variant="outlined"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" class="mt-n6">
                    <v-combobox
                        label="Distrito"
                        prepend-icon="mdi mdi-home-map-marker mdi-48px"
                        :items="['Comas', 'Olivos', 'San Miguel', 'San Martin']"
                        variant="outlined"
                    ></v-combobox>
                    </v-col>
                </v-row>

            </v-container>
            <v-container class="contB">
                <v-btn prepend-icon="mdi mdi-account-edit-outline" class="mr-4">
                EDITAR
                </v-btn>
                <v-btn prepend-icon="mdi mdi-delete-empty-outline" class="mr-4">
                ELIMINAR
                </v-btn>
                <v-btn prepend-icon="mdi mdi-account-plus-outline">
                REGISTRAR
                </v-btn>
            </v-container>
            <v-table class="tabla-docentes">
                <thead>
                <tr>
                    <th>N°</th>
                    <th>Código</th>
                    <th>DNI</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                    <th>Genero</th>
                    <th>Estado</th>
                    <th>Célular</th>
                    <th>Dirección </th>
                    <th>Distrito</th>
                </tr>
                </thead>
                <tbody>
                <template>
                    <tr>
                    <td class="c1"></td>
                    <td class="c2"></td>
                    <td class="c3"></td>
                    <td class="c3"></td>
                    <td class="c4"></td>
                    <td class="c5"></td>
                    </tr>
                </template>
                </tbody>
            </v-table>
            
        </v-container>        
    
        <v-container class="fondoMitad"></v-container>
    </v-container>
        <v-container class="menu-raya-blanca"> </v-container>
        <v-container class="menu-raya-roja">
        <v-container class="menu-pie">      
        <p> © UCV - Docentes 2024 </p>
        </v-container>
        </v-container>
</template>

<script>

</script>

<style src="../../views/MenuAdmin/menuAdmin.css"></style>