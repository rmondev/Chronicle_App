import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function MainNav() {

const router = useRouter();
const [searchText, setSearchText] = useState(''); // Add this line

function handleClick(e) {
    e.preventDefault()
    console.log(searchText);
    setSearchText(''); // Add this line
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='brand-name'>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="search-bar"
              value={searchText} // Add this line
              onChange={e => setSearchText(e.target.value)} // Add this line
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="info" size="sm" className='submit-button' onClick={handleClick}>
              <div>
                <Image
                    src="/mag-icon.png"
                    width={20}
                    height={20}
                    alt="Srch"
                  />    
                </div>
              </Button>
          </Col>
        </Row>
      </Form>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          <Link href="/" passHref>
                <Nav.Link as="div" active={router.pathname === "/"} onClick={(e) => {e.preventDefault(); router.push("/")}}>
                        Home
                </Nav.Link>
            </Link>

          <Link href="/profile" passHref>
            <Nav.Link as="div" active={router.pathname === "/profile"} onClick={(e) => {e.preventDefault(); router.push("/profile")}}>
                    Profile
                </Nav.Link>
            </Link>

            <Link href="/" passHref>
            <Nav.Link as="div" active={router.pathname === "/"} onClick={(e) => {e.preventDefault(); router.push("/")}}>
                    Log Out
                </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
