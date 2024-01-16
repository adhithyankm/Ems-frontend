import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
       <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand className='fw-bolder text-algin' >

            <Link to={'/'} style={{textDecoration:'none'}}/>

          <i class="fa-solid fa-user-group  fw-bolder">
            EMS-APPLICATION
            
            </i>
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header