<template>
  <v-container class="general">
        <v-container class="cont1-login">
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
  <v-container class="raya-blanca"> </v-container>
  <v-container class="raya-roja"></v-container>
</template>

<script>
  export default {
    name: 'LoginView', 
    data(){
      return{
        usuarios: [],
      }
    },
    created(){
      this.obtenerUsuario();
    },
    methods:{
      obtenerUsuario(){
        this.axios.get("http://localhost:3000/distrito").then((res)=>{this.usuarios=res.data;}).catch((error)=>e);
        //console.log(this.usuarios);
      }
    }
  };
</script>

<style src='../../views/Login/login.css'></style>