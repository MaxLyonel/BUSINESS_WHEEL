import { useAuthStore } from "../../hooks"


export const AuthPage = () => {

   const { login } = useAuthStore()

   const handleClick = () => {
      const username = 'max'
      const password = 'max'
      login({ username, password})
   }

   return (
      <>
         Hola mundo <br />
         <button onClick={handleClick}>consultar</button>
      </>
   )
}