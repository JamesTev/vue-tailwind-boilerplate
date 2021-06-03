
import axios from 'axios'
import { TokenService } from '../services/storage.service'

const ApiService = {

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    setHeader() {
        const token = TokenService.getToken()
        if(token && token !== ''){
            axios.defaults.headers.common["Authorization"] = `Token ${TokenService.getToken()}`
        }
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(resource) {
        return axios.get(resource)
    },

    post(resource, data) {
        return axios.post(resource, data)
    },

    put(resource, data) {
        return axios.put(resource, data)
    },

    delete(resource) {
        return axios.delete(resource)
    },

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
    **/
    customRequest(data) {
        return axios(data)
    }
}

const handleAxiosError = function(error){
    // Helper function to retrieve information from axios request errors
    // This is unforunately necessary since errors have different information available based on error type
    const errorObj = {
        data: {},
        status: 0,
        headers: new Array(),
        request: {},
        message: ''
    }
    if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        errorObj.data = error.response.data
        errorObj.status = error.response.status
        errorObj.headers = error.response.headers

    } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        errorObj.request = error.request
    } else {
        // Something happened in setting up the request and triggered an Error
        errorObj.message = error.message
    }
    return errorObj
}

// intercept errors and apply default handler, unless errorHandle=False
// e.g. axios.get('/user/1', {errorHandle: false})
axios.interceptors.response.use(
    function (response) {
        return response;
    }, 
    function(error) {
        // check for errorHandle config
        if( error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
            return Promise.reject(error);
        }
    
        return Promise.reject(handleAxiosError(error))
    });

class ApiError extends Error {
    constructor(obj) {
        super(message)
        this.name = this.constructor.name
        this.message = obj.message || ''
        this.errorCode = obj.errorCode || ''
    }
}

export {ApiService, handleAxiosError, ApiError}