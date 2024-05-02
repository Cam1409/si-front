<template>
  <v-container class="general">
        <v-container class="cont1-login">
          <v-col class="login-c1">
            <v-container class="logo"></v-container>
            <v-container class="logo"></v-container>
            <v-text-field
              label="Usuario"
              prepend-icon="mdi mdi-account-tie mdi-48px"
              variant="outlined"
            ></v-text-field>
            <v-text-field
              label="Contraseña"
              prepend-icon="mdi mdi-lock mdi-36px"
              variant="outlined"
              type="password"
            ></v-text-field>
          </v-col>
          <v-btn variant="text" class="btn-contra">
            ¿Olvidaste tu contraseña?
          </v-btn>
          <v-btn variant="tonal" class="btn-inicio" type="submit">
            Iniciar Sesión
          </v-btn>
        </v-container>
        
  </v-container>
  <v-container class="raya-blanca"> </v-container>
  <v-container class="raya-roja">
    <v-container class="pie">      
    <p> © UCV - Docentes 2024 </p>
    </v-container>
  </v-container>
  <v-container class="raya-blanca"> </v-container>
  <v-container class="raya-roja"></v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginView',
});


</script>

<style src='../../views/Login/login.css'></style>