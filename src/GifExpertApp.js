import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setCategories(cats => [...cats, 'Evangelion']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </>
    );
};

// export default GifExpertApp
