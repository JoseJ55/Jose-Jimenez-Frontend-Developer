/* eslint-disable react/prop-types */
import React from 'react';

import { useDispatch } from 'react-redux';
import { setCurrentItem } from '../../Redux/Reducers/RocketReducer';

// eslint-disable-next-line react/prop-types
function Card({ data }) {
    const disptach = useDispatch();

    const handleCardClick = (item) => {
        disptach(setCurrentItem(item));
    }

  return (
    <div className='w-1/3 rounded overflow-hidden mx-2 col-4 relative justify-items-center items-center cursor-pointer' onClick={() => handleCardClick(data)}>
        <img className='bg-cover' src={data.flickr_images[0]} alt={`${data.rocket_name} rocket`} />
        <p className='absolute bottom-5 right-2/4 justify-items-center items-center'>{data.rocket_name}</p>
    </div>
  )
}

export default Card;