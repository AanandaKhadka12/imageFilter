import React from 'react';

const Foods = ({items}) => {
    return (
        <>
            

            <div className="menu-items container-fluid mt-5">

                <div className="row">

                    <div className="col-11 mx-auto">


                        <div className="row my-5">


                            {

                                items.map((ele)=>{


                                    const {id, name, image, description, price} = ele;

                                    return(

                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-4" key={id}>

                                            <div className="cards">

                                                <div className="card">

                                                    <img src={image} alt={name} className="card__img" />
                                                    <div className="card__info">

                                                        <span className="card__category">{name}</span>
                                                    
                                                        <p>{description}</p>

                                                        <div className="menu-price-book">

                                                            <div className="price-book-divide d-flex justify-content-between">

                                                                <h2>Price:{price}</h2>
                                                                <a href="#">

                                                                    <button className="btn btn-primary">Order Now</button>

                                                                </a>

                                                            </div>
                                                            <p>Prices may change.</p>

                                                        </div>

                                                        
                                                    </div>

                                                </div>

                                            </div>

                                        </div>



                                    );


                                })


                            }

                        </div>

                    </div>

                </div>

            </div>




        </>
    )
}

export default Foods;
