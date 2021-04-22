import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";

require("dotenv").config();

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    console.log(loading);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            {loading && (
                <p className="animate__animated animate__flash">Loading</p>
            )}
            <div className="card-grid">
                <ol>
                    {images.map((img) => (
                        <GifGridItem key={img.id} {...img} />
                    ))}
                </ol>
            </div>
        </>
    );
};
