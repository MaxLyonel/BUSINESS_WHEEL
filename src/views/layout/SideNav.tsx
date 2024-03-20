import { Divider } from "primereact/divider"
import { Sidebar } from "primereact/sidebar"
import { useState } from "react"


export const SideNav = () => {

   const [ visible, setVisible ] = useState(false)


   return (
      <div className="card flex justify-content-center">
         {/* <Sidebar
            visible={visible}
            onHide={() => setVisible(false)}
            content={({ closeIconRef, hide }) => (
               <div className="min-h-screen flex relative lg:static surface-ground">
                  <div id="app-sidebar-2" className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                     <div className="flex flex-column h-full">
                        <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                           <span className="inline-flex align-items-center gap-2">
                              <svg>
                                 
                              </svg>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         >
         </Sidebar> */}
      </div>
   )
}