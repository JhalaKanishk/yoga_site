"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
 import { useEffect, useState } from "react"

const testimonials = [
    {
        id: 1,
        name: "Emily Chen",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "Serenity Yoga has completely transformed my life. The instructors are incredibly knowledgeable and create such a welcoming environment. I have found not just physical strength, but mental clarity and peace.",
    },
    {
        id: 2,
        name: "Michael Rodriguez",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "As a beginner, I was nervous about starting yoga. The team at Serenity made me feel comfortable from day one. The classes are perfectly paced and I love the variety of styles offered.",
    },
    {
        id: 3,
        name: "Sarah Thompson",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "The meditation sessions have been life-changing. Sarahs guidance has helped me develop a daily practice that brings so much calm to my busy life. This studio is truly special.",
    },
    {
        id: 4,
        name: "David Park",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "I've been practicing yoga for years, but Serenity Yoga takes it to another level. The attention to alignment and the spiritual aspects of yoga make every class meaningful.",
    },
    {
        id: 5,
        name: "Lisa Johnson",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "The restorative yoga classes are exactly what I needed after stressful workdays. The studio atmosphere is so peaceful, and I always leave feeling renewed and centered.",
    },
]

export default function TestimonialsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToPrevious = () => {
        setIsAutoPlaying(false)
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    }

    const goToNext = () => {
        setIsAutoPlaying(false)
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    }

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false)
        setCurrentIndex(index)
    }

    return (
        <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="w-full flex-shrink-0">
                            <Card className="border-green-200 shadow-lg mx-4">
                                <CardContent className="p-8 text-center">
                                    <div className="mb-6">
                                        <img
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            width={80}
                                            height={80}
                                            className="rounded-full mx-auto mb-4"
                                        />
                                        <div className="flex justify-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                    <blockquote className="text-lg text-green-600 mb-6 italic">"{testimonial.text}"</blockquote>
                                    <cite className="text-green-800 font-semibold text-lg">{testimonial.name}</cite>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border border-green-200 rounded-full p-2 shadow-lg transition-colors"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="h-6 w-6 text-green-600" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border border-green-200 rounded-full p-2 shadow-lg transition-colors"
                aria-label="Next testimonial"
            >
                <ChevronRight className="h-6 w-6 text-green-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-green-600" : "bg-green-200"
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
