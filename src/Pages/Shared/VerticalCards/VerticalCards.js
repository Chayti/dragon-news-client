import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../../../assets/asset/1.png'
import img2 from '../../../assets/asset/2.png'
import img3 from '../../../assets/asset/3.png'
import { FaCalendar } from 'react-icons/fa';

const VerticalCards = () => {

    return (
        <>
            <Card className="mb-5 border-0">
                <Card.Img variant="top" src={img1} />
                <Card.Title className="fw-bold my-3 text-justify">Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                <div className="d-flex justify-content-between">
                    <span className="fw-bold">Sports</span>
                    <div className="d-flex align-items-center">
                        <FaCalendar className='text-black me-2' />
                        Jan 24, 2023
                    </div>
                </div>
            </Card>
            <Card className="mb-5 border-0">
                <Card.Img variant="top" src={img2} />
                <Card.Title className="fw-bold my-3 text-justify">Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                <div className="d-flex justify-content-between">
                    <span className="fw-bold">Sports</span>
                    <div className="d-flex align-items-center">
                        <FaCalendar className='text-black me-2' />
                        Jan 24, 2023
                    </div>
                </div>
            </Card>
            <Card className="mb-5 border-0">
                <Card.Img variant="top" src={img3} />
                <Card.Title className="fw-bold my-3 text-justify">Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                <div className="d-flex justify-content-between">
                    <span className="fw-bold">Sports</span>
                    <div className="d-flex align-items-center">
                        <FaCalendar className='text-black me-2' />
                        Jan 24, 2023
                    </div>
                </div>
            </Card>
        </>
    );
};

export default VerticalCards;