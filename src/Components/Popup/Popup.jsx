import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentItem } from '../../Redux/Reducers/RocketReducer';

function Popup() {
    const dispatch = useDispatch();

    const { currentItem } = useSelector((state) => state.rocket);

    const handleExit = () => {
        dispatch(setCurrentItem(null));
    }

  return (
    <div className='left-0 top-0 fixed inset-0'>
        <div className='relative inset-0'>
            <button onClick={handleExit} className='bg-black absolute inset-0 min-h-screen opacity-60'></button>
            <div className='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-white'>
                <p>{currentItem.rocket_name}</p>
            </div>
        </div>
    </div>
  )
}

export default Popup;