import {
  About,
  Contact,
  Experience,
  Navbar,
  Hero,
  Tech,
  Works,
  StarsCanvas,
  Feedbacks,
} from "./components/index";
import { BrowserRouter } from "react-router-dom";

const App = function () {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
