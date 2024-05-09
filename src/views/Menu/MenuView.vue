<template>
  <v-container class="m-general">
    <v-container class="contenedor">
      <v-container class="cont-infoper">
        <v-container class="cont-logo">
          <v-container class="logo"></v-container>
        </v-container>
        <v-icon class="mdi mdi-account-circle icon1"></v-icon>
        <v-container>
          <p class="usuario" id="txtNombreP"></p>
        </v-container>
        
          <v-btn variant="tonal" class="btn-cerrar">
            Cerrar Sesión
          </v-btn>  
      </v-container>

      <v-container class="cont-asignatura">
        <v-container class="cont-titulo">
          <h1>Asignaturas</h1>
        </v-container>
        <v-container class="contenido-desplazable all">
    <v-row>
      <v-col v-for="(asignatura, index) in asignaturas" :key="index" cols="4">
        <v-card>
          <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpyrO3FloqBLlYGdb85qyVwh22IqdlVLQmqfCrHITHReEa6NFoDhLXaSXC8ZwkFH2Z6c&usqp=CAU" height="200"></v-img>
          <v-card-text>{{ asignatura.idCurso }}</v-card-text>
          <v-card-title>{{ asignatura.NombreCurso }}</v-card-title>
          <v-card-subtitle>Abierto | Ciclo: {{ asignatura.idCiclo }}</v-card-subtitle>
          <v-card-text></v-card-text>
          <v-divider thick></v-divider> 
          <v-card-actions>
          <v-card-text>{{ profesor.nombresD + " "+ profesor.apellidosD }}</v-card-text>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
export default {
  name: 'MenuView',

  data(){
    return{
      profesor: "",
      asignaturas: [],
      codigoD: "",
      username: "",
      mensaje:"",
      typemsg: "error",
      columnSize: 3 ,
      dialogError: false
    }
  },
  created(){
    this.cargarDatos();
  },
  methods:{
    cargarDatos(){
        this.capturarCodigoD();
        this.capturarAsignaturas();
    },
    capturarCodigoD(){
        this.codigoD = localStorage.getItem("codigoD");
        this.$axios.get("/profesor/"+this.codigoD).then((res)=>{this.profesor=res.data;this.llenarDatosD()}).catch((error)=>e);
      },
    llenarDatosD(){
      //Cargando datos de usuario
      var nombre = document.getElementById('txtNombreP');
      if (nombre) {
        nombre.innerText = this.profesor.nombresD +" "+this.profesor.apellidosD;
      }
    },
    capturarAsignaturas(){
      this.$axios.get("/curso/by-codigoD/"+this.codigoD).then((res)=>{this.asignaturas=res.data;console.log(this.asignaturas)}).catch((error)=>e);
    },

  }
};


</script>
<style src='../../views/Menu/menu.css'></style>
