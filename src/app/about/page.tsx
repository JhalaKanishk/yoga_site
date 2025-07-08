import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, NotebookIcon as Lotus, Mountain, Sun, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">Serenity Yoga</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-green-700 hover:text-green-600 font-medium">Home</Link>
              <Link href="/about" className="text-green-700 hover:text-green-600 font-medium">About</Link>
              <Link href="/gallery" className="text-green-700 hover:text-green-600 font-medium">Gallery</Link>
              <Link href="/contact" className="text-green-700 hover:text-green-600 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">About Serenity Yoga</h1>
              <p className="text-lg text-green-600 mb-6">
                Founded in 2015, Serenity Yoga has been a sanctuary for those seeking balance, peace, and physical
                wellness. Our studio combines ancient yogic wisdom with modern teaching methods to create a
                transformative experience for practitioners of all levels.
              </p>
              <p className="text-lg text-green-600 mb-8">
                We believe that yoga is not just about physical postures, but a complete lifestyle that encompasses
                mindfulness, compassion, and inner growth. Our mission is to guide you on your journey to discovering
                your true self.
              </p>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
                <Link href="/contact">Start Your Journey</Link>
              </Button>
            </div>
            <div>
              <img
                src="images/Main3.jpeg"
                alt="Yoga instructor in meditation pose"
                width={600}
                height={500}
                className="w-full h-auto max-w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: Heart, title: "Mindfulness", text: "We cultivate present-moment awareness..." },
              { icon: Mountain, title: "Balance", text: "We teach the art of finding equilibrium..." },
              { icon: Sun, title: "Peace", text: "Our practice creates a sanctuary of calm..." }].map((item, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-3">{item.title}</h3>
                  <p className="text-green-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Yoga Practices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{ icon: Lotus, title: "Hatha Yoga", text: "Gentle, slow-paced practice..." },
              { icon: Sun, title: "Vinyasa Flow", text: "Dynamic sequences linking movement with breath..." },
              { icon: Heart, title: "Meditation", text: "Guided sessions for mindfulness and inner peace..." },
              { icon: Users, title: "Restorative", text: "Deeply relaxing using props to support the body..." }].map((item, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-10 w-10 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-green-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-green-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Tejeswani Singh, Lead Yoga Instructor"
                width={400}
                height={400}
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-full rounded-2xl shadow-lg mx-auto"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Meet Tejeswani Singh</h2>
              <p className="text-green-600 mb-4 font-semibold">Lead Instructor & Studio Founder</p>
              <p className="text-green-600 mb-4">
                With over 15 years of experience, Sarah brings a wealth of knowledge and compassion to every class.
                She completed her 500-hour teacher training in Rishikesh and continues to study with renowned teachers.
              </p>
              <p className="text-green-600 mb-6">
                Her teaching emphasizes alignment, breath, and yoga philosophy integration into life. Yoga is for all.
              </p>
              <div className="space-y-2 text-green-600">
                <p>• 500-Hour Registered Yoga Teacher (RYT-500)</p>
                <p>• Certified Meditation Teacher</p>
                <p>• Trauma-Informed Yoga Specialist</p>
                <p>• Ayurveda Wellness Counselor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <Link href="/" className="block text-green-200 hover:text-white">Home</Link>
                <Link href="/gallery" className="block text-green-200 hover:text-white">Gallery</Link>
                <Link href="/contact" className="block text-green-200 hover:text-white">Contact</Link>
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
  );
}
