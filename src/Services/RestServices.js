import axios from 'axios'

const URL_API_SERVICES = 'http://localhost:8081/'; // process.env.URL_API_SERVICES

const servicioRestPost = async ({ servicioUrl, peticionServicio, headers = { TOKEN_AUTORIZACION: null } }) => { 
    let estatusDeProceso = { CON_ERROR: false, RESPUESTA: null };
    try {
        const { TOKEN_AUTORIZACION } = headers;
        const METODO_API = URL_API_SERVICES + servicioUrl;
        const URL_SERVICIO_REST = METODO_API;
        const HEADER_SERVICIO_REST = TOKEN_AUTORIZACION != null ? construirHeaders(TOKEN_AUTORIZACION) : null;
        const RESPUESTA = await axios.post(URL_SERVICIO_REST, peticionServicio, HEADER_SERVICIO_REST);
        estatusDeProceso.RESPUESTA = await RESPUESTA.data;
    }
    catch({ response }) {
        estatusDeProceso.CON_ERROR = true;
        if(response.status == 400) {
            alert(response.data.message);
        }
        console.log(excepcion);
    }
    return estatusDeProceso;
}

const servicioRestGet = async ({ servicioUrl, headers = { TOKEN_AUTORIZACION: null } }) => { 
    let estatusDeProceso = { CON_ERROR: false, RESPUESTA: null };
    try {
        const { TOKEN_AUTORIZACION } = headers;
        const METODO_API = URL_API_SERVICES + servicioUrl;
        const URL_SERVICIO_REST = METODO_API;
        const HEADER_SERVICIO_REST = TOKEN_AUTORIZACION != null ? construirHeaders(TOKEN_AUTORIZACION) : null;
        const RESPUESTA = await axios.get(URL_SERVICIO_REST, HEADER_SERVICIO_REST);
        estatusDeProceso.RESPUESTA = await RESPUESTA.data;
    }
    catch(excepcion) {
        estatusDeProceso.CON_ERROR = true;
        console.error(excepcion);
    }
    return estatusDeProceso;
}

const construirHeaders = (token) => {  
    let header = { headers: { Authorization: `Bearer ${token}` } };
    return header;
};

export { servicioRestPost, servicioRestGet };