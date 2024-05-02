<template>
  <v-container class="m-general">

    <v-container class="contenedor">
      <v-container class="cont-infoper">
        <v-container class="cont-logo">
          <v-container class="logo"></v-container>
        </v-container>
        <v-icon class="mdi mdi-account-circle"></v-icon>
        <p class="usuario">Freddy Pachas</p>

          <v-btn variant="tonal" class="btn-cerrar">
            Cerrar Sesión
          </v-btn>  

      </v-container>


      <v-container class="cont-secciones">
        <h1>Asignaturas</h1>
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
  name: 'MenuView',
});


</script>
<style src='../../views/Menu/menu.css'></style>