import React, {useState} from 'react'
import { AddCategory } from '../components/AddCategory';
import { GifGrid } from '../components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Inuyasha'];

    const [categories, setCategories] = useState(['Samurai X']);

    // const handleAdd = () => {
    //     setCategories( ['Hunter X',...categories, ]);
    //     // setCategories(categories => [...categories, 'HunterXHunter'])
    // }

    return (
        <>
            <h2>Gif GifExpert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            {/* <button onClick={handleAdd}>Add</button> */}

            <ol>
               {
                  categories.map((category) => (
                    <GifGrid key={category} category={ category} />
                  )) 
               }
            </ol>
        </>
    )
}

export default GifExpertApp;
