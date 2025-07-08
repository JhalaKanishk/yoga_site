import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Leaf, Sun, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TestimonialsCarousel from "@/components/testimonials-carousel"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">Serenity Yoga</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-green-700 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-green-700 hover:text-green-600 font-medium">
                About
              </Link>
              <Link href="/gallery" className="text-green-700 hover:text-green-600 font-medium">
                Gallery
              </Link>
              <Link href="/contact" className="text-green-700 hover:text-green-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="relative mb-8">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Peaceful yoga session at sunrise"
              width={600}
              height={400}
              className="mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">Find Your Inner Peace</h1>
          <p className="text-xl text-green-600 mb-8 max-w-2xl mx-auto">
            Discover the transformative power of yoga in our serene studio. Connect with your body, mind, and spirit
            through ancient practices adapted for modern life.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
              <Link href="/contact">Join a Session</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Explore Our Offerings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">About Us</h3>
                <p className="text-green-600 mb-4">
                  Learn about our philosophy, experienced instructors, and commitment to your wellness journey.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <Link href="/about">Discover More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Testimonials</h3>
                <p className="text-green-600 mb-4">
                  Read inspiring stories from our community members who have transformed their lives through yoga.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <Link href="#testimonials">Read Stories</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sun className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Gallery</h3>
                <p className="text-green-600 mb-4">
                  Explore our beautiful studio spaces and see our community in action through our photo gallery.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <Link href="/gallery">View Gallery</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">What Our Students Say</h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6" />
                <span className="text-xl font-bold">Serenity Yoga</span>
              </div>
              <p className="text-green-200">Your journey to inner peace and physical wellness starts here.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-green-200 hover:text-white">
                  About
                </Link>
                <Link href="/gallery" className="block text-green-200 hover:text-white">
                  Gallery
                </Link>
                <Link href="/contact" className="block text-green-200 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-green-200">
                <p>123 Peaceful Lane</p>
                <p>Wellness City, WC 12345</p>
                <p>Phone: (555) 123-YOGA</p>
                <p>Email: hello@serenityyoga.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 Serenity Yoga. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
