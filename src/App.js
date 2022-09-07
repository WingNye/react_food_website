import React from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Food from './components/food/Food'
import Footer from './components/footer/Footer'

// Import Images
import Craft1 from './assets/food4.jpg'
import Craft2 from './assets/food2.jpg'
import Craft3 from './assets/food5.jpg'
import Craft4 from './assets/resturant1.jpg'

function App() {
  return (
  <>
    <Navbar />
    <Hero />
    <Food bgImg1={Craft1} bgImg2={Craft2} />
    <Food bgImg = {Craft3} />
    <Food bgImg = {Craft4} />
    <Footer />
 </>
  );
}

export default App;
