<template>
  <div class="container-gray form-users">
        <!-- INPUT FIRST NAME -->
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" v-model="datosFormulario.firstName" class="form-input" id="firstName" placeholder="First name">
        </div>
         <!-- INPUT FIRST NAME -->
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" v-model="datosFormulario.lastName" class="form-input" id="lastName" placeholder="First name">
        </div>
         <!-- INPUT FIRST NAME -->
        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" v-model="datosFormulario.address" class="form-input" id="address" placeholder="First name">
        </div>
         <!-- INPUT FIRST NAME -->
        <div class="form-group">
          <label for="ssn">SSN</label>
          <input type="text" v-model="datosFormulario.ssn" v-mask="'###-##-####'" class="form-input" id="ssn" placeholder="###-##-####">
        </div>
        <!-- ACTIONS -->
        <div id="container-actions">
            <button type="button" @click="resetData" class="btn btn-reset">Reset</button>
            <button type="button" v-if="this.camposObligatoriosConInformacion()" @click="guardarUsuario" class="btn btn-save">Save</button>
        </div>
    </div>
</template>

<script>
import { textoEsValido } from '@/Funciones/Validaciones.js'

export default {
  name: 'FormUsers',
  data() {
    return {
        textoEsValido,
        datosFormulario: {
            firstName: null,
            lastName: null,
            address: null,
            ssn: null
        }
    }
  },
  methods: {
    resetData: function() {
        this.datosFormulario.firstName = null;
        this.datosFormulario.lastName = null;
        this.datosFormulario.address = null;
        this.datosFormulario.ssn = null;
    },
    guardarUsuario: function() {
        Object.keys(this.datosFormulario).forEach(c => this.datosFormulario[c] = this.datosFormulario[c].trim());
        this.$emit('getDatosFormulario', this.datosFormulario)
    },
    camposObligatoriosConInformacion: function() {
        let formularioTerminado = true;
        const { firstName, lastName, address, ssn } = this.datosFormulario;
        const camposObligatorios = [
            { valor: firstName, reglas: { minimoDeCaracteres: 2 } },
            { valor: lastName, reglas: { minimoDeCaracteres: 2 } },
            { valor: address, reglas: { minimoDeCaracteres: 2 } },
            { valor: ssn, reglas: { minimoDeCaracteres: 11 } } // ###-##-####
        ];
        
        for(let i=0; i<camposObligatorios.length; i++) {
            let campoDeFormulario = camposObligatorios[i];
            if(!textoEsValido({ campoAValidar: campoDeFormulario.valor }) || campoDeFormulario.valor.length < campoDeFormulario.reglas.minimoDeCaracteres) {
                formularioTerminado = !formularioTerminado;
                break;
            }
        }
        return formularioTerminado;
    }
  },
}
</script>
<style scoped>
#container-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-users {
    font-size: 0.9em;
}
</style>