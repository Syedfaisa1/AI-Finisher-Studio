// import { useState } from 'react'; // 1. Add this import!
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import "./index.css";
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import SolutionSection from "./components/SolutionSection";
// import TargetAudienceSection from "./components/TargetAudienceSection";
// import Expertise from "./components/Expertise";
// import Scroller from './components/Scroller';
// import HowItWorks from "./components/HowItWorks";
// import Method from "./components/Method";
// import FAQ from "./components/FAQ";
// import Pricing from "./components/Pricing";
// import Footer from "./components/Footer";
// import FormModal from './components/FormModal';

// // Import your new About page based on your folder structure
// import About from "./components/pages/About"; 
// import Solutions from './components/pages/Solutions';
// import ScrollToTop from './components/ScrollToTop';
// import OurSolutions from './components/pages/OurSolutions';
// import Works from './components/pages/works';
// import Blog from './components/pages/Blog';

// // Create a wrapper component for your landing page sections
// function Home({ onOpenForm }){
//   return (
//     <>
//       <Hero onOpenForm={onOpenForm} />
//       {/* <SolutionSection /> */}
//       <Scroller/>
//       <TargetAudienceSection onOpenForm={onOpenForm} />
//       <Expertise />
//       <HowItWorks />
//       <Method />
//       <FAQ />
//       <Pricing />
//     </>
//   );
// }

// function App() {
//   // 2. Define the state right here!
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   return (
//     <Router>
//       <ScrollToTop />
//       <main className="bg-[#0a0a0a] min-h-screen flex flex-col">
//         {/* Now these functions will work perfectly */}
//         <Navbar onOpenForm={() => setIsFormOpen(true)} />
        
//         {/* Everything inside Routes changes based on the URL */}
//         <div className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home onOpenForm={() => setIsFormOpen(true)}/>} />
//             <Route path="/about" element={<About />} />
//             <Route path="/solutions" element={
//             <>
//             <Solutions />
//             <Works />
//             </>
//             } />
//             <Route path="/blog" element={<Blog />} />
//           </Routes>
//         </div>

//         <Footer onOpenForm={() => setIsFormOpen(true)} />
//         <FormModal 
//           isOpen={isFormOpen} 
//           onClose={() => setIsFormOpen(false)} 
//         />
//       </main>
//     </Router>
//   );
// }

// export default App;

import { useState, useEffect } from 'react'; // ADDED: useEffect
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // ADDED: useLocation
import "./index.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolutionSection from "./components/SolutionSection";
import TargetAudienceSection from "./components/TargetAudienceSection";
import Expertise from "./components/Expertise";
import Scroller from './components/Scroller';
import HowItWorks from "./components/HowItWorks";
import Method from "./components/Method";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import FormModal from './components/FormModal';

// Import your pages
import About from "./components/pages/About"; 
import Solutions from './components/pages/Solutions';
import ScrollToTop from './components/ScrollToTop';
import OurSolutions from './components/pages/OurSolutions';
import Works from './components/pages/works';
import Blog from './components/pages/Blog';

// --- HOME COMPONENT WITH AUTO-SCROLL LOGIC ---
function Home({ onOpenForm }){
  const location = useLocation();

  useEffect(() => {
    // Check if the URL has a hash (like #pricing)
    if (location.hash) {
      // Find the element by removing the '#' symbol
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Wait a tiny bit for the page to render, then scroll to it!
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, start at the top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero onOpenForm={onOpenForm} />
      {/* <SolutionSection /> */}
      <Scroller/>
      <TargetAudienceSection onOpenForm={onOpenForm} />
      <Expertise />
      <HowItWorks />
      <Method />
      <FAQ />
      {/* Added onOpenForm here so your pricing buttons open the modal! */}
      <Pricing onOpenForm={onOpenForm} /> 
    </>
  );
}

// --- MAIN APP COMPONENT ---
function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <main className="bg-[#0a0a0a] min-h-screen flex flex-col">
        
        <Navbar onOpenForm={() => setIsFormOpen(true)} />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenForm={() => setIsFormOpen(true)}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={
              <>
                <Solutions />
                <OurSolutions />
                <Works />
              </>
            } />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>

        <Footer onOpenForm={() => setIsFormOpen(true)} />
        <FormModal 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
        />
      </main>
    </Router>
  );
}

export default App;