import { useState } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import BuysSection from "./components/BuysSection"
import RentSection from "./components/RentSection"
import SellSection from "./components/SellSection"
import Agentspage from "./components/Agentspage"
import AboutSection from "./components/AboutSection"

function App() {
  const [page, setPage] = useState<
    "home" | "buy" | "rent" | "sell" | "agents" | "about"
  >("home")

  return (
    <>
      <Navbar
        onBuyClick={() => setPage("buy")}
        onRentClick={() => setPage("rent")}
        onSellClick={() => setPage("sell")}
        onAgentsClick={() => setPage("agents")}
        onAboutClick={() => setPage("about")}
        onLogoClick={() => setPage("home")}
      />
      {page === "buy" && <BuysSection />}
      {page === "rent" && <RentSection />}
      {page === "sell" && <SellSection />}
      {page === "agents" && <Agentspage />}
      {page === "about" && <AboutSection />}
      {page === "home" && (
        <>
          <HeroSection/>
          <Experience/>
        </>
      )}
      <Footer/>
    </>
  )
}

export default App




