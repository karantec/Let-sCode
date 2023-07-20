
const Navbar = () => {
  return (
    <div>
        <header className=" from-green-500 bg-green-500 text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src="/"/>
      <span className="ml-3 text-xl">Let's Code</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About</a>
      <a className="mr-5 hover:text-gray-900">Services</a>
      <a className="mr-5 hover:text-gray-900">Blogs</a>
      <a className="mr-5 hover:text-gray-900">Contactus</a>
      <a className="mr-5 hover:text-gray-900">Footer</a>
    </nav>
    <button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">Login
     
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar