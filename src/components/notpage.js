import React, {useState} from 'react';

function Notpage() {
  const [time,setTime] = useState(5); //timer length (second)
  //timer
  setInterval( function(){
   setTime(time-1);
   if(time===1) {
     window.history.back();
   }} ,1000);
   
  return(
    <div  style={{fontSize:"3rem" ,textAlign:"center"}}>
   Error 404 <br/> not Found Page <br/> <h2 style={{color:"red"}}>{time}</h2> saniye içinde <br/> bir önceki sayfaya yönlendirileceksiniz.
    </div>
    );
}
export default Notpage;