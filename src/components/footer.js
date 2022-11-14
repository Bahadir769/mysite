import React, {useState,useEffect} from 'react';
import '../css/footer.css'
function Footer() {
  const [top,setTop] = useState("100px");
  const setposition=()=> {
  let bodyH= document.body.offsetHeight;
  let scrnH = 892;
  let mrgnT= scrnH - (bodyH%scrnH);
  setTop(mrgnT+"px");
  }
  useEffect(()=>{
    setposition();
  });
  return (
    <div  style={{marginTop:top}} class="footer">
    <div>
    <img class="footerlogo" src="logo.png" alt="logo" />
    <p> osman son </p>
    </div>
    <div>
    <h5>page</h5>
    <a href="about" >about</a>
    <a href="contact" >contact</a>
    <a href="home" >home</a>
    </div>
    <div>
    <h5>social media</h5>
    <a href="insta" ><i class="fa fa-instagram "/></a>
    <a href="https://m.facebook.com/100040941548976/?locale2=tr_TR"><i class="fa-brands fa-facebook"/></a>
    </div>
    <div id="telif" >
    <p > © telif bilgileri 2022</p>
    </div>
    </div>
    );
}

export default Footer;