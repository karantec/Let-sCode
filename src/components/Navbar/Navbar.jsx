
const Navbar = () => {
  return (
    <div>
        <header className=" from-green-500 bg-green-500 text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img  className="w-10 h-10" src="logo.png" alt="logo "/>
      <span className="ml-3 text-xl font-display font-bold text-white">Let's Code</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900 font-display">Home</a>
      <a className="mr-5 hover:text-gray-900 font-display">About</a>
      <a className="mr-5 hover:text-gray-900 font-display">Services</a>
      <a className="mr-5 hover:text-gray-900 font-display">Blogs</a>
      <a className="mr-5 hover:text-gray-900 font-display">Contact</a>
      
    </nav>
 <button className="inline-flex items-center font-display text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">Login
     
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
