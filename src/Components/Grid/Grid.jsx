/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useMemo, useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentData } from '../../Redux/Reducers/RocketReducer';

import Card from '../Card/Card';

// eslint-disable-next-line react/prop-types
function Grid({ data }) {
    const { searchValue, filterValue, currentData, allData } = useSelector((state) => state.rocket);

    const dispatch = useDispatch();

    // const [currentData, setCurrentData] = useState([...data])
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (number) => {
        setCurrentPage(number);
    }

    const totalPages = useMemo(() => Math.ceil(currentData.length / 9), [currentData]);

    const searchFor = () => {
        // Function is for filtering the data with the search bar.
        const filtered = allData.filter((item) => item.rocket_name.toLowerCase().includes(searchValue.toLowerCase()));
        dispatch(setCurrentData(filtered));
    }

    useMemo(() => {
        // UseMemo is used here so it doesn't search for the same values.
        searchFor();
    }, [searchValue])

    const filterFor = () => {
        if(filterValue === "First Flight") {
            const sortedItems = allData.slice().sort((a, b) => new Date(a.first_flight) - new Date(b.first_flight));
            dispatch(setCurrentData(sortedItems));
            return;
        }

        if(filterValue === "Country") {
            const sortedItems = allData.slice().sort((a, b) => {
                if (a.country < b.country) {
                  return -1;
                }
                if (a.country > b.country) {
                  return 1;
                }
                return 0;
            });
            dispatch(setCurrentData(sortedItems));
            return;
        }

        if(filterValue === "Name") {
            const sortedItems = allData.slice().sort((a, b) => {
                if (a.rocket_name < b.rocket_name) {
                  return -1;
                }
                if (a.rocket_name > b.rocket_name) {
                  return 1;
                }
                return 0;
            });
            dispatch(setCurrentData(sortedItems));
            return;
        }

        dispatch(setCurrentData(allData));
    }

    useEffect(() => {
        filterFor();
    }, [filterValue])

  return (
    <div className='text-white grid grid-cols-12 justify-items-center items-stretch p-10'>
        <div className='col-start-2 col-end-10 w-full grid-flow-row'>
            {currentData.map((item) => {
                return (
                    <div key={item.id} className='col-4'>
                        <Card data={item} />
                    </div>
                )
            })}
        </div>

        {/* pages section */}
        <div className='col-start-2 col-end-10 w-full'>
            {Array.from({ length: totalPages }, (_, index) => (
                <button key={index} onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                </button>
            ))}
        </div>
    </div>
  )
}

export default Grid;