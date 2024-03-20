import { useAuthStore } from "../../hooks"
import frontPage from '../../assets/images/muserpol.jpg'

import { useFormik } from "formik"
import { useRef } from "react"
import { Toast } from 'primereact/toast'
import { InputText } from "primereact/inputtext"
import { classNames } from "primereact/utils"
import { Button } from "primereact/button"

export const AuthPage = () => {

   const toast:any = useRef(null)

   const show = () => {
      toast.current.show({ severity: 'success', summary: 'Formulario enviado', detail: formik.values.value})

   }

   const formik = useFormik({
      initialValues: {
         username: '',
         password: ''
      },
      validate: (data) => {
         console.log(data)
         let errors:any = {}

         if(!data.username) {
            errors.username = 'El usuario es requerido'
         }
         if(!data.passoword) {
            errors.password = 'La contraseña es requerida'
         }
         console.log(errors)
         return errors
      },
      onSubmit: (data:any) => {
         data && show()
         formik.resetForm()
      }
   })

   const isFormFieldInvalid = (param: any) => {
      console.log("param", param)
      console.log("formik.touched[param] =", formik.touched[param], "formilk.errors[param] =", formik.errors[param])
      return !!(formik.touched[param] && formik.errors[param])
   }

   const getFormErrorMessage = (name:any) => {
      return isFormFieldInvalid(name) ?
         <small className="p-error">
            {formik.errors[name]}
         </small> :
         <small className="p-error">
            &nbsp;
         </small>
   }

   // const { login } = useAuthStore()

   return (
      <div className="grid">
         <div className="col-4 w-6 hidden h-screen md:block" style={{maxWidth: '490px'}}>
            <img
               className="h-screen w-full"
               src={frontPage}
               alt="imagen alternativa"
               style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto'}}
            />
         </div>
         <div className="col-8">
            <div
               style={{padding: '20% 10% 20% 10%'}}
               className="p-fluid min-h-screen bg-auto md:bg-contain bg-no-repeat text-center w-full flex align-item-center md:align-items-start justify-content-center flex-column ">
               <div className="flex flex-column">
                  <form
                     onSubmit={formik.handleSubmit}
                     className="flex flex-column gap-2"
                  >
                     {/* {JSON.stringify(formik)} */}
                     <Toast ref={toast} />
                     <span className="p-float-label">
                        <InputText
                           id="username"
                           name="username"
                           value={formik.values.username}
                           onChange={(e) => {
                              formik.setFieldValue('username', e.target.value)
                           }}
                           className={classNames({ 'p-invalid': isFormFieldInvalid('username')})}
                        />
                        <label htmlFor="input_username">Ingrese su usuario</label>
                     </span>
                     {getFormErrorMessage('username')}
                     <Button type="submit" label="Submit"/>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}