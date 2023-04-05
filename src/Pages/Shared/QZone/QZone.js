import React from 'react';
import img1 from '../../../assets/asset/qZone1.png'
import img2 from '../../../assets/asset/qZone2.png'
import img3 from '../../../assets/asset/qZone3.png'

const QZone = () => {

    return (
        <div style={{
            backgroundColor: "#F3F3F3"
        }}>
            <h4 className="fw-bold pt-3 ps-4 my-4">Q- Zone</ h4>
            <div className="mb-4 border-0 mx-auto" style={{ width: "85%" }}>
                <img className="mb-3" src={img1} />
                <img className="mb-3" src={img2} />
                <img className="mb-3" src={img3} />
            </div>
        </div >
    );
};

export default QZone;