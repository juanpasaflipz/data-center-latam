import Link from "next/link"
import { Database } from "lucide-react"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Database className="h-6 w-6 mr-2" />
        <span className="font-bold">7-OKS</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#investment">
          Investment
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}