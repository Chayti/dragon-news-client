import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')
    const from = location.state?.from?.pathname || '/';

    const linkStyle = {
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        textDeoration: "none"
    };

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className="">
            <h2 className="text-center fw-bold">Login your account</h2>
            <hr className="my-5" />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control className="py-3" name="email" type="email" placeholder="Enter your email address" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control className="py-3" name="password" type="password" placeholder="Enter your password" required />
                </Form.Group>

                <Button className="w-100 py-3 mt-3" variant="dark" type="submit">
                    Login
                </Button>

                <Link to="/register" >
                    <span className="mt-2" style={linkStyle}>
                        Go to register
                        <FaUserPlus className="mx-2" />
                    </span>
                </Link>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form >
        </div >
    );
};

export default Login;