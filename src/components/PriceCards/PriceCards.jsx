import React from 'react';

const PriceCards = ({price}) => {
    // console.log(price.features)
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4'>
            <h2 className='text-center'>
            <span className='text-5xl font-extrabold text-purple-700'>{price.price}</span>
            <span className='text-2xl text-white font-bold'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{price.type}</h5>
        </div>
    );
};

export default PriceCards;