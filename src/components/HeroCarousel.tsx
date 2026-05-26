"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "UK Procurement",
    description: "Sourcing high-quality medicines from fully licensed UK suppliers.",
    image: "/carousal/uk-procurement.jpeg",
  },
  {
    title: "Export Distribution",
    description: "Reliable routes delivering UK pharmaceuticals to international markets.",
    image: "/carousal/export-distribution.jpeg",
  },
  {
    title: "UK Procurement",
    description: "Sourcing high-quality medicines from fully licensed UK suppliers.",
    image: "https://images.unsplash.com/photo-1581056771085-3ce30d907416?fm=jpg&q=60&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "GDP Compliance",
    description: "Every step of our supply chain meets Good Distribution Practice standards.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?fm=jpg&q=60&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Export & Distribution",
    description: "Reliable routes delivering UK pharmaceuticals to international markets.",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?fm=jpg&q=60&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Global Export Network",
    description: "Shipping UK pharmaceuticals to international markets through certified logistics partners.",
    image: "/carousal/ex.jpeg",
  },
  {
    title: "Licensed Medicines",
    description: "A comprehensive range of branded and generic medicines sourced from UK-licensed suppliers.",
    image: "/carousal/p1.jpeg",
  },
  {
    title: "Generic Pharmaceuticals",
    description: "High-quality generic medicines meeting strict UK and international regulatory standards.",
    image: "/carousal/p2.jpeg",
  },
  {
    title: "Wholesale Supply",
    description: "Bulk pharmaceutical supply across a broad product portfolio for distributors worldwide.",
    image: "/carousal/p3.jpeg",
  },
  {
    title: "Quality Assured Products",
    description: "Every product we supply is verified against MHRA standards before dispatch.",
    image: "/carousal/p4.jpeg",
  },
  {
    title: "Regulatory Documentation",
    description: "Full documentation and audit trails maintained across every supply chain transaction.",
    image: "/carousal/c1.jpeg",
  },
  {
    title: "Compliance & Governance",
    description: "Every order is reviewed and approved against strict UK regulatory requirements.",
    image: "/carousal/c2.jpeg",
  },
  {
    title: "Record Keeping",
    description: "Meticulous record keeping ensuring full traceability and regulatory accountability.",
    image: "/carousal/c3.jpeg",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      <div className="relative h-[420px] w-full md:h-[520px]">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
      </div>

      <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-5 pt-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5">
          <img
            src="/logo.jpg"
            alt="Madarpharma emblem"
            className="h-7 w-7 rounded-full object-cover"
          />
          <span className="text-xs font-bold text-primary">Featured Capabilities</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 pb-20 md:p-6 md:pb-24">
        <p className="text-xl font-black text-white md:text-2xl">{slides[index].title}</p>
        <p className="mt-1 max-w-xl text-sm text-white/90 md:text-base">
          {slides[index].description}
        </p>
      </div>

      <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 rounded-full bg-white/90 px-2 py-1">
        <button
          type="button"
          onClick={prev}
          className="rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-semibold text-primary hover:bg-slate-50"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={next}
          className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary/90"
        >
          Next
        </button>
      </div>

      <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2">
        <div className="flex gap-2">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === dotIndex ? "bg-primary" : "bg-slate-300"
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
