import React from "react";

const Text = ({title, color}) => {
  return (
    <div style={{color:color}}>
        <p>{title.toUpperCase()}</p>
    </div>
  )
}

export default Text