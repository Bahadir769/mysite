import React  from 'react';
import Galeri from './galeri.js'
import '../css/about.css'

function About() {
  const src = ["logo.png","background.jpg"];
  return(
    <div class="about">
    <h1>Hakkımızda </h1>
    <br/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada dui nulla, a hendrerit massa sollicitudin quis. Donec in blandit arcu. Morbi a mi libero. Nulla eget libero justo. Maecenas sit amet quam ac odio ullamcorper tempor scelerisque non magna. Phasellus congue elit eget neque ullamcorper euismod. Vivamus non porta magna, ut semper orci.</p>
    <p>ahey ahey aheyyy
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada dui nulla, a hendrerit massa sollicitudin quis. Donec in blandit arcu. Morbi a mi libero. Nulla eget libero justo. Maecenas sit amet quam ac odio ullamcorper tempor scelerisque non magna. Phasellus congue elit eget neque ullamcorper euismod. Vivamus non porta magna, ut semper orci.
    </p>
    <p> buraları birisi doldursun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada dui nulla, a hendrerit massa sollicitudin quis. Donec in blandit arcu. Morbi a mi libero. Nulla eget libero justo. Maecenas sit amet quam ac odio ullamcorper tempor scelerisque non magna. Phasellus congue elit eget neque ullamcorper euismod. Vivamus non porta magna, ut semper orci. </p>
    <p>fiyat bilgisi nedir? 29917272719108272 milyar sikke Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada dui nulla, a hendrerit massa sollicitudin quis. Donec in blandit arcu. Morbi a mi libero. Nulla eget libero justo. Maecenas sit amet quam ac odio ullamcorper tempor scelerisque non magna. Phasellus congue elit eget neque ullamcorper euismod. Vivamus non porta magna, ut semper orci. </p>
    <p>kendinizi korumayı öğrenin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada dui nulla, a hendrerit massa sollicitudin quis. Donec in blandit arcu. Morbi a mi libero. Nulla eget libero justo. Maecenas sit amet quam ac odio ullamcorper tempor scelerisque non magna. Phasellus congue elit eget neque ullamcorper euismod. Vivamus non porta magna, ut semper orci.</p>
    <p>kursumuzdan görüntüler</p>
      <Galeri src={src}/>
    </div>
    );
}
export default About;