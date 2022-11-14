import React, {useState} from 'react';
import '../css/galeri.css';

function Galeri(props) {
  const [index, setINDEX] = useState(0);
  
  const next=()=> {
    if (index+1<props.src.length){
    setINDEX(index+1);
    }
  }
  const before=()=> {
    if (index-1>=0){
    setINDEX(index-1);
    }
  }
  return (
    <div class="galeri" >
      <img src={props.src[index]} alt="resim" /> 
      <button onClick ={next} style={{right:"0px"}} ><i class="fa fa-arrow-right" /></button>
      <button onClick ={before} style={{left:"0px"}} ><i class="fa fa-arrow-left" /></button>
    </div>
    );
}

export default Galeri;