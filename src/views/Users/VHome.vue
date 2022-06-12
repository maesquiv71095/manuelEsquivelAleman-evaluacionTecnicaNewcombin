<template>
  <div id="home-main-container">
    <FormUsers 
      v-on:getDatosFormulario="guardarUsuario"
      :ref="propiedadesComponentes.formularioAlta.REF"
      class="form-users"></FormUsers>
    <TableUsers
      :usuarios="usuarios"></TableUsers>
  </div>
</template>

<script>
import FormUsers from '@/components/Users/CFormUsers.vue'
import TableUsers from '@/components/Users/CtableUsers.vue'
import { servicioRestPost, servicioRestGet } from '@/Services/RestServices.js'

export default {
  name: 'Home',
  components: {
    FormUsers,
    TableUsers
  },
  async created() {
    await Promise.resolve(this.obtenerUsuarios());
    setInterval(async () => {
      await Promise.resolve(this.obtenerUsuarios());
    }, 120000);
  },
  data() {
    return {
      servicioRestPost,
      servicioRestGet,
      usuarios: [],
      propiedadesComponentes: {
        formularioAlta: {
          REF: 'ref-form-user'
        }
      }
    }
  },
  methods: {
    guardarUsuario: async function(datosFormulario) {
      try {
        const { CON_ERROR, RESPUESTA }  = await Promise.resolve(servicioRestPost({
            servicioUrl: 'api/members',
            peticionServicio: datosFormulario,
            headers: { TOKEN_AUTORIZACION: this.autorizacion.token }
        })); 
        if(!CON_ERROR) {
          this.$refs[this.propiedadesComponentes.formularioAlta.REF].resetData();
          this.usuarios.push(RESPUESTA);
        }
      }
      catch(err) {
        console.error(err);
      }
    },
    obtenerUsuarios: async function() {
      let { CON_ERROR, RESPUESTA } = await Promise.resolve(servicioRestGet({
        servicioUrl: 'api/members',
        headers: { TOKEN_AUTORIZACION: this.autorizacion.token }
      })); 
      this.usuarios = (!CON_ERROR && RESPUESTA != null) ? RESPUESTA : [];
    }
  },
  computed: {
    autorizacion() {
      return this.$store.getters.GET_AUTORIZACION;
    }
  },
}
</script>
<style scoped>
#home-main-container {
  padding: 2em 2em 2em 2em;
  justify-content: center;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, 33em);
}

</style>