import React , {useState} from 'react';
import '../css/header.css'
function Header(){
  const [searchb, setSer] = useState(true);
  
  const openSearch =() =>{
    if(searchb) {
      setSer(false);
    }
    else {
      setSer(true);
    }
  }
  
  const Logo = () => {
    return(
      <img class="logo" src="logo.png" alt="logo" />
      );
  }
  const Nav=() =>{
  return(
    <nav class="navbar">
    <a href="home" class="">Anasayfa</a>
    <a href="about" class="">Hakkımızda</a>
    <a href="contact" class="">İletişim</a>
    </nav>
    );
  }
  const Button =() => {
    return(
    
    <div class="buttons">
    <button>
    {searchb ? 
    <i onClick={openSearch} class="fa fa-search" aria-hidden="true"></i>
    : 
    <i onClick={openSearch} class="fa fa-close" aria-hidden="true"></i>
    }
    </button>
    </div>
      );
  }
  const Input=() =>{
  return(
    <input id="Idsearch" type="search" />
    );
}
  return(
    <React.Fragment>
    {searchb ?<header class="header"><Logo/><Nav/><Button/></header>:<header class="header"><Logo/><Input/><Button/></header>}
    </React.Fragment>
    );
}

export  default Header;