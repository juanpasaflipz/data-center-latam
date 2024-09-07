import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function InvestNowPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Invest in Latin America&apos;s Digital Future</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Investment Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Choose from our range of investment options:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Seed Round: $100K - $5M</li>
              <li>Series A: $500K - $20M</li>
              <li>Strategic Partnership: Custom amounts</li>
            </ul>
            <p>Our data centers offer high ROI potential in the rapidly growing Latin American market.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Express Your Interest</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Full Name" />
              <Input type="email" placeholder="Email Address" />
              <Input placeholder="Company Name" />
              <Input type="tel" placeholder="Phone Number" />
              <Input type="number" placeholder="Intended Investment Amount ($)" />
              <Button className="w-full">Submit Interest</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  )
}