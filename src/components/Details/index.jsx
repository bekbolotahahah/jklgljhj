import React from "react";



const Deteil = ({brand,image,modal,price,id,description}) => {
    return (
        <>
            <div className="deteil">
                <div className="top__detail">
                    <div className="big__detayl"><img src={image} alt="" /></div>
                    <div className="bottom__diteyl">
                        <div className="mini__datail1"></div>
                        <div className="mini__datail2"></div>
                        <div className="mini__datail3"></div>
                    </div>
                </div>


                
                <div className="left__detyl">
                    <div className="topPart__detayl">
                        <div></div>
                        <div className="top__part__text5"><h1>{brand}</h1> <h2>{modal}</h2></div>

                    </div>

                    <div className="deteyl__size">

                        <div className="size__brend"><h1>S</h1></div>
                        <div className="size__brend"><h1>M</h1></div>
                        <div className="size__brend"><h1>L</h1></div>
                        <div className="size__brend"><h1>XL</h1></div>
                    </div>

                    <div className="inc__dec__de">

                        <div><span>+</span></div>
                        <div><span>1</span></div>
                        <div><span>-</span></div>


                    </div>
                    <div className="prise__looo">
                        <div></div>
                        <div>
                            <div className="deteyl__prise__4"><h1>{price}</h1></div>
                            <div className="buutton__prise"></div>
                        </div>
                    </div>
                </div>


   
            </div>
        </>
    )
}

export default Deteil