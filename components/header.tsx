"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="PlusZero Logo" width={40} height={40} />
            <span className="text-xl font-bold text-white">PLUSZERO</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-zinc-800 hover:text-white">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-cyan-900 to-zinc-900 p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">AI Trading Platform</div>
                          <p className="text-sm leading-tight text-white/80">
                            Our flagship product with advanced AI algorithms for market analysis and trading.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:text-white"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none text-white">Market Analysis</div>
                          <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
                            Real-time insights and predictive analytics for global markets.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:text-white"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none text-white">Risk Management</div>
                          <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
                            Advanced tools to protect your capital and optimize returns.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:text-white"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none text-white">API Access</div>
                          <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
                            Integrate our AI trading capabilities into your existing systems.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      navigationMenuTriggerStyle() + " bg-transparent text-white hover:bg-zinc-800 hover:text-white"
                    }
                  >
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      navigationMenuTriggerStyle() + " bg-transparent text-white hover:bg-zinc-800 hover:text-white"
                    }
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      navigationMenuTriggerStyle() + " bg-transparent text-white hover:bg-zinc-800 hover:text-white"
                    }
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">{/* Login/signup buttons removed */}</div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/resources"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Login/signup buttons removed */}
          </div>
        </div>
      )}
    </header>
  )
}

