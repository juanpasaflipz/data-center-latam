import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Server, Shield, Zap, Users, Globe, BarChart } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">DataCenterDev Features</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <Server className="w-8 h-8 mb-2" />
            <CardTitle>Advanced Infrastructure</CardTitle>
          </CardHeader>
          <CardContent>
            <p>State-of-the-art servers and networking equipment to ensure high performance and reliability.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Shield className="w-8 h-8 mb-2" />
            <CardTitle>Robust Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Multi-layered physical and digital security measures to protect your data and investments.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="w-8 h-8 mb-2" />
            <CardTitle>Energy Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Innovative cooling systems and power management to minimize energy consumption and costs.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Users className="w-8 h-8 mb-2" />
            <CardTitle>Expert Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Experienced professionals in data center operations, ensuring smooth running and quick problem resolution.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Globe className="w-8 h-8 mb-2" />
            <CardTitle>Strategic Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Data centers positioned in key Latin American cities to provide optimal coverage and reduced latency.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <BarChart className="w-8 h-8 mb-2" />
            <CardTitle>Scalability</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Flexible infrastructure that can grow with your needs, from small deployments to large-scale operations.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Connectivity</h2>
          <p className="text-lg">Our data centers are carrier-neutral, allowing you to choose from a wide range of network providers. We offer direct connections to major cloud providers and internet exchanges, ensuring low-latency and high-bandwidth connections for your applications.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Compliance and Certifications</h2>
          <p className="text-lg">We adhere to international standards and local regulations, including ISO 27001 for information security management and TIER III certification for data center design and operation. This ensures that your data and operations meet the highest industry standards.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">24/7 Support</h2>
          <p className="text-lg">Our dedicated team of experts is available round-the-clock to provide technical support, ensuring your operations run smoothly at all times. We offer various levels of managed services to meet your specific needs.</p>
        </section>
      </div>
      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  )
}