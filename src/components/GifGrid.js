import React from 'react';

export const GifGrid = ({category}) => {
    const getGifs = () => {
        const url = "api.giphy.com/v1/gifs/search"
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data)
    }

    getGifs()
    return (
        <div>
            <h3> {category} </h3>
        </div>
    )
}
