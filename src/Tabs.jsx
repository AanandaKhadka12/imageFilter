import React from 'react';
import Menu from './Menu';

const Tabs = ({checkItem, tabCats}) => {
    return (
        <>
            
            <div className="menu-tabs container">

                <div className="menu-tab d-flex justify-content-around">

                    
                    {

                        tabCats.map((curElem,indx) =>{


                            return(

                                <button className="btn btn-warning" onClick={()=>{

                                    checkItem(curElem);


                                }} key={indx}>{curElem}</button>



                            );


                        })



                    }
                    
                </div>

            </div>


        </>
    )
}

export default Tabs;
;