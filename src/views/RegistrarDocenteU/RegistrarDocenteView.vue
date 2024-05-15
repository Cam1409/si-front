<template>
    <v-container class="generalR">
          <v-container class="cont1-loginR">
            <v-col class="login-c1R">
              <v-container class="logoR"></v-container>
            </v-col>
              <v-container class="contenedorP">
                <p>Datos del docente</p>
                <v-divider></v-divider> 
                    <v-row class="conten">
                        <v-col cols="12" md="6"> <!-- Columna izquierda para pantallas medianas y grandes -->
                        <v-text-field
                            label="Codigo Docente"
                            prepend-icon="mdi mdi-account-tie mdi-48px"
                            variant="outlined"
                            @input="handleInput"
                            v-model="usuario.codigoD"
                        ></v-text-field>
                        <v-text-field
                            label="Dni"
                            prepend-icon="mdi mdi-account-tie mdi-48px"
                            variant="outlined"
                            v-model="dniP"
                        ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6"> <!-- Columna derecha para pantallas medianas y grandes -->
                        <v-text-field
                            label="Nombres"
                            prepend-icon="mdi mdi-account-tie mdi-48px"
                            variant="outlined"
                            v-model="nombresD"
                        ></v-text-field>
                        <v-text-field
                            label="Apellidos"
                            prepend-icon="mdi mdi-account-tie mdi-48px"
                            variant="outlined"
                            v-model="apellidosD"
                        ></v-text-field>
                        </v-col>
                    </v-row>
              </v-container>
              <v-container class="contenedorP">
                <p>Datos de cuenta a registrar</p>
                <v-divider></v-divider> 
                <v-text-field
                                label="Usuario"
                                prepend-icon="mdi mdi-account-tie mdi-48px"
                                variant="outlined"
                                v-model="usuario.username"
                ></v-text-field>
                <v-row class="conten">
                        <v-col cols="12" md="6"> <!-- Columna izquierda para pantallas medianas y grandes -->
                            <v-text-field
                                label="Contraseña"
                                prepend-icon="mdi mdi-lock mdi-36px"
                                variant="outlined"
                                v-model="usuario.password"
                                type="password"
                            ></v-text-field>             
                        </v-col>
                        <v-col cols="12" md="6"> <!-- Columna derecha para pantallas medianas y grandes -->
                            <v-text-field
                                label="Confirmar Contraseña"
                                prepend-icon="mdi mdi-lock mdi-36px"
                                variant="outlined"
                                v-model="confirmpassword"
                                type="password"
                            ></v-text-field>    
                        </v-col>
                    </v-row>
              </v-container>
              <v-btn variant="tonal" class="btn-inicioR" type="button" @click="registrar">
                        Registrar
              </v-btn>
              <v-btn variant="tonal" class="btn-inicioR" type="button" @click="volver">
                        Cancelar
              </v-btn>
          </v-container>
    </v-container>
    <v-container class="raya-blancaR"> </v-container>
    <v-container class="raya-rojaR">
      <v-container class="pieR">      
      <p> © UCV - Docentes 2024 </p>
      </v-container>
    </v-container>
    <v-container class="raya-blancaR"> </v-container>
    <v-container class="raya-rojaR"></v-container>
      <v-dialog v-model="dialogError" :width="500">
      <v-card color="#ec4a4a">
        <v-card-title>
          <span class="mx-autoR">¡Verifique!</span>
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
    <v-dialog v-model="dialogExit" :width="500">
      <v-card color="#033076">
        <v-card-title>
          <span class="mx-autoR">¡Registro exitoso!</span>
        </v-card-title>
        <v-card-text>
          <v-alert
            v-if="mensaje !== ''"
            color="#033076"
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
  name: 'RegistrarDocenteView', 
  data(){
    return{
      usuario: {
				id: "",
				codigoD: "",
				username: "",
        password: "",
			},
        nombresD: "",
        apellidosD: "",
        profesor:"",
        usuarioRegistrado:"",
        mensaje: "",
        confirmpassword:"",
        dniP: "",
        ultimoID: "",
        typemsg: "error",
        dialogError: false,
        dialogExit: false,
    }
  },
  methods:{ 
    handleInput() {
      // Cancelar el timeout anterior si existe
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      // Establecer un nuevo timeout
      this.timeout = setTimeout(() => {
        this.obtenerDatos();
      }, 2000); 
    },
    obtenerDatos() {
      if (this.codigoD !== "") {
        this.$axios.get("/profesor/" + this.usuario.codigoD)
          .then((res) => {
            this.profesor = res.data;
            if(this.profesor && this.profesor.nombresD) {
              this.nombresD = this.profesor.nombresD;
              this.apellidosD= this.profesor.apellidosD;
              this.dniP= this.profesor.dniProf;
            } else {
              this.mensaje = "El docente no ha sido encontrado, verifique el código ingresado";
              this.dialogError = true;
            }
          })
          .catch((error) => {
            console.error(error);  // Aquí debes manejar el error adecuadamente
            this.mensaje = "Error al buscar datos del docente";
            this.dialogError = true;
          });
      }
  },
  cerrar() {
      this.dialogError = false;
      this.mensaje= " ";
  },
  volver(){
     this.$router.push("/");
  },
  async registrar() {
  // Verificación de que todos los campos necesarios están completos
  if (!this.usuario.codigoD || !this.usuario.password || !this.confirmpassword) {
    this.mensaje = "Todos los campos deben ser completados.";
    this.dialogError = true;
    return;
  }

  // Verificación de que las contraseñas coinciden
  if (this.usuario.password !== this.confirmpassword) {
    this.mensaje = "Verifique la contraseña y su confirmación";
    this.dialogError = true;
    // Limpiando los campos de contraseña
    this.usuario.password = '';
    this.confirmpassword = '';
    return;
  }

  try {
    // Consultando existencia de usuario por su código
    const response = await this.$axios.get("/usuario/" + this.usuario.codigoD);
    if (response.data) {
      this.mensaje = "El docente con Código: " + this.usuario.codigoD + " ya está registrado, no podemos asignarle otro usuario.";
      this.dialogError = true;
      this.limpiar();
      return;
    }
  } catch (error) {
    console.error("Error al verificar la existencia del usuario:", error);
  }

  try {
    // Obteniendo el valor del último id
    const usersResponse = await this.$axios.get('/usuario');
    const usuarios = usersResponse.data;
    let ultimoID = 0;
    if (usuarios.length > 0) {
      ultimoID = usuarios.sort((a, b) => b.id - a.id)[0].id;
    }
    console.log("Último ID de usuario:", ultimoID);

    // Asignando el siguiente ID
    this.usuario.id = ultimoID + 1;

    // Grabando usuario
    const saveResponse = await this.$axios.post("/usuario", this.usuario);
    console.log(saveResponse);
    this.mensaje = "El registro ha sido completado con éxito";
    this.dialogExit = true;
    this.limpiar();
  } catch (error) {
    console.error("Error al obtener los usuarios o al guardar el nuevo usuario:", error);
    this.mensaje = "Error durante el registro del usuario.";
    this.dialogError = true;
  }
},

limpiar(){
    this.usuario.codigoD= "";
    this.usuario.password="";
    this.usuario.username="";
    this.dniP="";
    this.nombresD="";
    this.apellidosD="";
    this.confirmpassword="";
  }
 }
}
</script>

<style src='../../views/RegistrarDocenteU/RegistrarDocente.css'></style>

