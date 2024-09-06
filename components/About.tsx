import { Button } from "@/components/ui/button"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About DataCenterDev</h2>
            <p className="text-gray-500 dark:text-gray-400">
              We are a team of experienced data center developers and operators with a vision to build the digital infrastructure backbone in Emerging Markets. Our projects combine cutting-edge technology with sustainable practices to create value for investors and communities alike.
            </p>
            <Button>Meet Our Team</Button>
          </div>
          <div className="space-y-4">
            <Image
              src="/placeholder.svg?height=300&width=400"
              width={400}
              height={300}
              alt="Data Center"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}