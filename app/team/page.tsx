import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Maria Rodriguez",
    role: "CEO & Co-Founder",
    bio: "With over 20 years of experience in data center operations and strategic planning, Maria leads our vision for Latin America's digital infrastructure future.",
    image: "/placeholder.svg?height=100&width=100",
    linkedin: "https://www.linkedin.com/in/maria-rodriguez",
    twitter: "https://twitter.com/mariarodriguez"
  },
  {
    name: "Carlos Mendoza",
    role: "CTO",
    bio: "Carlos brings cutting-edge technical expertise to our team, ensuring our data centers leverage the latest innovations in energy efficiency and performance.",
    image: "/placeholder.svg?height=100&width=100",
    linkedin: "https://www.linkedin.com/in/carlos-mendoza",
    twitter: "https://twitter.com/carlosmendoza"
  },
  {
    name: "Ana Silva",
    role: "CFO",
    bio: "Ana's financial acumen and experience in investment banking guide our financial strategy and help maximize returns for our investors.",
    image: "/placeholder.svg?height=100&width=100",
    linkedin: "https://www.linkedin.com/in/ana-silva",
    twitter: "https://twitter.com/anasilva"
  },
  {
    name: "Luis Herrera",
    role: "COO",
    bio: "Luis oversees our day-to-day operations, ensuring seamless execution of our projects across multiple countries in Latin America.",
    image: "/placeholder.svg?height=100&width=100",
    linkedin: "https://www.linkedin.com/in/luis-herrera",
    twitter: "https://twitter.com/luisherrera"
  },
  {
    name: "Isabella Morales",
    role: "Head of Sustainability",
    bio: "Isabella leads our initiatives in sustainable data center practices, focusing on renewable energy integration and minimizing environmental impact.",
    image: "/placeholder.svg?height=100&width=100",
    linkedin: "https://www.linkedin.com/in/isabella-morales",
    twitter: "https://twitter.com/isabellamorales"
  },
  {
    name: "Javier Torres",
    role: "Director of Investor Relations",
    bio: "Javier manages our relationships with investors, providing transparent communication and identifying new opportunities for growth and partnership.",
    image: "/placeholder.svg?height=100&width=100",
    linkedin: "https://www.linkedin.com/in/javier-torres",
    twitter: "https://twitter.com/javiertorres"
  }
]

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Meet Our Team</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Our diverse team of experts brings together decades of experience in data center operations, technology innovation, and strategic business growth. Together, we&apos;re building the future of digital infrastructure in Latin America.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-center">{member.name}</CardTitle>
              <p className="text-sm text-muted-foreground text-center">{member.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-center mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn profile of {member.name}</span>
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter profile of {member.name}</span>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
        <p className="max-w-2xl mx-auto mb-8">
          We&apos;re always looking for talented individuals passionate about shaping the future of digital infrastructure in Latin America. If you&apos;re interested in joining our team, check out our current openings or send us your resume.
        </p>
        <Link href="/careers" className="text-blue-600 hover:underline">
          View Open Positions
        </Link>
      </div>
      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  )
}