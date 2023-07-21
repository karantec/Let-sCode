import React from 'react'

const About = () => {
  return (
<>
<section className="text-gray-600 body-font ml-5 flex display-center">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl  py-4 ml-6  text-2xl font-display text-center text-green-500 font-bold uppercase  mb-20">What We Are ?
    
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
         <img  className ="w-6 h-6 rounded-full" src="mission.png" alt="mission"/>
         
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font  mb-2 font-display font-bold">Mission </h2>
          <p className="leading-relaxed font-display text-black">We understand the importance of staying up-to-date with the ever-evolving technology landscape. That's why we curate and provide comprehensive study materials on various tech topics, ranging from programming languages and web development to data science, artificial intelligence, and beyond. </p>
          <a className="mt-3 text-white ml-2 px-2 inline-flex items-center bg-green-500 py-2 rounded-lg ">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
        <img  className ="w-6 h-6 rounded-full" src="mission.png" alt="mission"/>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2 font-display font-bold">Vision</h2>
          <p className="leading-relaxed font-display text-black">Educational guidance is primarily concerned with the student's success in their educational career. We guide students to achieve their dream jobs by providing proper guidance and resources.</p>
          <a className="mt-3 text-white ml-2 px-2 inline-flex items-center bg-green-500 py-2 rounded-lg ">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
        <img  className ="w-6 h-6 rounded-full" src="goal.png" alt="mission"/>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-display font-bold mb-2">Goal</h2>
          <p className="leading-relaxed  text-black font-display">We also help students improve their resumes, LinkedIn profiles, and GitHub profiles. So don't wait, reach out to us for any help!</p>
          <a className="mt-3 text-white ml-2 px-2 inline-flex items-center bg-green-500 py-2 rounded-lg ">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div> 
    </div>
  </div>
</section>
    </>
  )
}

export default About