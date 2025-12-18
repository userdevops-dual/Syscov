import Navbar from "./components/Navbar/Navbar";
import HeroSlider from "./components/Herodiv/HeroSlider";
import ServicesHome from "./components/Services/ServicesHome";
import Slidebar from "./components/Slidebar/Slidebar";
import OrdersTrack from "./components/ordersTrack/orderstrack";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/Reviews/Reviews";
import Insights from "./components/Insights/Insights";
import ContactSection from "./components/ContactSection/ContactSection";


function App() {
  return (
    <>
      <Navbar />
      <HeroSlider/>
      <Slidebar/>
      <Insights/>
      <ServicesHome/>
      <Reviews/>
      <OrdersTrack/>
      <ContactSection/>
      <Footer/>

    </>
  );
}

export default App;
