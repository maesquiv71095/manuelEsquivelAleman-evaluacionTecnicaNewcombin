<template>
  <div id="main-container-panel-users">
   <div id="toolbar-table">
    <h4>USUARIOS REGISTRADOS</h4>
    <button type="button" @click="obtenerUsuarios" class="btn-sm btn-save">Actualizar tabla</button>
   </div>
   <TableUsers
      id="table-users"
      :usuarios="usuarios"></TableUsers>
  </div>
</template>

<script>
import TableUsers from '@/components/Users/CtableUsers.vue'
import { servicioRestGet } from '@/Services/RestServices.js'

export default {
  name: 'Panel',
  components: {
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
        servicioRestGet,
        usuarios: []
    }
  },
  methods: {
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
#main-container-panel-users {
    display: flex;
    flex-direction: column;
    gap: 0.1em;
    padding-top: 2em;
}

#toolbar-table {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    flex-wrap: wrap;
}

#table-users {
    width: 100%;
}
</style>