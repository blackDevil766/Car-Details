import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";



function CarDesciption(props) {
    return (
        <>
            <div className="car-description-container">
                <div className="car-Desciption">
                    <div className="car-img"><img src="imgs/car.jpg" alt="" /></div>
                    <div className="car-data">

                        <div className="car-title">
                            <h2 className="title">Hyundai Venue</h2>
                            <div>
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<p className="button-tooltip-2">delete</p>}
                                >
                                    <img className="ico" src="imgs/trash.svg" alt="" />
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<p className="button-tooltip-2">edit</p>}
                                >
                                    <img className="ico" src="imgs/penEdit.svg" alt="" />
                                </OverlayTrigger>

                            </div>
                        </div>

                        <h4>Description:</h4>
                        <p className="descipe">
                            The <span>Hyundai Venue</span> is cheap to own - and to buy. it starts at just $18,470
                            including a $1,120 desription charge. although it's packed with impressive features, it's
                            the least expensive vehicle in it's class by far, which is cause for it's popularity as will as it's
                            place at the top of the cost-to-own rankings.
                        </p>
                    </div>


                </div>

                <div className="car-branch-data">
                    <ul>
                        <li><h4>Total Amount:     </h4> <p>12 Piece     </p></li>
                        <li><h4>Branch:           </h4> <p>Saudi Branch </p></li>
                        <li><h4>Amount in Branch: </h4> <p>134          </p></li>
                    </ul>
                </div>
            </div>


        </>
    )
}


export default CarDesciption;