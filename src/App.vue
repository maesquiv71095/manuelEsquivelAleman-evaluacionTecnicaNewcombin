<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/Panel">Other Page (usuarios registrados)</router-link>
    </nav>
    <router-view v-if="obtieneAutorizacion"/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { servicioRestPost } from '@/Services/RestServices.js'

export default {
  data() {
    return {
      servicioRestPost,
      obtieneAutorizacion: false
    }
  },
  methods: {
    ...mapActions([
      'A_SET_AUTORIZACION'
    ]),
    getToken: async function() { 
      try {
        const PETICION_GET_AUDIENCIAS = { 
          username: 'sarah',
          password: 'connor'
        }
        const { CON_ERROR, RESPUESTA }  = await Promise.resolve(servicioRestPost({
            servicioUrl: 'auth',
            peticionServicio: PETICION_GET_AUDIENCIAS
        })); 
        console.log(RESPUESTA);
        if(!CON_ERROR) {
          this.A_SET_AUTORIZACION(RESPUESTA);
        }
      }
      catch(err) {
        console.error(err);
      }
    }
  },
  async created() {
    await Promise.resolve(this.getToken());
    this.obtieneAutorizacion = true;
    setInterval(async () => {
      await Promise.resolve(this.getToken());
    }, 900000);
  }
}
</script>
<style>
:root {
  --container-gray-bg-color: rgb(235, 235, 235);
  --btn-save-bg-color: #007bff;
  --btn-save-color: #fff;
  --btn-reset-bg-color: #bdc005;
  --btn-reset-color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 3rem 3rem 3rem 3rem;
}

.container-gray {
  background-color: var(--container-gray-bg-color);
  padding: 2em 2em 2em 2em;
  border-radius: 9px;
}

.form-input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 400;
    color: #212529;
    background-color: #fff;
    border-radius: 0.25rem;
    box-sizing: border-box;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  text-align: left;
  margin-bottom: 1em;
}

.btn-save {
  color: var(--btn-save-color);
  background-color: var(--btn-save-bg-color);
  border-color: var(--btn-save-bg-color);
}

.btn-reset {
  color: var(--btn-save-color);
  background-color: var(--btn-reset-bg-color);
  border-color: var(--btn-reset-bg-color);
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color .15s;
  cursor: pointer;
}

.btn-sm {
  display: inline-block;
  font-weight: 200;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.8rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color .15s;
  cursor: pointer;
}
</style>
