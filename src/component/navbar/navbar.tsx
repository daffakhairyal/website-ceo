"use client";

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, X } from "lucide-react"
import {useRouter} from 'next/navigation'
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [searchClicked, setSearchClicked] = useState(false)
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  
  const isHome = pathname === "/"
  const navbarClass = isHome && !scrolled
    ? "absolute  bg-black/50"
    : "fixed top-0 bg-white/80 backdrop-blur-md shadow-md"

  const handleSearch = () => {
    if (searchQuery.trim()) {
        router.push(`/search?query=${encodeURIComponent(searchQuery)}`)
  }
}

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") handleSearch()
}


  // 🔹 Tambahkan efek scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile" },
    { name: "Business Line", href: "/business"},
    { name: "Gallery", href: "/gallery" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  const profileSubmenu = [
    { name: "Profil Perusahaan", href: "/profile" },
    { name: "Profil Direksi", href: "/direksi" },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
     className={`w-full z-50 transition-all duration-500 ${navbarClass}`}
    >
      <div className="max-w-screen-xl mx-auto px-6 pt-6 relative">
        <nav className="flex justify-between items-center">

          {/* ===== Desktop Menu ===== */}
          <div className="hidden md:flex items-center">
            {/* Logo */}
            <a
              href="/"
              className={`text-2xl px-4 font-bold text-blue-500 tracking-tight hover:text-blue-700 transition  
                ${!scrolled && isHome ? "text-blue-500 hover:text-blue-600" : "hover:text-blue-700 before:text-blue-700"}`}
            >
                <Image
    src="/images/logo.png"
    alt="logo"
    width={50} // atur sesuai kebutuhan
    height={50}
    className="inline-block"
  />
            </a>

            <div className="flex space-x-1 relative">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                const isProfile = link.name === "Profile"
                return (
                  <div
                    key={link.name}
                    className="relative py-4 group"
                    onMouseEnter={() => isProfile && setHoveredMenu("Profile")}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <a
                      href={link.href}
                      className={`relative font-medium transition-all duration-300 py-5 px-4 
                         hover:bg-slate-100 text-sm
                        before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[3px] 
                        before:w-0  before:transition-all before:duration-300 
                        hover:before:w-full
                        ${isActive ? "text-yellow-600" : "text-gray-700"}
                        ${!scrolled && isHome ? "text-white hover:bg-white/20 before:bg-yellow-500" : "hover:text-gray-900 before:bg-yellow-500"}
                      `}
                        
                    >
                        
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="underline"
                          className="absolute left-0 bottom-0 h-[4px] w-full bg-yellow-600 rounded-full"
                        />
                      )}
                    </a>

                    {/* Submenu Profil */}
                    {isProfile && (
                      <div className="absolute top-full hidden group-hover:block pt-2">
                        <div
                          className="w-full hidden group-hover:block  
                            bg-white shadow-lg rounded-md min-w-[180px] border border-gray-100
                          "
                        >
                          {profileSubmenu.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                                ${pathname === sub.href ? "text-blue-600" : ""}
                              `}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}


                  </div>
                )
              })}
            </div>
          </div>

          {/* ===== Mobile Menu Bar ===== */}
          <div className="flex items-center justify-between w-full md:hidden py-3">
            {/* Logo */}
            <a
              href="/"
              className="text-2xl font-bold text-blue-600 tracking-tight hover:text-blue-700 transition"
            >
              CEO<span className="text-gray-700">.</span>
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 ${!scrolled && isHome ? "text-white" : "hover:text-gray-900"}`}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* ===== Search Bar (Desktop Only) ===== */}
          {/* <div className="flex items-center gap-3">
            <button onClick={()=> setSearchClicked(!searchClicked)} className="relative cursor-pointer">
             {!searchClicked ? <Search className={`h-6 ${!scrolled && isHome ? "text-white" : "hover:text-gray-900"}`} /> : <X className={`h-6 ${!scrolled && isHome ? "text-white" : "hover:text-gray-900"}`} /> } 
            </button>
          </div> */}
        </nav>

        {/* ===== Search Input (Desktop Only) ===== */}
{/* <AnimatePresence>
  {searchClicked && (
    <motion.div
      key="search-bar"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute top-full left-0 w-full mt-3"
    >
      <div className="relative max-w mx-auto bg-white rounded-xl shadow-lg overflow-hidden ring-1 ring-gray-200">
        <input
          type="text"
          placeholder="Type to search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
          className="w-full px-4 py-2.5 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
          autoFocus
        />
        <button onClick={handleSearch} className="absolute right-3 top-2.5 text-gray-500 hover:text-blue-600 transition">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence> */}



        {/* ===== Mobile Menu (Dropdown) ===== */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col space-y-1 pb-4"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)} // auto close when clicked
                    className={`block w-full text-left py-3 px-4 rounded-md transition-all duration-200
                      ${isActive ? "bg-blue-100 text-blue-700" : "text-white hover:bg-gray-100"}
                    `}
                  >
                    {link.name}
                  </a>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
