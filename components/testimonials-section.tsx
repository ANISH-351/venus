"use client"

import { Quote } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const testimonials = [
  {
    name: "Priya Ramesh",
    course: "CA Final – Nov 2025",
    initials: "PR",
    text: "Venus Academy completely changed the way I approached my CA exams. The faculty's clarity on concepts and the structured study plan made all the difference. I cleared CA Final in my first attempt!",
  },
  {
    name: "Arjun Subramaniam",
    course: "CMA Final – May 2025",
    initials: "AS",
    text: "The personal attention I received here is unmatched. My faculty knew exactly where I was struggling and helped me overcome every weakness. I couldn't have cleared CMA without Venus Academy.",
  },
  {
    name: "Kavitha Nair",
    course: "CS Executive – Dec 2025",
    initials: "KN",
    text: "Excellent study materials and regular mock tests gave me the confidence to face the actual exam. The environment here truly motivates you to push your limits. Highly recommend Venus Academy!",
  },
]

const TestimonialCard = ({ t }) => (
  <div className="bg-[#faf7f0] border border-[#1a3a8f]/10 rounded-xl p-8 flex flex-col gap-5 hover:shadow-xl hover:border-[#c9a227]/40 hover:-translate-y-1 transition-all duration-300 h-full">
    <Quote className="w-8 h-8 text-[#7f1d1d]/60" strokeWidth={1.5} />

    <p className="text-slate-600 leading-relaxed text-sm flex-grow">
      "{t.text}"
    </p>

    <div className="flex items-center gap-3 pt-2 border-t border-[#1a3a8f]/10">
      <div className="w-10 h-10 rounded-full bg-[#853737] flex items-center justify-center flex-shrink-0">
        <span className="text-white font-semibold text-sm">
          {t.initials}
        </span>
      </div>

      <div>
        <div className="font-semibold text-[#1a3a8f] text-sm">
          {t.name}
        </div>
        <div className="text-[#a8841a] text-xs font-medium">
          {t.course}
        </div>
      </div>
    </div>
  </div>
)

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#1a3a8f] font-medium tracking-widest uppercase text-sm mb-3">
            Student Stories
          </p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-balance">
            What Our Students Say
          </h2>

          <div className="w-16 h-1 bg-[#c9a227] mx-auto mt-4" />
        </div>

        {/* Mobile & Tablet Carousel */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}