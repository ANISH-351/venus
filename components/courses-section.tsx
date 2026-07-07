import { BookOpen, BarChart3, Briefcase, ArrowRight } from "lucide-react"

const courses = [
  {
    icon: BookOpen,
    title: "CA",
    fullName: "Chartered Accountant",
    description:
      "One of India's most prestigious qualifications. Our CA coaching covers Foundation, Intermediate & Final levels with expert faculty and comprehensive study materials.",
    badge: "Most Popular",
  },
  {
    icon: BarChart3,
    title: "CMA",
    fullName: "Cost Management Accountant",
    description:
      "Master cost accounting and management strategy. Our CMA program prepares you for both Foundation and Final exams with industry-focused curriculum.",
    badge: null,
  },
  {
    icon: Briefcase,
    title: "CS",
    fullName: "Company Secretary",
    description:
      "Build expertise in corporate law and governance. Our CS coaching covers all three levels — Foundation, Executive & Professional — with regular mock tests.",
    badge: null,
  },
]

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[#1a3a8f] font-medium tracking-widest uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
            Our Professional Courses
          </h2>
          <div className="w-16 h-1 bg-[#c9a227] mx-auto mt-4" />
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <div
                key={course.title}
                className="relative bg-[#faf7f0] rounded-xl border border-[#1a3a8f]/30 p-8 flex flex-col gap-5 hover:shadow-xl hover:border-[#c9a227]/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                {course.badge && (
                  <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-[#c9a227]/15 text-[#a8841a] text-xs font-semibold">
                    {course.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#c9a227]/15 flex items-center justify-center group-hover:bg-[#c9a227]/25 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-black" strokeWidth={1.5} />
                </div>

                {/* Heading */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-accent">
                    {course.title}
                  </h3>
                  <p className="text-[#a8841a] font-medium text-sm">{course.fullName}</p>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  {course.description}
                </p>

                {/* CTA */}
                <a href="#contact"
                  className="inline-flex items-center gap-1.5 text-[#1a3a8f] font-semibold text-sm group-hover:text-[#c9a227] transition-colors"
                >
                  Enquire Now <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}