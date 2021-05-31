
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';



function Navigation() {
    return (
      
      <div className="App">
     
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Web Scrapping News Portal </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
        <Navbar.Text>
            Rizaldo Abdulrachman 14117152   <a href="https://github.com/RizaldoAR/webscrapping-webapp.git"><Image width="32" height="32" src="https://digitallabs.mmu.ac.uk/wp-content/uploads/2018/04/github_logo.png" rounded /></a>
        </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      </div>
    );
  }
  
  export default Navigation;