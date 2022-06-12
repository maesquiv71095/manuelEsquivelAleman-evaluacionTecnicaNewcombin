const textoEsValido = ({ campoAValidar }) => { 
    let esValido = false
    if(typeof campoAValidar === 'string' || campoAValidar instanceof String) {
        if (campoAValidar != null && campoAValidar != undefined && campoAValidar != '' && campoAValidar.replace(/\s/g, '').length) {
            esValido = true;
        }
    }
    return esValido;
}

export { textoEsValido }