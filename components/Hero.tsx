import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Powering the Digital Future in Emerging Markets
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Invest in the next generation of data centers. Join us in building the infrastructure for tomorrows digital economy.
            </p>
          </div>
          <div className="space-x-4">
            <Button>Invest Now</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}