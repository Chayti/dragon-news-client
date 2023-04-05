import React from "react";
import "./Marquee.css";

const Marquee = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="marquee-container container">
                <div className="fixed-div">Latest</div>
                <div className="marquee">
                    <span className="marquee-text">
                        Match Highlights: Germany vs Spain — as it happened !Match Highlights: Germany vs Spain as they are curious to defeat each other. Both of them played very well.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Marquee;
