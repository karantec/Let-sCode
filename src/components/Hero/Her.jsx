import React from 'react'

const Her = () => {
  return (
    <div>
   <section className="text-gray-600 body-font bg-slate-200">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="ml-6  text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
      
      <p className="mb-8  text-2xl leading-relaxed font-display text-black">At Let's Code ,  we are dedicated to empowering individuals in their tech  journey by providing free study materials and job updates. Our mission is to <br/> make quality tech education accessible to everyone, regardless of their background or financial constraints.</p>
      <div className="flex justify-center">
        <button className="inline-flex font-display text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Jobs</button>
        <a href="https://competitions-and-programs-list.vercel.app/"><button className="ml-4 inline-flex font-display text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">competitions and Programme List</button></a>
      </div>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded-full " alt="hero" src="teach.png" width="720px" height="600"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Her