import React from 'react';
import ImageCard from './ImageGallery';
import './ImageGallery.module.css';

const ImageGallery = ({images, openModal}) => {
    return (
        <ul className='ImageGallery'>
            {images.map((image) => (
                <ImageCard key={image.id} image={image} openModal={openModal} />
            ))}
        </ul>
    );
};

export default ImageGallery;