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
        <div className='text-white'>
            <div>
                <input type='text' placeholder='Search' onChange={handleSearchChange} value={searchValue} />
            </div>

            <div>
                <button type='button' onClick={() => setShowDropDown(true)}>Filter</button>
                {showDropDown ? 
                    <div>
                        {filterOptions.map((option, index) => (
                            <button key={index} onClick={() => handleFilterChange(option)}>{option}</button>
                        ))}
                    </div>
                : null}
            </div>
        </div>
    )
}

export default SearchForm