'use client'

import { Header } from "./Header"
import { Hero } from "./Hero"
import { Features } from "./Features"
import { InvestmentOpportunities } from "./InvestmentOpportunities"
import { About } from "./About"
import { ContactForm } from "./ContactForm"
import { FAQ } from "./FAQ"
import { Footer } from "./Footer"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <InvestmentOpportunities />
        <About />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}