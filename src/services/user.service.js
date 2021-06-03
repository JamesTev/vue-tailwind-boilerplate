import {ApiService, handleAxiosError} from './api.service'
import { TokenService } from './storage.service'

class ApiError extends Error {
    constructor(errorCode, message) {
        super(message)
        this.name = this.constructor.name
        this.message = message
        this.errorCode = errorCode
    }
}

const UserService = {
    /**
     * Login the user and store the access token to TokenService. 
     * 
     * @returns access_token
     * @throws ApiError 
    **/
    login: async function(email, password) {
        const requestData = {
            method: 'post',
            url: "auth/login/",
            data: {
                username: email,
                password: password,
            }
        }
        try {
            const response = await ApiService.customRequest(requestData)
            TokenService.saveToken(response.data.key)
            TokenService.saveRefreshToken(response.data.refresh_token)
            ApiService.setHeader()
            
            return response.data.access_token
        } catch (errorObj) { // note: axios interceptor formats error and returns errorObj here
            throw new ApiError(errorObj.status, errorObj.data.detail || '')
        }
    },
    signup: async function(email, pw1, pw2) {
        const requestData = {
            method: 'post',
            url: "auth/register/",
            data: {
                username: email,
                email: email,
                password1: pw1,
                password2: pw2
            }
        }
        try {
            const response = await ApiService.customRequest(requestData)
            TokenService.saveToken(response.data.key)
            TokenService.saveRefreshToken(response.data.refresh_token)
            ApiService.setHeader()
            
            return response.data.access_token
        } catch (errorObj) { // note: axios interceptor formats error and returns errorObj here
            throw new ApiError(errorObj.status, errorObj.data.detail || '')
        }
    },
    /**
     * Fetch details of logged in user
     * 
     * @returns userDetails
     * @throws ApiError 
    **/
     getUserDetails: async function() {
        try {
            const response = await ApiService.get('auth/user/')
            return response.data
        } catch (error) {
            const errorObj = handleAxiosError(error)
            throw new ApiError(errorObj.status, errorObj.data.detail || '')
        }
    },
    /**
     * Fetch a groups of logged in user
     * 
     * @returns userGroupData
     * @throws ApiError 
    **/
     getUserGroups: async function() {
        try {
            const response = await ApiService.get('social/groups/my-groups/')
            return response.data
        } catch (error) {
            const errorObj = handleAxiosError(error)
            throw new ApiError(errorObj.status, errorObj.data.detail || '')
        }
    },

    /**
     * Refresh the access token.
    **/
    refreshToken: async function() {
        const refreshToken = TokenService.getRefreshToken()

        const requestData = {
            method: 'post',
            url: "auth",
            data: {
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            }
        }

        try {
            const response = await ApiService.customRequest(requestData)

            TokenService.saveToken(response.data.access_token)
            TokenService.saveRefreshToken(response.data.refresh_token)
            // Update the header in ApiService
            ApiService.setHeader()

            return response.data.access_token
        } catch (error) {
            throw new ApiError(error.response.status, error.response.data.detail)
        }
    },
    /**
     * Logout the current user by removing the token from storage. 
     * 
     * Will also remove `Authorization Bearer <token>` header from future requests.
    **/
    logout() {
        // Remove the token and remove Authorization header from Api Service as well 
        TokenService.removeToken()
        TokenService.removeRefreshToken()
        ApiService.removeHeader()
    }
}

export default UserService

export { UserService, ApiError as AuthenticationError}