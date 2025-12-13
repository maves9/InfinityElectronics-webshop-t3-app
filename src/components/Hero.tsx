"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { defaultHeroSlides } from "~/data"

export interface HeroSlide {
  title: string
  description: string
  image: string
  cta: string
  ctaLink: string
}

interface HeroProps {
  slides?: HeroSlide[]
  autoPlay?: boolean
  interval?: number
}

export function Hero({
  slides = defaultHeroSlides,
  autoPlay = true,
  interval = 5000,
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slide = slides[currentSlide]!

  return (
    <div className="hero-container relative h-[500px] w-full overflow-hidden bg-theme-muted md:h-[600px]">
      {/* Background Image */}
      <div className="hero-image absolute inset-0 overflow-hidden">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          quality={85}
          className="object-cover transition-opacity duration-700"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">{slide.title}</h1>
          <p className="mb-8 text-lg md:text-xl">{slide.description}</p>
          <Link
            href={slide.ctaLink}
            className="inline-block bg-theme-primary px-8 py-3 font-semibold text-white transition-all hover:opacity-90"
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 z-20 -translate-y-1/2 bg-white/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/50"
            aria-label="Previous slide"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 z-20 -translate-y-1/2 bg-white/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/50"
            aria-label="Next slide"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 transition-all ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
