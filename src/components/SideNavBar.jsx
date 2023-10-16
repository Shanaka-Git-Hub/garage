import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './SideNavBar.css'
function SideNavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}
      style={{position:'absolute',top:'10px',left:'15px'}} className='menu-btn'>
        <FontAwesomeIcon icon={faBars}/>
      </Button>

      <Offcanvas show={show} onHide={handleClose} className='side-vav-bg'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Service</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <div className="side-nav">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
         </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideNavBar;