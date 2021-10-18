import React from "react";
import '../assets/style/nav.scss'
import { useHistory } from "react-router";
/*eslint-disable */


const Navbar= () => {
  const history =useHistory()

    return (
        <div className="Container">
         <nav style={{paddingTop:'25px', paddingBottom:'25px'}} class="navbar navbar-expand-lg navbar-dark bg-dark">
  <h1 style={{width:'14%', marginLeft:'32px', color:'white'}}>MOBILKU</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
     
      <li style={{paddingRight:"10px", fontSize:'20px'}} class="nav-item">
        <a onClick={() => history.push ('/')} style={{color:'white'}}  class="nav-link" href="#">Home</a>
      </li>
      <li style={{paddingRight:"10px", fontSize:'20px'}} class="nav-item">
        <a  onClick={() => history.push ('/list')} style={{color:'white'}}  class="nav-link" href="#">Produk</a>
      </li>
      <li style={{paddingRight:"10px", fontSize:'20px'}} class="nav-item">
        <a  style={{color:'white'}}  class="nav-link" href="#">Sewa</a>
      </li>
    </ul>
        <div className="rihtlogin">
        <div class="nav-item dropdown">
        <a style={{color: 'red', fontSize:'20px' }} class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          My MOBILKU
        </a>
      </div>
        </div>
  </div>
</nav>
    </div>
    )
   
}


export default Navbar