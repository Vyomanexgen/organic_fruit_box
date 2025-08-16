import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero_section from './components/HeroSection/Hero_section'
import Menu from './components/Menu/Menu'
import Service_section from './components/ServiceSection/Service_section'
import Mission from './components/Mission/Mission'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import { BrowserRouter as Router } from 'react-router-dom'
import PriceBox from './components/PriceBox/PriceBox'
import Reviews from './components/Review/Review'
import { motion } from "framer-motion";


function App() {
  const [loading, setLoading] = useState(true);
  const [slideBar, setSlideBar] = useState(true)

  useEffect(() => {

    setTimeout(() => setLoading(false), 2000);
  }, [])

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <motion.div
            className="fruit-circle"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            🍎
          </motion.div>
          <motion.p
            className="loading-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          >
            Freshness Loading...
          </motion.p>
        </div>

      ) :

        (

          <main className="App">

            <Router>
              <Navbar 
              slideBar={slideBar}
              setSlideBar={setSlideBar}
              />
              <div>
                <section id="home">
                  <Hero_section />
                </section>

                <section id="menu">
                  <Menu />
                </section>

                <section id="priceBox">
                  <PriceBox />
                </section>

                <section id="services">
                  <Service_section />
                </section>

                <section id="mission">
                  <Mission />
                </section>

                <section id="reviews">
                  <Reviews />
                </section>

                <section id="contact">
                  <Contact />
                </section>

                <Footer />
              </div>
            </Router >

          </main >)}
    </>
  )
}

export default App
