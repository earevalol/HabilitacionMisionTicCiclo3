import React from "react"
import PrivateRouter from "../Components/PrivateRouter"

const PrivateLayout = ({children}) => {
  return (
      <PrivateRouter>
        <div>
          Este es mi private Router
          {children}
        </div>
      </PrivateRouter>
      )

}
export default PrivateLayout
