import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumb.styles"

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {
            clickable ? (
                <Link to={`${movieId}`}>
                    <Image src={image} alt={movieId} />
                </Link>
            )
                :
                <Image src={image} alt={movieId} />
        }

    </div>
)

export default Thumb;