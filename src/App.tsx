import { About } from "./components/About";
// import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ContactUs } from "./components/ContactUs";
// import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import "./App.css";
import { Toaster } from "./components/ui/toaster";


const App = () =>{
  return (
    <>
      <Toaster/>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      { /* <Cta /> */ }
      { /* <Testimonials /> */ }
      <Team />
      { /* <Pricing /> */ }
      <FAQ />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
