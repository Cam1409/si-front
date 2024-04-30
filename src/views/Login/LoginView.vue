<template>
  <v-container>
        <v-container class="cont1">
          <v-col class="login-c1">
            <p>
              HOLA ESTAMOS VIVOS ESTA CORRIENDO EL FRONTED NOOOO
            </p>
            <v-text-field
              label="Usuario"
              prepend-icon="$vuetify"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-container>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginView',
});


</script>

<style src='../../views/Login/login.css'></style>
