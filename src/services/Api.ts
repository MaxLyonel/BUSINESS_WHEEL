import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { getEnvVariables } from '../helpers'


const { VITE_HOST_BACKEND } = getEnvVariables()
const isUserActive: boolean = false

const createAxiosInstance = (baseURL: string) => {
   const instance = axios.create({
      baseURL: `${baseURL}`
   })

   const verifyToken = () => {
      return setInterval(() => {
         if( !isUserActive ) {
            const token = localStorage.getItem('token')
            if( token !== null && token !== undefined ) {
               const decoded = jwtDecode(token)
               if( isTokenExpired(decoded.exp) ) {
                  localStorage.clear()
                  window.location.href = '/'
               }
            }
         }
      }, 30000)
   }

   instance.interceptors.request.use( (request) => {
      const token = localStorage.getItem('token')
      if ( token ) {
         request.headers.set('Authorization', `Bearer ${token}`)
         let intervalId = verifyToken()
         setTimeout( () => {
            clearInterval(intervalId)
            intervalId = verifyToken()
         }, 30000)
      }
      return request
   }, (error) => {
      return Promise.reject(error)
   })

   instance.interceptors.response.use( (response) => {
      console.log("Respuesta interceptada...!", response)
      return response
   }, (error) => {
      return Promise.reject(error)
   })

   return instance
}

const isTokenExpired = ( expirationDate: any) => {
   const now = new Date().getTime()
   expirationDate *= 1000
   return now > expirationDate
}

export const Api = createAxiosInstance(VITE_HOST_BACKEND)