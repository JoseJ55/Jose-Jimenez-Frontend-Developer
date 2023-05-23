import React from 'react';

import { useSelector } from 'react-redux';

function Grid() {
    const { searchValue, filterValue } = useSelector((state) => state.rocket);

  return (
    <div className='text-white'>
        search: {searchValue} filter: {filterValue}
    </div>
  )
}

export default Grid;