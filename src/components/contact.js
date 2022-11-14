import React  from 'react';
import '../css/contact.css'

function About() {
  return(
    <div class="contact">
    <h1>İletişim Bilgisi</h1>
      <div >
         <a href="mailto:" class="fa-solid fa-envelope fa-10x"><p>email</p></a>
         <a href="insta" class="fa fa-instagram fa-10x"><p>instagram</p></a>
         <a href="https://m.facebook.com/100040941548976/?locale2=tr_TR"class="fa-brands fa-facebook fa-10x"><p>facebook</p></a>
         <a href="tel:05432976032" class="fa-solid fa-phone fa-10x"><p>telefon</p></a>
         <a href="https://wa.me/905432976032"  class="fa-brands fa-whatsapp fa-10x"><p>whatsapp</p></a>
       
      </div>
    </div>
    );
}
export default About;