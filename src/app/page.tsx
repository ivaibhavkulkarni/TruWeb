import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Products from "../components/products"
import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"
import ServicesSection from "../components/service-section"
import ReviewsSection from "../components/reviews-section"
import RippleDemo from "../components/ripple-demo"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <RippleDemo/>
      <Products />
      <ServicesSection />
      <ReviewsSection />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

