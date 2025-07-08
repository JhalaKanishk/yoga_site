"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const galleryImages = [
    {
        id: 1,
        src: "/placeholder.svg?height=400&width=600",
        alt: "Morning yoga session in our main studio",
        title: "Morning Practice",
    },
    {
        id: 2,
        src: "/placeholder.svg?height=400&width=600",
        alt: "Meditation corner with soft lighting",
        title: "Meditation Space",
    },
    {
        id: 3,
        src: "/placeholder.svg?height=400&width=600",
        alt: "Group yoga class in session",
        title: "Group Classes",
    },
    {
        id: 4,
        src: "/placeholder.svg?height=400&width=600",
        alt: "Peaceful outdoor yoga deck",
        title: "Outdoor Deck",
    },
    {
        id: 5,
        src: "/placeholder.svg?height=400&width=600",
        alt: "Yoga props and equipment storage",
        title: "Studio Equipment",
    },
    {
        id: 6,
        src: "/placeholder.svg?height=400&width=600",
        alt: "Relaxation area with comfortable cushions",
        title: "Relaxation Area",
    },
    {
        id: 7,
        src: "/placeholder.svg?height=400&width=600",
        alt: "Sunset yoga practice",
        title: "Evening Sessions",
    },
    {
        id: 8,
        src: "/placeholder.svg?height=400&width=600",
        alt: "Private session room",
        title: "Private Sessions",
    },
    {
        id: 9,
        src: "/placeholder.svg?height=400&width=600",
        alt: "Workshop and training space",
        title: "Workshops",
    },
]

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

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

            {/* Header */}
            <section className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Studio Gallery</h1>
                    <p className="text-xl text-green-600 max-w-2xl mx-auto">
                        Take a visual journey through our beautiful studio spaces and see our vibrant yoga community in action.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image) => (
                            <Dialog key={image.id}>
                                <DialogTrigger asChild>
                                    <div className="group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                            <Image
                                                src={image.src || "/placeholder.svg"}
                                                alt={image.alt}
                                                width={600}
                                                height={400}
                                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                                                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl">
                                    <div className="relative">
                                        <Image
                                            src={image.src || "/placeholder.svg"}
                                            alt={image.alt}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto rounded-lg"
                                        />
                                        <div className="mt-4">
                                            <h3 className="text-xl font-semibold text-green-800 mb-2">{image.title}</h3>
                                            <p className="text-green-600">{image.alt}</p>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 bg-green-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-green-800 mb-6">Ready to Experience Our Studio?</h2>
                    <p className="text-xl text-green-600 mb-8 max-w-2xl mx-auto">
                        Come visit us and see these beautiful spaces in person. Book your first class today and become part of our
                        yoga community.
                    </p>
                    <div className="space-x-4">
                        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
                            <Link href="/contact">Book a Class</Link>
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
                                <Link href="/" className="block text-green-200 hover:text-white">
                                    Home
                                </Link>
                                <Link href="/about" className="block text-green-200 hover:text-white">
                                    About
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
