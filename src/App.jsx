import { BrowserRouter } from "react-router-dom";

import { About, AboutMe, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative">
                <StarsCanvas />
                <div className='bg-primary'>
                    <Navbar />
                    <Hero />
                    <AboutMe />
                    {/* <About /> */}
                    <Experience />
                    {/* <Tech /> */}
                    <Works />
                    <Feedbacks />
                    <Contact />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
