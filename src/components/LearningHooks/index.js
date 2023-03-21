import { React, useState } from "react";

const LearningHooks = (props) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 ,amount:0});
  const handleMove = (e) =>{
    setCoords({...coords,x:e.clientX,y:e.clientY})
  }
  const handleClick = () =>{
    setCoords({...coords,amount: coords.amount + 1})
  }
  return (
    <div onMouseMove={handleMove} onClick={handleClick} style={{width:"100%",height:"80vh",background:"teal"}}>
      <p>X:{coords.x}</p>
      <p>Y:{coords.y}</p>
      <p>Amount:{coords.amount}</p>
    </div>
  );
};

export default LearningHooks;
