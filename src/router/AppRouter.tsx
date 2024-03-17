
import { Routes, Route } from "react-router-dom"
import { useAuthStore } from "../hooks"
import { useEffect } from "react"
import { AuthPage } from "../views/auth/AuthPage"

export const AppRouter = () => {

   const { status, checkAuthToken } = useAuthStore()

   useEffect(() => {
      checkAuthToken()
   }, [])

   return (
      ( status == 'not-authenticated' ) ?
      <AuthPage />
      :
      <Routes>
         <Route />
      </Routes>

   )
}