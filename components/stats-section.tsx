const stats = [
  { value: "500+", label: "Students Placed" },
  { value: "5+", label: "Years Experience" },
  { value: "95%", label: "Success Rate" },
  { value: "50+", label: "Batches Completed" },
]

export default function StatsSection() {
  return (
    <section className="bg-[#283865] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                index < stats.length - 1 ? "md:border-r md:border-white/15" : ""
              }`}
            >
              <div className="font-serif font-bold text-4xl md:text-5xl text-[#c9a227] mb-1">{stat.value}</div>
              <div className="text-white/70 text-sm font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
