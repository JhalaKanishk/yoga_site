"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner";
import { Leaf, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        toast.success("Message sent successfully! We'll get back to you within 24 hours.")

        setFormData({ name: "", email: "", message: "" })
        setIsSubmitting(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

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
                    <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Get in Touch</h1>
                    <p className="text-xl text-green-600 max-w-2xl mx-auto">
                        Ready to begin your yoga journey? We'd love to hear from you. Reach out with any questions or to schedule
                        your first class.
                    </p>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card className="border-green-200 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl text-green-800">Send us a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Label htmlFor="name" className="text-green-700">
                                            Full Name
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 border-green-200 focus:border-green-500"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email" className="text-green-700">
                                            Email Address
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 border-green-200 focus:border-green-500"
                                            placeholder="Enter your email address"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="message" className="text-green-700">
                                            Message
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="mt-1 border-green-200 focus:border-green-500"
                                            placeholder="Tell us about your yoga experience and what you're looking for..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <Card className="border-green-200 shadow-lg">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="h-6 w-6 text-green-600 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-green-800 mb-2">Visit Our Studio</h3>
                                            <p className="text-green-600">
                                                123 Peaceful Lane
                                                <br />
                                                Wellness City, WC 12345
                                                <br />
                                                United States
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-green-200 shadow-lg">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <Phone className="h-6 w-6 text-green-600 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-green-800 mb-2">Call Us</h3>
                                            <p className="text-green-600">
                                                Phone: (555) 123-YOGA
                                                <br />
                                                Available: Mon-Fri 8AM-8PM
                                                <br />
                                                Weekend: 9AM-6PM
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-green-200 shadow-lg">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <Mail className="h-6 w-6 text-green-600 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-green-800 mb-2">Email Us</h3>
                                            <p className="text-green-600">
                                                General: hello@serenityyoga.com
                                                <br />
                                                Classes: classes@serenityyoga.com
                                                <br />
                                                Private Sessions: private@serenityyoga.com
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Studio Hours */}
                            <Card className="border-green-200 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-800">Studio Hours</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-green-600">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday</span>
                                            <span>6:00 AM - 9:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday</span>
                                            <span>7:00 AM - 7:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday</span>
                                            <span>8:00 AM - 6:00 PM</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 px-4 bg-green-50">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Find Us</h2>
                    <div className="bg-green-200 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
                        <img
                            src="/images/map.png"
                            alt="Map Location"
                            className="object-contain w-full h-full rounded-2xl"
                        />
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
                                <Link href="/gallery" className="block text-green-200 hover:text-white">
                                    Gallery
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
