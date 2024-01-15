import {Navbar, Nav, Container} from 'react-bootstrap'
import {navLinks} from '../data/index';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png'

const NavbarComponent = () => {
  const[changeColor, setChangeColor]= useState(false);

  const changeBackgroundColor = ()=>{
    if(window.scrollY > 10){
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(()=>{
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>    
      <Navbar expand="lg fixed-top navbar-scroll" className={changeColor ? "color-active" : ""}>
    <Container>
      <Navbar.Brand href="#home"><img src={logo} className='logo'></img></Navbar.Brand>
      <Navbar.Brand href="#home"><span>Kedai Katresna</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto text-center">
          {navLinks.map((link)=>{
            return(
              <div className='nav-link' key={link.id}>
                <NavLink to={link.patch} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } end>{link.text}</NavLink>
              </div>
            );
          })}
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
  )
}

export default NavbarComponent