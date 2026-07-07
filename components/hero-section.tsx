import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full mt-[20px] md:mt-[20px]">
      {/* Desktop */}
      <div className="relative hidden sm:block w-full aspect-[16/9] lg:aspect-[16/10] max-h-screen">
        <Image
          src="/banner-desktop.png"
          alt="Venus Academy Admissions"
          fill
          priority
          sizes="100vw"
          className=""
        />
      </div>

      {/* Mobile */}
      <div className="relative block sm:hidden w-full aspect-[9/16]">
        <Image
          src="/banner-mobile.png"
          alt="Venus Academy Admissions"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}