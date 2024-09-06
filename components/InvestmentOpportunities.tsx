import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InvestmentOpportunities() {
  return (
    <section id="investment" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Investment Opportunities
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Seed Round</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$5M</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Minimum investment: $100K</p>
              <ul className="mt-4 space-y-2">
                <li>Early access to prime locations</li>
                <li>Higher equity stake</li>
                <li>Quarterly investor updates</li>
              </ul>
              <Button className="w-full mt-4">Invest Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Series A</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$20M</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Minimum investment: $500K</p>
              <ul className="mt-4 space-y-2">
                <li>Expansion to multiple countries</li>
                <li>Technology upgrades</li>
                <li>Monthly investor calls</li>
              </ul>
              <Button className="w-full mt-4">Express Interest</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Strategic Partnership</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">Custom</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Tailored to your needs</p>
              <ul className="mt-4 space-y-2">
                <li>Co-development opportunities</li>
                <li>Exclusive service agreements</li>
                <li>Board representation</li>
              </ul>
              <Button className="w-full mt-4">Contact Us</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}