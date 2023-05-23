import React from 'react';

function Banner() {
  return (
    <div className='grid grid-cols-12 bg-black p-10 justify-items-center items-center'>
        <p className='col-span-4 text-white p-5 text-2xl'>At <span className='text-cyan-700'>SpaceX</span>, we specialize in converting things from impossible to late</p>
        <div className='col-span-8 inset-0'>
            {/* This is just a place holder. If there is time planning to add a #D model of a Falcon rocket with a similar animation. */}
            <div className="aspect-w-16 aspect-h-9 inset-0 w-full h-full">
            <iframe
                src="https://giphy.com/embed/3oKIPtjElfqwMOTbH2"
                className='inset-0'
                width="700"
                height="460"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            </div>
            {/* <p><a href="https://giphy.com/gifs/space-spin-2d-3oKIPtjElfqwMOTbH2">via GIPHY</a></p> */}
        </div>
    </div>
  )
}

export default Banner;