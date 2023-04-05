import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {

    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    const newsArticleRegex = /^\/news\/[a-zA-Z0-9]+$/i;// here we can use includes to do easily without regex
    const isNewsDetails = newsArticleRegex.test(location.pathname);

    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    {(!isNewsDetails) &&
                        <Col lg="3" className='d-none d-lg-block'>
                            {(!isLoginPage && !isRegisterPage) && <LeftSideNav></LeftSideNav>}
                        </Col>
                    }
                    {(!isNewsDetails)
                        ? <Col lg="6">
                            <Outlet></Outlet>
                        </Col>
                        : <Col lg="9">
                            <Outlet></Outlet>
                        </Col>
                    }
                    <Col lg="3">
                        {(!isLoginPage && !isRegisterPage) && <RightSideNav></RightSideNav>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;