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

  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (value: string) => {
    setSearchTerm(value)

    const search = value.trim().toLowerCase()

    if (search === "") {
      return
    }

    if (
      search.includes("rent") ||
      search.includes("rental") ||
      search.includes("portion")
    ) {
      setPage("rent")
      return
    }

    if (
      search.includes("plot") ||
      search.includes("sell") ||
      search.includes("sale")
    ) {
      setPage("sell")
      return
    }

    if (
      search.includes("buy") ||
      search.includes("house") ||
      search.includes("home")
    ) {
      setPage("buy")
      return
    }
  }

  return (
    <>
      <Navbar
        onBuyClick={() => setPage("buy")}
        onRentClick={() => setPage("rent")}
        onSellClick={() => setPage("sell")}
        onAgentsClick={() => setPage("agents")}
        onAboutClick={() => setPage("about")}
        onLogoClick={() => setPage("home")}
        onSearch={handleSearch}
      />

      {page === "buy" && (
        <BuysSection searchTerm={searchTerm} />
      )}

      {page === "rent" && (
        <RentSection searchTerm={searchTerm} />
      )}

      {page === "sell" && (
        <SellSection searchTerm={searchTerm} />
      )}

      {page === "agents" && <Agentspage />}

      {page === "about" && <AboutSection />}

      {page === "home" && (
        <>
          <HeroSection />
          <Experience />
        </>
      )}

      <Footer />
    </>
  )
}

export default App