import React from "react"
import Navbars from '../Components/Navbars';
const PublicLayout = ({children}) => {
  return (
    <div>
      <Navbars />
      Este es mi PublicLayout
      {children}
      
    </div>
      )

}
export default PublicLayout

