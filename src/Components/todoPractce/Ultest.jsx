import React from 'react'

export default function Ultest(prop) {
  return (
    <div>
          <li><i className="fas fa-window-close" onClick={()=>{
              prop.deleteitem(prop.id);
          }}></i> {prop.task}</li>
    </div>
  )
}
