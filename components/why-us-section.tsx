import { Users, UserCheck, FileText, ClipboardCheck } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description:
      "Learn from qualified professionals with years of teaching and industry experience in CA, CMA, and CS subjects.",
  },
  {
    icon: UserCheck,
    title: "Personal Attention",
    description:
      "Small batch sizes ensure every student gets individual attention and personalized guidance throughout their journey.",
  },
  {
    icon: FileText,
    title: "Study Materials Provided",
    description:
      "Comprehensive and well-researched study materials curated by our experts are included at no extra cost.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Mock Tests",
    description:
      "Frequent mock exams and revision sessions help students build confidence and improve exam performance.",
  },
]

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-3">
            Our Edge
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-balance">
            Why Choose Venus Academy?
          </h2>
          <div className="w-16 h-1 bg-[#c9a227] mx-auto mt-4" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-[#faf7f0] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-[#ffffff]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1a3a8f]">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}