import React from 'react'
import { useState } from "react";
export default function drop({heading,value}) {
    const [rotation, setRotation] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const handleRotation= () => {
        setIsCollapsed(!isCollapsed)
        setRotation(rotation + 180); 
      
      };
      const styles={
        display: 'inline-block',
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease',
        marginBottom:'auto',
      }
  return (
    <div onClick={handleRotation}   className="cursor-pointer justify-between items-center border flex w-[848px] max-w-full gap-5 mt-11 px-6 py-4 rounded-xl border-solid border-blue-600 self-start max-md:flex-wrap max-md:mt-10 max-md:px-5">
      <div className="text-zinc-800 text-base font-semibold leading-7 ">
      {heading}
      
      <p  style={{display: isCollapsed ? 'none' : 'block'}}className="mt-5">
      {value}
      </p>
      </div>
     
    
    <img  style={styles}
          
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/41d1dbfbefa0e872a41ec093030280941582c1c5ac671c6f897ff83d21967471?apiKey=522a927c726c4104a37405ff517e8117&"
          className="aspect-square object-contain object-center w-6 overflow-hidden  shrink-0 max-w-full"
        />
      
      </div>
  )
}
