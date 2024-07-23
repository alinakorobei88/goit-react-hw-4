import React from 'react';
import './LoadModeBtn.module.css';

const LoadMoreBtn = ({onClick}) => (
    <button className='LoadMoreBtn' onClick={onClick}>Load More</button>
);

export default LoadMoreBtn;