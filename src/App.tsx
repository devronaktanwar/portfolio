import About from "./components/About"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Services from "./components/LatestWork"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Experience from "./components/Experience"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Services/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App