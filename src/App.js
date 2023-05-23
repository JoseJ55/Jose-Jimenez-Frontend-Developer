import React, { useEffect } from 'react';

import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import SearchForm from './Components/SearchForm/SearchForm';
import Grid from './Components/Grid/Grid';
import Popup from './Components/Popup/Popup';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setAllRocketData } from './Redux/Reducers/RocketReducer';

// I apologize this is not my best work and it is already after the time for when this is due. 
// I am out of practice with Tailwind CSS and spent way more time than I should have to refresh 
// myself on it. PHP is another thing I don't use often so I don't have it all memorized. My 
// thought process was simple on this project. I was planning a minimal style page. One thing I 
// would have liked to add was a 3D model of a rocket ship using Three.js on the banner. 
// Currently, I have a gif, but I would have liked to replace that with a 3D model that rotates 
// similarly. My search bar works on text change, so no need to press a button. Since the data is 
// already loaded and stored it was easy to search through the data. I was a bit confused about 
// the filter since the way I understood it was as a sorting tool, but the terminology was 
// filtered, I did make it into a sorting tool. Lastly, I was planning to add animation to most 
// things. After a new item changes in the search bar or if the filter changes I wanted the 
// results to animate upwards and fade in. These were some of my plans for the site, but since 
// some stuff doesn’t translate correctly to Tailwind I would need to go back and review the 
// logic and how some styles work again in order to fix this the way I wanted it. On my Github 
// I have examples of what I have been working on and what I am capable of, but I do understand 
// if that is not expectable. Thank you for this opportunity.

function App() {
  const dispatch = useDispatch();

  const { allData, currentItem } = useSelector((state) => state.rocket);

  // Using Fetch since I still need to refresh my self with PHP.
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/rockets', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(response.ok) {
        const data = await response.json();
        dispatch(setAllRocketData(data));
      } else {
        console.error('API request failed: ', response.status)
      }
    } catch (error) {
      console.error('An error occurred while trying to get data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bg-black'>
      <div className='min-h-screen relative'>
        <div className='absolute inset-0'>
          <Header />
          <Banner />
        </div>
      </div>
        <div className='relative'>
          <SearchForm />
          <Grid data={allData}/>
        </div>
       {currentItem && <Popup />}
    </div>
  );
}

export default App;
