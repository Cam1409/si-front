<template>
  <v-container class="general">
        <v-container class="cont1-login">
          <v-col class="login-c1">
            <v-container class="logo"></v-container>
            <v-text-field
              label="Usuario"
              prepend-icon="mdi mdi-account-tie mdi-48px"
              variant="outlined"
              v-model="username"
            ></v-text-field>
            <v-text-field
              label="Contraseña"
              prepend-icon="mdi mdi-lock mdi-36px"
              variant="outlined"
              v-model="password"
              type="password"
            ></v-text-field>
          </v-col>
          <v-btn variant="text" class="btn-contra">
            ¿Olvidaste tu contraseña?
          </v-btn>
          <v-btn variant="tonal" class="btn-inicio" type="button" @click="iniciarSesion">
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
    <v-dialog v-model="dialogError" :width="500">
    <v-card color="#ec4a4a">
      <v-card-title>
        <span class="mx-auto">¡Verifique!</span>
      </v-card-title>
      <v-card-text>
        <v-alert
          v-if="mensaje !== ''"
          color="white"
          :type="typemsg"
          outlined>
          {{ mensaje }}
        </v-alert>
      </v-card-text>
      <v-card-actions class="prueba">
        <v-btn class="btnclose"
          @click="cerrar">
          Cerrar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'LoginView', 
  data(){
    return{
      usuarios: [],
      username: "",
      password: "",
      mensaje: "",
      typemsg: "error",
      dialogError: false
    }
  },
  created(){
    this.obtenerUsuario();
  },
  methods:{
    obtenerUsuario(){
      this.$axios.get("http://localhost:3000/usuario").then((res)=>{this.usuarios=res.data; console.log(this.usuarios);}).catch((error)=>e);
    },
    async iniciarSesion() {
  if (this.username === "" || this.password === "") {
    this.mensaje = "Faltan completar datos";
    this.typemsg = "error";
    this.dialogError = true;
    return; // Salir temprano si falta información
  }
    try {
    const response = await this.$axios.post("http://localhost:3000/usuario/validar", {
      username: this.username,
      password: this.password,
    });
    if (response.data.message === 'Autenticación exitosa') {
      this.$router.push("/menu");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      this.mensaje = "Credenciales incorrectas, por favor revisar el usuario y contraseña";
    } else {
      this.mensaje= "Error desconocido al iniciar sesión";
    }
    this.dialogError = true;
  }
},
cerrar() {
      this.mensaje= " "
      this.username = '';
      this.password = '';
      this.dialogError = false;
      
    }

	},
};


</script>
<style src='../../views/Login/login.css'></style>
