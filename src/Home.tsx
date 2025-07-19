import { Hero } from "./pages/hero/Page"
import { Navbar } from "./pages/navbar/Page"

export const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
    </div>
  )
}

