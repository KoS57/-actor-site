import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'



const Header = () => {
    return (<Navbar bg="dark" expand="lg" >
        <Container>
            <Navbar.Brand href="/main" className='text-light'>Эдуард Кихтенко</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  className='text-light'/>
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav  className="ml-auto" >
                    <Nav.Link href='/biograf' className='text-light'>Биография</Nav.Link>
                    <Nav.Link href='/creation' className='text-light'>Творчество</Nav.Link>
                    <Nav.Link href='/gallery' className='text-light'>Галерея</Nav.Link>
                    <Nav.Link href='/' className='text-light'>Контакты</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    )
}


export default Header

//-------------------------------------
// <div className={s.text}  >
//                     <NavLink to="/main" activeClassName={s.activeLink}> Эдуард Кихтенко</NavLink>
//                 </div>
//                 <div className={s.text} >
//                     <NavLink to="/biograf" activeClassName={s.activeLink}>  Биография </NavLink>
//                 </div>
//                 <div className={s.text} >
//                     <NavLink to="/creation" activeClassName={s.activeLink}>  Творчество </NavLink>
//                 </div>
//                 <div className={s.text} >
//                     <NavLink to="/gallery" activeClassName={s.activeLink}>  Галерея </NavLink>
//                 </div>
//                 <div className={s.text} >
//                     <NavLink to="/gallery" activeClassName={s.activeLink}>  Контакты </NavLink>
//                 </div>



