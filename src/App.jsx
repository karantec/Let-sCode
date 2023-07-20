import Navbar from "./components/Navbar/Navbar"
import Her from "./components/Hero/Her"
import About from "./components/Abou/About"
import Services from "./components/Servic/Services" 
import Blog from "./components/Blogs/Blog"
import  Contact  from "./components/Contat/Contact"
import Foot from "./components/Footer/Foot"
function App() {

  return (
    <>
    <div>
     <Navbar/>
     <Her/>
     <About/>
     <Services/>
     <Blog/>
     <Contact/>
     <Foot/>
      </div>
    </>
  )
}

export default App
