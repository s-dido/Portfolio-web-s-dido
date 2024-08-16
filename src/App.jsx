import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from './components';

function App() {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div>
        <Navbar/>
        <Hero/>
        <StarsCanvas/>
      </div>
      <div className="bg-zinc-950">
        <About/>
        <Experience/>
        <Works/>
      </div>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>        
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
