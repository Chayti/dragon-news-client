import React, { useContext } from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaGoogle, FaGithub } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import QZone from '../QZone/QZone';
import img from '../../../assets/asset/bg.png';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';

const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const location = useLocation();
    const newsArticleRegex = /^\/news\/[a-zA-Z0-9]+$/i;
    const isNewsDetails = newsArticleRegex.test(location.pathname);

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <h4 className="fw-bold mb-4">Login With</h4>
            <Button onClick={handleGoogleSignIn} className='mb-2 w-100' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-dark" className='w-100'> <FaGithub /> Login with Github</Button>

            <h4 className="fw-bold my-4">Find Us On</h4>
            <div className='my-4'>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                </ListGroup>
            </div>

            <QZone></QZone>

            {(!isNewsDetails) &&
                <div className="position-relative">
                    <img src={img} alt="" style={{ width: "100%", height: "80%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <h4 className="fw-bold text-center text-white fs-2">Create an Amazing Newspaper</h4>
                        <p className="text-center text-white my-4">Discover thousands of options, easy to customize layouts, one-click to import demo and much more</p>
                        <div className="fixed-div text-center fw-bold">Learn More</div>
                    </div>
                </div>}
        </div>
    );
};

export default RightSideNav;