import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Products from "../components/products"
import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

