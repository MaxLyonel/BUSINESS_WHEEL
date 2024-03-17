import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Api } from "../services"
import { onLogin, onLogout } from "../store"


export const useAuthStore = () => {

   const { status, user } = useSelector((state: any) => state.auth)
   const dispatch = useDispatch()

   const login = async ({ username, password } : {username: string, password: string}) => {
      try {
         const { data } = await Api.post('/authentication/login/', { username, password })
         localStorage.setItem('token', data.jwtToken)
         // localStorage.setItem('refresh', data.refresh)
         // const user = `${data.firstname} ${data.last_name}`
         // localStorage.setItem('user', user)
         // dispatch(onLogin(user))
      } catch (error: any) {
         dispatch(onLogout())
         const message = error.response.data.error
         console.log(message)
      }
   }

   const logout = () => {
      localStorage.clear()
   }

   const checkAuthToken = async () => {
      const token = localStorage.getItem('token')
      if ( token ) {
         const user = localStorage.getItem('user')
         return dispatch(onLogin(user))
      } else {
         localStorage.clear()
         dispatch(onLogout())
      }
   }

   return {
      status,
      user,
      login,
      logout,
      checkAuthToken
   }

}