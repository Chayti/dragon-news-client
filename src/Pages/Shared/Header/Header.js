import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import title from '../../../../src/assets/title.png';
import Marquee from '../Marquee/Marquee';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    const linkStyle = {
        textDecoration: "none", // remove underline
        color: "inherit", // use parent color
        fontSize: "1.2rem" // increase font size
    };

    const renderTooltip = (props) => (
        <Tooltip id="profile-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            {(!isLoginPage && !isRegisterPage) &&
                <div className="mt-5 mb-0 text-center">
                    <img src={title} alt="website title" />
                    <p className="text-secondary pt-3 mb-2 fs-5">Journalism Without Fear or Favour</p>
                    <p className="fs-5">Sunday, <span className="text-secondary">November 27, 2022</span></p>
                </div>}

            {(!isLoginPage && !isRegisterPage) && <Marquee></Marquee>}

            <Navbar collapseOnSelect className='mb-4 container' expand="lg" bg="transparent">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div style={{ width: "8%" }}></div>
                    <Nav className="mx-auto">
                        <Nav.Link><Link to='/' style={linkStyle}>Home</Link></Nav.Link>
                        <Nav.Link> <Link to='./' style={linkStyle}>About</Link></Nav.Link>
                        <Nav.Link><Link to='./' style={linkStyle}>Career</Link></Nav.Link>
                    </Nav>
                    <Nav className="d-flex align-items-center">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Link to="/profile">
                                {user?.photoURL ? (
                                    <Image style={{ height: "40px", border: "3px solid black" }} roundedCircle src={user?.photoURL} />
                                ) : (
                                    <FaUser className="text-black" style={{ height: "40px" }} />
                                )}
                            </Link>
                        </OverlayTrigger>
                        <div className="">
                            {
                                user?.uid ?
                                    <Button className="mx-3" variant="dark" onClick={handleLogOut}>Log out</Button>
                                    // <FaSignOutAlt className="ms-3" />
                                    :
                                    <Link to='/login'><Button className="mx-3" variant="dark">Login</Button></Link>
                            }
                        </div>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;