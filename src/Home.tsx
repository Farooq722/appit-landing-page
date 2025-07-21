import { Footer } from "./pages/footer/Page"
import { Hero } from "./pages/hero/Page"
import { Hero2 } from "./pages/hero2/Page"
import { Hero3 } from "./pages/hero3/Page"
import { Hero4 } from "./pages/hero4/Page"
import { Hero5 } from "./pages/hero5/Page"
import { Navbar } from "./pages/navbar/Page"

export const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Footer />
    </div>
  )
}

