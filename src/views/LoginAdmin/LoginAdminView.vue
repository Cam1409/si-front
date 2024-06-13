<template>
    <v-container class="loginAdmin">   
        <v-container class="cont1-lodadmi">
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

            <v-btn variant="tonal" class="btn-inicio" type="button">
                Iniciar Sesión
            </v-btn>

            <v-btn variant="text" class="btn-contraT" @click="registrar">
                ¿No tienes cuenta? Regístrate
            </v-btn>
            <v-btn variant="text" class="btn-contra" @click="restablecer">
                ¿Olvidaste tu contraseña?
            </v-btn>

        </v-container>
        <v-container class="logoCandado"></v-container>
    
    </v-container>
        <v-container class="lod2"></v-container>
        <v-container class="lo-raya-blanca"> </v-container>
        <v-container class="lo-raya-roja">
        <v-container class="lo-pie">      
        <p> © UCV - Docentes 2024 </p>
        </v-container>
        </v-container>
</template>

<script>

</script>

<style src="../../views/LoginAdmin/loginAdmin.css"></style>