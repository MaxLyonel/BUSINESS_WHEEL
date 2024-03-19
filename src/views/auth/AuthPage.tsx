import { useAuthStore } from "../../hooks"
import { Button } from 'primereact/button'


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
         <div className="card flex justify-content-center">
            <Button label="check" icon="pi pi-check"/>
         </div>
      </>
   )
}