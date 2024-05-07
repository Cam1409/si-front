<template>
  <v-container class="m-general">
    <v-container class="contenedor">
      <v-container class="cont-infoper">
        <v-container class="cont-logo">
          <v-container class="logo"></v-container>
        </v-container>
        <v-icon class="mdi mdi-account-circle icon1"></v-icon>
        <v-container>
          <p class="usuario" id="usuario"></p>
          <p class="usuario"></p>
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
          <v-container class="fila1">
            <v-container class="asig1">
              <v-container class="cont-icon2">
                <v-btn class="icon2" icon="mdi mdi-book-plus" variant="text">
                </v-btn>
              </v-container>
              <v-container class="name">                
              <p>Sistemas Inteligentes</p>
              </v-container>
            </v-container>
            <v-container class="asig2">
              <v-container class="cont-icon2">
                <v-btn class="icon2" icon="mdi mdi-book-plus" variant="text">
                </v-btn>
              </v-container>
              <v-container class="name">                
              <p>Progamación Movil</p>
              </v-container>
            </v-container>
            <v-container class="asig3">
              <v-container class="cont-icon2">
                <v-btn class="icon2" icon="mdi mdi-book-plus" variant="text">
                </v-btn>
              </v-container>
              <v-container class="name">                
              <p>Fundamentos de Moelado</p>
              </v-container>
            </v-container>
          </v-container>
          <v-container class="fila2">
            <v-container class="asig4">
              <v-container class="cont-icon2">
                <v-btn class="icon2" icon="mdi mdi-book-plus" variant="text">
                </v-btn>
              </v-container>
              <v-container class="name">                
              <p>Calculo II</p>
              </v-container>
            </v-container>
            <v-container class="asig5">
              <v-container class="cont-icon2">
                <v-btn class="icon2" icon="mdi mdi-book-plus" variant="text">
                </v-btn>
              </v-container>
              <v-container class="name">                
              <p>Gerencia de TI</p>
              </v-container>
            </v-container>
            <v-container class="asig6">
              <v-container class="cont-icon2">
                <v-btn class="icon2" icon="mdi mdi-book-plus" variant="text">
                </v-btn>
              </v-container>
              <v-container class="name">                
              <p>POO</p>
              </v-container>
            </v-container>
          </v-container>
          <v-container class="fila3">
            <v-container class="asig7">
              <v-container class="cont-icon2">
                <v-btn class="icon2" icon="mdi mdi-book-plus" variant="text">
                </v-btn>
              </v-container>
              <v-container class="name">                
              <p>Introducción I</p>
              </v-container>
            </v-container>
            <v-container class="asig8">
              <v-container class="cont-icon2">
                <v-btn class="icon2" icon="mdi mdi-book-plus" variant="text">
                </v-btn>
              </v-container>
              <v-container class="name">                
              <p>Desarrollo Web</p>
              </v-container>
            </v-container>
            <v-container class="asig9">
              <v-container class="cont-icon2">
                <v-btn class="icon2" icon="mdi mdi-book-plus" variant="text">
                </v-btn>
              </v-container>
              <v-container class="name">                
              <p>Sistemas Inteligentes</p>
              </v-container>
            </v-container>
          </v-container>

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
      profesor: [],
      codigoD: "",
      

    }
  },
  created(){
    this.cargarDatos();
  },
  methods:{
    cargarDatos(){
        this.capturarCodigoD();
        this.llenarDatosD();
    },
    capturarCodigoD(){
        this.codigoD = localStorage.getItem("codigoD");
        this.$axios.get("/profesor/"+this.codigoD).then((res)=>{this.profesor=res.data;}).catch((error)=>e);
    },
    llenarDatosD(){
    }
  }
};


</script>
<style src='../../views/Menu/menu.css'></style>
