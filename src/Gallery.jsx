import React, { useState } from 'react';
import Menu from './Menu';
import Foods from './Foods';
import Tabs from './Tabs';


const allTabsValues = [...new Set(Menu.map((curVal) =>{


    return curVal.category;

})), "all"]

// console.log(allTabsValues);



const Gallery = () => {

    const [items,setItems] = useState(Menu);
    const [tabsCat,setTabsCat] = useState(allTabsValues);


    const checkItems = (choice) =>{


        if(choice === "all"){

            setItems(Menu);
            return;

        }



        setItems(


            Menu.filter((elem)=>{


                return elem.category === choice;

            })


        )
        
        


    }

    return (
        <>
         
            <h1 className="mt-5 text-center main-heading">order your favourite dish</h1>
            <hr />

            <Tabs checkItem={checkItems}
                tabCats={tabsCat}
            />
            
            <Foods items={items} />
            


        </>
    );
}

export default Gallery;
