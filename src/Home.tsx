import { Hero } from "./pages/hero/Page"
import { Hero2 } from "./pages/hero2/Page"
import { Hero3 } from "./pages/hero3/Page"
import { Navbar } from "./pages/navbar/Page"

export const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
    </div>
  )
}

