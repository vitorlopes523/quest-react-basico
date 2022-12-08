import React from "react";

export const Text = ({children, color}) => {
  return <p style={{color:color}}>
              {children.toUpperCase()}
         </p>
    
  
}
