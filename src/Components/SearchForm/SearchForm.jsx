import React, { useState } from 'react';

import { setSearchValue, setFilterValue } from '../../Redux/Reducers/RocketReducer';
import { useDispatch, useSelector } from 'react-redux';

function SearchForm() {
    const [showDropDown, setShowDropDown] = useState(false);

    const dispatch = useDispatch();

    const { searchValue } = useSelector((state) => state.rocket);

    const filterOptions = ["First Flight", "Country", "Name"];

    const handleSearchChange = (e) => {
        dispatch(setSearchValue(e.target.value));
    }

    const handleFilterChange = (name) => {
        dispatch(setFilterValue(name));
    }

    return (
        <div className='text-white grid grid-cols-12 justify-items-center items-stretch p-10'>
            <div className='col-start-3 col-end-7 w-full'>
                <input className='w-full text-black p-2 rounded' type='text' placeholder='Search' onChange={handleSearchChange} value={searchValue} />
            </div>

            <div className='col-start-8 col-end-10 w-full relative'>
                <button className='w-full p-2 rounded bg-white text-black' type='button' onClick={() => setShowDropDown(!showDropDown)}>Filter</button>
                {showDropDown ? 
                    <div className='flex flex-col justify-content absolute w-full mt-1 z-10'>
                        {filterOptions.map((option, index) => (
                            <button className='mt-2 p-1 bg-white text-black w-full rounded' key={index} onClick={() => handleFilterChange(option)}>{option}</button>
                        ))}
                    </div>
                : null}
            </div>
        </div>
    )
}

export default SearchForm