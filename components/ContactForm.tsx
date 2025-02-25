import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Get in Touch
        </h2>
        <div className="mx-auto max-w-lg space-y-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input placeholder="Company" />
          <Input placeholder="Investment Amount" />
          <Button className="w-full">Request Information</Button>
        </div>
      </div>
    </section>
  )
}