import { Phone, ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      {/* Subtle decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative accent circle */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-accent/20" />
      <div className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full border border-accent/10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full border border-accent/10 -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1a3a8f]/40 bg-[#1a3a8f]/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#1a3a8f] animate-pulse" />
          <span className="text-[#1a3a8f] text-sm font-medium tracking-wide">Admissions Open 2026</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight text-balance mb-6">
          Your Path to{" "}
          <span className="text-accent">CA, CMA &amp; CS</span>
          <br />
          Success Starts Here
        </h1>

        {/* Subheadline */}
        <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 text-pretty">
          Expert Coaching in Coimbatore with Proven Results. Join hundreds of successful students who built their careers with Venus Academy.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 rounded bg-[#1a3a8f] text-accent-foreground font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
          >
            Enroll Now
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:09360918263"
            className="flex items-center gap-2 px-8 py-4 rounded border border-primary-foreground/30 text-primary-foreground font-semibold text-base hover:border-accent hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Us: 093609 18263
          </a>
        </div>

        {/* Trust indicators */}
        <div className="hidden sm:block">
   <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10 ">
          {[
            { value: "500+", label: "Students Placed" },
            { value: "95%", label: "Success Rate" },
            { value: "5+", label: "Years Experience" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-serif font-bold text-3xl text-accent">{item.value}</div>
              <div className="text-primary-foreground/60 text-sm mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
        </div>
     
      </div>
    </section>
  )
}
