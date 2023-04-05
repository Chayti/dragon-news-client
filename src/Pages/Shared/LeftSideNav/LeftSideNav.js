import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VerticalCards from '../VerticalCards/VerticalCards';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dragon-news-server-seven.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    const linkStyle = {
        textDecoration: "none", // remove underline
        color: "gray"
    };

    return (
        <div>
            <h4 className="fw-bold">All Category</h4>
            <div className="fw-bold text-center py-2 my-4" style={{
                backgroundColor: "#E7E7E7"
            }}>National News</div>
            <div className="ps-5">
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} style={linkStyle}>{category.name}</Link>
                    </p>)
                }
            </div>
            <VerticalCards></VerticalCards>
        </div >
    );
};

export default LeftSideNav;