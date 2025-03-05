import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Mail, MapPin, Phone, FileText, MessageSquare, Video, HelpCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Have questions about our AI trading platform? Our team is here to help you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription className="text-zinc-400">
                Fill out the form and our team will get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="min-h-[120px] border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500"
                  />
                </div>
                <Button className="mt-2 bg-gradient-to-r from-cyan-500 to-teal-400 text-black hover:from-cyan-600 hover:to-teal-500">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="bg-zinc-900 text-white">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription className="text-zinc-400">
                  Reach out to us through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-start space-x-4">
                  <Mail className="mt-0.5 h-5 w-5 text-cyan-400" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-zinc-400">info@pluszero.app</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="mt-0.5 h-5 w-5 text-cyan-400" />
                  <div>
                    <h3 className="font-medium">Website</h3>
                    <p className="text-zinc-400">pluszero.app</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-0.5 h-5 w-5 text-cyan-400" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-zinc-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-cyan-400" />
                  <div>
                    <h3 className="font-medium">Office</h3>
                    <p className="text-zinc-400">
                      123 Trading Street, Suite 456
                      <br />
                      Financial District, New York, NY 10001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Replacing Business Hours with Support Options */}
            <Card className="bg-zinc-900 text-white">
              <CardHeader>
                <CardTitle>Support Options</CardTitle>
                <CardDescription className="text-zinc-400">Multiple ways to get the help you need.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-start space-x-4">
                    <FileText className="mt-0.5 h-5 w-5 text-cyan-400" />
                    <div>
                      <h3 className="font-medium">Documentation</h3>
                      <p className="text-zinc-400">Comprehensive guides and API documentation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="mt-0.5 h-5 w-5 text-cyan-400" />
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-zinc-400">Available 24/7 for immediate assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Video className="mt-0.5 h-5 w-5 text-cyan-400" />
                    <div>
                      <h3 className="font-medium">Video Tutorials</h3>
                      <p className="text-zinc-400">Step-by-step visual guides for all features</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="mt-0.5 h-5 w-5 text-cyan-400" />
                    <div>
                      <h3 className="font-medium">FAQ</h3>
                      <p className="text-zinc-400">Answers to commonly asked questions</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

