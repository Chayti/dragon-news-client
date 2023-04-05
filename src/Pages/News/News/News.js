import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useTitle from '../../../hooks/useTitle';
import { FaArrowLeft } from "react-icons/fa";
import HorizontalCards from '../../Shared/HorizontalCards/HorizontalCards';

const News = () => {
    const news = useLoaderData();
    useTitle('News Details')

    const { title, details, image_url, category_id } = news;
    return (
        <div>
            <h4 className="fw-bold mb-4">Dragon News</h4>
            <Card>
                <Card.Img className="p-4" variant="top" src={image_url} />
                <Card.Body className="p-4">
                    <Card.Title className="fs-2 fw-bold mb-4">{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`} style={{ textDecoration: "none" }} >
                        <Button style={{ backgroundColor: "#D72050", border: "0" }} className="d-flex align-items-center">
                            <FaArrowLeft className="me-2" />
                            All news in this category
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
            <HorizontalCards />
        </div>
    );
};

export default News;