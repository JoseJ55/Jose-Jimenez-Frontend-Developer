import React from 'react';

import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import SearchForm from './Components/SearchForm/SearchForm';
import Grid from './Components/Grid/Grid';

function App() {
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
          <Grid />
        </div>
    </div>
  );
}

export default App;
