import React from 'react'
import Link from 'next/link'
import { Button } from "./ui/button"

const Navigation: React.FC = () => {
  return (
    <nav>
      <Link href="/invest">
        <Button>Invest Now</Button>
      </Link>
      <Link href="/learn-more">
        <Button variant="outline">Learn More</Button>
      </Link>
      <Link href="/features">
        <Button variant="link">Features</Button>
      </Link>
    </nav>
  )
}

export default Navigation