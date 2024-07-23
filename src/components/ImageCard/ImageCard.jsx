import React from 'react';
import './ImageCard.module.css';

const ImageCard = ({image, openModal}) => {
    return (
        <li className='ImageCard'>
            <div onClick={() => openModal(image)}>
            <img src={image.urls.small} alt={image.alt_description} />
            </div>
        </li>
    );
};

export default ImageCard;